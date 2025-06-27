import { useState } from "react";
import {
  Button,
  Box,
  Typography,
  Paper,
  Tooltip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import Grid from '@mui/material/Grid';
import {
  ArrowForward,
  ArrowBack,
  CloudUpload,
  FlashOn,
  CheckCircle,
  Description,
  HelpOutline,
  Inventory
} from '@mui/icons-material';
import { ProductImportStepProps } from './types';

const ProductImportStep = ({ data, updateData, onNext, onPrev }: ProductImportStepProps) => {
  const [importMethod, setImportMethod] = useState<string>("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [sampleProducts] = useState([
    { sku: "WID-001", name: "Wireless Headphones", qty: 150 },
    { sku: "LTP-256", name: "Gaming Laptop", qty: 25 },
    { sku: "MUG-BLU", name: "Coffee Mug - Blue", qty: 200 }
  ]);

  const handleMethodSelect = (method: string) => {
    setImportMethod(method);
    updateData("productImport", method);

    setTimeout(() => {
      setShowSuccess(true);
    }, 1500);
  };

  if (showSuccess) {
    return (
      <Box sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 3 }}>
        <Box
          sx={{
            width: 64,
            height: 64,
            bgcolor: '#d1fae5',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mx: 'auto',
          }}
        >
          <CheckCircle sx={{ fontSize: 32, color: '#059669' }} />
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography variant="h2" sx={{ color: 'text.primary' }}>
            {importMethod === "csv" ? "Products Imported Successfully!" :
              importMethod === "quickbooks" ? "QuickBooks Connected!" :
                "Sample Data Loaded!"}
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            {importMethod === "csv"
              ? "Your product catalog is now loaded and ready to sync across channels."
              : importMethod === "quickbooks"
                ? "Your QuickBooks inventory data is now syncing automatically."
                : "You're all set with sample products to explore the system."
            }
          </Typography>
        </Box>

        <Paper sx={{ bgcolor: 'grey.50', p: 2 }}>
          <Typography variant="h6" sx={{ color: 'text.primary', mb: 2 }}>
            {importMethod === "sample" ? "Sample products loaded:" : "Preview of imported products:"}
          </Typography>
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600 }}>SKU</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Product Name</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Stock</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sampleProducts.map((product, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{ fontWeight: 500 }}>{product.sku}</TableCell>
                    <TableCell sx={{ color: 'text.secondary' }}>{product.name}</TableCell>
                    <TableCell sx={{ color: '#059669', fontWeight: 500 }}>{product.qty} in stock</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', pt: 2 }}>
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
            variant="contained"
            endIcon={<ArrowForward />}
            sx={{
              background: 'linear-gradient(90deg, #3b82f6 0%, #6366f1 100%)',
              '&:hover': {
                background: 'linear-gradient(90deg, #1d4ed8 0%, #4338ca 100%)',
              },
            }}
          >
            Continue Setup
          </Button>
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Box sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Typography variant="h2" sx={{ color: 'text.primary' }}>
          Bring In Your Products, Your Way
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          Choose the method that works best for you. You can always add more products later.
        </Typography>
      </Box>

      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Grid container spacing={3} sx={{ maxWidth: 900, mx: 'auto' }}>
          {/* CSV Card */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Paper
              elevation={0}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid',
                borderColor: 'grey.300',
                borderRadius: 2,
                p: 3,
                cursor: 'pointer',
                transition: 'all 0.2s',
                '&:hover': {
                  borderColor: '#3b82f6',
                  bgcolor: 'rgba(59, 130, 246, 0.05)',
                },
              }}
              onClick={() => handleMethodSelect("csv")}
            >
              <Box sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    bgcolor: '#dbeafe',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                  }}
                >
                  <CloudUpload sx={{ fontSize: 24, color: '#3b82f6' }} />
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary', mb: 1 }}>
                    Upload CSV File
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Import your existing product list from a spreadsheet or export file.
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5 }}>
                  <Description sx={{ fontSize: 12, color: 'text.secondary' }} />
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    SKU, Name, Quantity format
                  </Typography>
                  <Tooltip title="Required columns: SKU, Product Name, Quantity. Optional: Price, Description, Category">
                    <HelpOutline sx={{ fontSize: 12, color: 'text.secondary' }} />
                  </Tooltip>
                </Box>
              </Box>
            </Paper>
          </Grid>

          {/* QuickBooks Card */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Paper
              elevation={0}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid',
                borderColor: 'grey.300',
                borderRadius: 2,
                p: 3,
                cursor: 'pointer',
                transition: 'all 0.2s',
                '&:hover': {
                  borderColor: '#059669',
                  bgcolor: 'rgba(5, 150, 105, 0.05)',
                },
              }}
              onClick={() => handleMethodSelect("quickbooks")}
            >
              <Box sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 2 }}>
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
                  <FlashOn sx={{ fontSize: 24, color: '#059669' }} />
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary', mb: 1 }}>
                    Connect to QuickBooks
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Automatically sync your existing inventory data and keep everything up to date.
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5 }}>
                  <FlashOn sx={{ fontSize: 12, color: 'text.secondary' }} />
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    Real-time sync enabled
                  </Typography>
                  <Tooltip title="Requires QuickBooks Online with inventory tracking enabled">
                    <HelpOutline sx={{ fontSize: 12, color: 'text.secondary' }} />
                  </Tooltip>
                </Box>
              </Box>
            </Paper>
          </Grid>

          {/* Sample Data Card */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Paper
              elevation={0}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid',
                borderColor: 'grey.300',
                borderRadius: 2,
                p: 3,
                cursor: 'pointer',
                transition: 'all 0.2s',
                '&:hover': {
                  borderColor: '#7c3aed',
                  bgcolor: 'rgba(124, 58, 237, 0.05)',
                },
              }}
              onClick={() => handleMethodSelect("sample")}
            >
              <Box sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 2 }}>
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
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary', mb: 1 }}>
                    Start with Sample Data
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Explore the system with pre-loaded sample products. Perfect for getting started quickly.
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5 }}>
                  <Inventory sx={{ fontSize: 12, color: 'text.secondary' }} />
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    Ready to explore immediately
                  </Typography>
                  <Tooltip title="Includes sample SKUs, names, and quantities. You can replace with real data anytime">
                    <HelpOutline sx={{ fontSize: 12, color: 'text.secondary' }} />
                  </Tooltip>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', pt: 2, alignItems: 'center' }}>
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
        <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center', flex: 1 }}>
          Select an import method to continue
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductImportStep;
