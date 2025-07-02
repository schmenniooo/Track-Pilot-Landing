
import './mainContainer.css'

function MainContainer() {

    return (
        <main children="mainContainer">
            <section className="logoContainer">
                <img className="logo" alt="logo"/>
            </section>
            <h1>TrackPilot CRM</h1>
            <p>Coming soon..</p>
            <form>
                <input type="text" placeholder="Your email"/>
            </form>
        </main>
    )
}

export default MainContainer
