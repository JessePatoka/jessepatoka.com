import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const experiences = [
  {
    company: "Kohl's",
    role: 'Senior Software Engineer',
    period: '2008 — 2019',
    duration: '12 Years',
    description: 'Began as a junior Programmer and promoted 3 times over a decade. Architected core mobile applications handling 30,000+ devices across 1,100 stores nationwide.',
    color: 'from-purple-500 to-pink-500',
    logo: (
      <svg viewBox="0 0 469.05 74.2" className="h-[1.3rem] sm:h-[1.625rem] w-auto fill-current" xmlns="http://www.w3.org/2000/svg">
        <g transform="matrix(1.25,0,0,-1.25,-228.89857,946.53091)">
          <path d="m 183.11886,753.14418 25.91009,0 0,-17.59807 0.1687,0 19.75746,17.59807 29.04707,0 -23.83163,-21.58296 27.5729,-29.61597 -32.78834,0 -19.75746,20.95734 -0.1687,0 0,-20.95734 -25.91009,0 0,51.19893 z" />
          <path d="m 299.17838,710.82603 c 11.52414,0 10.76303,12.85583 10.76303,17.10121 0,4.24538 0.12788,16.02534 -10.76303,16.02534 -10.89543,0 -10.76523,-11.77996 -10.76523,-16.02534 0,-4.24538 -0.76779,-17.10121 10.76523,-17.10121 m 0,43.74187 c 29.41911,0 37.42167,-6.16891 37.42167,-27.17746 0,-21.01078 -8.00256,-27.17822 -37.42167,-27.17822 -29.42283,0 -37.42314,6.16744 -37.42314,27.17822 0,21.00855 8.00031,27.17746 37.42314,27.17746" />
          <path d="m 392.47659,721.17198 0,-19.57056 26.6002,0 0,51.1944 -26.6002,0 0,-17.59582 -19.08438,0 0,17.59582 -26.60536,0 0,-51.1944 26.60536,0 0,19.57056 19.08438,0 z" />
          <path d="m 431.65423,752.79606 27.21784,0 0,-39.00942 c 0,0 21.72428,-0.0625 24.61048,-0.0625 2.89065,0 4.59633,2.5906 4.59633,2.5906 l 0,-14.71313 -56.42465,0 0,51.19443 z" />
          <path d="m 551.54084,735.84754 c -5.63116,4.50661 -10.45679,6.02138 -15.64635,6.1057 -5.07198,0.088 -9.70456,-1.67587 -9.70456,-4.7626 0,-2.437 3.46317,-3.44659 15.57832,-5.97092 9.95307,-2.08315 16.58278,-7.16645 16.58278,-16.63066 0,-10.68308 -17.77291,-16.72326 -33.6693,-16.72326 -11.16021,0 -19.72713,2.00939 -27.39386,5.4492 l 0,14.33818 c 4.73836,-4.94325 15.34086,-7.56847 23.46324,-7.56847 4.5061,0 6.71697,0.66176 6.71697,4.24612 0,2.21866 -2.80928,4.24163 -11.31554,5.79926 -16.11605,2.95273 -21.56229,7.56625 -21.56229,15.45395 0,11.32829 14.08639,18.07089 31.44437,18.07089 9.35688,0 17.9497,-0.28912 25.50622,-3.80269 l 0,-14.0047 z" />
          <path d="m 472.92813,731.91122 1.86398,3.28848 c -5.60969,2.77429 -7.26435,9.83235 -4.41512,13.85713 3.06373,4.33121 11.57149,6.187 16.16559,-0.51721 3.91216,-5.72023 0.1687,-10.56563 -1.53038,-11.95389 -1.6983,-1.38603 -12.08407,-4.67451 -12.08407,-4.67451" />
        </g>
      </svg>
    )
  },
  {
    company: 'Trek Bicycle',
    role: 'Software Engineering Manager',
    period: '2019 — Present',
    duration: '6 Years',
    description: 'Promoted from Senior Engineer up to Engineering Manager. Led digital transformation efforts, scaled engineering teams, and managed high-velocity e-commerce release pipelines.',
    color: 'from-blue-500 to-cyan-400',
    logo: (
      <svg viewBox="0 0 288.1 80" className="h-8 sm:h-10 w-auto fill-current" xmlns="http://www.w3.org/2000/svg">
        <g>
          <polygon points="238.5,22.9 214.3,22.9 201.9,57.2 226.1,57.2" />
          <polygon points="234.1,38.8 248.4,57.2 276.3,57.2 260.3,39.1 288.1,22.9 259.7,22.9" />
          <path d="M206.6,29.5l2.4-6.6h-61.9l-8.5,23.6c-0.5,1.5-0.6,3.2,0.5,4.5c0.4,0.4,3.1,3.6,3.7,4.2c1,1.1,2.2,2,4.2,2h49.6l2.4-6.5h-34.7c-2.1,0-3.1-1.6-2.6-3.2l1.6-4.3h38.4l2.4-6.6h-38.4l2.6-7.1C168.3,29.4,206.6,29.4,206.6,29.5z" />
          <path d="M135.5,22.9H73.9L61.5,57.2h23.6l10-27.7h17.6c1.9,0,2.6,1.4,2.2,2.7c-0.4,1.4-1,3.1-1.5,4.1c-0.6,1.4-2,2.5-4.1,2.5s-16.5,0-16.5,0L107.1,57h27.1L122,43.3c0,0,4.9,0,7.3,0c3.4,0,5.4-1.8,6.3-4.1c1-2.6,3.3-8.9,4-11C140.9,25,138.9,22.9,135.5,22.9" />
          <polygon points="69.6,22.9 2.4,22.9 0,29.5 23.2,29.5 13.2,57.2 36,57.2 46,29.5 67.3,29.5" />
        </g>
      </svg>
    )
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-12 md:py-24 overflow-hidden">
      {/* Background connecting line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[var(--color-border)] to-transparent opacity-50 hidden lg:block" />

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Career Journey<span className="text-[var(--color-electric)]">.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-[var(--color-text-secondary)]">
            Over a decade of loyalty, continuous promotion, and platform scaling across two major retail enterprise brands.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="relative grid gap-8 lg:grid-cols-2 lg:gap-16"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              variants={fadeUp}
              className={`relative flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-8 shadow-xl transition-all duration-300 hover:border-[var(--color-electric)]/30 ${index === 0 ? 'lg:translate-y-12' : ''}`}
            >
              {/* Glowing accent border top */}
              <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${exp.color} opacity-70`} />

              <div className="flex items-start justify-between mb-8">
                <div className="text-[var(--color-text-primary)]">
                  {exp.logo}
                </div>
                <div className="text-right">
                  <div className="inline-flex items-center rounded-full bg-[var(--color-surface)] px-3 py-1 text-xs font-semibold text-[var(--color-text-primary)] border border-[var(--color-border)]">
                    {exp.duration}
                  </div>
                </div>
              </div>

              <div className="mb-2">
                <h3 className="text-xl font-bold text-[var(--color-text-primary)]">{exp.role}</h3>
                <time className="text-sm font-medium text-[var(--color-text-secondary)]">{exp.period}</time>
              </div>

              <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed flex-grow">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
