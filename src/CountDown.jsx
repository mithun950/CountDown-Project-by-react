import { useEffect, useState } from "react";
import './CountDown'

const CountDown = () => {

    const [count, setCount] = useState(0)
    const [isRunning,setIsRunning] = useState(false)

    useEffect(() => {
        let timer;
        if(isRunning && count > 0){
            timer = setInterval(() => {
                setCount((prevCount) => prevCount -1);
            },1000);
        }

        else if (count === 0){
            clearInterval(timer);
            setIsRunning(false);
        }
        return () => clearInterval(timer);
    },[isRunning,count])

    const handleInputChange = (e) => {
        setCount(Number(e.target.value));

    }

    const handleReset = () => {
        setCount(0);
        setIsRunning(false);
    }
    return (
       
        <div className="div-container">
            <input className="input" type="text" placeholder="Type your starting value" onChange={handleInputChange } disabled ={isRunning}  /> 
            <br />

            {/* start btn */}
            <button className="btn-start" onClick={() => setIsRunning(true)} disabled = {isRunning || count === 0}> Start
                

            </button>

            
            {/* reset btn */}
            <button className="btn-reset" onClick={handleReset}>Reset</button>


            <h2>
                {count > 0 ? `Times Left : ${count} seconds` : "Times end!"}
            </h2>
        </div>
        
    );
};

export default CountDown;