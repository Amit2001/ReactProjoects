import { useState } from 'react';
function Main(props){

    const [text,setText] = useState("Enter your text here :");

    function changedTextArea(event){
      console.log(event.target.value);
      setText(event.target.value);
    }

    function convertToUppercase(){
      console.log("convering to uppercase");
      setText(text.toUpperCase());
    }

    function convertToLowercase(){
      console.log("convering to lowercase");
      setText(text.toLowerCase());
    }

    return(
      <>
    <div className="main container text-center">
        <h3>{props.title}</h3>
      <textarea className="form-control" rows="5" value={text} onChange={changedTextArea}></textarea>
      <button className='m-3 rounded btn btn-outline-info' onClick={convertToUppercase}>Convert To Upercase</button>
      <button className='m-3 rounded btn btn-outline-warning' onClick={convertToLowercase}>Convert To Lowercase</button>
    </div>

    <div className='container text-center'>
      <h4>Number of characters : {text.length}</h4>
      <h4>Number of words : {text.split(" ").length -1}</h4>
    </div>
    </>

    );
}

export default Main;