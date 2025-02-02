import { Route, Navigate, Routes } from "react-router-dom";
import Home from "./Home";
import Resume from "./Resume";

function MyRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<Navigate to="/" replace />}/>
        </Routes>
    )

}

export default MyRoutes;