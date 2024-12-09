import React, { useContext } from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import { DataContext } from '../context/DataProvider';
import './progress.css'

function ShowFront({ onClick }) {
    const { personInfo } = useContext(DataContext);
    const data = personInfo.personalInfo[0];

    console.log(data);
    return (
        <div className=" w-screen h-screen flex ">
            <div className='w-[60rem] h-[30rem] m-auto bg-whit shadow-2xl p-7 relative' onClick={onClick}>
                <div className="left w-[65%] h-full flex flex-col">
                    <div className="social flex space-x-4">
                        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-4xl hover:scale-110 transition-transform duration-300" style={{ color: '#181717' }} />
                        </a>

                        <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-4xl hover:scale-110 transition-transform duration-300" style={{ color: '#0077B5' }} />
                        </a>

                        <a href="https://instagram.com/your-username" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="text-4xl hover:scale-110 transition-transform duration-300" style={{ color: '#E4405F' }} />
                        </a>

                        <a href="https://facebook.com/your-username" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="text-4xl hover:scale-110 transition-transform duration-300" style={{ color: '#1877F2' }} />
                        </a>
                    </div>

                    <div className="Banner mt-[6rem]">
                        <h1 className=' uppercase font-extrabold text-3xl'>Hii I'm {data.selfDetails.name.split(' ')[0]}</h1>
                        <p className='desc text-lg'>{data.bio.split('.')[0]}</p>
                    </div>
                </div>

                <div className="image right absolute top-0 right-0 ">
                    <img className='' src="https://images.unsplash.com/photo-1580707578919-892eb22db615?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbiUyMHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="" />
                </div>

            </div>
        </div>

    )
}

export default ShowFront