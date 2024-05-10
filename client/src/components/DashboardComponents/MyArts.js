import React, { useState, useEffect } from 'react';
import DashboardNavbar from './DashboardNavbar';
import { Card, CardContent, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import axios from 'axios';
import UpdateArtwork from './UpdateArtwork';
import backgroundImage from './background.jpg'; // Import background image

const MyArts = () => {
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get('https://online-art-gallery-94s1.vercel.app/arts')
      .then(response => {
        console.log(response.data); // Log response data
        setArtworks(response.data); // Assuming response.data is an array of artworks
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(error.message || 'An error occurred while fetching data');
        setLoading(false);
      });
  }, []);

  const handleDetailsClick = (artwork) => {
    setSelectedArtwork(artwork);
  };

  const handleClose = () => {
    setSelectedArtwork(null);
  };

  const handleDeleteClick = (artworkId) => {
    axios.delete(`https://online-art-gallery-94s1.vercel.app/arts/${artworkId}`)
      .then(response => {
        console.log("Artwork deleted successfully", response);
        // Remove the deleted artwork from the UI
        setArtworks(artworks.filter(artwork => artwork._id !== artworkId));
      })
      .catch(error => {
        console.error('Error deleting artwork:', error);
      });
  };
  

  const handleEditClick = (artworkId) => {
    // Redirect to /updateartwork with artwork ID as parameter
    window.location.href = `/updateartwork/${artworkId}`;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{ display: 'flex', margin: '0', padding: '0', backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh' }}>
      {/* Navbar */}
      <DashboardNavbar />
      {/* MyArts Content */}
      <div style={{ marginTop: '56px', padding:'20px', flex: 1, position: 'relative', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
        {/* MyArts */}
        <div>
          <h1 style={{ margin: '0', color: '#fff' }}>My Arts</h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {artworks.map(artwork => (
              <ArtworkCard 
                key={artwork._id} 
                artwork={artwork} 
                onDetailsClick={handleDetailsClick} 
                onDeleteClick={handleDeleteClick} 
                onEditClick={handleEditClick} 
              />
            ))}
          </div>
          {selectedArtwork && (
            <ArtworkDetailsPopup artwork={selectedArtwork} onClose={handleClose} />
          )}
        </div>
      </div>
    </div>
  );
}

const ArtworkCard = ({ artwork, onDetailsClick, onDeleteClick, onEditClick }) => {
  const { _id, name, description, pricing, mobileNumber, canvasSize, image } = artwork;
  const [editPopupOpen, setEditPopupOpen] = useState(false);

  const handleDelete = () => {
    onDeleteClick(_id);
  };

  const handleEditClick = () => {
    setEditPopupOpen(true);
  };

  const handleEditClose = () => {
    setEditPopupOpen(false);
  };

  return (
    <div>
      <Card style={{ minWidth: 275, backgroundColor: '#59D5E0', margin: '10px', boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 4px 2px rgba(0, 0, 0, 0.14), 0px 8px 3px rgba(0, 0, 0, 0.12)' }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {name}
          </Typography>
          <img src={image} alt={name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
          <Typography variant="body1">
            Description: {description}
          </Typography>
          <Typography variant="body1">
            Price: ${pricing}
          </Typography>
          <Typography variant="body1">
            Mobile Number: {mobileNumber}
          </Typography>
          <Typography variant="body1">
            Canvas Size: {canvasSize}
          </Typography>
          <Button onClick={() => onDetailsClick(artwork)} variant="contained" color="primary" style={{ marginTop: '10px' }}>
            Details
          </Button>
          <Button onClick={handleEditClick} variant="outlined" color="secondary" style={{ marginTop: '10px', marginLeft: '10px' }}>
            Edit
          </Button>
          <Button onClick={handleDelete} variant="outlined" color="error" style={{ marginTop: '10px', marginLeft: '10px' }}>
            Delete
          </Button>
        </CardContent>
      </Card>
      {editPopupOpen && (
        <Dialog open={true} onClose={handleEditClose}>
          <DialogTitle>Edit Artwork</DialogTitle>
          <DialogContent>
            {/* Edit form content */}
            <UpdateArtwork artwork={artwork} onClose={handleEditClose} />
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

const ArtworkDetailsPopup = ({ artwork, onClose }) => {
  const { name, description, pricing, mobileNumber, canvasSize, image } = artwork;

  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle>Artwork Details</DialogTitle>
      <DialogContent>
        <Typography variant="body1">
          Name: {name}
        </Typography>
        <Typography variant="body1">
          Description: {description}
        </Typography>
        <Typography variant="body1">Price: ${pricing}
        </Typography>
        <Typography variant="body1">
          Mobile Number: {mobileNumber}
        </Typography>
        <Typography variant="body1">
          Canvas Size: {canvasSize}
        </Typography>
        <img src={image} alt={name} style={{ width: '100%', height: '200px', objectFit: 'cover', marginTop: '10px' }} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default MyArts;
