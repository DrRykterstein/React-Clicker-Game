import { useContext } from 'react';
import { CounterContext } from '../contexts/counterContext';
import { CostsContext } from '../contexts/costsContext';

const Header: React.FC = () => {
  // Initialize state variables from context
  const counterContext = useContext(CounterContext);
  const costsContext = useContext(CostsContext);

  const { counter, setCounter } = counterContext;
  const { defaultCosts, setCosts } = costsContext;

  // Resets costs object back to its default state
  const handleCostsReset = () => {
    if (counter >= 10000000) {
      setCosts(defaultCosts);
      setCounter(counter - 10000000);
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