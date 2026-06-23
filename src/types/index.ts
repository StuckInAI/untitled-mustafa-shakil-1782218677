export interface User {
  id: string;
  username: string;
  avatar: string;
  bio: string;
}

export interface Reaction {
  emoji: string;
  count: number;
}

export interface Comment {
  id: string;
  projectId: string;
  authorId: string;
  body: string;
  createdAt: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  prompt: string;
  techApproach: string;
  authorId: string;
  createdAt: string;
  reactions: Reaction[];
  tags: string[];
}
