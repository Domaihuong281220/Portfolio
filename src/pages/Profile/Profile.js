import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { ImBin } from "react-icons/im";
import homeLogo from "../../Assets/kidpng.png";

// import "./style.css"
import { Image } from 'react-bootstrap';

function Profile() {
    const [selectedValue, setSelectedValue] = useState('');

    const handleSelectChange = (e) => {
        setSelectedValue(e.target.value); // Update the selected value when the user makes a selection
    };
    return (
        <>
            <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css'></link>
            <section style={{ position: "relative", zIndex: "-2", paddingTop: "5rem", height: "100vh" }} className="">
                <h1 class='text-[2.6rem] text-white uppercase'>Children <span class='purple'>Management</span> </h1>
                <div class='flex flex-row w-1/2 m-auto justify-between'>
                    <div class='flex flex-col justify-end'>
                        <div class='flex flex-col items-end gap-3'>
                            <span class='fs-4 fw-bold text-capitalize text-white'>your Children account</span>
                            <h4 class='text-white'>User(Tap to edit)</h4>
                        </div>
                    </div>
                    <div class='flex flex-col justify-end'>
                        <div class='flex flex-col items-start gap-3'>
                            <select id="countries" class="bg-gray-50 border font-medium border-gray-300 text-gray-900 text-lg rounded-2xl px-3 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>username@gmail.com</option>
                            <option value="#">Create Password</option>
                            <option value="#">Sign Out</option>
                            <option value="#">Delete Account</option>
                            </select>
                            <button class="text-black w-40 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-capitalize flex flex-row text-center bg-white font-semibold py-2 px-4 rounded-3xl">
                                Enable edit <ImBin class='ml-2' size={18} />
                            </button>
                        </div>
                    </div>
                </div>
                <div class='flex justify-evenly w-[60%] m-auto mt-5'>
                    <div className='flex flex-col justify-center items-center'>
                        <img src={homeLogo} class="transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 rounded-full h-[150px] w-[150px] shadow-inner hover:opacity-95" alt="..." />
                        <span class='fs-4 fw-bold text-[#C770F0]'>Username</span>
                        <span class='fs-5 fw-light text-[#91f091]'>(Age 3)</span>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <img src={homeLogo} class="transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 rounded-full h-[150px] w-[150px] shadow-inner hover:opacity-95" alt="..." />
                        <span class='fs-4 fw-bold text-[#C770F0]'>Username</span>
                        <span class='fs-5 fw-light text-[#91f091]'>(Age 3)</span>
                    </div>
                </div>
                <div class='flex flex-col'>              
                    <div class='flex m-auto mt-4 mb-4 flex-row justify-center w-[75%] gap-3 h-auto'> 
                        <span className='text-white mt-[11px] font-semibold '>About Us</span>
                        <div className='mt-4 w-[94%] h-[2px] bg-white'></div>
                    </div>
                    <div class='text-white h-auto m-auto mt-3 text-start italic w-[75%]'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                </div>
            </section>
        </>
    );
}

export default Profile;
