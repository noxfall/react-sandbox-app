import Button from './components/Button';
import Header from './components/Header';

const App = () => {
  return (
    <div className="container main">
      <Header />
      <div className="container actions">
        <span className="counter">0</span>
        <Button title="+" />
        <Button title="reset" />
      </div>
    </div>
  );
};

export default App;