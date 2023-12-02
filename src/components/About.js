import Timeline from './Timeline'
import './about.css';
export default function About(props){
    return(
        <>
            <div class=" about " id="about">
                <div class="row">
                    <div class="hide col-lg-4 col-md-6 col-sm-8">
                        <img class="image" src="p1.jpg" alt=""/>
                    </div>
                    <div class=" text-animation mt-5 col-lg-6 col-md-6 col-sm-8">
                        <h2 className='m-4'>{props.abouth2p1}<span> {props.abouth2p2} </span></h2>
                        <p>{props.aboutp}</p>
                    </div>
                </div>
                <div className="row">
                    <div className='col-lg-10 col-md-8 col-sm-8'>
                        <h2><span>{props.timelineheader}</span></h2>
                        <Timeline element1header={props.element1header} element1p={props.element1p}
                element2header={props.element2header} element2p={props.element2p}
                element3header={props.element3header} element3p={props.element3p}
                element4header={props.element4header} element4p={props.element4p}></Timeline></div>
                </div>
            </div>
        </>
    );
}