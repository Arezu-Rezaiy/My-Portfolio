import './project.css';
import Project from './Project';
import { useState } from 'react';
import {FaSearch} from 'react-icons/fa';
export default function Projects(props){

    const destinations=[  
        {image: 'guessNumber.PNG',category:"js" , title:"Guess Number",href:" https://arezu-rezaiy.github.io/Guess-number/"}, 
        {image: 'bitDog.PNG',category:"htmlcss" , title:"BitDog Master",href:" https://arezu-rezaiy.github.io/Bit-Dog-Master/"},
        {image: 'diceGame.PNG',category:"js" , title:"Dice Game", href:" https://arezu-rezaiy.github.io/Dice_Game/"},
        {image: 'myCv.PNG',category:"js" , title:"CV" , href:"https://arezu-rezaiy.github.io/Exercise/"}, 
        {image: 'currency.PNG',category:"htmlcss" , title:"Crypto Currency"},
        {image: 'afghantour1.PNG',category:"htmlcss" ,title:"Afghan Tour",href:" https://arezu-rezaiy.github.io/app-web-final-project/"},
        {image: 'modal.PNG',category:"js" , title:"Modal Window", href:" https://arezu-rezaiy.github.io/Modal-Window/"}, 
        {image: 'iphone.PNG',category:"htmlcss" , title:"iphone Products"},   
        {image: 'pattern.PNG',category:"js" , title:"find Pattern", href:" https://arezu-rezaiy.github.io/JavaScript_Project/"} ];

        const [data, setdata]= useState(destinations);
        const filterResult=(catItem)=>{
        const result= destinations.filter((curData)=>{
            return curData.category === catItem;
        });
        setdata(result);
    }

    return(
        <div className='project'>
<   div className="container" id='projects'>
        <h6>{props.projectp}</h6>
        <h1><span>{props.projectheader}</span></h1>


        <div className="category m-4">
            <button href="" onClick={()=>filterResult("htmlcss")}>Html/Css</button>
            <button href="" onClick={()=>filterResult("js")}>JS</button>
            <button  onClick={()=>setdata(destinations)} >All</button>
        </div>
        <div className="projects">
            {
            }
            {
            data.map((destination)=>(
                <Project img={destination.image} category={destination.category} title={destination.title}
                 href={destination.href} >
                    </Project>
            ))
    
            }          
        </div>
    </div>   
    </div>
        
    );
}