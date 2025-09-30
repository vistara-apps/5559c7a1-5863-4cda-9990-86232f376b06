'use client';

import { useState } from 'react';
import { Zap } from 'lucide-react';

interface Prize {
  id: string;
  name: string;
  color: string;
  probability: number;
}

const PRIZES: Prize[] = [
  { id: '1', name: '0.01 ETH', color: 'hsl(45, 100%, 50%)', probability: 0.05 },
  { id: '2', name: '10% Off', color: 'hsl(220, 70%, 50%)', probability: 0.2 },
  { id: '3', name: 'Free NFT', color: 'hsl(280, 70%, 50%)', probability: 0.1 },
  { id: '4', name: '5 USDC', color: 'hsl(142, 76%, 36%)', probability: 0.15 },
  { id: '5', name: 'Try Again', color: 'hsl(0, 0%, 30%)', probability: 0.3 },
  { id: '6', name: '20% Off', color: 'hsl(38, 92%, 50%)', probability: 0.15 },
  { id: '7', name: 'VIP Access', color: 'hsl(320, 70%, 50%)', probability: 0.05 },
];

export function WheelCanvas() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [wonPrize, setWonPrize] = useState<Prize | null>(null);

  const handleSpin = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    setWonPrize(null);
    
    // Simulate random prize selection
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
    const sliceAngle = 360 / PRIZES.length;
    const targetRotation = 1800 + (prizeIndex * sliceAngle) + (sliceAngle / 2);
    
    setRotation(targetRotation);
    
    setTimeout(() => {
      setIsSpinning(false);
      setWonPrize(selectedPrize);
    }, 3000);
  };

  return (
    <div className="space-y-6">
      {/* Wheel */}
      <div className="wheel-container">
        <div 
          className="relative w-80 h-80 mx-auto rounded-full border-4 border-accent transition-transform duration-[3000ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]"
          style={{ 
            transform: `rotate(${rotation}deg)`,
            background: `conic-gradient(${PRIZES.map((prize, i) => {
              const start = (i / PRIZES.length) * 360;
              const end = ((i + 1) / PRIZES.length) * 360;
              return `${prize.color} ${start}deg ${end}deg`;
            }).join(', ')})`,
          }}
        >
          {/* Prize labels */}
          {PRIZES.map((prize, i) => {
            const angle = (i / PRIZES.length) * 360 + (360 / PRIZES.length / 2);
            return (
              <div
                key={prize.id}
                className="absolute top-1/2 left-1/2 origin-left text-xs font-bold text-white"
                style={{
                  transform: `rotate(${angle}deg) translateX(80px)`,
                }}
              >
                {prize.name}
              </div>
            );
          })}
          
          {/* Center button */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-bg border-4 border-accent flex items-center justify-center">
            <Zap className="w-8 h-8 text-accent" />
          </div>
        </div>
        
        {/* Pointer */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-0 h-0 border-l-[12px] border-r-[12px] border-t-[20px] border-l-transparent border-r-transparent border-t-accent" />
      </div>

      {/* Spin Button */}
      <button
        onClick={handleSpin}
        disabled={isSpinning}
        className="btn-primary w-full text-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSpinning ? 'Spinning...' : 'Spin Now'}
      </button>

      {/* Result */}
      {wonPrize && (
        <div className="glass-card p-6 rounded-lg text-center animate-pulse-glow">
          <h4 className="text-2xl font-bold text-accent mb-2">You Won!</h4>
          <p className="text-xl mb-4">{wonPrize.name}</p>
          <button className="btn-secondary w-full">
            Claim Prize
          </button>
        </div>
      )}
    </div>
  );
}
