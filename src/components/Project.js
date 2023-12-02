
import StarRate from './StarRate';
import './project.css';
import {FaGithub } from 'react-icons/fa';
export default function Project(props){
    return(
    <div className='card text-dark m-2' style={{width:"280px" }}>
        <img className='card-img-top 'style={{height:"200px"}} src={props.img} />
        <div className='card-body'>
            <h4 className='card-title'>{props.title}</h4>
            <StarRate/><br></br>
            <a className='btn ' href={props.href}><FaGithub/></a>
        </div>
    </div>
    );
}