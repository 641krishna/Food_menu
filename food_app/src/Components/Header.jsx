import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Badge from '@mui/material/Badge';
import Nav from 'react-bootstrap/Nav';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/esm/Table';
import { DLT } from '../Redux/actions/actions';

const Header = () => {

    const getData = useSelector((state) => state.cartreducer.carts);
    console.log(getData)

    const dispatch = useDispatch();


    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const dlt = (id) => {
        dispatch(DLT(id))
    }
    return (
        <>
            <Navbar bg="dark" variant="dark" style={{ height: '60px' }}>
                <Container>
                    <NavLink to="/cart" className="text-decoration-none text-light mx-5">Add to Cart</NavLink>
                    <Nav className="me-auto">
                        <NavLink to="/" className="text-decoration-none text-light">Home</NavLink>
                    </Nav>
                    <Badge badgeContent={getData.length} color="primary"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <i class="fa-solid fa-cart-shopping text-light" style={{ fontSize: 25, cursor: 'pointer' }}></i>
                    </Badge>

                </Container>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    {
                        getData.length ?
                            <div className="card_details">
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Photo</th>
                                            <th>Restaurant Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            getData.map((e) => {
                                                return (
                                                    <>
                                                        <tr>
                                                            <td>
                                                                <NavLink
                                                                    to={`/cart/${e.id}`}><img src={e.imgdata} alt="" style={{ width: "5rem", height: '5rem' }} onClick={handleClose} />
                                                                </NavLink>
                                                            </td>
                                                            <td>
                                                                <p><strong>{e.rname}</strong></p>
                                                                <p><strong>₹ {e.price}</strong></p>
                                                                <p><strong>Quantity : {e.qnty}</strong></p>
                                                                <p style={{ color: 'red', fontSize: '20', cursor: 'pointer' }} onClick={() => dlt(e.id)}>
                                                                    <i className="fas fa-trash smalltrash"></i>
                                                                </p>
                                                            </td>
                                                            <td className='mt-5' style={{ color: 'red', fontSize: '20', cursor: 'pointer' }} onClick={() => dlt(e.id)}>
                                                                <i className="fas fa-trash largetrash"></i>
                                                            </td>

                                                        </tr>
                                                    </>
                                                )
                                            })
                                        }
                                    </tbody>
                                    <p className='text-center'><strong>Total : 300</strong></p>
                                </Table>
                            </div> :
                            <div className="card_details d-flex justify-content-center align-items-center" style={{ width: '15rem', padding: 10, position: 'relative' }}>
                                <i className="fas fa-close smallclose" onClick={handleClose} style={{ position: 'absolute', top: 3, right: 20, fontSize: 22, cursor: 'pointer' }}></i>
                                <p style={{ fontSize: 22 }}>Your cart is Empty</p>
                                <img src="https://static.vecteezy.com/system/resources/previews/004/964/514/original/young-man-shopping-push-empty-shopping-trolley-free-vector.jpg" alt="" style={{ width: "15rem", height: '10rem', padding: 10, position: "relative" }} />
                            </div>
                    }


                </Menu>
            </Navbar>
        </>
    )
}

export default Header