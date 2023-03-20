import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Cardsdata from './CardData';
import "./style.css"

const Cards = () => {

    const [data, setData] = useState(Cardsdata);
    // console.log(data)

    return (
        <div className="container mt-3">
            <h2 className='text-center'>Add to Cart Products</h2>

            <div className="row d-flex justify-content-center align-item-center">
                {
                    data.map((el, id) => {
                        return (
                            <>
                                <Card className='mx-2 mt-4 card_style' style={{ width: '22rem', border:'none' }}>
                                    <Card.Img className='mt-3' variant="top" src={el.imgdata} style={{height:'16rem'}} />
                                    <Card.Body>
                                        <Card.Title>{el.rname}</Card.Title>
                                        <Card.Text>
                                           Price : ₹ {el.price}
                                        </Card.Text>
                                        <div className="button_div">
                                        <Button variant="primary">Add to Cart</Button>
                                        </div>   
                                    </Card.Body>
                                </Card>
                            </>
                        )
                    })
                }

            </div>

        </div>
    )
}

export default Cards;