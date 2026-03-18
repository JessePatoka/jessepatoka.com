import { motion } from 'framer-motion';
import { FlaskConical, Gamepad2, ArrowUpRight } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const projects = [
  {
    title: 'Web Game',
    description: 'An interactive browser-based game experiment. Built with canvas APIs and real-time physics.',
    icon: Gamepad2,
    status: 'Coming Soon',
    tags: ['Canvas', 'TypeScript', 'WebGL'],
  },
];

export default function Lab() {
  return (
    <section id="lab" className="relative px-6 py-24">
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
              <FlaskConical size={20} className="text-[var(--color-electric)]" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Lab</h2>
          </div>
          <p className="max-w-lg text-[var(--color-text-secondary)]">
            Side projects, experiments, and things I'm building for fun.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={fadeUp}
                className="group relative flex flex-col rounded-2xl border border-[var(--color-border)]
                           bg-[var(--color-surface-raised)] p-6 transition-all duration-300
                           hover:border-[var(--color-electric)]/30 hover:shadow-lg hover:shadow-[var(--color-electric)]/5"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-electric)]/10 border border-[var(--color-electric)]/20">
                    <Icon size={24} className="text-[var(--color-electric)]" />
                  </div>
                  <span className="inline-flex items-center rounded-full bg-[var(--color-electric)]/10 px-3 py-1 text-xs font-medium text-[var(--color-electric)]">
                    {project.status}
                  </span>
                </div>

                <h3 className="text-lg font-semibold mb-2 flex items-center gap-1">
                  {project.title}
                  <ArrowUpRight
                    size={16}
                    className="opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[var(--color-electric)]"
                  />
                </h3>
                <p className="text-sm leading-relaxed text-[var(--color-text-secondary)] mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-[var(--color-surface)]/80 px-2.5 py-1 text-xs text-[var(--color-text-secondary)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}

          {/* Empty slot for future projects */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            className="flex min-h-[240px] items-center justify-center rounded-2xl border border-dashed border-[var(--color-border)]/50 p-6"
          >
            <p className="text-sm text-[var(--color-text-secondary)]/50">More experiments brewing…</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
