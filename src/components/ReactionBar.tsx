import { useState } from 'react';
import type { Reaction } from '@/types';

interface ReactionBarProps {
  reactions: Reaction[];
}

export default function ReactionBar({ reactions: initial }: ReactionBarProps) {
  const [reactions, setReactions] = useState<Reaction[]>(initial);
  const [clicked, setClicked] = useState<Set<string>>(new Set());

  function toggle(emoji: string) {
    setReactions(prev =>
      prev.map(r =>
        r.emoji === emoji
          ? { ...r, count: clicked.has(emoji) ? r.count - 1 : r.count + 1 }
          : r
      )
    );
    setClicked(prev => {
      const next = new Set(prev);
      if (next.has(emoji)) next.delete(emoji);
      else next.add(emoji);
      return next;
    });
  }

  return (
    <div className="flex flex-wrap gap-2">
      {reactions.map(r => (
        <button
          key={r.emoji}
          onClick={() => toggle(r.emoji)}
          className={`
            flex items-center gap-1.5 px-3 py-1.5 rounded-full border font-mono text-sm
            transition-all duration-200 cursor-pointer
            ${clicked.has(r.emoji)
              ? 'border-[#39ff14]/60 bg-[#39ff14]/10 text-[#39ff14]'
              : 'border-[#2a2a40] bg-[#12121a] text-[#94a3b8] hover:border-[#39ff14]/30 hover:text-[#e2e8f0]'
            }
          `}
        >
          <span>{r.emoji}</span>
          <span className="text-xs">{r.count}</span>
        </button>
      ))}
    </div>
  );
}
