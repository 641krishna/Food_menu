import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './style.css'

const CardsDetails = () => {
    const [data, setData] = useState([]);
    const { id } = useParams();

    const getData = useSelector((state) => state.cartreducer.carts);
    console.log(data);

    const compare = () => {
        let comparedata = getData.filter((e) => {
            return e.id == id
        })
        setData(comparedata)
    }

    useEffect(() => {
        compare();
    }, [id])



    return (
        <div className="container mt-2">
            <h2 className="text-center">Items Detailes Page</h2>

            <section className="container mt-5">
                <div className="itemsdetails d-flex justify-content-center">
                    {
                        data.map((el) => {
                            return (
                                <>
                                    <div className="items_img">
                                        <img src={el.imgdata} alt="" />
                                    </div>
                                    <div className="details">
                                        <Table>
                                            <tr>
                                                <td>
                                                    <p><strong>Restaurant</strong> : {el.rname}</p>
                                                    <p><strong>Price</strong> : ₹ {el.price}</p>
                                                    <p><strong>Dishes</strong> : {el.address}</p>
                                                    <p><strong>Total</strong> : ₹ 300</p>
                                                </td>
                                                <td>
                                                    <p><strong>Rating</strong> : <span style={{ background: "green", color: '#fff', padding: "2px 5px", borderRadius: "5px" }}>{el.rating} ★</span></p>
                                                    <p><strong>Order Review</strong> : {el.somedata}</p>
                                                    <p><strong>Remove</strong> : <span><i className="fas fa-trash" style={{ color: 'red', fontSize: 20, cursor: 'pointer' }}></i></span></p>
                                                </td>
                                            </tr>

                                        </Table>
                                    </div>
                                </>
                            )
                        })
                    }

                </div>
            </section>
        </div>
    )
}

export default CardsDetails