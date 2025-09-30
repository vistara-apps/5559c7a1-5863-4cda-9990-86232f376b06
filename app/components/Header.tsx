'use client';

import { ConnectWallet, Wallet } from '@coinbase/onchainkit/wallet';
import { Name, Avatar } from '@coinbase/onchainkit/identity';
import { Trophy, Zap } from 'lucide-react';

export function Header() {
  return (
    <header className="border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center">
              <Zap className="w-6 h-6 text-gray-900" />
            </div>
            <span className="text-xl font-bold text-gradient">SpinBase</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-muted hover:text-fg transition-colors duration-200">
              Explore
            </a>
            <a href="#" className="text-muted hover:text-fg transition-colors duration-200">
              Create
            </a>
            <a href="#" className="text-muted hover:text-fg transition-colors duration-200 flex items-center gap-1">
              <Trophy className="w-4 h-4" />
              Leaderboard
            </a>
          </nav>

          <Wallet>
            <ConnectWallet>
              <Avatar className="w-8 h-8" />
              <Name className="text-sm font-medium" />
            </ConnectWallet>
          </Wallet>
        </div>
      </div>
    </header>
  );
}
