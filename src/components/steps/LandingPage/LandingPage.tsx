import { Button, Box, Typography } from '@mui/material';
import { ArrowForward, Inventory, TrendingUp, FlashOn } from '@mui/icons-material';
import { LandingPageProps } from './types';

const LandingPage = ({ onNext }: LandingPageProps) => {
  return (
    <Box sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Box
          sx={{
            width: 64,
            height: 64,
            background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mx: 'auto',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Inventory sx={{ fontSize: 32, color: 'white' }} />
        </Box>
        <Typography variant="h1" sx={{ color: 'text.primary' }}>
          Welcome to Drive – Smarter Inventory Starts Here
        </Typography>
        <Typography variant="h6" sx={{ color: 'text.secondary', maxWidth: 'md', mx: 'auto' }}>
          Get multi-channel control, real-time sync, and workflow automation 
          up and running in minutes. Your growing business deserves modern inventory management.
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3, my: 4 }}>
        <Box sx={{ flex: 1, textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          <Box
            sx={{
              width: 48,
              height: 48,
              bgcolor: '#d1fae5',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mx: 'auto',
            }}
          >
            <TrendingUp sx={{ fontSize: 24, color: '#059669' }} />
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary' }}>
            Multi-Channel Control
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Sync inventory across all your sales channels automatically
          </Typography>
        </Box>
        
        <Box sx={{ flex: 1, textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          <Box
            sx={{
              width: 48,
              height: 48,
              bgcolor: '#e0f2fe',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mx: 'auto',
            }}
          >
            <FlashOn sx={{ fontSize: 24, color: '#0284c7' }} />
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary' }}>
            Real-Time Sync
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Never oversell again with instant inventory updates
          </Typography>
        </Box>
        
        <Box sx={{ flex: 1, textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          <Box
            sx={{
              width: 48,
              height: 48,
              bgcolor: '#f3e8ff',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mx: 'auto',
            }}
          >
            <Inventory sx={{ fontSize: 24, color: '#7c3aed' }} />
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary' }}>
            Workflow Automation
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Streamline operations from order to fulfillment
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Button
          onClick={onNext}
          variant="contained"
          size="large"
          endIcon={<ArrowForward />}
          sx={{
            width: '100%',
            background: 'linear-gradient(90deg, #3b82f6 0%, #6366f1 100%)',
            py: 1.5,
            fontSize: '1.125rem',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            '&:hover': {
              background: 'linear-gradient(90deg, #1d4ed8 0%, #4338ca 100%)',
            },
          }}
        >
          Let's Go
        </Button>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Takes 3 minutes • Set up your first win fast
        </Typography>
      </Box>
    </Box>
  );
};

export default LandingPage;
