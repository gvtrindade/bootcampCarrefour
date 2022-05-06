import Counter from '../Counter/Counter';
import IfoodCounter from '../IfoodCounter/IfoodCounter';
import SmartCounter from '../SmartCounter/SmartCounter';
import './App.css';

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <h2>Counter</h2>
      <Counter />
      <h2>Smart Counter</h2>
      <SmartCounter />
      <h2>Ifood Counter</h2>
      <IfoodCounter />
    </>
  );
}

export default App;
