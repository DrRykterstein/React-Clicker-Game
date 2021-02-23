import { useState, useEffect, useContext } from "react";
import { CounterContext } from '../contexts/counterContext';

// Initialize interface to pass Props
interface Props {
  clicker: string;
}

const Clicker: React.FC<Props> = ({ clicker }) => {
  const counterContext = useContext(CounterContext);
  const { 
    normalIncrement, autoIncrement, setNormalIncrement, setAutoIncrement, handleIncrement 
  } = counterContext;

  const [bitten, setBitten] = useState(false); // Initialize state variable to keep track of when bites occur
  
  // Initiate random chance that either normal or auto increment is reduced by 1% - 10% to signify being bitten
  useEffect(() => {
    if (normalIncrement > 20 && autoIncrement > 20) {
      let randomNum = Math.floor(Math.random() * 4000);
      let randomPercentage = Math.ceil(Math.random() * 5) / 100;

      if (randomNum == 0) {
        setNormalIncrement(normalIncrement - Math.round(normalIncrement * randomPercentage));
        setAutoIncrement(autoIncrement - Math.round(autoIncrement * randomPercentage)); 

        // Trigger bitten-show class temporarily
        setBitten(true);
        setTimeout(() => setBitten(false), 5000); 
      } 
    }
  });

  return (
    <section className="clicker-container">
      <div className="position-center">
        <h1 className={`bitten-hidden ${bitten && 'bitten-show'}`}>You were bitten!</h1>
        <img
          className="clicker-image" 
          src={clicker}
          alt="Loading image..."
          onClick={handleIncrement}
        />
      </div>
    </section>
  );
}

export default Clicker;