import React, { useState } from 'react';
import { Box, Grid, Typography, styled, Paper, Card, CardContent, CardMedia, Button,IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// Dummy data for the dashboard
const dashboardData = [
  { title: 'Sales Orders', value: 1500, description: 'Total Sales Orders Processed' },
  { title: 'Purchasing Orders', value: 230, description: 'Total Purchasing Orders Received' },
  { title: 'Inventory Movements', value: 500, description: 'Total Inventory Movements in Warehouse' },
  { title: 'Goods Receipt', value: 120, description: 'Goods Receipt Completed' },
];

// Dummy data for team members
const teamMembers = [
  {
    name: 'Amol Sir',
    position: 'Software Engineer',
    workAt: 'TechKNOWLOGY',
    email: 'john.doe@techknow.com',
    contact: '123-456-7890',
    image: 'https://via.placeholder.com/150', // Replace with actual image URLs
  },
  {
    name: 'Jane Smith',
    position: 'UI/UX Designer',
    workAt: 'TechKNOWLOGY',
    email: 'jane.smith@techknow.com',
    contact: '987-654-3210',
    image: 'https://via.placeholder.com/150', // Replace with actual image URLs
  },
  {
    name: 'Mark Johnson',
    position: 'Project Manager',
    workAt: 'TechKNOWLOGY',
    email: 'mark.johnson@techknow.com',
    contact: '456-789-1234',
    image: 'https://via.placeholder.com/150', // Replace with actual image URLs
  },
  {
    name: 'Mark Johnson',
    position: 'Project Manager',
    workAt: 'TechKNOWLOGY',
    email: 'mark.johnson@techknow.com',
    contact: '456-789-1234',
    image: 'https://via.placeholder.com/150', // Replace with actual image URLs
  },
  {
    name: 'Mark Johnson',
    position: 'Project Manager',
    workAt: 'TechKNOWLOGY',
    email: 'mark.johnson@techknow.com',
    contact: '456-789-1234',
    image: 'https://via.placeholder.com/150', // Replace with actual image URLs
  },
  {
    name: 'Mark Johnson',
    position: 'Project Manager',
    workAt: 'TechKNOWLOGY',
    email: 'mark.johnson@techknow.com',
    contact: '456-789-1234',
    image: 'https://via.placeholder.com/150', // Replace with actual image URLs
  },
  {
    name: 'Mark Johnson',
    position: 'Project Manager',
    workAt: 'TechKNOWLOGY',
    email: 'mark.johnson@techknow.com',
    contact: '456-789-1234',
    image: 'https://via.placeholder.com/150', // Replace with actual image URLs
  },
  {
    name: 'Mark Johnson',
    position: 'Project Manager',
    workAt: 'TechKNOWLOGY',
    email: 'mark.johnson@techknow.com',
    contact: '456-789-1234',
    image: 'https://via.placeholder.com/150', // Replace with actual image URLs
  },
  {
    name: 'Mark Johnson',
    position: 'Project Manager',
    workAt: 'TechKNOWLOGY',
    email: 'mark.johnson@techknow.com',
    contact: '456-789-1234',
    image: 'https://via.placeholder.com/150', // Replace with actual image URLs
  },
  {
    name: 'Mark Johnson',
    position: 'Project Manager',
    workAt: 'TechKNOWLOGY',
    email: 'mark.johnson@techknow.com',
    contact: '456-789-1234',
    image: 'https://via.placeholder.com/150', // Replace with actual image URLs
  },
  {
    name: 'Mark Johnson',
    position: 'Project Manager',
    workAt: 'TechKNOWLOGY',
    email: 'mark.johnson@techknow.com',
    contact: '456-789-1234',
    image: 'https://via.placeholder.com/150', // Replace with actual image URLs
  },
];

export default function DashboardComponent() {
  const [showDetails, setShowDetails] = useState(null); // Store the index of the member to show details for
  const [currentIndex, setCurrentIndex] = useState(0);
  // Styled Paper component for each grid item
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
  }));

  // Styled Card component for team members
  const TeamCard = styled(Card)(({ theme }) => ({
    borderRadius: '8px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
  }));
  const cardsToShow = 3;
  const totalMembers = teamMembers.length;

  // Slice the team members array to show only 3 cards at a time
  const currentMembers = teamMembers.slice(currentIndex, currentIndex + cardsToShow);

  // Handle Next and Prev button clicks
  const handleNext = () => {
    if (currentIndex + cardsToShow < totalMembers) {
      setCurrentIndex(currentIndex + cardsToShow);
    }
  };

  const handlePrev = () => {
    if (currentIndex - cardsToShow >= 0) {
      setCurrentIndex(currentIndex - cardsToShow);
    }
  };


  return (
    <Box sx={{ position: 'relative', width: '100%', height: 'auto', bgcolor: '#f5f5f5', display: 'block' }}>
      {/* Dashboard Header */}
      <Box sx={{ position: 'relative', width: '90%', padding: 3 }}>
        <Typography variant="h5">Custom Dashboard</Typography>
      </Box>

      {/* Grid Layout for Dashboard */}
      <Box sx={{ flexGrow: 1, padding: 3 }}>
        <Grid container spacing={3}>
          {dashboardData.map((item, index) => (
            <Grid item xs={12} sm={3} key={index}>
              <Item>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="h4" sx={{ fontWeight: 'bold', marginTop: 1 }}>
                  {item.value}
                </Typography>
                <Typography variant="body2" sx={{ marginTop: 1, color: 'gray' }}>
                  {item.description}
                </Typography>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Team Members Section */}
      <Box sx={{ flexGrow: 1, padding: 3 }}>
      <Typography variant="h5" sx={{ marginBottom: 3 }}>
        Meet Our Team
      </Typography>

      {/* Navigation buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Prev button on the left */}
        <IconButton
          color="primary"
          onClick={handlePrev}
          disabled={currentIndex === 0}
          sx={{ padding: 1 }}
        >
          <ChevronLeftIcon />
        </IconButton>

        {/* Cards to show */}
        <Grid container spacing={3} justifyContent="center">
          {currentMembers.map((member, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <TeamCard>
                <CardMedia
                  component="img"
                  height="140"
                  image={member.image}
                  alt={`${member.name}'s picture`}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {member.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.position}
                  </Typography>
                  <Box sx={{ marginTop: 2 }}>
                    <Typography variant="body2" color="text.secondary">
                      Work at: {member.workAt}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Email: {member.email}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Contact: {member.contact}
                    </Typography>
                  </Box>
                </CardContent>
              </TeamCard>
            </Grid>
          ))}
        </Grid>

        {/* Next button on the right */}
        <IconButton
          color="primary"
          onClick={handleNext}
          disabled={currentIndex + cardsToShow >= totalMembers}
          sx={{ padding: 1 }}
        >
          <ChevronRightIcon />
        </IconButton>
      </Box>
    </Box>
      {/* Additional Grids (If needed) */}
      <Box sx={{ flexGrow: 1, padding: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Item>
              <Typography variant="h6">Grid 2: Other Content</Typography>
            </Item>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ flexGrow: 1, padding: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Item>
              <Typography variant="h6">Grid 3: Other Content</Typography>
            </Item>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ flexGrow: 1, padding: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Item>
              <Typography variant="h6">Grid 4: Other Content</Typography>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
