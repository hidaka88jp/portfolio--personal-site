'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

type TechStackContextType = {
  selected: string;
  setSelected: (stack: string) => void;
};

const TechStackContext = createContext<TechStackContextType | undefined>(undefined);

export function TechStackProvider({ children }: { children: ReactNode }) {
  const [selected, setSelected] = useState<string>('');
  return (
    <TechStackContext.Provider value={{ selected, setSelected }}>
      {children}
    </TechStackContext.Provider>
  );
}

export function useTechStack() {
  const context = useContext(TechStackContext);
  if (!context) throw new Error('useTechStack must be used within a TechStackProvider');
  return context;
}
