import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DashboardNavbar from './DashboardNavbar';
import { Card, CardContent } from '@mui/material';

const MyCart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // Fetch cart items from the backend
        const fetchCartItems = async () => {
            try {
                const username = 'username'; // You need to get the username from your authentication system
                const response = await axios.get(`/api/cart/${username}`);
                setCartItems(response.data);
            } catch (error) {
                console.log('Error fetching cart items:', error);
            }
        };

        fetchCartItems();
    }, []);

    return (
        <div style={{ display: 'flex' }}>
            <DashboardNavbar />
            <div style={{ marginLeft: '20px' }}>
                <h1>My Cart</h1>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {cartItems.map((item, index) => (
                        <Card key={index} style={{ minWidth: 275, margin: '10px', boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 4px 2px rgba(0, 0, 0, 0.14), 0px 8px 3px rgba(0, 0, 0, 0.12)' }}>
                            <CardContent>
                                <p>{item.name}</p>
                                <p>{item.price}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MyCart;
