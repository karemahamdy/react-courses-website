import  Courses from "../component/courses.js";
export function Course(){
    return(
        <>
           <div class="courses p-5">
        <div class="container">
        <div class="text text-center text-white fw-bold">Our Popular Courses</div>
            <div class="row">
            <Courses imgpath="/image/course1.jpg" headingtext="Responsive Social Media Website UI Design" paragraphText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius iste praesentium, quidem aliquam odit facilis quasi!"></Courses>
            <Courses imgpath="/image/course1.jpg" headingtext="Responsive Social Media Website UI Design" paragraphText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius iste praesentium, quidem aliquam odit facilis quasi!"></Courses>
            <Courses imgpath="/image/course1.jpg" headingtext="Responsive Social Media Website UI Design" paragraphText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius iste praesentium, quidem aliquam odit facilis quasi!"></Courses>
    </div>
        </div>
        </div>
        </>
    );
}