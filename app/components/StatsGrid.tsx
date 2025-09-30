'use client';

import { TrendingUp, Users, Trophy, Zap } from 'lucide-react';

const STATS = [
  {
    label: 'Total Spins',
    value: '1.2M',
    change: '+12.5%',
    icon: Zap,
  },
  {
    label: 'Active Users',
    value: '45.3K',
    change: '+8.2%',
    icon: Users,
  },
  {
    label: 'Prizes Claimed',
    value: '$125K',
    change: '+23.1%',
    icon: Trophy,
  },
  {
    label: 'Avg. Streak',
    value: '5.2 days',
    change: '+15.3%',
    icon: TrendingUp,
  },
];

export function StatsGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {STATS.map((stat) => {
        const Icon = stat.icon;
        return (
          <div key={stat.label} className="metric-card">
            <div className="flex items-center justify-between mb-2">
              <Icon className="w-5 h-5 text-accent" />
              <span className="text-xs text-green-400">{stat.change}</span>
            </div>
            <div className="text-2xl font-bold mb-1">{stat.value}</div>
            <div className="text-sm text-muted">{stat.label}</div>
          </div>
        );
      })}
    </div>
  );
}
