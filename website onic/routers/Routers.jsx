import {
    BrowserRouters,
    Route,
    Routers
} from "react-router-dom"
import Profile from "../pages/Profile"
import App from "../App"

const Routers = () => {
    return (
        <BrowserRouters>
            <Route>
                <Route path="/" element={<App />} />
                <Route path="/profile" element={<Profile />} />
            </Route>
        </BrowserRouters>
    )
}