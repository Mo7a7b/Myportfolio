import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { ThemeContext } from '../contexts/theme';
const pages = [{ n: 'Home', l: '#' }, { n: 'Projects', l: '#pros' }, { n: 'Contact Me', l: '#allss' }];

function ResponsiveAppBar() {
    let {theme,setTheme} = React.useContext(ThemeContext)
    if (theme === 'wb') {
        document.body.style.backgroundColor = 'rgb(231, 224, 224)'
        document.body.style.color = 'black'
    } else {
        document.body.style.backgroundColor = '#333'
        document.body.style.color = 'white'
    }
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    function handleTheme(){
        if (theme === 'wb') {
            setTheme('mo')
            document.body.style.backgroundColor = 'rgb(231, 224, 224)'
            document.body.style.color = 'black'
            localStorage.setItem("theme", 'mo')
        } else {
            setTheme('wb')
            document.body.style.backgroundColor = '#333'
            document.body.style.color = 'white'
            localStorage.setItem("theme", 'wb')
        }
    }
    return (
        <AppBar sx={{ fontFamily: "'Cairo', sans-serif;" }} position="static">
            <Container sx={{ fontFamily: "'Cairo', sans-serif;" }} maxWidth="xl">
                <Toolbar sx={{ fontFamily: "'Cairo', sans-serif;" }} disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            fontFamily: "'Cairo', sans-serif;"
                        }}
                    >
                        MOHAB
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <a href='#' style={{ textDecorationLine: "none" }}>
                                <MenuItem sx={{ fontFamily: "'Cairo', sans-serif;" }} key={1} onClick={handleCloseNavMenu}>
                                    <Typography sx={{ fontFamily: "'Cairo', sans-serif;" }} textAlign="center">Home</Typography>
                                </MenuItem>
                            </a>
                            <a href='#pros' style={{ textDecorationLine: "none" }}>
                                <MenuItem sx={{ fontFamily: "'Cairo', sans-serif;" }} key={1} onClick={handleCloseNavMenu}>
                                    <Typography sx={{ fontFamily: "'Cairo', sans-serif;" }} textAlign="center">My Projects</Typography>
                                </MenuItem>
                            </a>
                            <a href='#allss' style={{ textDecorationLine: "none" }}>
                                <MenuItem sx={{ fontFamily: "'Cairo', sans-serif;" }} key={1} onClick={handleCloseNavMenu}>
                                    <Typography sx={{ fontFamily: "'Cairo', sans-serif;" }} textAlign="center">Contact Me</Typography>
                                </MenuItem>
                            </a>
                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            fontFamily: "'Cairo', sans-serif;"
                        }}
                    >
                        MOHAB
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <a href={page.l} style={{ textDecorationLine: "none" }}>
                                <Button
                                    key={page.n}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block', fontFamily: "'Cairo', sans-serif;" }}
                                >
                                    {page.n}
                                </Button>
                            </a>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip>
                            <IconButton style={{ border:"1px solid black",borderRadius:"50%",padding:"5px"}} onClick={handleTheme} sx={{ p: 0 }}>
                                {theme === 'mo' ? <WbSunnyIcon color={'warning'} />:<DarkModeIcon/>}
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px', fontFamily: "'Cairo', sans-serif;" }}
                            id="menu-appbar"
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                        >
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;