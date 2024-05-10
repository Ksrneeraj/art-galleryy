import React, { useState } from 'react';
import { FormControl, InputLabel, Input, FormHelperText, Button, CardContent, AppBar, Toolbar, Typography } from '@mui/material';
import axios from 'axios';
import DashboardNavbar from './DashboardNavbar'; // Import your dashboard navbar component

const API_ENDPOINT = 'https://online-art-gallery-94s1.vercel.app/arts'; // Correct endpoint

const AddArtwork = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [canvasSize, setCanvasSize] = useState('');
    const [image, setImage] = useState(null);
    const [error, setError] = useState('');

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const API_ENDPOINT = 'https://online-art-gallery-94s1.vercel.app/arts'; // Correct endpoint

const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('pricing', parseFloat(price));
    formData.append('mobileNumber', mobileNumber);
    formData.append('canvasSize', parseFloat(canvasSize));
    formData.append('image', image);

    try {
        const response = await axios.post(API_ENDPOINT, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        console.log(response.data);
        setName('');
        setDescription('');
        setPrice('');
        setMobileNumber('');
        setCanvasSize('');
        setImage(null);
        setError('');
    } catch (err) {
        console.error("Error in posting data: ", err);
        setError("An error occurred while submitting your artwork. Please try again.");
    }
};
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Add Artwork
                    </Typography>
                </Toolbar>
            </AppBar>
            <DashboardNavbar /> {/* Dashboard Navbar */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', maxWidth: '400px', backgroundColor: 'white', padding: '10px', boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 4px 2px rgba(0, 0, 0, 0.14), 0px 8px 3px rgba(0, 0, 0, 0.12)' }}>
                <CardContent style={{ padding: '10px' }}>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                        <FormControl style={{ width: '100%' }}>
                            <InputLabel htmlFor="name">Name</InputLabel>
                            <Input
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <FormHelperText>Required</FormHelperText>
                        </FormControl>
                        <FormControl style={{ width: '100%' }}>
                            <InputLabel htmlFor="description">Description</InputLabel>
                            <Input
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            />
                            <FormHelperText>Required</FormHelperText>
                        </FormControl>
                        <FormControl style={{ width: '100%' }}>
                            <InputLabel htmlFor="price">Price</InputLabel>
                            <Input
                                id="price"
                                type="number"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                required
                            />
                            <FormHelperText>Required</FormHelperText>
                        </FormControl>
                        <FormControl style={{ width: '100%' }}>
                            <InputLabel htmlFor="mobileNumber">Mobile Number</InputLabel>
                            <Input
                                id="mobileNumber"
                                value={mobileNumber}
                                onChange={(e) => setMobileNumber(e.target.value)}
                                required
                            />
                            <FormHelperText>Required</FormHelperText>
                        </FormControl>
                        <FormControl style={{ width: '100%' }}>
                            <InputLabel htmlFor="canvasSize">Canvas Size</InputLabel>
                            <Input
                                id="canvasSize"
                                type="number"
                                value={canvasSize}
                                onChange={(e) => setCanvasSize(e.target.value)}
                                required
                            />
                            <FormHelperText>Required</FormHelperText>
                        </FormControl>
                        <FormControl style={{ width: '100%' }}>
                            <InputLabel htmlFor="image" shrink={true}>Upload Image</InputLabel>
                            <Input
                                id="image"
                                type="file"
                                onChange={handleImageChange}
                                required
                            />
                            <FormHelperText>Required</FormHelperText>
                        </FormControl>
                        <Button type="submit" variant="contained" color="primary" style={{ marginTop: 2 }}>
                            Add Artwork
                        </Button>
                        {error && (
                            <FormHelperText error style={{ marginTop: 2 }}>
                                {error}
                            </FormHelperText>
                        )}
                    </form>
                </CardContent>
            </div>
        </div>
    );
};

export default AddArtwork;
