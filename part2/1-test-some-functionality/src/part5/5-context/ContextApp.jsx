import Header from './components/share/Header';
import Sidebar from './components/share/Sidebar';
import Footer from './components/share/Footer';
import Home from './components/general/Home';
import ThemeProvider from './providers/ThemeProvider';
import './assets/style/main.css'

// handling props drilling
export default function ContextApp() {

    return (
        <div>
            <ThemeProvider>
                <Header />
                <div className='main' >
                    <Sidebar />
                    <Home />
                </div>
                <Footer />
            </ThemeProvider>
        </div>
    );
}
