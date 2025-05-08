import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import Contacts from "./Pages/Contacts"
import Movie from "./Pages/Movie"
import NotFound from "./Pages/NotFound";
import "./index.css"
import Main from "./Layouts/Main";


function App() {
  return (
    <div className="wrap">
        <Router>
        <Header />
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/movie/:id" element={<Movie />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        <Footer />
        </Router>
    </div>
  );
}

export default App;
