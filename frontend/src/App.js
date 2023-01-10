import { Route, Routes } from "react-router-dom";
import Dashboard from "../src/components/Dasboard";
import Login from "../src/components/Login";
import Navbar from "../src/components/Navbar";
import Register from "../src/components/Register";
import Book from "../src/components/Buku"

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route
                    path="/"
                    element={<Login />}
                />
                <Route
                    path="/register"
                    element={<Register />}
                />
                <Route
                    path="/dashboard"
                    element={<Dashboard />}
                >
                </Route>
                <Route
                    path="/buku"
                    element={<Book />}
                >
                </Route>
            </Routes>
        </>
    );
}

export default App;