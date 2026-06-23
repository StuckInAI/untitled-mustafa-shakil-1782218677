interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'neon' | 'cyan';
}

const sizeClasses = { sm: 'w-4 h-4', md: 'w-6 h-6', lg: 'w-10 h-10' };
const colorClasses = {
  neon: 'border-[#39ff14]/20 border-t-[#39ff14]',
  cyan: 'border-[#00f5ff]/20 border-t-[#00f5ff]',
};

export default function Spinner({ size = 'md', color = 'neon' }: SpinnerProps) {
  return (
    <div
      className={`
        ${sizeClasses[size]} ${colorClasses[color]}
        rounded-full border-2 animate-spin
      `}
    />
  );
}
