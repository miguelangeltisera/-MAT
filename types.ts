import React from 'react';

export interface Demo {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  problem: string;
  solution: string;
  result: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}
