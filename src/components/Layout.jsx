import {BrowserRouter, Route} from 'react-router-dom';
import Routes from '../routes/Routes';
import Footer from './Footer';
import Header from './Header';
import ProductViewModal from './ProductViewModal';

const Layout = () => {
    return (
        <BrowserRouter>
            <Route
                render={(props) => (
                    <div>
                        <Header {...props} />
                        <div className='container'>
                            <div className='main'>
                                <Routes />
                            </div>
                        </div>
                        <Footer />
                        <ProductViewModal />
                    </div>
                )}
            />
        </BrowserRouter>
    );
};

export default Layout;
