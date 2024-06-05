import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { MMKV } from 'react-native-mmkv';
import { StateStorage } from 'zustand/middleware'

const storage = new MMKV({
  id: 'balance-storage'
})

export const zustandStorage: StateStorage = {
  setItem: (name, value) => {
    return storage.set(name, value)
  },
  getItem: (name) => {
    const value = storage.getString(name)
    return value ?? null
  },
  removeItem: (name) => {
    return storage.delete(name)
  },
}

export interface Transaction {
  id: string;
  amount: number;
  date: Date;
  title: string;
}

export interface BalanceState {
  transactions: Array<Transaction>;
  runTransactions: (transaction: Transaction) => void;
  balance: () => number;
  clearTransaction: () => void;
}

export const useBalanceStore = create(
  persist<BalanceState>(
    (set, get) => ({
      transactions: [],
      runTransactions: (transaction: Transaction) => {
        set((state: BalanceState) => ({ transactions: [transaction, ...state.transactions] }))
      },
      balance: () => get().transactions.reduce((acc, t) => acc + t.amount, 0),
      clearTransaction: () => {
        set({ transactions: [] })
      }
    }),
    {
      name: 'balance',
      storage: createJSONStorage(() => zustandStorage),
    },
  )
)
