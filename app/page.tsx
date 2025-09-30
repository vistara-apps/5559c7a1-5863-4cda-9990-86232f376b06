import { WheelCanvas } from './components/WheelCanvas';
import { StatsGrid } from './components/StatsGrid';
import { Leaderboard } from './components/Leaderboard';
import { Header } from './components/Header';
import { CreateWheelButton } from './components/CreateWheelButton';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-bg">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        {/* Hero Section */}
        <section className="text-center space-y-4 py-12">
          <h1 className="text-5xl font-bold tracking-tight">
            <span className="text-gradient">SpinBase</span>
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Social spins that reward your community — built for Base & Farcaster
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <CreateWheelButton />
            <button className="btn-secondary">
              View Demo
            </button>
          </div>
        </section>

        {/* Stats Grid */}
        <StatsGrid />

        {/* Main Wheel */}
        <section className="glass-card p-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-semibold mb-2">Daily Spin</h2>
            <p className="text-muted">Spin once per day for free rewards</p>
          </div>
          <WheelCanvas />
        </section>

        {/* Leaderboard */}
        <Leaderboard />

        {/* Features Grid */}
        <section className="grid md:grid-cols-3 gap-6">
          <div className="metric-card">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="text-xl font-semibold mb-2">Farcaster Frames</h3>
            <p className="text-muted text-sm">
              Share spinning wheels as interactive frames. Users spin directly in-feed.
            </p>
          </div>
          
          <div className="metric-card">
            <div className="text-4xl mb-3">🔒</div>
            <h3 className="text-xl font-semibold mb-2">On-Chain Prizes</h3>
            <p className="text-muted text-sm">
              Trustless prize distribution via smart contracts. Provably fair with VRF.
            </p>
          </div>
          
          <div className="metric-card">
            <div className="text-4xl mb-3">🔥</div>
            <h3 className="text-xl font-semibold mb-2">Daily Streaks</h3>
            <p className="text-muted text-sm">
              Build habits with daily spins. Unlock rare prizes with 7-day streaks.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
