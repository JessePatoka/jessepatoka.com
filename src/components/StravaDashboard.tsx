import { motion } from 'framer-motion';
import { Bike, Mountain, Flame, Map, TrendingUp } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

// Placeholder data — will be replaced by Strava API data via GitHub Action
const lastRide = {
  name: 'Sunday Morning Loop',
  date: 'Mar 16, 2026',
  distance: '42.3 km',
  elevation: '512 m',
  sufferScore: 87,
  movingTime: '1h 38m',
};

const stats = [
  { icon: Bike, label: 'Distance', value: lastRide.distance },
  { icon: Mountain, label: 'Elevation', value: lastRide.elevation },
  { icon: Flame, label: 'Suffer Score', value: String(lastRide.sufferScore) },
  { icon: TrendingUp, label: 'Moving Time', value: lastRide.movingTime },
];

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
                <span className="text-xs text-[var(--color-text-secondary)]">{lastRide.date}</span>
              </div>
              <h3 className="text-lg font-semibold">{lastRide.name}</h3>
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

            {/* Fake route line */}
            <svg
              className="absolute inset-0 w-full h-full opacity-20"
              viewBox="0 0 500 300"
              preserveAspectRatio="none"
            >
              <path
                d="M 30 250 Q 80 200, 130 220 T 200 180 T 280 150 T 350 120 T 420 80 T 480 50"
                fill="none"
                stroke="var(--color-electric)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="6 4"
              />
            </svg>

            <div className="relative z-10 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-electric)]/10 border border-[var(--color-electric)]/20">
                <Map size={28} className="text-[var(--color-electric)]" />
              </div>
              <p className="text-sm font-medium text-[var(--color-text-secondary)]">
                Ride Map
              </p>
              <p className="mt-1 text-xs text-[var(--color-text-secondary)]/60">
                Leaflet.js integration coming soon
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
