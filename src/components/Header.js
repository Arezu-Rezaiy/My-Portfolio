import Navigation from './Navigation';
import './header.css';
export default function Header(props) {
    return (
      <div className="header" id='header'>
        <Navigation  home={props.home} about={props.about} skills={props.skills} projects={props.projects}
         contact={props.contact} brand={props.brand}></Navigation>

        <div class="row">
          <div className=" col-lg-5 col-md-5 col-sm-8" >
            <h4 >{props.headerh4} 👩‍💻</h4>
            <h1 className='name'>{props.headerh1p1}</h1>
            <h4>{props.headerh3}</h4>
            <p>{props.headerp}</p>
            <a href='https://resume.io/r/37HX99avA'>
            <button className="cv-btn" type="button"> {props.button}</button></a>
          </div>
          <div className=" img-animation col-lg-5 col-md-5 col-sm-8">
            <img className="image"
              src="img.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
  