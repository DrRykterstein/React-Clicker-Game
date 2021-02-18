import { useState, useEffect, createContext, Dispatch, SetStateAction } from "react";

// Initialize an alias for dispatcher/setState type
type costsDispatcher<S> = Dispatch<SetStateAction<S>>

// Define types for state within context
export type CostsContext = {
  costs: any;
  defaultCosts: object;
  setCosts: costsDispatcher<any>;
}

// Initialize costs context
export const CostsContext = createContext<CostsContext>({
  costs: {},
  defaultCosts: {},
  setCosts: () => {},
});

export const CostsProvider: React.FC<{}> = ({ children }) => {
  // Initialize state variable to store incurring costs
  const [costs, setCosts] = useState<object>({
    normal: {
      one: 99,
      three: 299,
      five: 499,
      ten: 999,
      twenty: 1999,
      thirty: 2999
    },
    auto: {
      one: 999,
      three: 2999,
      five: 4999,
      ten: 9999,
      twentyFive: 24999,
      fifty: 49999,
      hundred: 99999,
      fiveHundred: 499999,
      thousand: 999999
    }
  });

  const [defaultCosts] = useState({ ...costs }); // Initialize default costs

  // Retrieve costs and intervals from local storage
  useEffect(() => {
    const data = localStorage.getItem('costs-data');

    if (data) {
      setCosts(JSON.parse(data));
    }
  }, []);

  // Set costs and intervals within local storage
  useEffect(() => {
    localStorage.setItem('costs-data', JSON.stringify(costs));
  });

  return (
    <CostsContext.Provider value={{ costs, defaultCosts, setCosts }}>
      {children}
    </CostsContext.Provider>
  );
}
