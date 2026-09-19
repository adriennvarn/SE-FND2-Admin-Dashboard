import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
import { InventoryProvider } from "./contexts/InventoryContext.jsx"
// uikit
import "uikit/dist/css/uikit.min.css"
import UIkit from "uikit"
import Icons from "uikit/dist/js/uikit-icons"
UIkit.use(Icons)
window.UIkit = UIkit

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <InventoryProvider>
            <App />
        </InventoryProvider>
    </StrictMode>
)
