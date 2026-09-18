import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
// 1. Import UIkit CSS
import "uikit/dist/css/uikit.min.css"

// 2. Import UIkit JS and Icons
import UIkit from "uikit"
import Icons from "uikit/dist/js/uikit-icons"


UIkit.use(Icons)

// (Optional) Attach UIkit globally to window for easier debugging
window.UIkit = UIkit

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
