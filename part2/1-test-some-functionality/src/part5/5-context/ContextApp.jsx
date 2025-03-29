import Header from './components/share/Header';
import Sidebar from './components/share/Sidebar';
import Footer from './components/share/Footer';
import Home from './components/general/Home';
import ThemeProvider from './providers/ThemeProvider';
import './assets/style/main.css'
import { useEffect, useState } from 'react';
import RequestClient from './tools/RequestClient';
import UserContext from './contexts/UserContext';
import Cookies from 'js-cookie'

// handling props drilling
export default function ContextApp() {

    const [user, setUser] = useState()
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(false)

    function login() {
        setIsLoading(true)
        RequestClient('/api/login', { method: 'POST', data: { username: 'mohsen', password: '123' } })
            .then(response => {
                // handle token in front
                Cookies.set('token', response.data.token)
                getUser()
            })
            .catch(error => {
                alert(`${error.response.data}`);
            })
        //.finally(() => setIsLoading(false))
    }

    function getUser() {
        RequestClient('/api/user', { headers: { token: Cookies.get('token') } })
            .then(response => {
                setUser(response.data)
                setIsLoggedIn(true)
            })
            .catch(error => {
                alert(`${error.response.data}`);
            })
            .finally(() => setIsLoading(false))
    }

    function logout() {
        setUser({})
        setIsLoggedIn(false)
        Cookies.remove('token')
    }

    useEffect(() => {
        if(Cookies.get('token'))
            getUser()
    }, [])

    return (
        <div>
            <UserContext.Provider value={{ user, login, isLoading, isLoggedIn, logout }}>
                <ThemeProvider>
                    <Header />
                    <div className='main' >
                        <Sidebar />
                        <Home />
                    </div>
                    <Footer />
                </ThemeProvider>
            </UserContext.Provider>
        </div>
    );
}
