import { Linkedin, Github, FileText } from 'lucide-react';

interface NavIconsProps {
  className?: string;
}

const navLinks = [
  {
    href: 'https://linkedin.com/in/jessepatoka',
    label: 'LinkedIn',
    icon: Linkedin,
  },
  {
    href: 'https://github.com/JessePatoka',
    label: 'GitHub',
    icon: Github,
  },
  {
    href: '/resume.pdf',
    label: 'Resume',
    icon: FileText,
  },
];

export default function NavIcons({ className }: NavIconsProps) {
  return (
    <nav className={`flex items-center gap-1 ${className ?? ''}`}>
      {navLinks.map(({ href, label, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="group flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium
                     text-[var(--color-text-secondary)] transition-all duration-200
                     hover:text-[var(--color-electric-light)] hover:bg-[var(--color-surface-raised)]"
          aria-label={label}
        >
          <Icon size={18} className="transition-transform duration-200 group-hover:scale-110" />
          <span className="hidden sm:inline">{label}</span>
        </a>
      ))}
    </nav>
  );
}
