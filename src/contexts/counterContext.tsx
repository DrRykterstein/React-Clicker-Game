import { useState, createContext, Dispatch, SetStateAction, useEffect } from "react";

// Initialize Alias' for set state types
type counterDispatcher<S> = Dispatch<SetStateAction<S>>;
type upgradeDispatcher<S> = Dispatch<SetStateAction<S>>;

// Define types for state values in context
export type CounterContext = {
  counter: number;
  upgrade: number;
  setCounter: counterDispatcher<number>;
  setUpgrade: upgradeDispatcher<number>;
  handleIncrement: () => void;
}

// Initialize counter context
export const CounterContext = createContext<CounterContext>({
  counter: 0,
  upgrade: 1,
  setCounter: (): void => {},
  setUpgrade: (): void => {},
  handleIncrement: (): void => {}
});

// Create counter provider component to store context state
export const CounterProvider: React.FC<{}> = ({ children }) => {
  const [counter, setCounter] = useState<number>(0);
  const [upgrade, setUpgrade] = useState<number>(1);

  // Retrieve counter and upgrade data from local storage
  useEffect(() => {
    const data = localStorage.getItem('counter-data');
    
    if (data) {
      setCounter(parseInt(JSON.parse(data).counter));
      setUpgrade(parseInt(JSON.parse(data).upgrade));
    } 
  }, []);

  // Set counter and upgrade data within local storage
  useEffect(() => {
    localStorage.setItem('counter-data', JSON.stringify({
      counter: counter,
      upgrade: upgrade
    }));
  });

  const handleIncrement = () => setCounter(counter + upgrade);

  return (
    <CounterContext.Provider value={{ counter, upgrade, setCounter, setUpgrade, handleIncrement }}>
      {children}
    </CounterContext.Provider>
  );
}