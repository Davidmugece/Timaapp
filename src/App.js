import TimeDisplay from './component/TimeDisplay';
import NumberDisplay from './component/NumberDisplay';
import Products from './component/Products';
import students from './data/students';
import './styles/style.css';


function App() {
  return (


    <div className="App">
      <TimeDisplay />
      <NumberDisplay />
      <Products students={students}/>
    </div>
  );
}

export default App;

