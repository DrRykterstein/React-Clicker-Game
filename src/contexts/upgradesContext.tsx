import { useState, useEffect, createContext, Dispatch, SetStateAction } from "react";

// Initialize an aliases for dispatcher/setState types
type upgradesDispatcher<S> = Dispatch<SetStateAction<S>>
type resetUpgradesDispatcher<S> = Dispatch<SetStateAction<S>>

// Define types for state within context
export type UpgradesContext = {
  upgrades: any;
  resetUpgradesAmount: number;
  setUpgrades: upgradesDispatcher<any>;
  setResetUpgradesAmount: resetUpgradesDispatcher<any>
}

// Initialize costs context
export const UpgradesContext = createContext<UpgradesContext>({
  upgrades: {},
  resetUpgradesAmount: 0,
  setUpgrades: () => {},
  setResetUpgradesAmount: () => {}
});

export const UpgradesProvider: React.FC<{}> = ({ children }) => {
  // Initialize state variable to store incurring costs
  const [upgrades, setUpgrades] = useState<object>({
    normal:  { 
      one: { name: "+1", amount: 100 },
      two: { name: "+2", amount: 250 },
      three: { name: "+3", amount: 500 },
      five: { name: "+5", amount: 1000 },
      ten: { name: "+10", amount: 5000 },
      fifteen: { name: "+15", amount: 10000 },
      twenty: { name: "+20", amount: 50000 },
      thirty: { name: "+30", amount: 100000 },
      fourty: { name: "+40", amount: 500000 },
      fifty: { name: "+50", amount: 1000000 },
      seventyFive: { name: "+75", amount: 5000000 },
      hundred: { name: "+100", amount: 10000000 }
    },
    auto: {
      one: { name: "^1", amount: 10000 },
      three: { name: "^3", amount: 25000 },
      five: { name: "^5", amount: 50000 },
      ten: { name: "^10", amount: 100000 },
      twentyFive: { name: "^25", amount: 500000 },
      fifty: { name: "^50", amount: 1000000 },
      hundred: { name: "^100", amount: 5000000 },
      twoHundredFifty: { name: "^500", amount: 10000000 },
      fiveHundred: { name: "^1000", amount: 50000000 },
      thousand: { name: "^2500", amount: 100000000 },
      fiveThousand: { name: "^5000", amount: 500000000 },
      tenThousand: { name: "^10000", amount: 1000000000 }
    }
  });

  // Initialize amount required to reset upgrade amounts
  const [resetUpgradesAmount, setResetUpgradesAmount] = useState<number>(100000000);

  // Retrieve upgrades and intervals from local storage
  useEffect(() => {
    const data = localStorage.getItem('upgrades-data');

    if (data) {
      setUpgrades(JSON.parse(data).upgrades);
      setResetUpgradesAmount(parseInt(JSON.parse(data).resetUpgradesAmount));
    }
  }, []);

  // Set upgrades and intervals within local storage
  useEffect(() => {
    localStorage.setItem('upgrades-data', JSON.stringify({
      upgrades: upgrades,
      resetUpgradesAmount: resetUpgradesAmount
    }));
  });

  return (
    <UpgradesContext.Provider value={{ 
      upgrades, resetUpgradesAmount, setUpgrades, setResetUpgradesAmount 
    }}>
      {children}
    </UpgradesContext.Provider>
  );
}
