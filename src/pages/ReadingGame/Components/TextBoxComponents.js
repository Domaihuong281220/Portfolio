import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import playAudio from '../../../components/CommonFunction/PlayAudio';

function TextBoxComponent(props) {
    console.table(props)

    return (
        <div onClick={() => playAudio(props['audio-url'])} className={`w-[300px] h-[300px] ${props['text_color']} rounded-3xl items-center justify-center flex ${props['bg_color']}`}>
            <span className='text-5xl font-bold hover:text-7xl hover:font-[550] hover:duration-300 ease-in-out capitalize'>{props['text']} </span>
        </div>
    );
}

export default TextBoxComponent;
