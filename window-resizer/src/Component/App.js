import React,{useState,useEffect} from 'react';
import './App.css';

const App = () =>{
    const [height,setHeight] = useState(200);
    const [width,setWidth]=useState(100);

    const recordWindowSize = () =>{
        setHeight(window.innerHeight);
        setWidth(window.innerWidth)
    }
    useEffect( ()=>{
        window.addEventListener('resize',recordWindowSize);
    },[])


    return(
        <div className="main-container">  
            
            <h3>Window Resizer</h3>
             <form className="ui form">
                 <div className="field">
                <label> Height</label>
                    <input type="text" name="length" placeholder="length" value ={height} readOnly/>     
                </div>
                <div className="field">
                    <label> Width</label>
                    <input type="text" name="length" placeholder="length" value={width} readOnly />
                </div>
                <div className="field">
                    <label> Area</label>
                    <input type="text" name="length" placeholder="length" readOnly value={height*width}/>
                </div>
            </form>   
        </div>
    )
};

export default App;