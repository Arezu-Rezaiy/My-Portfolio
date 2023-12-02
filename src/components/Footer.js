import './footer.css'
import {FaFacebook, FaTwitter, FaTelegram,FaGithub, FaInstagram,} from 'react-icons/fa';
import React,{useState , useEffect} from "react";
export default function Footer(){
    const [year, seatYear]= useState(new Date().getFullYear());

    useEffect(()=>{
        const interval=setInterval(()=>{
            seatYear(new Date().getFullYear());
        },1000);
        return ()=> clearInterval(interval);
    },[])
    return(
        <div className="text-light footer">
           
                <div className='footer-content'> 
                <h4><span>Get In Touch </span>📲</h4>
            <p>Thank you for visiting my portfolio, if you need more information you can find me on social media.</p>
           <FaFacebook className='media' />
            <FaTwitter className='media' ></FaTwitter>
            <FaGithub className='media' ></FaGithub>
            <FaTelegram className='media'></FaTelegram>
            <FaInstagram className='media'></FaInstagram>
        </div>
        <hr/>
        <p className='center'>All rights reserved &copy; Arezu Rezaiy {year}</p>
        </div>
    );
}