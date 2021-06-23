import React from 'react'
import ProductList from '../pages/ProductList'
import Categories from './Categories'
import { Grid } from 'semantic-ui-react'
import { Route } from 'react-router'
import ProductDetail from '../pages/ProductDetail'
import CartDetail from '../pages/CartDetail'
import ProductAdd from '../pages/ProductAdd'

export default function Dashboard() {
    return (
        <div>
            <Grid container columns={3} >
                <Grid.Row>
                    <Grid.Column mobile={16} tablet={12} computer={4}>
                        <Categories></Categories>
                    </Grid.Column>
                    <Grid.Column  mobile={16} tablet={4} computer={12}>
                   <Route exact path="/" component={ProductList}/>
                   <Route exact path="/products" component={ProductList}/>
                   <Route path="/products/:name" component={ProductDetail}/>
                   <Route path="/cart" component={CartDetail}/>
                   <Route path="/product/add" component={ProductAdd}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </div>
    )
}
