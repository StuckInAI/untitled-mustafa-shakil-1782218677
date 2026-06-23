import { useState } from 'react';
import Layout from '@/components/Layout';
import Avatar from '@/components/Avatar';
import ProjectCard from '@/components/ProjectCard';
import Button from '@/components/Button';
import Badge from '@/components/Badge';
import { CURRENT_USER, getProjectsByUserId } from '@/lib/mockData';
import { formatDate } from '@/lib/utils';

export default function Profile() {
  const [bio, setBio] = useState(CURRENT_USER.bio);
  const [editingBio, setEditingBio] = useState(false);
  const [draftBio, setDraftBio] = useState(bio);

  const projects = getProjectsByUserId(CURRENT_USER.id);
  const totalReactions = projects.flatMap(p => p.reactions).reduce((s, r) => s + r.count, 0);

  function saveBio() {
    setBio(draftBio);
    setEditingBio(false);
  }

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Profile header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-10 pb-10 border-b border-[#2a2a40]">
          <Avatar username={CURRENT_USER.username} size="lg" />

          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              <h1 className="font-mono font-bold text-2xl text-[#e2e8f0]">@{CURRENT_USER.username}</h1>
              <Badge variant="neon">you</Badge>
            </div>

            {editingBio ? (
              <div className="mt-2">
                <textarea
                  value={draftBio}
                  onChange={e => setDraftBio(e.target.value)}
                  rows={2}
                  className="
                    w-full max-w-md px-3 py-2 rounded
                    bg-[#12121a] border border-[#00f5ff]/40
                    font-mono text-sm text-[#e2e8f0]
                    resize-none focus:outline-none
                    transition-all
                  "
                />
                <div className="flex gap-2 mt-2">
                  <Button variant="cyan" onClick={saveBio}>Save</Button>
                  <Button variant="ghost" onClick={() => { setDraftBio(bio); setEditingBio(false); }}>Cancel</Button>
                </div>
              </div>
            ) : (
              <div className="flex items-start gap-2 mt-1">
                <p className="text-[#94a3b8] text-sm max-w-md">{bio}</p>
                <button
                  onClick={() => { setDraftBio(bio); setEditingBio(true); }}
                  className="flex-shrink-0 font-mono text-xs text-[#2a2a40] hover:text-[#39ff14] transition-colors mt-0.5"
                >
                  ✎ edit
                </button>
              </div>
            )}

            {/* Member since */}
            <p className="font-mono text-xs text-[#2a2a40] mt-2">member since {formatDate('2024-09-01T00:00:00Z')}</p>
          </div>

          {/* Stats */}
          <div className="flex gap-6 sm:flex-col sm:gap-3 sm:text-right">
            {[
              { value: projects.length, label: 'Projects' },
              { value: totalReactions, label: 'Reactions' },
            ].map(s => (
              <div key={s.label}>
                <p className="font-mono font-bold text-xl text-[#39ff14]">{s.value}</p>
                <p className="font-mono text-xs text-[#64748b]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <div>
          <h2 className="font-mono font-bold text-lg text-[#e2e8f0] mb-6">
            <span className="text-[#39ff14]">//</span> My Projects
          </h2>
          {projects.length === 0 ? (
            <div className="text-center py-16 border border-dashed border-[#2a2a40] rounded-lg">
              <div className="text-4xl mb-3">🚀</div>
              <p className="font-mono text-sm text-[#2a2a40]">No projects yet. Go build something!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.map(p => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
