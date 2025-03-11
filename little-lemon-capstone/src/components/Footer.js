import React from "react";

const Footer = () => { 
    return(
            <footer className='company-info'>
              <section>
              <div className='footer-content'>
                    <p>Little Lemon</p>
                    <p>We are a family owned restaurant, focused on traditional recipes served with a modren twist.</p>
                    <p>123 Main St, Toronto, ON</p>
                </div>

                <div>
                    <h3>Important Links</h3>
                    <ul>
                        <li> <a href="/">Home</a></li>
                        <li> <a href="/">About</a></li>
                        <li> <a href="/">Menu</a></li>
                        <li> <a href="/">Rservations</a></li>
                        <li> <a href="/">Order Onlin</a></li>   
                    </ul>
                </div>

                <div>
                    <h3>Contact Us</h3>
                    <p>Phone: 123-456-7890</p>
                    <p>Email:abc@gmail.com </p>
                </div>

                <div>
                    <h3>Socail Medial Links</h3>
                    <ul>
                        <li> <a href="/">Facebook</a></li>
                        <li> <a href="/">Instagram</a></li>
                        <li> <a href="/">Twitter</a></li>
                        <li> <a href="/">Youtube</a></li>
                    </ul>
                </div>

              </section>
            </footer>     
    )
 };


export default Footer;  
