'use client';

import { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface Prize {
  id: string;
  name: string;
  color: string;
  probability: number;
}

const PRIZES: Prize[] = [
  { id: '1', name: '0.01 ETH', color: '#ffd700', probability: 0.05 },
  { id: '2', name: '10% Off', color: '#ff6b6b', probability: 0.2 },
  { id: '3', name: 'Free NFT', color: '#4ecdc4', probability: 0.1 },
  { id: '4', name: '5 USDC', color: '#95e1d3', probability: 0.15 },
  { id: '5', name: 'Spin Again', color: '#f38181', probability: 0.2 },
  { id: '6', name: '20% Off', color: '#aa96da', probability: 0.15 },
  { id: '7', name: 'Merch', color: '#fcbad3', probability: 0.1 },
  { id: '8', name: 'Try Again', color: '#a8d8ea', probability: 0.05 },
];

export function WheelCanvas() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [wonPrize, setWonPrize] = useState<Prize | null>(null);

  const handleSpin = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setWonPrize(null);

    // Random prize selection
    const random = Math.random();
    let cumulative = 0;
    let selectedPrize = PRIZES[0];

    for (const prize of PRIZES) {
      cumulative += prize.probability;
      if (random <= cumulative) {
        selectedPrize = prize;
        break;
      }
    }

    // Calculate rotation to land on selected prize
    const prizeIndex = PRIZES.findIndex(p => p.id === selectedPrize.id);
    const degreesPerSlice = 360 / PRIZES.length;
    const targetRotation = 360 * 5 + (prizeIndex * degreesPerSlice) + (degreesPerSlice / 2);

    setRotation(targetRotation);

    setTimeout(() => {
      setIsSpinning(false);
      setWonPrize(selectedPrize);
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center gap-8">
      {/* Wheel Container */}
      <div className="relative">
        {/* Pointer */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 z-10">
          <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[30px] border-t-accent"></div>
        </div>

        {/* Wheel */}
        <div 
          className="relative w-80 h-80 rounded-full wheel-glow transition-transform duration-[3000ms] ease-out"
          style={{ 
            transform: `rotate(${rotation}deg)`,
            background: 'conic-gradient(from 0deg, #ffd700 0deg 45deg, #ff6b6b 45deg 90deg, #4ecdc4 90deg 135deg, #95e1d3 135deg 180deg, #f38181 180deg 225deg, #aa96da 225deg 270deg, #fcbad3 270deg 315deg, #a8d8ea 315deg 360deg)',
            boxShadow: 'var(--shadow-wheel)',
          }}
        >
          {/* Center Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-surface border-4 border-accent flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-accent" />
          </div>

          {/* Prize Labels */}
          {PRIZES.map((prize, index) => {
            const angle = (360 / PRIZES.length) * index;
            const radius = 120;
            const x = Math.cos((angle - 90) * Math.PI / 180) * radius;
            const y = Math.sin((angle - 90) * Math.PI / 180) * radius;

            return (
              <div
                key={prize.id}
                className="absolute text-xs font-bold text-gray-900"
                style={{
                  top: `calc(50% + ${y}px)`,
                  left: `calc(50% + ${x}px)`,
                  transform: `translate(-50%, -50%) rotate(${angle + 22.5}deg)`,
                }}
              >
                {prize.name}
              </div>
            );
          })}
        </div>
      </div>

      {/* Spin Button */}
      <button
        onClick={handleSpin}
        disabled={isSpinning}
        className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed min-w-[200px]"
      >
        {isSpinning ? 'Spinning...' : 'Spin Now'}
      </button>

      {/* Result */}
      {wonPrize && (
        <div className="glass-card p-6 text-center animate-in fade-in duration-500">
          <h3 className="text-2xl font-bold mb-2">🎉 You Won!</h3>
          <p className="text-xl text-accent font-semibold">{wonPrize.name}</p>
          <button className="btn-primary mt-4">
            Claim Prize
          </button>
        </div>
      )}
    </div>
  );
}
