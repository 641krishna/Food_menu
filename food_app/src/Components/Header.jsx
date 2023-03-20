import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Badge from '@mui/material/Badge';
import Nav from 'react-bootstrap/Nav';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Navbar bg="dark" variant="dark" style={{ height: '60px' }}>
                <Container>
                    <NavLink to="/cart" className="text-decoration-none text-light mx-5">Add to Cart</NavLink>
                    <Nav className="me-auto">
                        <NavLink to="/" className="text-decoration-none text-light">Home</NavLink>
                    </Nav>
                    <Badge badgeContent={4} color="primary"
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
                    <div className="card_details d-flex justify-content-center align-items-center" style={{ width: '15rem', padding: 10, position: 'relative' }}>
                        <i className="fas fa-close smallclose" onClick={handleClose} style={{ position: 'absolute', top: 3, right: 20, fontSize: 22, cursor: 'pointer' }}></i>
                        <p style={{ fontSize: 22 }}>Your cart is Empty</p>
                        <img src="https://static.vecteezy.com/system/resources/previews/004/964/514/original/young-man-shopping-push-empty-shopping-trolley-free-vector.jpg" alt="" style={{ width: "15rem", height: '10rem', padding: 10, position: "relative" }} />
                    </div>
                </Menu>
            </Navbar>
        </>
    )
}

export default Header