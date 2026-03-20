import { motion } from 'framer-motion';
import { Bike, Mountain, Flame, Map, TrendingUp } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

import stravaData from '../data/strava.json';

const { lastRide, ytdRideDistance, ytdRunDistance } = stravaData;

const stats = [
  { icon: Bike, label: 'Distance', value: lastRide?.distance || '0 mi' },
  { icon: Mountain, label: 'Elevation', value: lastRide?.elevation || '0 ft' },
  { icon: TrendingUp, label: 'Moving Time', value: lastRide?.movingTime || '0h 0m' },
];

function decodePolyline(str: string, precision: number = 5) {
  let index = 0;
  let lat = 0;
  let lng = 0;
  const coordinates = [];
  const shift = Math.pow(10, precision);

  while (index < str.length) {
    let byte;
    let shiftAmount = 0;
    let result = 0;
    do {
      byte = str.charCodeAt(index++) - 63;
      result |= (byte & 0x1f) << shiftAmount;
      shiftAmount += 5;
    } while (byte >= 0x20);
    const deltaLat = ((result & 1) ? ~(result >> 1) : (result >> 1));
    lat += deltaLat;

    shiftAmount = 0;
    result = 0;
    do {
      byte = str.charCodeAt(index++) - 63;
      result |= (byte & 0x1f) << shiftAmount;
      shiftAmount += 5;
    } while (byte >= 0x20);
    const deltaLng = ((result & 1) ? ~(result >> 1) : (result >> 1));
    lng += deltaLng;

    coordinates.push([lat / shift, lng / shift]);
  }
  return coordinates;
}

function RouteMap({ polyline }: { polyline?: string }) {
  if (!polyline) return null;

  const points = decodePolyline(polyline);
  if (points.length === 0) return null;

  const lats = points.map(p => p[0]);
  const lngs = points.map(p => p[1]);
  const minLat = Math.min(...lats);
  const maxLat = Math.max(...lats);
  const minLng = Math.min(...lngs);
  const maxLng = Math.max(...lngs);

  const svgW = 500;
  const svgH = 300;
  const padding = 60; // Total padding (30px per side)
  
  const drawW = svgW - padding;
  const drawH = svgH - padding;
  
  const latRange = maxLat - minLat || 1;
  const lngRange = maxLng - minLng || 1;
  
  // Apply a mercator-like stretch for more accurate aspect ratio
  const midLat = ((maxLat + minLat) / 2) * (Math.PI / 180);
  const lonScale = Math.cos(midLat);
  const aspect = (lngRange * lonScale) / latRange;
  
  let projectedW = drawW;
  let projectedH = drawH;
  
  if (aspect > drawW / drawH) {
      projectedH = drawW / aspect;
  } else {
      projectedW = drawH * aspect;
  }

  const scaleX = projectedW / lngRange;
  const scaleY = projectedH / latRange;

  const offsetX = (svgW - projectedW) / 2;
  const offsetY = (svgH - projectedH) / 2;

  const pathData = points.map((p, i) => {
      const x = ((p[1] - minLng) * scaleX) + offsetX;
      const y = svgH - (((p[0] - minLat) * scaleY) + offsetY);
      return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
  }).join(' ');

  return (
    <svg
      className="absolute inset-x-0 inset-y-4 w-full h-[calc(100%-2rem)] opacity-80"
      viewBox={`0 0 ${svgW} ${svgH}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <path
        d={pathData}
        fill="none"
        stroke="var(--color-electric)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#neon-glow)"
      />
    </svg>
  );
}

export default function StravaDashboard() {
  return (
    <section id="active-life" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-electric)]/10">
              <Bike size={20} className="text-[var(--color-electric)]" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Active Life</h2>
          </div>
          <p className="max-w-lg text-[var(--color-text-secondary)]">
            Tracking rides, runs, and adventures. Powered by Strava.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-5">
          {/* Activity Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="lg:col-span-2 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6"
          >
            <motion.div variants={fadeUp} className="mb-6">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-medium uppercase tracking-wider text-[var(--color-text-secondary)]">
                  Last Ride
                </span>
                <span className="text-xs text-[var(--color-text-secondary)]">{lastRide?.date || 'N/A'}</span>
              </div>
              <h3 className="text-lg font-semibold">{lastRide?.name || 'No recent rides'}</h3>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ icon: Icon, label, value }) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  className="rounded-xl bg-[var(--color-surface)]/60 p-4"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Icon size={14} className="text-[var(--color-electric)]" />
                    <span className="text-xs text-[var(--color-text-secondary)]">{label}</span>
                  </div>
                  <div className="text-xl font-bold">{value}</div>
                </motion.div>
              ))}
            </div>

            {/* YTD Distance Row */}
            <div className="mt-4 pt-4 border-t border-[var(--color-border)]/50 grid grid-cols-2 gap-4">
              <motion.div variants={fadeUp} className="flex justify-between items-center text-sm">
                <span className="text-[var(--color-text-secondary)] flex items-center gap-1"><Bike size={14} /> YTD Ride</span>
                <span className="font-semibold">{ytdRideDistance}</span>
              </motion.div>
              <motion.div variants={fadeUp} className="flex justify-between items-center text-sm">
                <span className="text-[var(--color-text-secondary)] flex items-center gap-1"><Mountain size={14} /> YTD Run</span>
                <span className="font-semibold">{ytdRunDistance}</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            className="lg:col-span-3 relative flex items-center justify-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 min-h-[320px] overflow-hidden"
          >
            {/* Grid pattern overlay */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  'linear-gradient(var(--color-electric) 1px, transparent 1px), linear-gradient(90deg, var(--color-electric) 1px, transparent 1px)',
                backgroundSize: '30px 30px',
              }}
            />

            {/* SVG polyline map */}
            <RouteMap polyline={lastRide?.polyline} />

            <div className="relative z-10 text-center pointer-events-none mt-auto pt-48 opacity-40">
              <p className="text-xs font-medium text-[var(--color-text-secondary)] uppercase tracking-wider">
                GPS Traced Route
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
