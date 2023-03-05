import * as React from 'react';
import '../../styles/Footer.css'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

export default function StickyFooter() {
  return (
    <Box className='footer'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        mt: '15px'
      }}
    >
      <Box
        component="footer"
        className='container'
        sx={{
          py: 3,
          px: 2,
          mt: '0',
          backgroundColor: '#000',
        }}
      >
        <Container maxWidth="sm" className='main' sx={{display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'}}>
              <div className='footer__logo'>
                <img className='logo_img' src="https://static-prod.remymartin.com/app/themes/remy/static/img/logo/remy-martin-logo-1-white.svg" alt="Logo" />
              </div>
              <div className='footer__family'>
                <Typography textAlign='center' color='white'><strong>OUR FAMILY</strong></Typography>
                <ul className='family__list'>
                  <li>
                    <a href="#">Alybek Co</a>
                  </li>
                  <li>
                    <a href="#">Rehab</a>
                  </li>
                  <li>
                    <a href="#">Aigerim Watches</a>
                  </li>
                </ul>
              </div>
              <div className='footer__social'>
                <ul className='social__list'>
                  <li>
                    <a href="#">
                      <img src="" alt="error" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="" alt="error" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="" alt="error" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="" alt="error" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className='footer__disclaimer'>
                <Typography color='white' textAlign='center' style={{fontSize: '11px'}}>
                  <strong> ©2023 Monarch & CO
                    <br />
                    Please drink responsibly
                  </strong>
                </Typography>
              </div>
              <div className='footer__nav'>
                <ul className='nav__list'>
                  <li>
                    <a href="#">TERMS AND CONDITIONS</a>
                  </li>
                  <li>
                    <a href="#">PRIVACY POLICY</a>
                  </li>
                  <li>
                    <a href="#">COOKIE POLICY</a>
                  </li>
                  <li>
                    <a href="#">CONTACT</a>
                  </li>
                </ul>
              </div>
        </Container>
      </Box>
    </Box>
  );
}