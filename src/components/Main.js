import {React,useContext} from 'react';
import { Button } from '@mui/material';
import { Typewriter } from 'react-simple-typewriter'
import DiamondIcon from '@mui/icons-material/Diamond';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { ThemeContext } from '../contexts/theme';
const Main = () => {
    let {theme,setTheme} = useContext(ThemeContext)
    return (
        <div id='main' style={{ width: "100%", display: "flex", alignItems: "center", flexDirection: "column", justifySelf: "center", marginTop: "100px" }}>
            <h1 style={{}}>
                Hello My Name Is <span style={{ color: "#1976d2" }}><Typewriter words={['Mohab Ibrahim']} cursor={true} loop={{}} /></span>
            </h1>
            <h2>
                I am Proffesional Frontend Programmer
            </h2>
            <a href="#pros" style={{ textDecorationLine: "none" }}>
                <Button component="label" variant="contained" startIcon={<DiamondIcon />}>
                    My Projects
                </Button>
            </a>
            <div style={{ marginTop: "10px", width: "150px" }}>
                <div id="media" style={{ display: "flex", width: "100%", justifyContent: "space-evenly" }}>
                    <a href="https://twitter.com/Mohab7_Ibrahim" target={'balnk'}>
                        <Button sx={{ color: theme === 'wb' ? "white" : "black" }}>
                            <TwitterIcon />
                        </Button>
                    </a>
                    <a href="https://www.facebook.com/mohab.ibrahim.5070/" target={'balnk'}>
                        <Button sx={{ color: theme === 'wb' ? "white" : "black" }}>
                            <FacebookIcon />
                        </Button>
                    </a>
                    <a href="https://www.instagram.com/mohab004/" target={'balnk'}>
                        <Button sx={{ color: theme === 'wb' ? "white" : "black" }}>
                            <InstagramIcon />
                        </Button>
                    </a>
                    <a href="https://www.youtube.com/@m777ab30" target={'balnk'}>
                        <Button sx={{ color: theme === 'wb' ? "white" : "black" }}>
                            <YouTubeIcon />
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Main;
