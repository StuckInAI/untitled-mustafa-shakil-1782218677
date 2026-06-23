import { ReactNode } from 'react';

type BadgeVariant = 'neon' | 'cyan' | 'purple' | 'default';

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
}

const variantClasses: Record<BadgeVariant, string> = {
  neon: 'border-[#39ff14]/40 text-[#39ff14] bg-[#39ff14]/5',
  cyan: 'border-[#00f5ff]/40 text-[#00f5ff] bg-[#00f5ff]/5',
  purple: 'border-[#bf5fff]/40 text-[#bf5fff] bg-[#bf5fff]/5',
  default: 'border-[#2a2a40] text-[#64748b] bg-[#1a1a28]',
};

export default function Badge({ children, variant = 'default' }: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center px-2 py-0.5 rounded
        border text-xs font-mono tracking-wide
        ${variantClasses[variant]}
      `}
    >
      {children}
    </span>
  );
}
