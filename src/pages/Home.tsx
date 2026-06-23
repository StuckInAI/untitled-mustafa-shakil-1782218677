import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import ProjectCard from '@/components/ProjectCard';
import Button from '@/components/Button';
import { PROJECTS } from '@/lib/mockData';

export default function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative animated-gradient scanlines overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-24 sm:py-32 flex flex-col items-center text-center gap-6">
          {/* Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#39ff14]/30 bg-[#39ff14]/5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#39ff14] animate-pulse" />
            <span className="font-mono text-xs text-[#39ff14] tracking-widest">AI-POWERED VIBE CODING</span>
          </div>

          {/* Heading */}
          <h1 className="font-mono font-bold text-4xl sm:text-6xl leading-tight tracking-tight">
            <span className="text-[#e2e8f0]">Build apps</span>
            <br />
            <span className="text-[#39ff14] neon-glow cursor-blink">with vibes</span>
          </h1>

          <p className="text-[#94a3b8] text-lg sm:text-xl max-w-xl leading-relaxed">
            Describe what you want. AI generates the architecture. Ship it with style.
            Welcome to the future of development.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <Link to="/build">
              <Button variant="primary" className="text-base px-8 py-3">
                ⚡ Start Building
              </Button>
            </Link>
            <Link to="#trending">
              <Button variant="ghost" className="text-base px-8 py-3">
                Explore Projects
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-8 mt-4 pt-4 border-t border-[#2a2a40] w-full max-w-sm justify-center">
            {[
              { value: '2.4k', label: 'Projects' },
              { value: '841', label: 'Builders' },
              { value: '18k', label: 'Reactions' },
            ].map(s => (
              <div key={s.label} className="flex flex-col items-center">
                <span className="font-mono font-bold text-xl text-[#39ff14]">{s.value}</span>
                <span className="font-mono text-xs text-[#64748b] tracking-wide">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Grid lines decoration */}
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(57,255,20,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(57,255,20,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </section>

      {/* Trending Projects */}
      <section id="trending" className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-mono font-bold text-2xl text-[#e2e8f0]">
              <span className="text-[#39ff14]">//</span> Trending Projects
            </h2>
            <p className="text-[#64748b] text-sm mt-1 font-mono">What the community is vibing on</p>
          </div>
          <Link to="/build">
            <Button variant="ghost">+ New Project</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="border-t border-[#2a2a40] bg-[#12121a]">
        <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-mono font-bold text-xl text-[#e2e8f0]">Ready to vibe?</h3>
            <p className="text-[#64748b] text-sm mt-1">Turn your idea into a working app in minutes.</p>
          </div>
          <Link to="/build">
            <Button variant="cyan" className="px-8 py-3 text-base">
              🚀 Launch Builder
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#2a2a40] bg-[#0a0a0f]">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="font-mono text-xs text-[#2a2a40] tracking-widest">VIBECODE © 2024</span>
          <span className="font-mono text-xs text-[#2a2a40]">built with vibes &amp; ai</span>
        </div>
      </footer>
    </Layout>
  );
}
