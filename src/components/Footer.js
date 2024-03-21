import React from 'react';
import logo from '../images/Logo .svg'

const Footer = () => {
    return (
       <footer>
        <section>
            <div className='company-info'>
                <img src={logo} alt=''/>
                <p>We are the indian resturent, 
                    focused on all indian traditional recipes served with  a modern twist.</p>
            </div>
            <div>
                <h3>Import Links</h3>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>About</a></li>
                    <li><a href='/'>Menu</a></li>
                    <li><a href='/'>Reservations</a></li>
                    <li><a href='/'>order Online</a></li>
                    <li><a href='/'>Login</a></li>
                </ul>
            </div>
            <div>
                <h3>Contacts</h3>
                <ul>
                    <li>Address:<br/> 123 Kanpur,INDIA</li>
                    <li>Phone:<br/> ++91 80000002514</li>
                    <li>Email:<br/> Little@lemon.com</li>
                </ul>
            </div>
            <div>
                <h3>Social Media Links</h3>
                <ul>
                    <li><a href='/'>Facebook</a></li>
                    <li><a href='/'>Instagram</a></li>
                    <li><a href='/'>LinkedIn</a></li>
                    
                </ul>
            </div>
        </section>
       </footer>
    );
};

export default Footer;