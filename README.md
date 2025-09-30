# SpinBase - Social Spins on Base

A Base Wallet MiniApp that lets creators and brands launch viral spinning wheels for giveaways, discounts, and on-chain rewards — shareable as Farcaster frames.

## Features

- 🎡 **Interactive Spinning Wheel**: Beautiful, animated wheel with customizable prizes
- 🔗 **On-Chain Rewards**: Trustless prize distribution via smart contracts
- 🔥 **Daily Spin Ritual**: Gamified retention with streak rewards
- 🏆 **Leaderboard System**: Social competition with Spin Points
- 🖼️ **Farcaster Frames**: Share wheels directly in Farcaster feeds
- 💰 **Prize Vault**: Secure smart contract for prize deposits

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (Ethereum L2)
- **Wallet**: OnchainKit + Base Wallet
- **Social**: Farcaster Frames v2
- **Styling**: Tailwind CSS with custom design system
- **Smart Contracts**: Solidity + Chainlink VRF

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Copy environment variables:
```bash
cp .env.local.example .env.local
```

3. Add your API keys to `.env.local`

4. Run development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Design System

The app uses a professional finance-inspired theme:
- **Colors**: Dark navy background with gold accents
- **Typography**: Inter font family
- **Spacing**: Consistent 4px base unit
- **Animations**: Smooth transitions with custom easing

## Architecture

```
app/
├── layout.tsx          # Root layout with providers
├── page.tsx            # Home page with wheel
├── providers.tsx       # OnchainKit provider setup
└── globals.css         # Global styles + design tokens

components/
├── WheelCanvas.tsx     # Main spinning wheel component
├── DailySpinCard.tsx   # Daily spin streak tracker
├── LeaderboardPreview.tsx  # Top spinners list
└── WalletConnect.tsx   # Wallet connection UI

lib/
├── types.ts            # TypeScript interfaces
└── constants.ts        # App constants
```

## Key Components

### WheelCanvas
The main spinning wheel with:
- 7 prize slices with custom colors
- Smooth 3-second spin animation
- Prize probability system
- Win state with claim button

### DailySpinCard
Tracks user engagement:
- Current streak count
- Next spin availability
- Progress toward VIP wheel unlock

### LeaderboardPreview
Social competition:
- Top 5 spinners
- Spin Points ranking
- User avatars and stats

## Smart Contracts

### Prize Vault
- Holds ETH, USDC, and NFTs
- Chainlink VRF for provably fair spins
- Automated prize distribution
- Fraud detection and rate limiting

## Farcaster Integration

Wheels can be shared as Farcaster frames:
- One-click spin in-feed
- Auto-post results as casts
- Frame signature verification
- Social virality loop

## Deployment

Deploy to Vercel:
```bash
npm run build
vercel deploy
```

## License

MIT
