import React from "react";

export interface NavLink {
  name: string;
  path: string;
}

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: {
    text: string;
    path: string;
  };
}

export interface ClientProfile {
  name: string;
  description: string;
  needs: string[];
}

export interface Article {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  imageUrl: string;
}

export interface TeamMember {
  name: string;
  role: string;
  avatarId: string;
  bio: string;
}

export interface CaseSnapshot {
  client: string;
  challenge: string;
  outcome: string;
  metric: string;
  metricValue: string;
}
