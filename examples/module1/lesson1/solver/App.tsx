import { useState } from 'react';
import { add, sub, multiply, divide } from './functions';
import { Button } from './Button';
import { Input } from './Input';

const App = () => {
  const [numA, setNumA] = useState<number>(0);
  const [numB, setNumB] = useState<number>(0);
  const [numC, setNumC] = useState<number | string>(0);

  const doWork = (func: (a: number, b: number) => number | string) => {
    setNumC(func(numA, numB));
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <Input
          type="number"
          value={numA}
          onChange={(e) => setNumA(parseFloat(e.target.value))}
        />

        <Input
          type="number"
          value={numB}
          onChange={(e) => setNumB(parseFloat(e.target.value))}
        />
      </div>
      <div className="grid grid-cols-4 gap-x-4 my-4">
        <Button onClick={() => doWork(add)} text="+" />
        <Button onClick={() => doWork(sub)} text="-" />
        <Button onClick={() => doWork(multiply)} text="*" />
        <Button onClick={() => doWork(divide)} text="/" />
      </div>
      <div>Result: {numC}</div>
    </div>
  );
};

export default App;
