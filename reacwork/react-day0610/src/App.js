import React,{useState} from 'react';
import logo from './logo.svg';
import OneApp from './components/OneApp';
import TwoApp from './components/TwoApp';
import ThreeApp from './components/ThreeApp';
import FourApp from './components/FourApp';
import './App.css';

// function options(props){
//   const lis = []
//   for (let i = 0; i<props.apps.length; i++){
//     let a = props.apps[i];
//     lis.push(<option key={a.idx} value={a.idx} 
//       >riri</option>)

//   }
//   return <select onChange={selected}>
//     {lis}
//   </select>
// }

// function selected(idx){
  
// }

function App() {
  const [idx,setIdx] = useState(4);
  // const selected = (idx) => {
  //   if(idx===1){
  //     return <OneApp></OneApp>
  //   }else if(idx===2){
  //     return <TwoApp></TwoApp>
  //   }else if(idx===3){
  //     return <ThreeApp></ThreeApp>
  //   } 
  //   return <FourApp></FourApp>
  // }
  // const apps = [
  //   {idx:1},
  //   {idx:2},
  //   {idx:3},
  //   {idx:4}
  // ]
  return (
    <div>
      {/* <options apps={apps} ></options> */}
      {/* <OneApp></OneApp> */}
      <select onChange={e=>{
        setIdx(Number(e.target.value));
      }}>
        <option value="1">OneApp</option>
        <option value="2">TwoApp</option>
        <option value="3">ThreeApp</option>
        <option value="4" selected>FourApp</option>
      </select>
      {idx === 1?<OneApp/>:idx === 2?<TwoApp/>:idx === 3?<ThreeApp/>:<FourApp/>}
      {/* <TwoApp/> */}
    </div>
  );
}

export default App;