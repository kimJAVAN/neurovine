import React from 'react';

export interface StatItem {
  label: string;
  value: string;
  subValue?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FeatureCard {
  // Fix: Added React import to resolve the 'Cannot find namespace React' error
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Architect {
  name: string;
  role: string;
  bio: string;
  image: string;
}