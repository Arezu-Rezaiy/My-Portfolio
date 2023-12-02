import './header.css';
export default function Navigation(props){
    return(
        <>
          <nav className="nav navbar navbar-expand-lg ps-5 ms-5 me-4 pe-5 ">
          <a className="brand navbar-brand" href="">
            <h2>
              <span>{props.brand}</span>
            </h2>
          </a>
          <button
            className="bg-light rounded navbar-toggler colapse-button "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="toggle navigation">
            <span className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  ms-auto ">
              <li className="nav-item ">{" "}<a class="link nav-link " href="#header">
                 <span> {props.home}</span></a>{" "}
              </li>
              <li className="nav-item "> {" "}
                <a class="link nav-link " href="#about">
                <span>{props.about}</span>
                </a>
              </li>
              <li className="nav-item ">{" "}
                <a class=" link nav-link " href="#skills"><span>{props.skills}</span></a>
              </li>
              <li className="nav-item ">{" "}
                <a class="link nav-link " href="#projects"><span>{props.projects}</span></a>
              </li>
              <li className="nav-item ">{" "}
                <a class="link nav-link" href="#contact"><span>{props.contact}</span></a>
              </li>
            </ul>
          </div>
        </nav>

        </>
    );
}