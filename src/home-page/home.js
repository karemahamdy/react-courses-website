import Textbox  from "../component/text.js";
import { Category } from "./category";
import { Course } from "./course.js";
export default function Home(){
    return(
<>
<div className="home">
        <div className="container">
            <div className="text">
               <Textbox name="Grow your skills to advance your career path"text="here, you will find courses in all fields like programming, technology, business, graphics, etc..." btn="Get started" ></Textbox> 
               </div>
            <div className="image">
                <img src="/image/home.svg" alt="home-page"/>
            </div>
    </div>
    </div>
  <Category/>
  <Course/>
</>
    );
};
