import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'

function ContainerStyle(props) {
  console.table(props)

  const navigate = useNavigate();

  const HandleClick=()=>{
    
    navigate(props['path']);

  }

  return (
    
    <a onClick = {()=>HandleClick()}  className='no-underline text-black'>
      <div  className={`h-1/6 w-[70%] mb-1 ${props['bg-color']} m-auto flex justify-center items-center `}>
       <span className='text-3xl hover:duration-500 hover:text-5xl font-bold tracking-wider'> {props['text']} </span>
      </div>
    </a>
  );
}

export default ContainerStyle;
