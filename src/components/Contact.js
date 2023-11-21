import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
export default function Contact() {
  return (
    <>
      <div id='allss' style={{ width: "100%", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", marginTop: '70px' ,marginBottom:"50px"}}>
        <h1>Contact us</h1>
        <p id='ps' style={{ color:'grey' }}>Contact us for more information and Get notified when I publish something new.</p>
        <div style={{width:"80%",display:"flex",flexDirection:"column",alignItems:"left"}}>
          <p style={{ display: "flex", justifyContent: "center", alignItems: "left" }}><TwitterIcon />:<a target={'balnk'} id='al' style={{ textDecorationLine: "none" }} href='https://twitter.com/Mohab7_Ibrahim'>https://twitter.com/Mohab7_Ibrahim</a></p>
          <p style={{ display: "flex", justifyContent: "center", alignItems: "left" }}><FacebookIcon />:<a target={'balnk'} id='al' style={{ textDecorationLine: "none" }} href='https://www.facebook.com/mohab.ibrahim.5070/'>https://www.facebook.com/mohab.ibrahim.5070/</a></p>
          <p style={{ display: "flex", justifyContent: "center", alignItems: "left" }}><InstagramIcon />:<a target={'balnk'} id='al' style={{ textDecorationLine: "none" }} href='https://www.instagram.com/mohab004/'>https://www.instagram.com/mohab004/</a></p>
          <p style={{ display: "flex", justifyContent: "center", alignItems: "left" }}><YouTubeIcon />:<a target={'balnk'} id='al' style={{ textDecorationLine: "none" }} href='https://www.youtube.com/@m777ab30'>https://www.youtube.com/@m777ab30</a></p>
        </div>
      </div>
    </>
  )
}
