import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './style.css'
import { DLT, ADD, REMOVE } from '../Redux/actions/actions'

const CardsDetails = () => {
    const [data, setData] = useState([]);
    const { id } = useParams();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getData = useSelector((state) => state.cartreducer.carts);
    console.log(data);

    const compare = () => {
        let comparedata = getData.filter((e) => {
            return e.id == id
        })
        setData(comparedata)
    }

    const send = (el) => {
        // console.log(el)
        dispatch(ADD(el));
    }


    const dlt = (id) => {
        dispatch(DLT(id))
        navigate("/");
    }

    const remove = (item) => {
        dispatch(REMOVE(item));
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
                                                    <p><strong>Total</strong> : ₹ {el.price * el.qnty}</p>
                                                    <div className="mt-5 d-flex justify-content-between" style={{ width: 100, cursor: 'pointer', background: '#ddd', color: '#111' }}>
                                                        <span style={{ fontSize: 24 }} onClick={el.qnty <= 1 ? () => dlt(el.id) : () => remove(el)}>-</span>
                                                        <span style={{ fontSize: 24 }}>{el.qnty}</span>
                                                        <span style={{ fontSize: 24 }} onClick={() => send(el)}>+</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p><strong>Rating</strong> : <span style={{ background: "green", color: '#fff', padding: "2px 5px", borderRadius: "5px" }}>{el.rating} ★</span></p>
                                                    <p><strong>Order Review</strong> : {el.somedata}</p>
                                                    <p><strong>Remove</strong> : <span><i className="fas fa-trash" onClick={() => dlt(el.id)} style={{ color: 'red', fontSize: 20, cursor: 'pointer' }}></i></span></p>
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