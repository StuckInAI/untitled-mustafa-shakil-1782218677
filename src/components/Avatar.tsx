import { getInitials } from '@/lib/utils';

interface AvatarProps {
  username: string;
  src?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizeClasses = {
  sm: 'w-7 h-7 text-xs',
  md: 'w-9 h-9 text-sm',
  lg: 'w-14 h-14 text-lg',
};

// Deterministic color per username
const COLORS = [
  'from-[#39ff14]/30 to-[#00f5ff]/30',
  'from-[#bf5fff]/30 to-[#39ff14]/30',
  'from-[#00f5ff]/30 to-[#bf5fff]/30',
  'from-red-500/30 to-[#39ff14]/30',
];

function colorFor(username: string): string {
  const idx = username.charCodeAt(0) % COLORS.length;
  return COLORS[idx];
}

export default function Avatar({ username, src, size = 'md' }: AvatarProps) {
  if (src) {
    return (
      <img
        src={src}
        alt={username}
        className={`${sizeClasses[size]} rounded-full object-cover border border-[#2a2a40]`}
      />
    );
  }

  return (
    <div
      className={`
        ${sizeClasses[size]} rounded-full
        bg-gradient-to-br ${colorFor(username)}
        border border-[#2a2a40]
        flex items-center justify-center
        font-mono font-bold text-[#e2e8f0]
        flex-shrink-0
      `}
    >
      {getInitials(username)}
    </div>
  );
}
