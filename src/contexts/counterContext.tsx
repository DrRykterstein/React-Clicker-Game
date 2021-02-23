import { useState, createContext, Dispatch, SetStateAction, useEffect } from "react";

// Initialize Aliases for setState/dispatcher types
type counterDispatcher<S> = Dispatch<SetStateAction<S>>;
type normalIncrementDispatcher<S> = Dispatch<SetStateAction<S>>;
type autoIncrementDispatcher<S> = Dispatch<SetStateAction<S>>;

// Define types for state values in context
export type CounterContext = {
  counter: number;
  normalIncrement: number;
  autoIncrement: number;
  setCounter: counterDispatcher<number>;
  setNormalIncrement: normalIncrementDispatcher<number>;
  setAutoIncrement: autoIncrementDispatcher<number>;
  handleIncrement: () => void;
}

// Initialize counter context
export const CounterContext = createContext<CounterContext>({
  counter: 0,
  normalIncrement: 1,
  autoIncrement: 0,
  setCounter: (): void => {},
  setNormalIncrement: (): void => {},
  setAutoIncrement: (): void => {},
  handleIncrement: (): void => {}
});

// Create counter provider component to store context state
export const CounterProvider: React.FC<{}> = ({ children }) => {
  const [counter, setCounter] = useState<number>(0);
  const [normalIncrement, setNormalIncrement] = useState<number>(1);
  const [autoIncrement, setAutoIncrement] = useState<number>(0);

  // Retrieve counter and upgrade data from local storage
  useEffect(() => {
    const data = localStorage.getItem('counter-data');
    
    if (data) {
      setCounter(parseInt(JSON.parse(data).counter));
      setNormalIncrement(parseInt(JSON.parse(data).normalIncrement));
      setAutoIncrement(parseInt(JSON.parse(data).autoIncrement));
    } 
  }, []);

  // Set counter and upgrade data within local storage
  useEffect(() => {
    localStorage.setItem('counter-data', JSON.stringify({
      counter: counter,
      normalIncrement: normalIncrement,
      autoIncrement: autoIncrement
    }));
  });

  // Handle interval for automatic increments
  useEffect(() => {
    if (autoIncrement !== 0) {
      let incrementer = setInterval(() => {
        setCounter(prevCounter => prevCounter + autoIncrement);
      }, 1000);
      return () => clearInterval(incrementer); // Clear interval when useEffect reruns
    } 
  }, [autoIncrement]);

  // Handle normal increment
  const handleIncrement = () => setCounter(counter + normalIncrement);

  return (
    <CounterContext.Provider value={{ 
      counter, normalIncrement, autoIncrement, 
      setCounter, setNormalIncrement, setAutoIncrement, handleIncrement 
    }}>
      {children}
    </CounterContext.Provider>
  );
}