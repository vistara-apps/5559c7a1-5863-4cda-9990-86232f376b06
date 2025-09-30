'use client';

import { Plus } from 'lucide-react';
import { useState } from 'react';

export function CreateWheelButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="btn-primary flex items-center gap-2"
      >
        <Plus className="w-5 h-5" />
        Create Wheel
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="glass-card p-6 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Create Your Wheel</h2>
            <p className="text-muted mb-6">
              Launch a viral spinning wheel in 60 seconds. Connect your wallet to get started.
            </p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Wheel Name</label>
                <input
                  type="text"
                  placeholder="My Awesome Giveaway"
                  className="w-full px-4 py-2 rounded-lg bg-surface border border-border focus:border-accent outline-none transition-colors duration-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Prize Pool (ETH)</label>
                <input
                  type="number"
                  placeholder="0.05"
                  step="0.01"
                  className="w-full px-4 py-2 rounded-lg bg-surface border border-border focus:border-accent outline-none transition-colors duration-200"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button 
                  onClick={() => setIsOpen(false)}
                  className="btn-secondary flex-1"
                >
                  Cancel
                </button>
                <button className="btn-primary flex-1">
                  Create & Deploy
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
