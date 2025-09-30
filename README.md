# SpinBase - Social Spins That Reward Your Community

A Base Wallet MiniApp that lets creators and brands launch viral spinning wheels for giveaways, discounts, and on-chain rewards — shareable as Farcaster frames.

## Features

- 🎯 **Farcaster Frame Wheels** - One-click shareable spinning wheels as interactive frames
- 🔒 **On-Chain Prize Vault** - Trustless, transparent rewards with VRF fairness
- 🔥 **Daily Spin Ritual** - Gamified retention with streak rewards
- 🏆 **Social Leaderboard** - Reward your best advocates with Spin Points
- ⚡ **White-Label SDK** - Plug-and-play React component for developers

## Tech Stack

- **Next.js 15** with App Router
- **React 19** (required for OnchainKit)
- **OnchainKit** for Base integration
- **Wagmi & Viem** for blockchain interactions
- **Tailwind CSS** for styling
- **TypeScript** for type safety

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Copy `.env.local.example` to `.env.local` and add your API keys:
```bash
cp .env.local.example .env.local
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Environment Variables

- `NEXT_PUBLIC_ONCHAINKIT_API_KEY` - Get from [Coinbase Developer Platform](https://portal.cdp.coinbase.com/)
- `NEXT_PUBLIC_NEYNAR_API_KEY` - Get from [Neynar](https://neynar.com/)
- `NEXT_PUBLIC_BASE_RPC_URL` - Base network RPC URL

## Architecture

```
app/
├── components/          # React components
│   ├── Header.tsx      # Navigation with wallet connect
│   ├── WheelCanvas.tsx # Interactive spinning wheel
│   ├── StatsGrid.tsx   # Platform statistics
│   ├── Leaderboard.tsx # User rankings
│   └── CreateWheelButton.tsx # Wheel creation modal
├── layout.tsx          # Root layout with providers
├── page.tsx            # Home page
├── providers.tsx       # OnchainKit provider setup
└── globals.css         # Global styles with theme
```

## Design System

**Theme: Professional Finance (Wall Street meets Crypto)**
- Background: Dark navy (#0a1628)
- Accent: Gold (#ffd700)
- Surface: Deep blue (#132337)
- Border: Navy blue (#1e3a5f)

## Deployment

Deploy to Vercel:

```bash
npm run build
```

## License

MIT
