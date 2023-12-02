
import './index.css';
import Skills from './components/Skills'
import Contact from './components/Contact';
import Footer from './components/Footer';
import react, {createContext, useState} from "react";
import { useTransition } from 'react';
import Header from './components/Header';
import ReactSwitch from "react-switch";
import Projects from './components/Projects';
import Form from './components/Form';
import About from './components/About';
import {useEffect } from 'react';
import Translation from './components/Data.json';
 export const ThemeContext = createContext(null);


export default function App(){
   const [theme, setTheme]=useState("dark");

   const toggleTheme=()=>{
     setTheme((curr)=>(curr==="light" ? "dark" :"light"));
  }



  const [language, setLanguge]=useState("english");
  const [content, setContent]=useState({});

  useEffect(()=>{
      if(language==="english"){
          setContent(Translation.english)
      }
      else if(language==="persion"){
          setContent(Translation.persion)
      }
  })



  return(
     <ThemeContext.Provider value={{theme, setTheme}}>
      <div id={theme}>
      <Header headerh1p1={content.headerh1p1} headerh4={content.headerh4} headerh3={content.headerh3} 
      headerp={content.headerp}
      home={content.home} about={content.about} skills={content.skills} projects={content.projects} 
      contact={content.contact} brand={content.brand} button={content.button}></Header>
      <About abouth2p1={content.abouth2p1} abouth2p2={content.abouth2p2} aboutp={content.aboutp} 
      timelineheader={content.timelineheader} element1header={content.element1header} element1p={content.element1p}
      element2header={content.element2header} element2p={content.element2p} element3header={content.element3header}
       element3p={content.element3p}
      element4header={content.element4header} element4p={content.element4p}
      ></About>
      <Skills skillsp={content.skillsp} skillsheader={content.skillsheader} technical={content.technical} 
      professional={content.professional}></Skills>
      <Projects projectp={content.projectp} projectheader={content.projectheader}  />
      <Contact contactheader={content.contactheader} contactp={content.contactp}></Contact>

      
      <div className='select-language'>
        <label>Seclect Language</label>
        <select value={language} onChange={(e)=>{setLanguge(e.target.value)}}>
            <option>english</option>
            <option>persion</option>
        </select>
        </div>
      <div className='switch'>
        <label>{theme==="light"? "Light Mood ": "Dark Mood "}</label>
      <ReactSwitch onChange={toggleTheme} checked={theme==="dark"}/></div>
    </div>
    <Footer></Footer>
     </ThemeContext.Provider>
    
  );
}






// // import {useRef } from "react";

// // function App() {
// // const inputRef=useRef(null);

// // const handleClick=()=>{
// //     inputRef.current.click();
// // };

// // const handleFileChange= event=>{
// //     const fileObg=event.target.files && event.target.files[0];
// //     if(!fileObg){
// //         return;
// //     }
// //     event.target.value=null;
    
// // };
// //   return (
// //       <div id="app">
// //           <p>Please select an image</p>
// //           <p>
// //               <input ref={inputRef} onChange={handleFileChange}
// //                data-testid="file-picker" type="file" accept="image/*" />
// //               <button onClick={handleClick}>Pick Image</button>
// //           </p>
// //       </div>
// //   );
// // }

// // export default App;


// import { useReducer } from "react";
// export function counterReducer(state, action) {
// if(action.type==="Increment"){
//     return {count: state.count +1}
//  }
//  else if(action.type==="Decrement"){
//     return {count: state.count -1}
//  }
//  else if(action.type==="Reset"){
//     return {count: 0}
//  }
//  else{
//     return state;
//  }
// }
// function App() {
//     const [state,dispaching]=useReducer(counterReducer,{count:0})

//      const Increment=()=>{
//           dispaching({type:"Increment"})  
//     }
//      const Decrement=()=>{
//          dispaching({type:"Decrement"})
//      }
//      const Reset=()=>{
//         dispaching({type:"Reset"})
//      }
//     return (
//         <div id="app">
//             <h1>The (Final?) Counter</h1>
//             <p id="actions">
//                 <button onClick={Increment} >Increment</button>
//                 <button onClick={Decrement} >Decrement</button>
//                 <button onClick={Reset} >Reset</button>
//             </p>
//             <p id="counter">{state.count}</p>
//         </div>
//     );
// }

// export default App;