
import React from 'react';

export interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}
