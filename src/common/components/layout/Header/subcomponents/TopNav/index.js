import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export const TopNav = ({
  theme,
  pages,
}) => {
  
  const handleMenuItemClick = () => {

  }

  return (
    <Box className="nav desktop" sx={{ flexGrow: 1 }}>
      {pages.map((page) => {
        console.log(`page: `, page.name);
        return (
        <Button className='nav-item' key={page.name} onClick={handleMenuItemClick}>
          <Typography
            className='nav-item-text'
            textAlign='center'
          >
            {page.name}
          </Typography>
        </Button>);
      })}
    </Box>
  );
}

export default TopNav;