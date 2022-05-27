import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link } from "react-router-dom";
import "./index.css";

function App() {

    return (
        
        <div>
            <Router>                
                    
                    
                <Routes>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route exact path="/" element={<div>
                        <Login/>
                        </div>}/>
                </Routes>
                
            </Router>
        </div>
    );
}

export default App;