import { Button, Box, Typography, Checkbox, Paper } from '@mui/material';
import { ArrowForward, ArrowBack } from '@mui/icons-material';
import { SalesChannelStepProps } from './types';

const SalesChannelStep = ({ data, updateData, onNext, onPrev }: SalesChannelStepProps) => {
  const options = [
    { id: "ecommerce", label: "Shopify or other ecommerce site", description: "We'll sync your online store automatically" },
    { id: "marketplaces", label: "Amazon, Walmart, or other marketplaces", description: "Connect and control pricing across platforms" },
    { id: "b2b", label: "B2B (email, phone, portal orders)", description: "Streamline wholesale and direct sales" },
    { id: "manual", label: "Manual orders (trade shows, spreadsheets)", description: "Digitize and automate your current process" },
    { id: "retail", label: "Retail or POS", description: "Sync in-store and online inventory" },
    { id: "not_selling", label: "Not selling yet", description: "We'll prepare you for launch day" },
  ];

  const handleToggle = (optionId: string) => {
    const currentChannels = data.salesChannels;
    const newChannels = currentChannels.includes(optionId)
      ? currentChannels.filter(id => id !== optionId)
      : [...currentChannels, optionId];
    
    updateData("salesChannels", newChannels);
  };

  const canProceed = data.salesChannels.length > 0;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Box sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Typography variant="h2" sx={{ color: 'text.primary' }}>
          Where do you sell today?
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          Select all that apply. We'll configure the right integrations to centralize your operations.
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        {options.map((option) => (
          <Paper
            key={option.id}
            elevation={0}
            sx={{
              border: 1,
              borderColor: data.salesChannels.includes(option.id) ? 'primary.main' : 'grey.300',
              borderRadius: 2,
              p: 2,
              cursor: 'pointer',
              transition: 'border-color 0.2s, background-color 0.2s',
              bgcolor: data.salesChannels.includes(option.id) ? 'primary.50' : 'transparent',
              '&:hover': {
                bgcolor: data.salesChannels.includes(option.id) ? 'primary.100' : 'grey.50',
              },
            }}
            onClick={() => handleToggle(option.id)}
          >
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
              <Checkbox
                checked={data.salesChannels.includes(option.id)}
                onChange={() => {}}
                sx={{ mt: 0.5 }}
              />
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 500, color: 'text.primary' }}>
                  {option.label}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {option.description}
                </Typography>
              </Box>
            </Box>
          </Paper>
        ))}
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', pt: 3 }}>
        <Button 
          variant="outlined" 
          onClick={onPrev} 
          startIcon={<ArrowBack />}
          sx={{ 
            borderColor: 'grey.300', 
            color: 'text.secondary',
            '&:hover': {
              bgcolor: 'grey.50',
            },
          }}
        >
          Back
        </Button>
        <Button 
          onClick={onNext} 
          disabled={!canProceed}
          variant="contained"
          endIcon={<ArrowForward />}
          sx={{
            background: 'linear-gradient(90deg, #3b82f6 0%, #6366f1 100%)',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            '&:hover': {
              background: 'linear-gradient(90deg, #1d4ed8 0%, #4338ca 100%)',
            },
          }}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default SalesChannelStep;
