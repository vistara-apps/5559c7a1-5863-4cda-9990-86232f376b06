'use client';

import { Flame, Calendar } from 'lucide-react';

export function DailySpinCard() {
  const streakCount = 5;
  const nextSpinTime = '9:00 AM';

  return (
    <div className="glass-card p-6 rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold flex items-center gap-2">
          <Flame className="w-5 h-5 text-accent" />
          Daily Spin
        </h3>
        <div className="streak-badge">
          <Flame className="w-4 h-4" />
          {streakCount} Day Streak
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-surface rounded-lg">
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-accent" />
            <div>
              <div className="font-medium">Next Spin Available</div>
              <div className="text-sm text-text-muted">Tomorrow at {nextSpinTime}</div>
            </div>
          </div>
        </div>

        <div className="p-4 bg-surface rounded-lg">
          <div className="text-sm text-text-muted mb-2">Streak Progress</div>
          <div className="flex gap-2">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className={`flex-1 h-2 rounded-full ${
                  i < streakCount ? 'bg-accent' : 'bg-border'
                }`}
              />
            ))}
          </div>
          <div className="text-xs text-text-muted mt-2">
            {7 - streakCount} days until VIP wheel unlock
          </div>
        </div>

        <button className="btn-secondary w-full" disabled>
          Come Back Tomorrow
        </button>
      </div>
    </div>
  );
}
