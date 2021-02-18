import { useContext } from 'react';
import { CostsContext } from '../contexts/costsContext';

const Costs: React.FC = () => {
  // Initialize state variables from context
  const costsContext = useContext(CostsContext);
  const { normal } = costsContext.costs;
  const { auto } = costsContext.costs;

  return (
    <section className="costs-container">
      <h2 className="costs-title">Costs</h2>
      <div className="costs-child-container costs-normal-container">     
        <span className="costs-item costs-item-one"><h4>+1:</h4><p>{normal.one}</p></span>
        <span className="costs-item costs-item-one"><h4>+3:</h4><p>{normal.three}</p></span>
        <span className="costs-item costs-item-one"><h4>+5:</h4><p>{normal.five}</p></span>
        <span className="costs-item costs-item-two"><h4>+10:</h4><p>{normal.ten}</p></span>
        <span className="costs-item costs-item-two"><h4>+20:</h4><p>{normal.twenty}</p></span>
        <span className="costs-item costs-item-two"><h4>+30:</h4><p>{normal.thirty}</p></span>
      </div>
      <div className="costs-child-container costs-auto-container">
        <span className="costs-item costs-item-three"><h4>^1:</h4><p>{auto.one}</p></span>
        <span className="costs-item costs-item-three"><h4>^3:</h4><p>{auto.three}</p></span>
        <span className="costs-item costs-item-three"><h4>^5:</h4><p>{auto.five}</p></span>
        <span className="costs-item costs-item-four"><h4>^10:</h4><p>{auto.ten}</p></span>
        <span className="costs-item costs-item-four"><h4>^25:</h4><p>{auto.twentyFive}</p></span>
        <span className="costs-item costs-item-four"><h4>^50:</h4><p>{auto.fifty}</p></span>
        <span className="costs-item costs-item-five"><h4>^100:</h4><p>{auto.hundred}</p></span>
        <span className="costs-item costs-item-five"><h4>^500:</h4><p>{auto.fiveHundred}</p></span>
        <span className="costs-item costs-item-five"><h4>^1000:</h4><p>{auto.thousand}</p></span>
      </div>
    </section>
  );
}

export default Costs;