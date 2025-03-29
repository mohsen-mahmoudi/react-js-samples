import Header from './components/share/Header';
import Sidebar from './components/share/Sidebar';
import Footer from './components/share/Footer';
import Home from './components/general/Home';
import AuthProvider from './providers/AuthProvider';
import ThemeProvider from './providers/ThemeProvider';
import './assets/style/main.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/general/About';
import Contact from './components/general/Contact';
import Page404 from './components/general/Page404';
import ArticleRoute from './components/article/ArticleRoute';

// handling props drilling
export default function ContextApp() {

    return ( 
        <div>
            <BrowserRouter>
                <AuthProvider>
                    <ThemeProvider>
                        <Header />
                        <div className='main' >
                            <Sidebar />
                            <Routes>
                                <Route path='/' element={<Home />}/>
                                <Route path='/about' element={<About />}/>
                                <Route path='/contact' element={<Contact />}/>
                                <Route path='/article/*' element={<ArticleRoute />}/>
                                <Route path='*' element={<Page404 />}/>
                            </Routes>
                        </div>
                        <Footer />
                    </ThemeProvider>
                </AuthProvider>
            </BrowserRouter>
        </div>
    );
}
