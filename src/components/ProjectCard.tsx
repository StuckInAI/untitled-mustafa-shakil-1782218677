import { Link } from 'react-router-dom';
import { Project } from '@/types';
import { getUserById, } from '@/lib/mockData';
import { truncate, timeAgo } from '@/lib/utils';
import Avatar from '@/components/Avatar';
import Badge from '@/components/Badge';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const author = getUserById(project.authorId);
  const totalReactions = project.reactions.reduce((s, r) => s + r.count, 0);

  return (
    <Link
      to={`/project/${project.id}`}
      className="block group"
    >
      <div className="
        relative h-full rounded-lg border border-[#2a2a40] bg-[#12121a] p-5
        transition-all duration-300
        hover:border-[#39ff14]/40 hover:bg-[#12121a]
        hover:shadow-[0_0_20px_rgba(57,255,20,0.08),0_0_40px_rgba(57,255,20,0.04)]
        flex flex-col gap-3
      ">
        {/* Top row */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-mono font-bold text-[#e2e8f0] text-base group-hover:text-[#39ff14] transition-colors leading-tight">
            {project.title}
          </h3>
          <span className="flex items-center gap-1 text-xs font-mono text-[#64748b] flex-shrink-0">
            <span>{project.reactions[0]?.emoji}</span>
            <span>{totalReactions}</span>
          </span>
        </div>

        {/* Description */}
        <p className="text-[#94a3b8] text-sm leading-relaxed flex-1">
          {truncate(project.description, 110)}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map(tag => (
            <Badge key={tag} variant="default">#{tag}</Badge>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-1 border-t border-[#2a2a40]/60">
          {author && (
            <div className="flex items-center gap-2">
              <Avatar username={author.username} size="sm" />
              <span className="font-mono text-xs text-[#64748b]">@{author.username}</span>
            </div>
          )}
          <span className="font-mono text-xs text-[#2a2a40]">{timeAgo(project.createdAt)}</span>
        </div>

        {/* Neon corner accent */}
        <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden rounded-tr-lg pointer-events-none">
          <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-[#39ff14]/0 via-[#39ff14]/30 to-[#39ff14]/0 group-hover:via-[#39ff14]/60 transition-all" />
          <div className="absolute top-0 right-0 h-px w-full bg-gradient-to-l from-[#39ff14]/0 via-[#39ff14]/30 to-[#39ff14]/0 group-hover:via-[#39ff14]/60 transition-all" />
        </div>
      </div>
    </Link>
  );
}
