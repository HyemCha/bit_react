import logo from './logo.svg';
import './App.css';
import OneApp from './components/OneApp';
import TwoApp from './components/TwoApp';
import ThreeApp from './components/ThreeApp';
import FourApp from './components/FourApp';
import FiveApp from './components/FiveApp';
import SixApp from './components/SixApp';
import SevenApp from './components/SevenApp';
import EightApp from './components/EightApp';
function Test(){
  const arr = ['1','2',3]
  var a = new Array(10)
  return <div>
    {console.log([...a])}
  </div>
}
function App() {
  return (
    <div>
      {/* <OneApp></OneApp> */}
      {/* <TwoApp/> */}
      {/* <ThreeApp></ThreeApp> */}
      {/* <FourApp></FourApp> */}
      {/* <FiveApp></FiveApp> */}
      {/* <SixApp></SixApp> */}
      {/* <SevenApp/> */}
      <EightApp/>
      {/* <Test></Test> */}
    </div>
  );
}

export default App;
