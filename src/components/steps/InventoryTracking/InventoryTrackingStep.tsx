import { Button, Box, Typography, Radio, RadioGroup, FormControlLabel, Paper } from '@mui/material';
import { ArrowForward, ArrowBack } from '@mui/icons-material';
import { InventoryTrackingStepProps } from './types';

const InventoryTrackingStep = ({ data, updateData, onNext, onPrev }: InventoryTrackingStepProps) => {
  const options = [
    { id: "none", label: "We don't track inventory yet", description: "Perfect. We'll build your system from the ground up." },
    { id: "spreadsheets", label: "Spreadsheets", description: "Time to eliminate manual errors and save hours each week." },
    { id: "quickbooks", label: "QuickBooks", description: "Excellent. We'll sync seamlessly with your existing setup." },
    { id: "other_tool", label: "Another inventory tool", description: "We'll help you migrate and upgrade your workflow." },
    { id: "fishbowl", label: "Fishbowl Classic or other ERP", description: "Ready to modernize? We specialize in smooth transitions." },
  ];

  const handleSelect = (optionId: string) => {
    updateData("inventoryTracking", optionId);
  };

  const canProceed = data.inventoryTracking !== "";

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Box sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Typography variant="h2" sx={{ color: 'text.primary' }}>
          How do you track inventory now?
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          Don't worry—we'll work with what you have and eliminate the pain points.
        </Typography>
      </Box>

      <RadioGroup value={data.inventoryTracking} onChange={(e) => handleSelect(e.target.value)}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          {options.map((option) => (
            <Paper
              key={option.id}
              elevation={0}
              sx={{
                border: 1,
                borderColor: data.inventoryTracking === option.id ? 'primary.main' : 'grey.300',
                borderRadius: 2,
                p: 2,
                cursor: 'pointer',
                transition: 'border-color 0.2s, background-color 0.2s',
                bgcolor: data.inventoryTracking === option.id ? 'primary.50' : 'transparent',
                '&:hover': {
                  bgcolor: data.inventoryTracking === option.id ? 'primary.100' : 'grey.50',
                },
              }}
              onClick={() => handleSelect(option.id)}
            >
              <FormControlLabel
                value={option.id}
                control={<Radio />}
                label={
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 500, color: 'text.primary' }}>
                      {option.label}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {option.description}
                    </Typography>
                  </Box>
                }
                sx={{ 
                  width: '100%', 
                  m: 0,
                  '& .MuiFormControlLabel-label': {
                    width: '100%',
                  },
                }}
              />
            </Paper>
          ))}
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
          Set Up My System
        </Button>
      </Box>
    </Box>
  );
};

export default InventoryTrackingStep;
