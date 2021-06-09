import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Button, Card, Image } from 'semantic-ui-react'
import ProductService from '../services/productService'

export default function ProductDetail() {
    let { name } = useParams()

    const [product, setProduct] = useState([])
    //lifecycle hooks

    useEffect(() => {
        let productService = new ProductService();
        productService.getByProductName(name).then(result => setProduct([result.data.data]));

    },[])
    

    return (
        <div>
        {
            product.map(abc =>(

                <Card.Group>
                <Card fluid="strong">
                    <Card.Content>
                        <Image
                            floated='right'
                            size='mini'
                            src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                        />
                        <Card.Header>    {abc.productName}</Card.Header>
                        <Card.Meta>{abc.category.categoryName}</Card.Meta>
                        <Card.Description>
                            Steve wants to add you to the group <strong>best friends</strong>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green'>
                                Approve
                            </Button>
                            <Button basic color='red'>
                                Decline
                          </Button>
                        </div>
                    </Card.Content>
                </Card>
            </Card.Group>
            ))
        }

        </div>
    )
}
