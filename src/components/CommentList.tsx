import { useState } from 'react';
import type { Comment } from '@/types';
import { getUserById, CURRENT_USER } from '@/lib/mockData';
import { timeAgo } from '@/lib/utils';
import Avatar from '@/components/Avatar';
import Button from '@/components/Button';

interface CommentListProps {
  projectId: string;
  initial: Comment[];
}

export default function CommentList({ projectId, initial }: CommentListProps) {
  const [comments, setComments] = useState<Comment[]>(initial);
  const [newComment, setNewComment] = useState('');

  function addComment() {
    if (!newComment.trim()) return;
    const c: Comment = {
      id: `c_${Date.now()}`,
      projectId,
      authorId: CURRENT_USER.id,
      body: newComment.trim(),
      createdAt: new Date().toISOString(),
    };
    setComments(prev => [...prev, c]);
    setNewComment('');
  }

  return (
    <div>
      <p className="font-mono text-xs text-[#64748b] tracking-widest mb-4">
        // COMMENTS ({comments.length})
      </p>

      {/* Existing comments */}
      <div className="space-y-4 mb-6">
        {comments.length === 0 && (
          <p className="text-[#2a2a40] font-mono text-sm text-center py-6">No comments yet. Be the first.</p>
        )}
        {comments.map(c => {
          const author = getUserById(c.authorId);
          return (
            <div key={c.id} className="flex gap-3 p-4 rounded-lg bg-[#12121a] border border-[#2a2a40]">
              {author && <Avatar username={author.username} size="sm" />}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-xs text-[#39ff14]">@{author?.username ?? 'anon'}</span>
                  <span className="font-mono text-xs text-[#2a2a40]">{timeAgo(c.createdAt)}</span>
                </div>
                <p className="text-[#94a3b8] text-sm leading-relaxed">{c.body}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* New comment input */}
      <div className="flex gap-3 items-start">
        <Avatar username={CURRENT_USER.username} size="sm" />
        <div className="flex-1">
          <textarea
            value={newComment}
            onChange={e => setNewComment(e.target.value)}
            placeholder="Drop a comment…"
            rows={2}
            className="
              w-full px-4 py-2.5 rounded-lg
              bg-[#12121a] border border-[#2a2a40]
              font-mono text-sm text-[#e2e8f0]
              placeholder-[#2a2a40]
              resize-none
              focus:outline-none focus:border-[#39ff14]/40
              transition-all duration-200 mb-2
            "
            onKeyDown={e => {
              if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) addComment();
            }}
          />
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-[#2a2a40]">⌘+Enter to submit</span>
            <Button variant="primary" onClick={addComment} disabled={!newComment.trim()}>
              Post
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
