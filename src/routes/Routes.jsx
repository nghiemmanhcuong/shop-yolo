import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Catalog from '../pages/Catalog'
import Product from '../pages/Product'

const Routes = () => {
    return (
        <Switch>
            <Route path='/shop-yolo/' exact component={Home} />
            <Route path='/shop-yolo/catalog/:slug' exact component={Product} />
            <Route path='/shop-yolo/catalog' exact component={Catalog} />
            <Route path='/shop-yolo/cart' exact component={Cart} />
        </Switch>
    )
}

export default Routes
