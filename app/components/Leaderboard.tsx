'use client';

import { Trophy, Medal, Award } from 'lucide-react';

interface LeaderboardEntry {
  rank: number;
  username: string;
  points: number;
  streak: number;
  avatar: string;
}

const MOCK_LEADERBOARD: LeaderboardEntry[] = [
  { rank: 1, username: 'cryptowhale.eth', points: 15420, streak: 28, avatar: '🐋' },
  { rank: 2, username: 'spinmaster', points: 12350, streak: 21, avatar: '🎯' },
  { rank: 3, username: 'luckydev', points: 10890, streak: 19, avatar: '🍀' },
  { rank: 4, username: 'basedbuilder', points: 9240, streak: 15, avatar: '🔨' },
  { rank: 5, username: 'frameking', points: 8100, streak: 12, avatar: '👑' },
];

export function Leaderboard() {
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-5 h-5 text-yellow-400" />;
      case 2:
        return <Medal className="w-5 h-5 text-gray-400" />;
      case 3:
        return <Award className="w-5 h-5 text-amber-600" />;
      default:
        return <span className="text-muted font-semibold">#{rank}</span>;
    }
  };

  return (
    <section className="glass-card p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Leaderboard</h2>
        <button className="text-sm text-accent hover:underline">
          View All
        </button>
      </div>

      <div className="space-y-3">
        {MOCK_LEADERBOARD.map((entry) => (
          <div
            key={entry.rank}
            className="flex items-center gap-4 p-4 rounded-lg bg-surface hover:bg-opacity-80 transition-all duration-200"
          >
            <div className="flex items-center justify-center w-10">
              {getRankIcon(entry.rank)}
            </div>

            <div className="text-2xl">{entry.avatar}</div>

            <div className="flex-1">
              <div className="font-semibold">{entry.username}</div>
              <div className="text-sm text-muted">
                {entry.points.toLocaleString()} points
              </div>
            </div>

            <div className="text-right">
              <div className="text-sm font-semibold text-accent">
                🔥 {entry.streak} day streak
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
