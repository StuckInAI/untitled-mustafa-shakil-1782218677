import { useState, useCallback } from 'react';
import type { Project } from '@/types';

const CHIPS = [
  { id: 'auth', label: 'Add authentication', text: ' Include user authentication with login and signup.' },
  { id: 'mobile', label: 'Make it mobile-first', text: ' Design for mobile screens first with responsive layouts.' },
  { id: 'dark', label: 'Use dark mode', text: ' Apply a dark mode aesthetic with neon accents.' },
  { id: 'realtime', label: 'Add real-time updates', text: ' Include real-time data sync and live notifications.' },
  { id: 'ai', label: 'Integrate AI', text: ' Add AI-powered features like smart suggestions and auto-complete.' },
  { id: 'open', label: 'Make it open source', text: ' Structure the codebase for open source contribution.' },
  { id: 'offline', label: 'Offline support', text: ' Enable offline functionality with local data persistence.' },
  { id: 'gamify', label: 'Gamify it', text: ' Add gamification elements like points, badges, and leaderboards.' },
];

interface GeneratedResult {
  title: string;
  description: string;
  techApproach: string;
  tags: string[];
}

function generateMockResult(prompt: string): GeneratedResult {
  const words = prompt.toLowerCase().split(' ');
  const isChat = words.some(w => ['chat', 'message', 'talk', 'communicate'].includes(w));
  const isTodo = words.some(w => ['todo', 'task', 'list', 'manage', 'track'].includes(w));
  const isDash = words.some(w => ['dashboard', 'analytics', 'metrics', 'data', 'chart'].includes(w));

  if (isChat) {
    return {
      title: 'VibeChat',
      description: 'A real-time messaging platform with AI-powered vibe matching and dynamic theming.',
      techApproach: 'React + WebSocket for real-time communication. Zustand for message state. Tailwind for adaptive theming. AI sentiment analysis for vibe detection.',
      tags: ['chat', 'real-time', 'AI'],
    };
  }
  if (isTodo) {
    return {
      title: 'NeonTasks',
      description: 'A next-gen task manager with AI prioritization, habit tracking, and cyberpunk aesthetics.',
      techApproach: 'React + useReducer for task state. Local storage persistence. Keyword-based AI priority engine. CSS animations for completed task celebrations.',
      tags: ['productivity', 'AI', 'dark-mode'],
    };
  }
  if (isDash) {
    return {
      title: 'DataVibes',
      description: 'An interactive analytics dashboard with live charts, drill-down views, and anomaly detection.',
      techApproach: 'React + Recharts for visualization. Mock data generators for realistic charts. AI anomaly flags using standard deviation calculations.',
      tags: ['analytics', 'dashboard', 'data'],
    };
  }
  return {
    title: 'VibeApp',
    description: 'A sleek, modern application built from your vision — AI-enhanced and ready to ship.',
    techApproach: 'React + TypeScript for type-safe development. Tailwind CSS for rapid styling. Custom hooks for business logic. Local state management with useReducer.',
    tags: ['web-app', 'AI', 'modern'],
  };
}

export function usePromptBuilder() {
  const [prompt, setPrompt] = useState('');
  const [activeChips, setActiveChips] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GeneratedResult | null>(null);
  const [savedProject, setSavedProject] = useState<Project | null>(null);

  const toggleChip = useCallback((chip: typeof CHIPS[0]) => {
    setActiveChips(prev => {
      const next = new Set(prev);
      if (next.has(chip.id)) {
        next.delete(chip.id);
        setPrompt(p => p.replace(chip.text, ''));
      } else {
        next.add(chip.id);
        setPrompt(p => p + chip.text);
      }
      return next;
    });
  }, []);

  const generate = useCallback(async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setResult(null);
    await new Promise(r => setTimeout(r, 2200));
    setResult(generateMockResult(prompt));
    setLoading(false);
  }, [prompt]);

  const saveProject = useCallback(() => {
    if (!result) return;
    const project: Project = {
      id: `p_${Date.now()}`,
      title: result.title,
      description: result.description,
      prompt,
      techApproach: result.techApproach,
      authorId: 'u1',
      createdAt: new Date().toISOString(),
      reactions: [
        { emoji: '🔥', count: 0 },
        { emoji: '⚡', count: 0 },
        { emoji: '💚', count: 0 },
      ],
      tags: result.tags,
    };
    setSavedProject(project);
  }, [result, prompt]);

  const reset = useCallback(() => {
    setPrompt('');
    setActiveChips(new Set());
    setResult(null);
    setSavedProject(null);
  }, []);

  return { prompt, setPrompt, chips: CHIPS, activeChips, toggleChip, loading, result, generate, saveProject, savedProject, reset };
}
