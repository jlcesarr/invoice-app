import { createContext, ReactNode } from 'react';

type FieldContextValue = {
  onChange: (value: string) => void;
  currentValue: any;
};

interface FieldProviderProps {
  children: ReactNode;
  value: FieldContextValue;
}

export const FieldContext = createContext({} as FieldContextValue);

function FieldProvider({ children, value }: FieldProviderProps) {
  return (
    <FieldContext.Provider value={value}>{children}</FieldContext.Provider>
  );
}

export { FieldProvider };
