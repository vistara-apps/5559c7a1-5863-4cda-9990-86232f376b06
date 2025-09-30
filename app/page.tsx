import { WheelCanvas } from '@/components/WheelCanvas';
import { DailySpinCard } from '@/components/DailySpinCard';
import { LeaderboardPreview } from '@/components/LeaderboardPreview';
import { WalletConnect } from '@/components/WalletConnect';
import { Trophy, Zap, Users } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-bg">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-yellow-500 flex items-center justify-center">
              <Zap className="w-6 h-6 text-bg" />
            </div>
            <h1 className="text-2xl font-bold text-gradient">SpinBase</h1>
          </div>
          <WalletConnect />
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h2 className="text-5xl font-bold mb-4">
          Social Spins That <span className="text-gradient">Reward</span>
        </h2>
        <p className="text-xl text-text-muted mb-8 max-w-2xl mx-auto">
          Launch viral spinning wheels for giveaways, discounts, and on-chain rewards — shareable as Farcaster frames
        </p>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="metric-card">
            <div className="text-3xl font-bold text-accent mb-2">$125K+</div>
            <div className="text-text-muted">Prizes Distributed</div>
          </div>
          <div className="metric-card">
            <div className="text-3xl font-bold text-accent mb-2">50K+</div>
            <div className="text-text-muted">Daily Spins</div>
          </div>
          <div className="metric-card">
            <div className="text-3xl font-bold text-accent mb-2">1,200+</div>
            <div className="text-text-muted">Active Wheels</div>
          </div>
        </div>
      </section>

      {/* Main Wheel Section */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Wheel */}
          <div className="glass-card p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Trophy className="w-6 h-6 text-accent" />
              Featured Wheel
            </h3>
            <WheelCanvas />
          </div>

          {/* Daily Spin & Leaderboard */}
          <div className="space-y-6">
            <DailySpinCard />
            <LeaderboardPreview />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold text-center mb-12">Why SpinBase?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-6 rounded-lg">
            <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-accent" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Instant Virality</h4>
            <p className="text-text-muted">
              Launch a shareable wheel in 60 seconds. Every spin is a social post driving organic reach.
            </p>
          </div>
          
          <div className="glass-card p-6 rounded-lg">
            <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
              <Trophy className="w-6 h-6 text-accent" />
            </div>
            <h4 className="text-xl font-semibold mb-2">On-Chain Rewards</h4>
            <p className="text-text-muted">
              Trustless prize distribution via smart contracts. Users verify fairness on-chain.
            </p>
          </div>
          
          <div className="glass-card p-6 rounded-lg">
            <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-accent" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Daily Rituals</h4>
            <p className="text-text-muted">
              Gamified retention with streak rewards. Turn one-time spins into daily habits.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 text-center">
        <div className="glass-card p-12 rounded-lg">
          <h3 className="text-4xl font-bold mb-4">Ready to Launch Your Wheel?</h3>
          <p className="text-xl text-text-muted mb-8">
            Create viral giveaways in minutes. No coding required.
          </p>
          <button className="btn-primary text-lg px-8 py-4">
            Create Your First Wheel
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center text-text-muted">
          <p>Built on Base • Powered by OnchainKit</p>
        </div>
      </footer>
    </main>
  );
}
