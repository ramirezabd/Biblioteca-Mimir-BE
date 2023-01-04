import { Route, Routes } from "react-router-dom";
import Dashboard from "../src/components/Dasboard";
import Login from "../src/components/Login";
import Navbar from "../src/components/Navbar";
import Register from "../src/components/Register";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route
                    path="/login"
                    element={<Login />}
                />
                <Route
                    path="/register"
                    element={<Register />}
                />
                <Route
                    path="/dasboard"
                    element={<Dashboard />}
                >
                </Route>
            </Routes>
        </>
    );
}

export default App;