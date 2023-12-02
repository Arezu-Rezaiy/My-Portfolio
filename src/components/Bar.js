import './skills.css';
export default function Bar(props){
    return(
        <div>
            <div class="label">
            <p>{props.name}</p>
            <p>{props.per}</p>
            </div>
        <div class="progress">
            <div style={{width:props.width}} className={props.class} ></div>
            </div>
        </div>
    );
}