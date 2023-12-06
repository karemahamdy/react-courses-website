import React from 'react';

export default function Nav() {
    return (
<>
<nav>
        <div class="container nav-container">
            <h4>Courses</h4>
            <ul class="nav-menu">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="courses.html">Courses</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
            <button id="open-menu-btn"> <i class="uil uil-bars"></i></button>
            <button id="close-menu-btn"> <i class="uil uil-multiply"></i></button>
        </div>
    </nav>
</>
    );
}
