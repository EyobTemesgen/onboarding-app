import { useState } from "react";
import { 
  Button, 
  Box, 
  Typography, 
  Radio, 
  RadioGroup, 
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { 
  ArrowForward, 
  ArrowBack, 
  Computer, 
  Storage, 
  Close, 
  Event, 
  Email,
  CheckCircle
} from '@mui/icons-material';
import { QuickBooksStepProps } from './types';

const QuickBooksStep = ({ data, updateData, onNext, onPrev }: QuickBooksStepProps) => {
  const [showEnterpriseDialog, setShowEnterpriseDialog] = useState(false);

  const options = [
    { 
      id: "online", 
      label: "Yes: QuickBooks Online", 
      description: "Excellent. We'll sync seamlessly with real-time financial data.",
      icon: Computer,
      color: "green",
      highlight: true
    },
    { 
      id: "desktop", 
      label: "Yes: QuickBooks Desktop", 
      description: "Desktop requires our Advanced enterprise solution for full integration.",
      icon: Storage,
      color: "orange"
    },
    { 
      id: "no", 
      label: "No accounting software yet", 
      description: "Perfect. We'll show you our built-in financial reporting features.",
      icon: Close,
      color: "blue"
    },
    { 
      id: "planning", 
      label: "Planning to use QuickBooks", 
      description: "Smart choice. We'll set up the integration when you're ready.",
      icon: Event,
      color: "purple"
    },
  ];

  const handleSelect = (optionId: string) => {
    if (optionId === "desktop") {
      setShowEnterpriseDialog(true);
    } else {
      updateData("quickBooks", optionId);
    }
  };

  const handleSendInfo = () => {
    // In a real app, this would trigger an API call to notify the sales team
    console.log("Enterprise info request sent for QuickBooks Desktop integration");
    setShowEnterpriseDialog(false);
    updateData("quickBooks", "desktop");
  };

  const canProceed = data.quickBooks !== "";

  const getIconColor = (option: any, isSelected: boolean) => {
    if (isSelected) return '#3b82f6'; // blue-600
    switch (option.color) {
      case "green": return '#059669'; // green-600
      case "orange": return '#ea580c'; // orange-600
      case "purple": return '#7c3aed'; // purple-600
      default: return '#3b82f6'; // blue-600
    }
  };

  const getIconBgColor = (option: any, isSelected: boolean) => {
    if (isSelected) return '#dbeafe'; // blue-100
    switch (option.color) {
      case "green": return '#d1fae5'; // green-100
      case "orange": return '#fed7aa'; // orange-100
      case "purple": return '#f3e8ff'; // purple-100
      default: return '#dbeafe'; // blue-100
    }
  };

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <Box sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography variant="h2" sx={{ color: 'text.primary' }}>
            Do you use QuickBooks for accounting?
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            We'll configure the right financial sync to keep everything connected.
          </Typography>
        </Box>

        <RadioGroup value={data.quickBooks} onChange={(e) => handleSelect(e.target.value)}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            {options.map((option) => {
              const IconComponent = option.icon;
              const isSelected = data.quickBooks === option.id;
              
              return (
                <Paper
                  key={option.id}
                  elevation={0}
                  sx={{
                    border: 1,
                    borderColor: option.highlight ? '#10b981' : (isSelected ? 'primary.main' : 'grey.300'),
                    borderRadius: 2,
                    p: 2.5,
                    cursor: 'pointer',
                    transition: 'border-color 0.2s, background-color 0.2s',
                    bgcolor: isSelected ? 'primary.50' : 'transparent',
                    position: 'relative',
                    '&:hover': {
                      bgcolor: isSelected ? 'primary.100' : 'grey.50',
                    },
                  }}
                  onClick={() => handleSelect(option.id)}
                >
                  {option.highlight && (
                    <Chip
                      label="Most Popular"
                      size="small"
                      sx={{
                        position: 'absolute',
                        top: -8,
                        left: 16,
                        bgcolor: '#10b981',
                        color: 'white',
                        fontSize: '0.75rem',
                      }}
                    />
                  )}
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
              bgcolor: '#3b82f6',
              '&:hover': {
                bgcolor: '#1d4ed8',
              },
            }}
          >
            Complete Setup
          </Button>
        </Box>
      </Box>

      <Dialog 
        open={showEnterpriseDialog} 
        onClose={() => setShowEnterpriseDialog(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Storage sx={{ color: '#ea580c' }} />
          QuickBooks Desktop Integration
        </DialogTitle>
        <DialogContent>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
            QuickBooks Desktop requires our Advanced enterprise solution for full integration capabilities. 
            Our team can show you how this works and discuss pricing options.
          </Typography>
          <Paper sx={{ bgcolor: '#fff7ed', border: '1px solid #fed7aa', borderRadius: 2, p: 2 }}>
            <Typography variant="h6" sx={{ color: '#ea580c', mb: 1 }}>
              What you'll get:
            </Typography>
            <List dense>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircle sx={{ fontSize: 16, color: '#ea580c' }} />
                </ListItemIcon>
                <ListItemText primary="Full QuickBooks Desktop sync" />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircle sx={{ fontSize: 16, color: '#ea580c' }} />
                </ListItemIcon>
                <ListItemText primary="Advanced inventory management" />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircle sx={{ fontSize: 16, color: '#ea580c' }} />
                </ListItemIcon>
                <ListItemText primary="Priority support" />
              </ListItem>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircle sx={{ fontSize: 16, color: '#ea580c' }} />
                </ListItemIcon>
                <ListItemText primary="Custom integrations" />
              </ListItem>
            </List>
          </Paper>
        </DialogContent>
        <DialogActions sx={{ p: 2, gap: 1 }}>
          <Button 
            variant="outlined" 
            onClick={() => setShowEnterpriseDialog(false)}
          >
            Maybe Later
          </Button>
          <Button 
            onClick={handleSendInfo}
            variant="contained"
            startIcon={<Email />}
            sx={{
              bgcolor: '#ea580c',
              '&:hover': {
                bgcolor: '#c2410c',
              },
            }}
          >
            Send Me Info
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default QuickBooksStep;
