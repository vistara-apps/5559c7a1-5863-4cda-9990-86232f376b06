export const SPIN_COST_FREE = '0';
export const SPIN_COST_PAID = '10000000000000000'; // 0.01 ETH

export const PRIZE_TYPES = {
  DISCOUNT: 'discount',
  NFT: 'nft',
  TOKEN: 'token',
  PHYSICAL: 'physical',
} as const;

export const STREAK_MILESTONES = [3, 7, 14, 30];

export const VIP_WHEEL_UNLOCK_STREAK = 7;

export const LEADERBOARD_PAGE_SIZE = 50;

export const FRAME_IMAGE_WIDTH = 1200;
export const FRAME_IMAGE_HEIGHT = 630;

export const BASE_CHAIN_ID = 8453;
export const BASE_SEPOLIA_CHAIN_ID = 84532;

export const NOTIFICATION_TIMES = {
  DAILY_SPIN: '09:00',
  STREAK_REMINDER: '20:00',
};
