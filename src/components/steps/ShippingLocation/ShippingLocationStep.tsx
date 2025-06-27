import { Button, Box, Typography, Radio, RadioGroup, FormControlLabel, Paper } from '@mui/material';
import { ArrowForward, ArrowBack, Home, Business, LocalShipping, Schedule } from '@mui/icons-material';
import { ShippingLocationStepProps } from './types';

const ShippingLocationStep = ({ data, updateData, onNext, onPrev }: ShippingLocationStepProps) => {
  const options = [
    { 
      id: "one_location", 
      label: "One location", 
      description: "We'll set up streamlined warehouse management and shipping integrations.",
      icon: Home,
      color: "sky"
    },
    { 
      id: "multiple_warehouses", 
      label: "Multiple warehouses", 
      description: "Advanced multi-location tracking with smart allocation rules.",
      icon: Business,
      color: "emerald"
    },
    { 
      id: "third_party", 
      label: "3PL or Amazon FBA", 
      description: "Seamless integration with third-party logistics providers.",
      icon: LocalShipping,
      color: "violet"
    },
    { 
      id: "not_shipping", 
      label: "Not shipping yet", 
      description: "We'll prepare your fulfillment setup for when you're ready to launch.",
      icon: Schedule,
      color: "amber"
    },
  ];

  const handleSelect = (optionId: string) => {
    updateData("shippingLocation", optionId);
  };

  const canProceed = data.shippingLocation !== "";

  const getIconColor = (option: any, isSelected: boolean) => {
    if (isSelected) return '#3b82f6'; // blue-600
    switch (option.color) {
      case "emerald": return '#059669'; // emerald-600
      case "violet": return '#7c3aed'; // violet-600
      case "amber": return '#d97706'; // amber-600
      default: return '#0284c7'; // sky-600
    }
  };

  const getIconBgColor = (option: any, isSelected: boolean) => {
    if (isSelected) return '#dbeafe'; // blue-100
    switch (option.color) {
      case "emerald": return '#d1fae5'; // emerald-100
      case "violet": return '#f3e8ff'; // violet-100
      case "amber": return '#fef3c7'; // amber-100
      default: return '#e0f2fe'; // sky-100
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Box sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Typography variant="h2" sx={{ color: 'text.primary' }}>
          Where do you fulfill orders?
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          We'll configure the right fulfillment workflow for your operations.
        </Typography>
      </Box>

      <RadioGroup value={data.shippingLocation} onChange={(e) => handleSelect(e.target.value)}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        {options.map((option) => {
          const IconComponent = option.icon;
          const isSelected = data.shippingLocation === option.id;
          
          return (
              <Paper
              key={option.id}
                elevation={0}
                sx={{
                  border: isSelected ? 2 : 1,
                  borderColor: isSelected ? 'primary.main' : 'grey.300',
                  borderRadius: 2,
                  p: 2.5,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  bgcolor: isSelected ? 'primary.50' : 'transparent',
                  '&:hover': {
                    bgcolor: isSelected ? 'primary.100' : 'grey.50',
                  },
                }}
                onClick={() => handleSelect(option.id)}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: getIconBgColor(option, isSelected),
                    }}
                  >
                    <IconComponent sx={{ fontSize: 24, color: getIconColor(option, isSelected) }} />
                  </Box>
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary', mb: 0.5, wordBreak: 'break-word' }}>
                      {option.label}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', wordBreak: 'break-word' }}>
                      {option.description}
                    </Typography>
                  </Box>
                  <Radio
                    checked={isSelected}
                    value={option.id}
                    onChange={() => handleSelect(option.id)}
                    sx={{ ml: 2 }}
                    inputProps={{ 'aria-label': option.label }}
                  />
                </Box>
              </Paper>
          );
        })}
        </Box>
      </RadioGroup>

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
          Set Up Fulfillment
        </Button>
      </Box>
    </Box>
  );
};

export default ShippingLocationStep;
