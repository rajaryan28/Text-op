import React, { useState } from 'react'


export default function TextForm(props) {
  
  function handleChange(event){
    setText(event.target.value)
  }
  function handleupClick(){
    let newText=text.toUpperCase();
    setText(newText)
  }
  function removeExtSpace(){
    let trimmedText = text.replace(/\s{2,}/g, " ");
    setText(trimmedText)
  }
  function handlelowClick(){
    let newText=text.toLowerCase();
    setText(newText)
  }
  function handleCopy(){
    navigator.clipboard.writeText(text);
    if(text2.length!==0){
      alert("Text Copied!")
    }
  }

  function handleclearClick(){
    setText("")
  }

  //function to remove spaces from the array: text
  function removeItemAll(arr, value) {
    var i = 0;
    while (i < arr.length) {
      if (arr[i] === value) {
        arr.splice(i, 1);
      } else {
        ++i;
      }
    }
    return arr
  } 

  const style={
    position: "absolute",
    left: "5.5%",
  }
  
  const [text, setText] = useState("")
  let text2=text.split(/\s+/)
  removeItemAll(text2,"")
  return (
    <> 
    <div className='conatiner my-4 mx-2'>
     <h3 className={`container text-${props.mode==='dark'?'white':''}`}>Enter Your Text Below</h3>
     <div className={`mb-3`}>
     <textarea className="form-control container" style={{'backgroundColor':`${props.mode==='light'? '#C1D5D5':'#717171'}`}} value={text} onChange={handleChange} id="exampleFormControlTextarea1" rows="10"></textarea>
     </div>
     <div className='text-center'>
     <button type="button" className={`btn btn-primary ${props.mode==='dark'? 'btn-dark':''} my-2 mx-2`} onClick={handleupClick}>🔼TO UPPERCASE</button>
     <button type="button" className={`btn btn-primary ${props.mode==='dark'? 'btn-dark':''} my-2 mx-2`} onClick={handlelowClick}>🔽to lowercase</button>
     <button type="button" className={`btn btn-primary ${props.mode==='dark'? 'btn-dark':''} my-2 `} onClick={removeExtSpace}>Remove Extra Space</button>
     <button type="button" className={`btn btn-primary ${props.mode==='dark'? 'btn-dark':''} my-2 mx-2`} onClick={handleCopy}>Copy</button>
     <button type="button" className={`btn btn-primary ${props.mode==='dark'? 'btn-dark':''} my-2 mx-2`} onClick={handleclearClick}>Clear</button>
     </div>
     

    <div style={style} className={` container my-3 text-${props.mode==='dark'?'white':''}`}>
      <h3>Text Summary</h3>
      
      {/* <p>{text.length} characters with {text.split(" ").length} words</p> */}
      <p>{text.length} characters with {text2.length} words</p>

      
    </div>
    </div>
    </>
  )
}
