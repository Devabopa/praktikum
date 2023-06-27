import {
    BrowserRouters,
    Route,
    Routes
} from "react-router-dom"
import Profile from "../pages/Profile"
import Dashbord from "../pages/Dashboard"

const Routers = () => {
    return (
        <BrowserRouters>
            <Routes>
                <Route path="/" element={<Dashbord />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </BrowserRouters>
    )
}