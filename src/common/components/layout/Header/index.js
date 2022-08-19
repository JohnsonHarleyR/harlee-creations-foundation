import { connect } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import CornerLogo from '../logo/CornerLogo';
import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import TopNav from './subcomponents/TopNav';
import { NavPages } from '../../../constants/nav-pages';

const Header = ({
  theme,
  showMobileMenu,
  children,
}) => {

  const [menuDisplay, setMenuDisplay] = useState(<></>);

  useEffect(() => {
    if (!showMobileMenu) {
      setMenuDisplay(
        <TopNav 
          theme={theme}
          pages={NavPages}
        />
      );
    } else {
      setMenuDisplay(
        <></>
      );
    }
    console.log(`mobile? `, showMobileMenu);
  }, [showMobileMenu]);

  return (
    <AppBar
      className='header'
      sx={{backgroundColor:theme.bgHeaderColor}}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton onClick={() => {}} sx={{ p: 0 }}>
                <CornerLogo
                  textColor={theme.cornerLogoTextColor}
                  iconColor={theme.cornerLogoIconColor}
                />
            </IconButton>
          </Box>

            {menuDisplay}


        </Toolbar>
      </Container>
    </AppBar>
  );
}

const mapStateToProps = ({layout, user}) => {
  return {
    theme: layout.theme,
    showMobileMenu: isMobile,
  };
}

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Header);