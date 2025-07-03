
import './landing.css';
import emailjs from '@emailjs/browser';
import {useRef} from 'react';

function Landing() {

    const form = useRef(null);

    const handleSubmit = (e) => {

        e.preventDefault();

        emailjs.sendForm(
            'service_xz2um1g',
            'template_hx640wb',
            form.current,
            'nVmAr56Z9X6gZK7o5'
        )
            .then(() => {
                alert("You will hear from us!");
                form.current.reset();
            })
            .catch((error) => {
                alert("Oops something went wrong!");
                console.error('EmailJS Error:', error);
            });
    };

    return (
        <main className="mainContainer">
            <section className="logoContainer">
                <img src="/logo.png" className="logo" alt="logo" />
            </section>
            <h1 className="heading">TrackPilot CRM</h1>
            <ul className="featureList">
                <li>Easy to use CRM system for self employed people or small companies</li>
                <li>Track your clients, orders and finance</li>
                <li>Personalize your own experience with custom dashboards</li>
            </ul>
            <form className="emailForm" ref={form} onSubmit={handleSubmit}>
                <h3 className="formHeading">Get notified when we launch!</h3>
                <p className="formSubtext">Be the first to know when TrackPilot CRM is ready.</p>
                <div className="inputContainer">
                    <input className="emailField" type="email" name="user_email" placeholder="Your email address" required/>
                    <button className="submitButton" type="submit">Notify Me</button>
                </div>
            </form>
        </main>
    );
}

export default Landing;
