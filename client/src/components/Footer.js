import React from 'react';
import { Typography, Button, Grid, Container } from '@mui/material';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#f0f0f0', padding: '50px 0' }}>
      <Container>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Join Our Art Community
            </Typography>
            <Typography variant="body1" paragraph>
              Subscribe to our newsletter and stay updated with the latest artworks and events.
            </Typography>
            <Button variant="contained" color="primary">
              Subscribe
            </Button>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Showcase Your Art
            </Typography>
            <Typography variant="body1" paragraph>
              Promote your talent and display your artworks in our online gallery.
            </Typography>
            <Button variant="contained" color="primary">
              Submit Artwork
            </Button>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Typography variant="body1" paragraph>
              Stay connected with us on social media for updates and inspirations.
            </Typography>
            {/* Add social media icons or links here */}
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;
