import React, { useEffect, useState } from 'react'
//React hOOKS
export default function Main(props) {

   const [text,setText] = useState('0')

   // text = "Hello text" wrong way
   //setText ("Hann text is updated..!") correct way

   const uppercaseHandler =()=>{
      
       let newText = text.toUpperCase();
       setText(newText);
    }

    const lowercaseHandler =()=>{
      
      let newText = text.toLowerCase();
      setText(newText);
   }

   const textHandler = (e)=>{
      setText(e.target.value);
   }

   const clear = (e)=>{
   setText(" ");
    
 }
 const [isLoading, setIsLoading] = useState(true);

 useEffect(()=>{
  setTimeout(()=>{
    setIsLoading(false);
  },2000)
 },[])

if(isLoading){
  return<div className='text-center'>
    <img src='https://media.tenor.com/YPOStjIfQ2IAAAAM/loading-waiting.gif' alt='Loader'></img>
    
  </div>
}

  return (
    <>
    <div className='container'>
      <h1>{props.heading}</h1>
      <div>
        <textarea className='form-control' rows='9'onChange={textHandler} o value={text}></textarea>
        <div className='container my-3'>
       <button className='btn btn-outline-primary mx-3 ' onClick={uppercaseHandler}>Convert to UpperCase</button>
       <button className='btn btn-outline-primary mx-3 ' onClick={lowercaseHandler}>Convert to LowerCase</button>
       <button className='btn btn-outline-primary mx-3 ' onClick={clear}>clear</button>
        </div>
      </div>
      </div>
      
      
    </>
  )
}
