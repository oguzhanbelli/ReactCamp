import React from 'react'
import ProductList from '../pages/ProductList'
import Categories from './Categories'
import { Grid } from 'semantic-ui-react'

export default function Dashboard() {
    return (
        <div>
            <Grid container columns={3} >
                <Grid.Row>
                    <Grid.Column mobile={16} tablet={12} computer={4}>
                        <Categories></Categories>
                    </Grid.Column>
                    <Grid.Column  mobile={16} tablet={4} computer={12}>
                    <ProductList></ProductList>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </div>
    )
}
