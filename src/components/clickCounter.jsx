import React, {useState} from 'react';

function ClickCounter(){

    let [count, setCount] = useState(0);
    let [bgColor, setbgColor] = useState('white')

    const handleClick = () => {
        setCount(count+1);
        setbgColor(setColor());
    };
    
    const setColor = () => {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        return `#${randomColor}`;
    }
    return (
        <>
            <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          html, body {
            width: 100%;
            height: 100%;
            overflow: hidden;
          }
          #root {
            width: 100%;
            height: 100%;
          }
        `}
      </style>
            <div  style={{backgroundColor:bgColor, height:'100vh', width:'100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <h1>Click Counter</h1>
                <h1>{count}</h1>
                <button onClick={() => handleClick()}>Click Me</button>
            </div>
        </>
    );
}



export default ClickCounter;