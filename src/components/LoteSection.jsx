import React from 'react';
import { Box, Typography, Container } from '@mui/material';

export const LoteSection = () => {
  return (
    <Box
      sx={{
        width: '100%',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            position: 'relative',
            padding: { 
              xs: '15px 10px', // Reducido
              sm: '20px 20px', // Reducido
              md: '30px 20px', // Reducido
              lg: '40px 20px'  // Reducido
            },
            textAlign: 'center',
            color: '#e6c88a',
          }}
        >
          <Typography
            variant="h5"
            component="p"
            sx={{
              fontWeight: 300,
              fontFamily: "Georgia, 'Times New Roman', serif",
              marginBottom: { xs: '10px', md: '15px' }, // Reducido
              lineHeight: 1.5, // Reducido
              color: '#fff',
              fontSize: {
                xs: '1rem',    // Reducido
                sm: '1.1rem',  // Reducido
                md: '1.3rem',  // Reducido
                lg: '1.5rem'   // Reducido
              }
            }}
          >
            Nuestros{' '}
            <Box
              component="span"
              sx={{
                fontWeight: 'bold',
                fontStyle: 'italic',
                color: '#f5d06a',
              }}
            >
              Lotes Navideños 
            </Box>
            {' '}son la elección perfecta{' '}
            <Box
              component="span"
              sx={{
                fontWeight: 'bold',
                fontStyle: 'italic',
              }}
            >
              para tus regalos de empresas.
            </Box>
          </Typography>

          <Typography
            variant="h4"
            component="p"
            sx={{
              fontWeight: 300,
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontStyle: 'italic',
              color: '#fff',
              lineHeight: 1.5, // Reducido
              fontSize: {
                xs: '1.1rem',  // Reducido
                sm: '1.3rem',  // Reducido
                md: '1.4rem',  // Reducido
                lg: '1.75rem'  // Reducido
              }
            }}
          >
            Haz que esta Navidad sea aún más{' '}
            <Box
              component="span"
              sx={{
                fontWeight: 'bold',
                color: '#e2f0a6',
                display: { xs: 'block', sm: 'inline' },
                mt: { xs: 0.5, sm: 0 } // Reducido
              }}
            >
              especial para tu equipo
            </Box>
            !
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};