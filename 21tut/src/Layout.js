import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import DataContext, { DataProvider } from './context/DataContext';

const Layout = () => {
    const { search, setSearch, width } = useContext(DataContext)
    return (
        <div className="App">
            <Header title="React JS Blog" />
            <Nav />
            <DataProvider>
                <Outlet />
            </DataProvider>
            <Footer />
        </div>
    )
}

export default Layout;