
import './mainContainer.css'

function MainContainer() {

    const handleSubmit = (email) => {

        // TODO: Write email to me with info. that customer with name clicked on submit
    }

    return (
        <main className="mainContainer">
            <section className="logoContainer">
                <img src="/logo.png" className="logo" alt="logo"/>
            </section>
            <h1 className="heading">TrackPilot CRM</h1>
            <ul className="featureList">
                <li>Easy to use CRM system for self employed people or small companies</li>
                <li>Track your clients, orders and finance</li>
                <li>Personalize your own experience with custom dashboard</li>
            </ul>
            <form className="emailForm" onSubmit={handleSubmit}>
                <h3 className="formHeading">Get notified when we launch!</h3>
                <p className="formSubtext">Be the first to know when TrackPilot CRM is ready.</p>
                <div className="inputContainer">
                    <input className="emailField" type="email" placeholder="Your email address" required />
                    <button className="submitButton" type="submit">Notify Me</button>
                </div>
            </form>
        </main>
    )
}

export default MainContainer
