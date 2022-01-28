import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Catalog from '../pages/Catalog'
import Product from '../pages/Product'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/catalog/:slug' exact component={Product} />
            <Route path='/catalog' exact component={Catalog} />
            <Route path='/cart' exact component={Cart} />
        </Switch>
    )
}

export default Routes
