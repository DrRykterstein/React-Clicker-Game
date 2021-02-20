import { useContext } from 'react';
import { CounterContext } from '../contexts/counterContext';
import { UpgradesContext } from '../contexts/upgradesContext';

const Shop: React.FC = () => {
  // Initialize state variables from context
  const counterContext = useContext(CounterContext);
  const upgradesContext = useContext(UpgradesContext);

  const { counter, setCounter, normalIncrement, setNormalIncrement, autoIncrement, setAutoIncrement } = counterContext;
  const { upgrades, setUpgrades } = upgradesContext;

  // Handle upgrades for each tier
  const upgradesClickHandler = (e: any) => {
    // Initialize current target element and upgrade name
    const el = e.target.tagName === 'SPAN' ? e.target : e.target.parentElement;
    const upgradeName = el.getAttribute("data-upgrade");

    if (el.tagName === 'SPAN') {
      if (el.parentElement.classList.contains("shop-normal-container")) {
        const { normal } = upgrades;
        
        if (counter >= normal[upgradeName].amount) {  
          // Update normal increment and counter
          setNormalIncrement(normalIncrement + parseInt(normal[upgradeName].name.slice(1)));
          setCounter(counter - normal[upgradeName].amount);
    
          // Update normal upgrade cost amounts
          let clonedUpgrades = { ...upgrades };
          clonedUpgrades.normal[upgradeName].amount = Math.round(normal[upgradeName].amount * 1.1);
          setUpgrades(clonedUpgrades);
        }
      } else {
        const { auto } = upgrades;
    
        if (counter >= auto[upgradeName].amount) {
          // Update auto increment and counter
          setAutoIncrement(autoIncrement + parseInt(auto[upgradeName].name.slice(1)));
          setCounter(counter - auto[upgradeName].amount);
    
          // Update auto upgrade cost amounts
          let clonedUpgrades = { ...upgrades };
          clonedUpgrades.auto[upgradeName].amount = Math.round(auto[upgradeName].amount * 1.2);
          setUpgrades(clonedUpgrades);
        }
      }  
    }
  }

  return (
    <section className="shop-container" onClick={upgradesClickHandler}>
      {/* Map over upgrades and render each shop upgrade programmatically */}
      {Object.keys(upgrades).map((upgradeType, typeIdx) => (
        <div 
          key={typeIdx}
          className={`shop-inner-container shop-${upgradeType}-container`}>
          {Object.keys(upgrades[upgradeType]).map((upgrade, idx) => (
            <span 
              key={idx} 
              data-upgrade={upgrade}
              className={`shop-upgrade shop-upgrade-${Math.floor(idx / 3 + (typeIdx * 2))}`}>
              <h4>{upgrades[upgradeType][upgrade].name}:</h4>
              <p>{upgrades[upgradeType][upgrade].amount}</p>
            </span>
          ))}
        </div>
      ))}
    </section>
  );
}

export default Shop;