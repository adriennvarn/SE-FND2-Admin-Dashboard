import NavBar from "../components/NavBar"
import Chatbot from "../components/Chatbot"

export default function Landing() {
    return (
        <>
            <NavBar />
            <main>
                <div className="uk-cover-container">
                    <img src="src/assets/coffeebeans1.jpg"  alt="Cover image" className="uk-width-1-1 uk-width-1-2@m"></img>
                    <div className="uk-position-center uk-padding-small uk-card uk-card-overlay">
                        <h1>Kaff Kafé</h1>
                        <h3>Coffee with a side of sci-fi</h3>
                    </div>
                </div>
                <Chatbot />
            </main>
        </>
    )
}