import { motion } from 'framer-motion';
import { Briefcase, Users, Target, Lightbulb } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const strengths = [
  {
    icon: Users,
    title: 'Team Building',
    description: 'Scaling engineering orgs and mentoring top talent. Led technical talent acquisition, established autonomous interview protocols, and fostered continuous learning via book clubs and AI sessions.',
  },
  {
    icon: Target,
    title: 'Technical Strategy',
    description: 'Serving as the DRI for major architecture migrations (Atlassian Ops, Iterable). Drove adoption of Critical Incident SOPs, significantly improving cross-team communication and resolution times.',
  },
  {
    icon: Briefcase,
    title: 'Delivery at Scale',
    description: 'Modernized release processes to support daily deployments, increasing release frequency by 29% and reducing hotfixes from 30% to 15% across a high-velocity e-commerce production pipeline.',
  },
  {
    icon: Lightbulb,
    title: 'Engineering Culture',
    description: 'Championed an AI-first engineering culture and enforced higher code quality standards by implementing strict 75% JaCoCo code coverage gates and maintaining "All A" SonarQube ratings.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Left — narrative */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="lg:col-span-2"
          >
            <motion.div variants={fadeUp}>
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                About
                <span className="text-[var(--color-electric)]">.</span>
              </h2>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
              <p>
                I'm a software engineering manager who believes the best technology
                comes from empowered teams with clear purpose. Over 17 years I've
                built and scaled engineering organizations from the ground up —
                hiring founding teams, establishing engineering practices, and
                delivering products that millions of customers depend on.
              </p>
              <p>
                My sweet spot is <strong className="text-[var(--color-text-primary)]">retail and e-commerce
                platforms</strong> where engineering decisions directly impact revenue,
                customer experience, and operational efficiency. I care deeply about
                technical excellence, developer experience, and creating environments
                where engineers do the best work of their careers.
              </p>
            </motion.div>
          </motion.div>

          {/* Right — strength cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="lg:col-span-3 grid gap-4 sm:grid-cols-2"
          >
            {strengths.map(({ icon: Icon, title, description }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="group rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-5
                           transition-all duration-300 hover:border-[var(--color-electric)]/30 hover:shadow-lg hover:shadow-[var(--color-electric)]/5"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-electric)]/10 transition-colors duration-300 group-hover:bg-[var(--color-electric)]/20">
                  <Icon size={20} className="text-[var(--color-electric)]" />
                </div>
                <h3 className="text-sm font-semibold mb-1.5">{title}</h3>
                <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">{description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
