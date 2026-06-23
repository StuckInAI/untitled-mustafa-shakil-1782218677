import type { User, Project, Comment } from '@/types';

export const USERS: User[] = [
  {
    id: 'u1',
    username: 'neon_dev',
    avatar: '',
    bio: 'Full-stack vibe coder. I ship fast and break things beautifully.',
  },
  {
    id: 'u2',
    username: 'pixel_witch',
    avatar: '',
    bio: 'Turning prompts into products since 2023. CSS is my superpower.',
  },
  {
    id: 'u3',
    username: 'cyb3r_monk',
    avatar: '',
    bio: 'Open source enthusiast. Building the future one vibe at a time.',
  },
  {
    id: 'u4',
    username: 'glitch_girl',
    avatar: '',
    bio: 'AI-native dev. Obsessed with generative interfaces and chaos.',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'NeonTasks',
    description: 'A cyberpunk-themed task manager with AI priority sorting and neon animations.',
    prompt: 'Build a task management app with a dark cyberpunk UI, AI-based task prioritization, drag-and-drop reordering, and neon glow effects on completed tasks.',
    techApproach: 'React + Zustand for state, Tailwind for styling, a mock AI priority engine that scores tasks by keyword detection.',
    authorId: 'u1',
    createdAt: '2024-11-15T10:30:00Z',
    reactions: [
      { emoji: '🔥', count: 42 },
      { emoji: '⚡', count: 28 },
      { emoji: '💚', count: 15 },
    ],
    tags: ['productivity', 'AI', 'dark-mode'],
  },
  {
    id: 'p2',
    title: 'VibeChat',
    description: 'Real-time chat app where AI modifies your messages to match a chosen "vibe" before sending.',
    prompt: 'Create a chat application where users pick a vibe (chill, hype, professional, pirate) and the AI rewrites their message in that style before sending.',
    techApproach: 'React + WebSocket simulation, vibe presets as prompt templates, local message state with mock AI transformation.',
    authorId: 'u2',
    createdAt: '2024-11-20T14:00:00Z',
    reactions: [
      { emoji: '😂', count: 87 },
      { emoji: '🔥', count: 61 },
      { emoji: '🤯', count: 33 },
    ],
    tags: ['chat', 'AI', 'fun'],
  },
  {
    id: 'p3',
    title: 'CodeForest',
    description: 'Visualize your GitHub repo as a 3D glowing forest where each file is a tree.',
    prompt: 'Build a 3D visualization tool that maps a GitHub repository structure into an interactive glowing forest. Files are trees, directories are groves.',
    techApproach: 'React Three Fiber for 3D rendering, GitHub API mock data, procedural tree generation based on file size.',
    authorId: 'u3',
    createdAt: '2024-11-22T09:15:00Z',
    reactions: [
      { emoji: '🌲', count: 120 },
      { emoji: '😍', count: 74 },
      { emoji: '⚡', count: 45 },
    ],
    tags: ['visualization', '3D', 'developer-tools'],
  },
  {
    id: 'p4',
    title: 'GlitchDiary',
    description: 'A personal journal app with glitch art effects and AI mood analysis on your entries.',
    prompt: 'Make a journaling app with a glitch aesthetic. Entries show with CSS glitch animations and an AI sidebar analyzes mood and suggests playlist vibes.',
    techApproach: 'React + local storage persistence, CSS glitch keyframes, a keyword-based mood classifier returning one of 5 mood states.',
    authorId: 'u4',
    createdAt: '2024-11-25T20:00:00Z',
    reactions: [
      { emoji: '💜', count: 55 },
      { emoji: '✨', count: 40 },
      { emoji: '🔮', count: 29 },
    ],
    tags: ['journaling', 'AI', 'art'],
  },
  {
    id: 'p5',
    title: 'ByteBoard',
    description: 'A kanban board for hackers — terminal-style UI with keyboard shortcuts for everything.',
    prompt: 'Build a kanban board with a terminal/hacker aesthetic. All actions available via keyboard shortcuts, cards look like terminal output, and columns animate like a matrix rain.',
    techApproach: 'React + useReducer for board state, keyboard event listeners, CSS animations for the matrix-rain column headers.',
    authorId: 'u1',
    createdAt: '2024-11-28T11:45:00Z',
    reactions: [
      { emoji: '⌨️', count: 93 },
      { emoji: '🔥', count: 67 },
      { emoji: '💚', count: 38 },
    ],
    tags: ['productivity', 'terminal', 'keyboard'],
  },
  {
    id: 'p6',
    title: 'PromptVault',
    description: 'Community-curated library of AI prompts with ratings, tags, and one-click copy.',
    prompt: 'Create a searchable library where users can submit, rate, and fork AI prompts. Include tag filtering, a copy-to-clipboard button, and a "remix" feature.',
    techApproach: 'React + in-memory store, fuzzy search with simple string matching, clipboard API integration.',
    authorId: 'u2',
    createdAt: '2024-12-01T08:00:00Z',
    reactions: [
      { emoji: '📚', count: 78 },
      { emoji: '⚡', count: 52 },
      { emoji: '🙌', count: 44 },
    ],
    tags: ['prompts', 'community', 'AI'],
  },
];

export const COMMENTS: Comment[] = [
  { id: 'c1', projectId: 'p1', authorId: 'u2', body: 'This is absolutely insane. The neon animations are chef\'s kiss 🔥', createdAt: '2024-11-16T08:00:00Z' },
  { id: 'c2', projectId: 'p1', authorId: 'u3', body: 'How did you get the AI prioritization to feel so smooth? Drop source pls', createdAt: '2024-11-16T12:30:00Z' },
  { id: 'c3', projectId: 'p1', authorId: 'u4', body: 'Vibes immaculate. Using this as my daily driver now.', createdAt: '2024-11-17T09:15:00Z' },
  { id: 'c4', projectId: 'p2', authorId: 'u1', body: 'Pirate mode had me crying laughing. 10/10', createdAt: '2024-11-21T10:00:00Z' },
  { id: 'c5', projectId: 'p2', authorId: 'u3', body: 'This is the future of communication lmao', createdAt: '2024-11-21T14:30:00Z' },
  { id: 'c6', projectId: 'p3', authorId: 'u1', body: 'The forest metaphor is genius. My monorepo looks like Mirkwood.', createdAt: '2024-11-23T11:00:00Z' },
  { id: 'c7', projectId: 'p3', authorId: 'u4', body: 'Finally a visualization tool that doesn\'t look like 2015 enterprise software', createdAt: '2024-11-23T15:00:00Z' },
  { id: 'c8', projectId: 'p4', authorId: 'u1', body: 'The glitch effects on sad entries hit differently. Powerful stuff.', createdAt: '2024-11-26T07:00:00Z' },
  { id: 'c9', projectId: 'p5', authorId: 'u2', body: 'Finally a kanban I can use without touching a mouse. My hands love you.', createdAt: '2024-11-29T09:00:00Z' },
  { id: 'c10', projectId: 'p6', authorId: 'u3', body: 'This is going to save me so much time. Subscribed.', createdAt: '2024-12-02T10:00:00Z' },
];

export const CURRENT_USER: User = USERS[0];

export function getUserById(id: string): User | undefined {
  return USERS.find(u => u.id === id);
}

export function getProjectById(id: string): Project | undefined {
  return PROJECTS.find(p => p.id === id);
}

export function getCommentsByProjectId(projectId: string): Comment[] {
  return COMMENTS.filter(c => c.projectId === projectId);
}

export function getProjectsByUserId(userId: string): Project[] {
  return PROJECTS.filter(p => p.authorId === userId);
}
