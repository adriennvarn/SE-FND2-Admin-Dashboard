import NavBar from "../components/NavBar"
import Chatbot from "../components/Chatbot"

export default function Landing() {
    return (
        <>
            <NavBar />
            <main>
                <h1>Kaff Kafé</h1>
                <h3>Coffee with a side of sci-fi</h3>
                <Chatbot />
            </main>
        </>
    )
}