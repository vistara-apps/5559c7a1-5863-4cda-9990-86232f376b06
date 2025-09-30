export interface Wheel {
  id: string;
  creatorFid: string;
  creatorAddress: string;
  name: string;
  description: string;
  prizes: Prize[];
  spinCost: string;
  maxSpins: number | null;
  vaultAddress: string;
  frameImageUrl: string;
  embedCode: string;
  isActive: boolean;
  createdAt: Date;
}

export interface Prize {
  id: string;
  wheelId: string;
  type: 'discount' | 'nft' | 'token' | 'physical';
  name: string;
  description: string;
  value: string;
  probability: number;
  inventoryCount: number | null;
  claimedCount: number;
  imageUrl: string;
}

export interface Spin {
  id: string;
  wheelId: string;
  userFid: string;
  userAddress: string;
  prizeWon: Prize;
  txHash: string;
  timestamp: Date;
  shareUrl: string;
}

export interface User {
  fid: string;
  address: string;
  username: string;
  pfpUrl: string;
  spinPoints: number;
  dailyStreakCount: number;
  lastSpinDate: Date;
  notificationsEnabled: boolean;
}

export interface Vault {
  address: string;
  wheelId: string;
  depositedAssets: Asset[];
  vrfSubscriptionId: number;
  totalClaimed: string;
  isLocked: boolean;
}

export interface Asset {
  type: 'eth' | 'erc20' | 'erc721';
  address?: string;
  amount: string;
  tokenId?: string;
}
