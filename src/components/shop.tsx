import { useContext } from 'react';
import { CounterContext } from '../contexts/counterContext';
import { CostsContext } from '../contexts/costsContext';

const Shop: React.FC = () => {
  // Initialize state variables from context
  const counterContext = useContext(CounterContext);
  const costsContext = useContext(CostsContext);
  
  const { counter, setCounter, upgrade, setUpgrade } = counterContext;
  const { costs, setCosts } = costsContext;

  // Handle upgrades for each tier
  const upgradesClickHandler = (e: any) => {
    const upgradeValue = e.target.textContent;

    if (e.target.textContent[0] === '+') {
      let { one, three, five, ten, twenty, thirty } = costs.normal;

      // Switch between different upgrade options
      switch(true) {
        case upgradeValue === '+1':
          if (counter >= 100) {
            setCosts((prevCosts: any) => ({
              ...prevCosts, // Merge cloned object with edited section of object
              normal: {
                ...prevCosts.normal, // Merge cloned object with edited key-value pair
                one: Math.round(one * 1.1)
              }
            }));
            setUpgrade(upgrade + 1);
            setCounter(counter - one);
          } 
          break;

        case upgradeValue === '+3':
          if (counter >= 300) {
            setCosts((prevCosts: any) => ({
              ...prevCosts,
              normal: {
                ...prevCosts.normal,
                three: Math.round(three * 1.1)
              }
            }));
            setUpgrade(upgrade + 3);
            setCounter(counter - three);
          } 
          break;

        case upgradeValue === '+5':
          if (counter >= 500) {
            setCosts((prevCosts: any) => ({
              ...prevCosts,
              normal: {
                ...prevCosts.normal,
                five: Math.round(five * 1.1)
              }
            }));
            setUpgrade(upgrade + 5);
            setCounter(counter - five);
          } 
          break;

        case upgradeValue === '+10':
          if (counter >= 1000) {
            setCosts((prevCosts: any) => ({
              ...prevCosts,
              normal: {
                ...prevCosts.normal,
                ten: Math.round(ten * 1.1)
              }
            }));
            setUpgrade(upgrade + 10);
            setCounter(counter - ten);
          } 
          break;

        case upgradeValue === '+20':
          if (counter >= 2000) {
            setCosts((prevCosts: any) => ({
              ...prevCosts,
              normal: {
                ...prevCosts.normal,
                twenty: Math.round(twenty * 1.1)
              }
            }));
            setUpgrade(upgrade + 20);
            setCounter(counter - twenty);
          } 
          break;

        case upgradeValue === '+30':
          if (counter >= 3000) {
            setCosts((prevCosts: any) => ({
              ...prevCosts,
              normal: {
                ...prevCosts.normal,
                thirty: Math.round(thirty * 1.1)
              }
            }));
            setUpgrade(upgrade + 30);
            setCounter(counter - thirty);
          } 
          break;
      }
    } 
    else if (e.target.textContent[0] === '^') {
      let { one, three, five, ten, twentyFive, fifty, hundred, fiveHundred, thousand } = costs.auto;

      switch(true) {
        case upgradeValue === '^1':
          if (counter >= 10000) {
            setCosts((prevCosts: any) => ({
              ...prevCosts,
              auto: {
                ...prevCosts.auto,
                one: Math.round(one * 1.1)
              }
            }));
            one && setCounter(counter - one);
            setInterval(() => {
              setCounter(prevCounter => prevCounter + 1);
            }, 800);
          }
          break;
        
        case upgradeValue === '^3':
          if (counter >= 30000) {
            setCosts((prevCosts: any) => ({
              ...prevCosts,
              auto: {
                ...prevCosts.auto,
                three: Math.round(three * 1.1)
              }
            }));
            three && setCounter(counter - three);
            setInterval(() => {
              setCounter(prevCounter => prevCounter + 3);
            }, 800);
          }
          break;

        case upgradeValue === '^5':
          if (counter >= 50000) {
            setCosts((prevCosts: any) => ({
              ...prevCosts,
              auto: {
                ...prevCosts.auto,
                five: Math.round(five * 1.1)
              }
            }));
            five && setCounter(counter - five);
            setInterval(() => {
              setCounter(prevCounter => prevCounter + 5);
            }, 800);
          }
          break;

        case upgradeValue === '^10':
          if (counter >= 100000) {
            setCosts((prevCosts: any) => ({
              ...prevCosts,
              auto: {
                ...prevCosts.auto,
                ten: Math.round(ten * 1.1)
              }
            }));
            ten && setCounter(counter - ten);
            setInterval(() => {
              setCounter(prevCounter => prevCounter + 10);
            }, 800);
          }
          break;

        case upgradeValue === '^25':
          if (counter >= 250000) {
            setCosts((prevCosts: any) => ({
              ...prevCosts,
              auto: {
                ...prevCosts.auto,
                twentyFive: Math.round(twentyFive * 1.1)
              }
            }));
            twentyFive && setCounter(counter - twentyFive);
            setInterval(() => {
              setCounter(prevCounter => prevCounter + 25);
            }, 800);
          }
          break;

        case upgradeValue === '^50':
          if (counter >= 500000) {
            setCosts((prevCosts: any) => ({
              ...prevCosts,
              auto: {
                ...prevCosts.auto,
                fifty: Math.round(fifty * 1.1)
              }
            }));
            fifty && setCounter(counter - fifty);     
            setInterval(() => {
              setCounter(prevCounter => prevCounter + 50);
            }, 800);
          }
          break;

        case upgradeValue === '^100':
          if (counter >= 1000000) {
            setCosts((prevCosts: any) => ({
              ...prevCosts,
              auto: {
                ...prevCosts.auto,
                hundred: Math.round(hundred * 1.1)
              }
            }));
            hundred && setCounter(counter - hundred);
            setInterval(() => {
              setCounter(prevCounter => prevCounter + 100);
            }, 800);
          }
          break;

        case upgradeValue === '^500':
          if (counter >= 5000000) {
            setCosts((prevCosts: any) => ({
              ...prevCosts,
              auto: {
                ...prevCosts.auto,
                fiveHundred: Math.round(fiveHundred * 1.1)
              }
            }));
            fiveHundred && setCounter(counter - fiveHundred);
            setInterval(() => {
              setCounter(prevCounter => prevCounter + 500);
            }, 800);
          }
          break;

        case upgradeValue === '^1000':
          if (counter >= 10000000) {
            setCosts((prevCosts: any) => ({
              ...prevCosts,
              auto: {
                ...prevCosts.auto,
                thousand: Math.round(thousand * 1.1)
              }
            }));
            thousand && setCounter(counter - thousand);
            setInterval(() => {
              setCounter(prevCounter => prevCounter + 1000);
            }, 800);
          }
          break;
      }
    }
  }

  return (
    <section 
      className="shop-container"
      onClick={(e) => upgradesClickHandler(e)}
    >
      <div className="shop-tier tier-one">
        <h1>Tier One</h1>
        <div className="shop-tier-upgrades tier-one-upgrades">
          <p>+1</p>
          <p>+3</p>
          <p>+5</p>
        </div>
      </div>
      <div className="shop-tier tier tier-two">
        <h1>Tier Two</h1>
        <div className="shop-tier-upgrades tier-two-upgrades">
          <p>+10</p>
          <p>+20</p>
          <p>+30</p>
        </div>
      </div>
      <div className="shop-tier tier-three">
        <h1>Tier Three</h1>
        <div className="shop-tier-upgrades tier-three-upgrades">
          <p>^1</p>
          <p>^3</p>
          <p>^5</p>
        </div>
      </div>
      <div className="shop-tier tier-four">
        <h1>Tier Four</h1>
        <div className="shop-tier-upgrades tier-four-upgrades">
          <p>^10</p>
          <p>^25</p>
          <p>^50</p>
        </div>
      </div>
      <div className="shop-tier tier-five">
        <h1>Tier Five</h1>
        <div className="shop-tier-upgrades tier-five-upgrades">
          <p>^100</p>
          <p>^500</p>
          <p>^1000</p>
        </div>
      </div>
    </section>
  );
}

export default Shop;
