import { useContext } from "react";
import { CounterContext } from '../contexts/counterContext';

// Initialize interface to pass Props
interface Props {
  clicker: string;
}

const Clicker: React.FC<Props> = ({ clicker }) => {
  const counterContext = useContext(CounterContext);
  const { handleIncrement } = counterContext;

  return (
    <section className="clicker-container">
      <div className="position-center">
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