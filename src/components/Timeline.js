
import {VerticalTimeline,VerticalTimelineElement} from 'react-vertical-timeline-component';
import'react-vertical-timeline-component/style.min.css';
import {FaGraduationCap, FaUniversity, FaLanguage, FaCode} from 'react-icons/fa';

export default function Timeline(props){
    return(
        <>
        <VerticalTimeline  className='text-dark' lineColor="black">
            <VerticalTimelineElement className="vertical-timeline-element--education"
            iconStyle={{background:'#000', color:'oranged'}}
            icon={<FaGraduationCap/>}
            date="2009 - 2020">
                <h3>{props.element1header}</h3>
                <p>{props.element1p} </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement className="vertical-timeline-element--education"
            iconStyle={{background:'#000', color:'oranged'}}
            icon={<FaUniversity/>}
            date="2020 - Present">
                <h3>{props.element2header}</h3>
                <p>{props.element2p}</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement className="vertical-timeline-element--education"
            iconStyle={{background:'#000', color:'oranged'}}
            icon={<FaCode/>}
            date="2022 - Presnt">
                <h3>{props.element3header}</h3>
                <p >{props.element3p}</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement className="vertical-timeline-element--education"
            iconStyle={{background:'#000', color:'oranged'}}
            icon={<FaLanguage/>}
            date="2021 - 2022">
                <h3>{props.element4header}</h3>
                <p>{props.element4p}</p>
            </VerticalTimelineElement>
        </VerticalTimeline>
        </>
    );
}