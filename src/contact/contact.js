export function Contact(){
    return(
        <>
         <section class="contactUs  p-5">
        <div class="container">
            <div class="section ">
            <aside class="contact_aside">
                <div class="aside_image">
                    <img src="/image/home.svg" alt=""/>
                </div>
                <h2>Contact Us</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti eius voluptatibus, incidunt dolores voluptates labore. Consequuntur minus mollitia neque libero cumque suscipit, fugit placeat consequatur eligendi quia alias molestias explicabo.</p>
                <ul class="contact_details">
                    <li>
                        <i class="fa-solid fa-phone"></i>
                        <h5>+91 9988 7766 84</h5>
                    </li>
                    <li>
                        <i class="fa-solid fa-envelope"></i>
                        <h5>support@gamil.com</h5>
                    </li>
                    <li>
                        <i class="fa-solid fa-location-dot"></i>
                        <h5>Nangloi , Delhi</h5>
                    </li>
                </ul>
                <ul class="contact_socials">
                    <li><a href="https://facebook.com" target="_blank"><i  class="fa fa-brands fa-square-facebook"></i></a></li>
                    <li><a href="https://instagram.com" target="_blank"><i  class="fa fa-brands fa-instagram"></i></a></li>
                    <li><a href="https://twitter.com" target="_blank"><i  class="fa fa-brands fa-twitter"></i></a></li>
                    <li><a href="https://linkedin.com" target="_blank"><i  class="fa fa-brands fa-linkedin"></i></a></li>
                </ul>
            </aside>
    
    
            <form class="contact_form" action="https://formspree.io/f/xaygyaya" method="POST" />
                <div class="form_name">
                    <input type="text" placeholder="First Name" name="First name" required/>
                    <input type="text" placeholder="Last Name" name="last name"  required/>
                    
                </div>
               
                <input type="email" placeholder="Your Email Address" name="email"  required/>
                <textarea rows="2" placeholder="Message" name="message"></textarea>
                <form action="/upload" method="post" enctype="multipart/form-data">
                    <input type="file" name="image" accept="image/*"/>
                   
                
                <button type="submit" class="btn btn-primary">Send Message</button>
            </form>
        
        </div>
    </div>
    </section>
        </>
    );
}