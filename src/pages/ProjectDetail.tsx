import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import Avatar from '@/components/Avatar';
import Badge from '@/components/Badge';
import ReactionBar from '@/components/ReactionBar';
import CommentList from '@/components/CommentList';
import Button from '@/components/Button';
import { getProjectById, getUserById, getCommentsByProjectId } from '@/lib/mockData';
import { formatDate } from '@/lib/utils';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : undefined;

  if (!project) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="font-mono text-2xl text-[#e2e8f0] mb-2">Project not found</h1>
          <p className="text-[#64748b] mb-6">This project may have been deleted or doesn't exist.</p>
          <Link to="/">
            <Button variant="primary">← Back to Home</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const author = getUserById(project.authorId);
  const comments = getCommentsByProjectId(project.id);

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 font-mono text-xs text-[#64748b]">
          <Link to="/" className="hover:text-[#39ff14] transition-colors">~/home</Link>
          <span>/</span>
          <span className="text-[#e2e8f0]">{project.title}</span>
        </div>

        {/* Header */}
        <div className="mb-8 pb-8 border-b border-[#2a2a40]">
          <h1 className="font-mono font-bold text-3xl sm:text-4xl text-[#e2e8f0] mb-3">
            {project.title}
          </h1>
          <p className="text-[#94a3b8] text-lg leading-relaxed mb-4">{project.description}</p>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tags.map(tag => (
              <Badge key={tag} variant="neon">#{tag}</Badge>
            ))}
          </div>

          {/* Author + date */}
          <div className="flex items-center gap-4">
            {author && (
              <Link to="/profile" className="flex items-center gap-2 group">
                <Avatar username={author.username} size="md" />
                <div>
                  <p className="font-mono text-sm text-[#39ff14] group-hover:underline">@{author.username}</p>
                  <p className="font-mono text-xs text-[#64748b]">Published {formatDate(project.createdAt)}</p>
                </div>
              </Link>
            )}
          </div>
        </div>

        {/* Reactions */}
        <div className="mb-8 pb-8 border-b border-[#2a2a40]">
          <p className="font-mono text-xs text-[#64748b] tracking-widest mb-3">// REACTIONS</p>
          <ReactionBar reactions={project.reactions} />
        </div>

        {/* Prompt */}
        <div className="mb-8">
          <p className="font-mono text-xs text-[#64748b] tracking-widest mb-3">// THE PROMPT</p>
          <div className="rounded-lg border border-[#2a2a40] bg-[#0a0a0f] p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[#39ff14] font-mono text-xs">&gt;_</span>
              <span className="font-mono text-xs text-[#64748b]">user prompt</span>
            </div>
            <p className="font-mono text-sm text-[#94a3b8] leading-relaxed italic">"{project.prompt}"</p>
          </div>
        </div>

        {/* Tech Approach */}
        <div className="mb-10">
          <p className="font-mono text-xs text-[#64748b] tracking-widest mb-3">// TECH APPROACH</p>
          <div className="rounded-lg border border-[#00f5ff]/20 bg-[#0a0a10] p-5">
            <p className="font-mono text-sm text-[#94a3b8] leading-relaxed">{project.techApproach}</p>
          </div>
        </div>

        {/* Comments */}
        <div className="border-t border-[#2a2a40] pt-10">
          <CommentList projectId={project.id} initial={comments} />
        </div>
      </div>
    </Layout>
  );
}
