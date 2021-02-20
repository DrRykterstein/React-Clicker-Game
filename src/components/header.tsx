import { useContext } from 'react';
import { CounterContext } from '../contexts/counterContext';
import { UpgradesContext } from '../contexts/upgradesContext';

const Header: React.FC = () => {
  // Initialize state variables from context
  const counterContext = useContext(CounterContext);
  const upgradesContext = useContext(UpgradesContext);

  const { counter, setCounter } = counterContext;
  const { resetUpgradesAmount, setUpgrades, setResetUpgradesAmount } = upgradesContext;

  // Reverts upgrades object back to its initial state
  const handleCostsReset = () => {
    if (counter >= resetUpgradesAmount) {
      setUpgrades({
        normal:  { 
          one: { name: "+1", amount: 100 },
          two: { name: "+2", amount: 300 },
          three: { name: "+3", amount: 600 },
          five: { name: "+5", amount: 1000 },
          ten: { name: "+10", amount: 3000 },
          fifteen: { name: "+15", amount: 6000 },
          twenty: { name: "+20", amount: 10000 },
          thirty: { name: "+30", amount: 30000 },
          fourty: { name: "+40", amount: 60000 },
          fifty: { name: "+50", amount: 100000 },
          seventyFive: { name: "+75", amount: 500000 },
          hundred: { name: "+100", amount: 1000000 }
        },
        auto: {
          one: { name: "^1", amount: 10000 },
          three: { name: "^3", amount: 50000 },
          five: { name: "^5", amount: 100000 },
          ten: { name: "^10", amount: 250000 },
          twentyFive: { name: "^25", amount: 500000 },
          fifty: { name: "^50", amount: 1000000 },
          hundred: { name: "^100", amount: 2500000 },
          twoHundredFifty: { name: "^500", amount: 5000000 },
          fiveHundred: { name: "^1000", amount: 10000000 },
          thousand: { name: "^2500", amount: 25000000 },
          fiveThousand: { name: "^5000", amount: 50000000 },
          tenThousand: { name: "^10000", amount: 100000000 }
        }
      });
      setCounter(counter - resetUpgradesAmount);
      setResetUpgradesAmount(Math.round(resetUpgradesAmount * 2)) // Increase amount required to reset amounts
    }
  }

  return (
    <header className="header">
      <div className="reset-container">
        <button 
          className="btn reset-btn" 
          onClick={handleCostsReset}
        >
          Reset Costs
        </button>
      </div>
      <div className="counter-container">
        <h1 className="main-title">Clicker Game</h1>
        <button className="btn counter-btn">{counter}</button>
      </div>
    </header>
  );
}

export default Header;