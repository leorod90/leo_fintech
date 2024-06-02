import zustand, { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'

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
      storage: createJSONStorage(() => sessionStorage),
    },
  )
)
