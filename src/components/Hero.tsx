import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

export default function Hero() {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: 'fit-content',
          border: (theme) => `1px solid ${theme.palette.divider}`,
          borderRadius: 1,
          bgcolor: 'background.paper',
          color: 'text.secondary',
          '& svg': {
            m: 1.5,
          },
          '& hr': {
            mx: 0.5,
          },
        }}
      >
        <h2 className="hero-text-subtitle">Start Your Journey</h2>
        <Divider orientation="vertical" variant="middle" flexItem />
        <h2 className="hero-text-subtitle">See Your Path</h2>
        <Divider orientation="vertical" variant="middle" flexItem />
        <h2 className="hero-text-subtitle">Set Your Goals</h2>
        <Divider orientation="vertical" variant="middle" flexItem />
      </Box>
    </div>
  );
}