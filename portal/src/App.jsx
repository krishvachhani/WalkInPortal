import './App.css'
import Login from "./pages/LoginPage/Login";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ListingPage from "./pages/ListingPage/ListingPage";
import ListingExpanded from "./pages/ListingExpandedPage/ListingExpanded.jsx";
import SuccessPage from "./pages/SuccessPage/SuccessPage.jsx";
import Register from "./pages/RegisterPage/Register.jsx";
import Home from "./pages/HomePage/Home.jsx";
import Error404 from "./pages/Error404/Error404.jsx";

function App() {

    return (<Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/listings" element={<ListingPage/>}/>
                <Route path="/listings/:id" element={<ListingExpanded/>}/>
                <Route path="/listings/:id/success" element={<SuccessPage/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="*" element={<Error404/>}/>
            </Routes>
        </Router>

    )
}


export default App
