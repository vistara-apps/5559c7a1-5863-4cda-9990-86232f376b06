'use client';

import { ConnectWallet, Wallet } from '@coinbase/onchainkit/wallet';
import { Name, Avatar } from '@coinbase/onchainkit/identity';

export function WalletConnect() {
  return (
    <Wallet>
      <ConnectWallet>
        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface border border-border hover:bg-opacity-80 transition-all duration-200">
          <Avatar className="w-6 h-6" />
          <Name className="text-sm font-medium" />
        </div>
      </ConnectWallet>
    </Wallet>
  );
}
