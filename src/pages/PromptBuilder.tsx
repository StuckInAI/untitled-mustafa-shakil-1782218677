import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import Button from '@/components/Button';
import Spinner from '@/components/Spinner';
import Badge from '@/components/Badge';
import { usePromptBuilder } from '@/hooks/usePromptBuilder';

export default function PromptBuilder() {
  const {
    prompt, setPrompt, chips, activeChips, toggleChip,
    loading, result, generate, saveProject, savedProject, reset,
  } = usePromptBuilder();

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#00f5ff]/30 bg-[#00f5ff]/5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00f5ff] animate-pulse" />
            <span className="font-mono text-xs text-[#00f5ff] tracking-widest">PROMPT BUILDER</span>
          </div>
          <h1 className="font-mono font-bold text-3xl sm:text-4xl text-[#e2e8f0] mb-2">
            Describe your <span className="text-[#00f5ff] cyan-glow">vision</span>
          </h1>
          <p className="text-[#64748b] text-base">
            Tell the AI what you want to build. Be as detailed or as vague as you like — vibes are valid.
          </p>
        </div>

        {/* Prompt Input */}
        <div className="relative mb-6">
          <div className="absolute top-3 left-4 font-mono text-xs text-[#39ff14]/60 select-none pointer-events-none">
            &gt;_
          </div>
          <textarea
            value={prompt}
            onChange={e => setPrompt(e.target.value)}
            placeholder="Describe the app you want to build… e.g. 'A dark-themed fitness tracker where each completed workout triggers a neon explosion animation and AI suggests tomorrow's routine.'"
            rows={6}
            className="
              w-full pl-10 pr-4 pt-3 pb-4 rounded-lg
              bg-[#12121a] border border-[#2a2a40]
              font-mono text-sm text-[#e2e8f0]
              placeholder-[#2a2a40]
              resize-none
              focus:outline-none focus:border-[#00f5ff]/60
              focus:shadow-[0_0_15px_rgba(0,245,255,0.1)]
              transition-all duration-200
            "
          />
          <div className="absolute bottom-3 right-3 font-mono text-xs text-[#2a2a40]">
            {prompt.length} chars
          </div>
        </div>

        {/* Enhancer chips */}
        <div className="mb-8">
          <p className="font-mono text-xs text-[#64748b] tracking-widest mb-3">// PROMPT ENHANCERS</p>
          <div className="flex flex-wrap gap-2">
            {chips.map(chip => {
              const isActive = activeChips.has(chip.id);
              return (
                <button
                  key={chip.id}
                  onClick={() => toggleChip(chip)}
                  className={`
                    px-3 py-1.5 rounded border font-mono text-xs tracking-wide
                    transition-all duration-200 cursor-pointer
                    ${isActive
                      ? 'border-[#39ff14]/60 text-[#39ff14] bg-[#39ff14]/10'
                      : 'border-[#2a2a40] text-[#64748b] hover:border-[#39ff14]/30 hover:text-[#e2e8f0] bg-[#12121a]'
                    }
                  `}
                >
                  {isActive ? '✓ ' : '+ '}{chip.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Generate Button */}
        <div className="flex gap-3">
          <Button
            variant="primary"
            onClick={generate}
            disabled={loading || !prompt.trim()}
            className="px-8 py-3 text-base"
          >
            {loading ? (
              <>
                <Spinner size="sm" color="neon" />
                Generating…
              </>
            ) : (
              '⚡ Generate Project'
            )}
          </Button>
          {(result || prompt) && (
            <Button variant="ghost" onClick={reset}>
              Reset
            </Button>
          )}
        </div>

        {/* Loading state */}
        {loading && (
          <div className="mt-10 p-6 rounded-lg border border-[#2a2a40] bg-[#12121a] fade-in">
            <div className="flex items-center gap-3 mb-4">
              <Spinner size="md" color="cyan" />
              <span className="font-mono text-sm text-[#00f5ff]">AI is analyzing your vibes…</span>
            </div>
            <div className="space-y-2">
              {['Parsing prompt intent…', 'Selecting tech stack…', 'Generating architecture…'].map((_msg, i) => (
                <div key={i} className="h-3 rounded bg-[#1a1a28] overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#00f5ff]/10 to-[#39ff14]/20 animate-pulse rounded"
                    style={{ width: `${60 + i * 15}%` }}
                  />
                </div>
              ))}
            </div>
            <p className="font-mono text-xs text-[#2a2a40] mt-3 animate-pulse">{loading ? '// processing...' : ''}</p>
          </div>
        )}

        {/* Result Panel */}
        {result && !loading && (
          <div className="mt-10 fade-in">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#39ff14] animate-pulse" />
              <span className="font-mono text-xs text-[#39ff14] tracking-widest">// GENERATION COMPLETE</span>
            </div>

            <div className="rounded-lg border border-[#39ff14]/30 bg-[#12121a] box-neon overflow-hidden">
              {/* Result header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-[#2a2a40] bg-[#0d1f12]/50">
                <div>
                  <h2 className="font-mono font-bold text-xl text-[#39ff14]">{result.title}</h2>
                  <div className="flex gap-1.5 mt-2">
                    {result.tags.map(tag => (
                      <Badge key={tag} variant="neon">#{tag}</Badge>
                    ))}
                  </div>
                </div>
                <div className="text-2xl">⚡</div>
              </div>

              <div className="p-6 space-y-5">
                {/* Description */}
                <div>
                  <p className="font-mono text-xs text-[#64748b] tracking-widest mb-2">// DESCRIPTION</p>
                  <p className="text-[#e2e8f0] text-sm leading-relaxed">{result.description}</p>
                </div>

                {/* Tech approach */}
                <div>
                  <p className="font-mono text-xs text-[#64748b] tracking-widest mb-2">// TECH APPROACH</p>
                  <div className="bg-[#0a0a0f] rounded p-4 border border-[#2a2a40]">
                    <p className="font-mono text-sm text-[#94a3b8] leading-relaxed">{result.techApproach}</p>
                  </div>
                </div>

                {/* Original prompt */}
                <div>
                  <p className="font-mono text-xs text-[#64748b] tracking-widest mb-2">// YOUR PROMPT</p>
                  <div className="bg-[#0a0a0f] rounded p-4 border border-[#2a2a40]">
                    <p className="font-mono text-xs text-[#64748b] leading-relaxed italic">"{prompt}"</p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="px-6 py-4 border-t border-[#2a2a40] flex gap-3 flex-wrap">
                {!savedProject ? (
                  <Button variant="primary" onClick={saveProject}>
                    💾 Save Project
                  </Button>
                ) : (
                  <Link to={`/project/${savedProject.id}`}>
                    <Button variant="cyan">
                      🔗 View Project
                    </Button>
                  </Link>
                )}
                <Button variant="ghost" onClick={() => { reset(); }}>
                  🔄 Generate Another
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Empty state */}
        {!result && !loading && (
          <div className="mt-12 text-center py-10 border border-dashed border-[#2a2a40] rounded-lg">
            <div className="text-4xl mb-3">🧠</div>
            <p className="font-mono text-sm text-[#2a2a40]">Your generated project will appear here</p>
          </div>
        )}
      </div>
    </Layout>
  );
}
