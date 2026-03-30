import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, User } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

const fadeIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.3, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

export default function Hero() {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete) {
      setImgLoaded(true);
    }
  }, []);

  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden px-6 pt-24 pb-12">
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-electric) 1px, transparent 1px), linear-gradient(90deg, var(--color-electric) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow orb */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--color-electric)] opacity-[0.04] blur-[120px]" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-5">
        {/* Left side — Text content */}
        <div className="lg:col-span-3">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-4 py-1.5 text-xs font-medium text-[var(--color-text-secondary)]"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-[var(--color-electric)] animate-pulse" />
            Available for opportunities
          </motion.div>

          <div className="flex items-start justify-between gap-4 sm:gap-6">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={1}
              className="flex-1 text-4xl font-extrabold leading-[1.2] tracking-tight sm:text-5xl lg:text-6xl"
            >
              <span className="block text-[var(--color-text-primary)]">Jesse Patoka</span>
              <span className="mt-2 block bg-gradient-to-r from-[var(--color-electric)] to-[var(--color-electric-light)] bg-clip-text text-transparent">
                Engineering at Scale.
              </span>
            </motion.h1>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="lg:hidden shrink-0 mt-2 relative"
            >
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-[var(--color-electric)]/20 to-transparent blur-md" />
              <div className="relative h-20 w-20 sm:h-28 sm:w-28 overflow-hidden rounded-full border border-[var(--color-border)] bg-[var(--color-surface-raised)]">
                {!imgError && (
                  <img
                    src="/headshot.jpg"
                    alt="Jesse Patoka"
                    className={`h-full w-full object-cover transition-opacity duration-300 ${imgLoaded ? 'opacity-100' : 'opacity-0 absolute'}`}
                    onLoad={() => setImgLoaded(true)}
                    onError={() => {
                      setImgLoaded(false);
                      setImgError(true);
                    }}
                  />
                )}
                {(!imgLoaded || imgError) && (
                  <div className="absolute inset-0 flex items-center justify-center bg-[var(--color-surface-raised)]">
                    <User size={24} className="text-[var(--color-electric)]" />
                  </div>
                )}
              </div>
            </motion.div>
          </div>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-text-secondary)]"
          >
            Software engineering manager with <strong className="text-[var(--color-text-primary)]">17+ years</strong> building
            high-performance teams and scalable platforms across{' '}
            <strong className="text-[var(--color-text-primary)]">retail &amp; e-commerce</strong>.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={3}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="https://linkedin.com/in/jessepatoka"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-lg bg-[var(--color-electric)] px-6 py-3
                         text-sm font-semibold text-white shadow-lg shadow-[var(--color-electric)]/20
                         transition-all duration-200 hover:bg-[var(--color-electric-dim)] hover:shadow-xl hover:shadow-[var(--color-electric)]/30"
            >
              Let's Connect
              <ChevronRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)]
                         bg-[var(--color-surface-raised)] px-6 py-3 text-sm font-semibold
                         text-[var(--color-text-primary)] transition-all duration-200
                         hover:border-[var(--color-electric)]/50"
            >
              Download Resume
            </a>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={4}
            className="mt-12 flex items-center gap-8 border-t border-[var(--color-border)]/50 pt-8"
          >
            {[
              { value: '17+', label: 'Years Experience' },
              { value: '30+', label: 'Engineers Led' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-2xl font-bold text-[var(--color-electric)]">{value}</div>
                <div className="mt-1 text-xs text-[var(--color-text-secondary)]">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right side — Photo */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="hidden lg:col-span-2 lg:flex lg:justify-center"
        >
          <div className="relative">
            {/* Glow behind photo */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[var(--color-electric)]/20 to-transparent blur-2xl" />

            {/* Photo container */}
            <div className="relative h-[400px] w-[320px] overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)]">
              {/* Actual headshot — hidden until loaded */}
              {!imgError && (
                <img
                  ref={imgRef}
                  src="/headshot.jpg"
                  alt="Jesse Patoka"
                  className={`h-full w-full object-cover transition-opacity duration-300 ${imgLoaded ? 'opacity-100' : 'opacity-0 absolute'}`}
                  onLoad={() => setImgLoaded(true)}
                  onError={() => {
                    setImgLoaded(false);
                    setImgError(true);
                  }}
                />
              )}

              {/* Fallback placeholder — shown when no image or image failed */}
              {(!imgLoaded || imgError) && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[var(--color-surface-raised)]">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[var(--color-electric)]/10 border border-[var(--color-electric)]/20 mb-4">
                    <User size={48} className="text-[var(--color-electric)]" />
                  </div>
                  <p className="text-sm text-[var(--color-text-secondary)]">Add headshot.jpg to /public</p>
                </div>
              )}
            </div>

            {/* Decorative corner accent */}
            <div className="absolute -bottom-2 -right-2 h-12 w-12 rounded-lg border border-[var(--color-electric)]/30 bg-[var(--color-electric)]/5" />
            <div className="absolute -top-2 -left-2 h-8 w-8 rounded-md border border-[var(--color-electric)]/20 bg-[var(--color-electric)]/5" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
