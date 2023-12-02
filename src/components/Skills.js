    import Bar from "./Bar"
    import './skills.css';
    const technicalSkills=[
        {name:"HTML",per:"90%", width:"90%",className:"html bar-color progress-bar progress-bar-striped " },
        {name:"CSS",per:"75%", width:"75%" ,className:"js bar-color progress-bar progress-bar-striped "},
        {name:"JAVA SCRIPT",per:"60%", width:"60%",className:"react bar-color progress-bar progress-bar-striped " },
        {name:"REACT",per:"40%", width:"40%",className:"boot bar-color progress-bar progress-bar-striped" },
    ];

    const ProfessionalSkills=[
        {name:"TEAM WORK",per:"85%", width:"85%",className:"team-work bar-color progress-bar progress-bar-striped" },
        {name:"PROJECT MANAGEMENT",per:"65%", width:"65%" ,className:"p-management bar-color progress-bar progress-bar-striped "},
        {name:"LANGUAGE",per:"60%", width:"60%",className:"react bar-color progress-bar progress-bar-striped" },
        {name:"CREATIVITY",per:"70%", width:"70%",className:"creativity bar-color progress-bar progress-bar-striped" },
    ];

    

    export default function Skills(props){
        return(
            <div>
            
        <div class="skills row" id="skills">
            
            <div class="skill-text">
                <p>{props.skillsp}</p>
            <h2><span>{props.skillsheader}</span></h2>
            </div>
        <div class="mt-4 col col-lg-5 col-md-5 col-sm-8">
            <h3 class="p-2">{props.technical}</h3>
            {technicalSkills.map(technicalSkill=>(
            <Bar name={technicalSkill.name} per={technicalSkill.per} width={technicalSkill.width}
             class={technicalSkill.className}></Bar>
        ))}
        </div>
        <div class=" mt-4 col col-lg-5 col-md-5 col-sm-8">
            <h3 class="p-2">{props.professional}</h3>
            {ProfessionalSkills.map(ProfessionalSkill=>(
            <Bar name={ProfessionalSkill.name} per={ProfessionalSkill.per} width={ProfessionalSkill.width}
             class={ProfessionalSkill.className}></Bar>
        ))}
        </div>
        </div>
    </div>
        );
    }