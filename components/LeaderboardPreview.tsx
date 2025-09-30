'use client';

import { Trophy, TrendingUp } from 'lucide-react';

interface LeaderboardEntry {
  rank: number;
  username: string;
  points: number;
  avatar: string;
}

const MOCK_LEADERBOARD: LeaderboardEntry[] = [
  { rank: 1, username: 'cryptowhale.eth', points: 15420, avatar: '🐋' },
  { rank: 2, username: 'spinmaster', points: 12350, avatar: '🎯' },
  { rank: 3, username: 'luckyspinner', points: 10890, avatar: '🍀' },
  { rank: 4, username: 'basebuilder', points: 9240, avatar: '🔨' },
  { rank: 5, username: 'prizehunter', points: 8100, avatar: '🏆' },
];

export function LeaderboardPreview() {
  return (
    <div className="glass-card p-6 rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold flex items-center gap-2">
          <Trophy className="w-5 h-5 text-accent" />
          Top Spinners
        </h3>
        <button className="text-sm text-accent hover:underline">
          View All
        </button>
      </div>

      <div className="space-y-2">
        {MOCK_LEADERBOARD.map((entry) => (
          <div
            key={entry.rank}
            className="leaderboard-row flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-lg ${
                entry.rank === 1 ? 'bg-accent text-bg' :
                entry.rank === 2 ? 'bg-gray-400 text-bg' :
                entry.rank === 3 ? 'bg-yellow-700 text-bg' :
                'bg-surface'
              }`}>
                {entry.rank <= 3 ? entry.avatar : entry.rank}
              </div>
              <div>
                <div className="font-medium">{entry.username}</div>
                <div className="text-sm text-text-muted flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  {entry.points.toLocaleString()} points
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
