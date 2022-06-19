import * as React from 'react';

const heavyWork = () => {
  console.log("엄청 무거운 작업");
  return ["홍길동","김민수"]
}

function App() {
  const [names,setNames] = React.useState(
    ()=>{//처음 렌더링 할 때만 불러옴
    return heavyWork(); 
  }
  );
  const [input,setInput] = React.useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  }

  const handleUpload = () => {
    setNames((prevState)=>{
      return([...prevState,input])
    });
  }

  
  return (
    <div>
      <input type='text' value={input} onChange={handleInputChange}/>
      <button onClick={handleUpload}>Uploads</button>
      {
        names.map((name,idx) => {
          return <p key={idx}>{name}</p>
        })
      }
    </div>
  );
}

export default App;
