import React, { useState } from 'react';
import DashboardNavbar from './DashboardNavbar';
import background from './background.jpg';
import { Card, CardContent, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

const Billings = () => {
  // Sample billings data
  const [selectedBilling, setSelectedBilling] = useState(null);
  const billings = [
    { id: 1, date: '2022-03-15', amount: 150, receiver: 'John Doe', itemName: 'sunset painting', transactionId: '123456' },
    { id: 2, date: '2023-04-10', amount: 200, receiver: 'Jane Smith', itemName: 'wildlife', transactionId: '789012' },
    { id: 3, date: '2024-04-20', amount: 180, receiver: 'Alice Johnson', itemName: 'nature', transactionId: '345678' },
  ];

  const handleDetailsClick = (billing) => {
    setSelectedBilling(billing);
  };

  const handleClose = () => {
    setSelectedBilling(null);
  };

  return (
    <div style={{ display: 'flex', margin: '0', padding: '0' }}>
      {/* Navbar */}
      <DashboardNavbar />
      {/* Billings Content */}
      <div style={{ marginTop: '56px', padding: '20px', flex: 1, position: 'relative' }}>
        {/* Background Image */}
        <img src={background} alt="Background" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }} />
        {/* Billings */}
        <div>
          <h1 style={{ margin: '0', color: '#fff' }}>Billings</h1>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
            {billings.map(billing => (
              <BillingCard key={billing.id} billing={billing} onDetailsClick={handleDetailsClick} />
            ))}
          </div>
          {selectedBilling && (
            <BillingDetailsPopup billing={selectedBilling} onClose={handleClose} />
          )}
        </div>
      </div>
    </div>
  );
}

const BillingCard = ({ billing, onDetailsClick }) => {
  const { date, amount, receiver, itemName, transactionId } = billing;

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Date: {date}
        </Typography>
        <Typography variant="body1">
          Amount: ${amount}
        </Typography>
        <Button onClick={() => onDetailsClick(billing)} variant="contained" color="primary" style={{ marginTop: '10px' }}>
          Details
        </Button>
      </CardContent>
    </Card>
  );
}

const BillingDetailsPopup = ({ billing, onClose }) => {
  const { date, amount, receiver, itemName, transactionId } = billing;

  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle>Billing Details</DialogTitle>
      <DialogContent>
        <Typography variant="body1">
          Date: {date}
        </Typography>
        <Typography variant="body1">
          Amount: ${amount}
        </Typography>
        <Typography variant="body1">
          Receiver: {receiver}
        </Typography>
        <Typography variant="body1">
          Item Name: {itemName}
        </Typography>
        <Typography variant="body1">
          Transaction ID: {transactionId}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default Billings;
