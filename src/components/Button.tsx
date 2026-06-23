import { ReactNode } from 'react';

type Variant = 'primary' | 'ghost' | 'danger' | 'cyan';

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  fullWidth?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-transparent border border-[#39ff14] text-[#39ff14] hover:bg-[#39ff14]/10 pulse-neon font-mono tracking-widest uppercase text-sm',
  ghost:
    'bg-transparent border border-[#2a2a40] text-[#e2e8f0] hover:border-[#39ff14]/50 hover:text-[#39ff14] font-mono tracking-wide text-sm',
  danger:
    'bg-transparent border border-red-500/60 text-red-400 hover:bg-red-500/10 font-mono tracking-wide text-sm',
  cyan:
    'bg-transparent border border-[#00f5ff] text-[#00f5ff] hover:bg-[#00f5ff]/10 box-cyan font-mono tracking-widest uppercase text-sm',
};

export default function Button({
  children,
  variant = 'primary',
  onClick,
  disabled = false,
  type = 'button',
  className = '',
  fullWidth = false,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded
        transition-all duration-200 cursor-pointer select-none
        disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none
        ${variantClasses[variant]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
    >
      {children}
    </button>
  );
}
