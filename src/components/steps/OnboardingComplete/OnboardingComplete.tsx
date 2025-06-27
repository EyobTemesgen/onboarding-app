import { Box, Typography, Button, Paper } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { OnboardingCompleteProps } from './types';

const OnboardingComplete: React.FC<OnboardingCompleteProps> = ({ data }) => {
  return (
    <Box sx={{ textAlign: 'center', p: 4 }}>
      <CheckCircleOutlineIcon 
        color="success" 
        sx={{ fontSize: 80, mb: 3 }} 
      />
      <Typography variant="h4" component="h1" gutterBottom>
        Setup Complete!
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Your account has been successfully configured with the following settings:
      </Typography>
      
      <Paper 
        elevation={0} 
        sx={{ 
          p: 3, 
          mt: 3, 
          mb: 4, 
          textAlign: 'left',
          backgroundColor: 'action.hover',
          borderRadius: 2
        }}
      >
        <Typography variant="subtitle1" gutterBottom>
          <strong>Sales Channels:</strong> {data.salesChannels.join(', ') || 'None'}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          <strong>Inventory Tracking:</strong> {data.inventoryTracking || 'Not set'}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          <strong>Shipping Location:</strong> {data.shippingLocation || 'Not set'}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          <strong>QuickBooks Integration:</strong> {data.quickBooks || 'Not connected'}
        </Typography>
        <Typography variant="subtitle1">
          <strong>Products Imported:</strong> {data.productImport || 'None'}
        </Typography>
      </Paper>

      <Button 
        variant="contained" 
        color="primary" 
        size="large"
        onClick={() => window.location.href = '/dashboard'}
      >
        Go to Dashboard
      </Button>
    </Box>
  );
};

export default OnboardingComplete;
