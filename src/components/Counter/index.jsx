import { useState, useEffect } from 'react';
import { Container } from './styles';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('ola');
  }, []);

  function addNumber() {
    setCounter(counter + 1);
  }

  function subNumber() {
    setCounter(counter - 1);
  }

  return (
    <Container height={100}>
      <p>{counter}</p>
      <div>
        <button onClick={addNumber}>+</button>
        <button onClick={subNumber}>-</button>
      </div>
      <div></div>
    </Container>
  );
};

export default Counter;