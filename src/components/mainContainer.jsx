
import './mainContainer.css'

function MainContainer() {

    return (
        <main children="mainContainer">
            <section className="logoContainer">
                <img src="/logo.png" className="logo" alt="logo"/>
            </section>
            <h1 className="heading">TrackPilot CRM</h1>
            <ul className="featureList">
                <li>Easy to use CRM system for self employed people or small companies</li>
                <li>Track your clients, orders and finance</li>
                <li>Personalize your own experience with custom dashboard</li>
            </ul>
            <form>
                Enter your E-Mail to get notified when we launch!
                <input className="emailField" type="text" placeholder="Your email"/>
            </form>
        </main>
    )
}

export default MainContainer
