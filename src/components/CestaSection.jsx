import React from 'react';
import { Box, Typography, Container } from '@mui/material';

export const CestaSection = () => {
  return (
    <Box
      sx={{
        width: '100%',
        position: 'relative',
        mt: { xs: 1, sm: 1, md: 0, lg: -6 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            position: 'relative',
            padding: {
              xs: '20px 10px',
              sm: '30px 20px',
              md: '40px 20px',
              lg: '60px 20px'
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
              fontFamily: "lora, serif",
              marginBottom: { xs: '15px', md: '20px' },
              lineHeight: 1.6,
              textAlign: 'justify',
              color: '#fff',
              fontSize: {
                xs: '1rem',
                sm: '1.2rem',
                md: '1.4rem',
                lg: '1.5rem'
              }
            }}
          >
            Descubre nuestra{' '}
            <Box
              component="span"
              sx={{
                fontWeight: 'bold',
                fontStyle: 'italic',
                color: '#f5d06a',
              }}
            >
              Cesta Navideña
            </Box>
            , la opción perfecta para tu{' '}
            <Box
              component="span"
              sx={{
                fontWeight: 'bold',
                fontStyle: 'italic',
              }}
            >
              sorteo empresarial
            </Box>
            .
          </Typography>

          <Typography
            variant="h4"
            component="p"
            sx={{
              fontWeight: 300,
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontStyle: 'italic',
              color: '#fff',
              lineHeight: 1.6,
              fontSize: {
                xs: '1rem',
                sm: '1.2rem',
                md: '1.4rem',
                lg: '1.5rem'
              }
            }}
          >
            ¡Sorprende y premia a tus colaboradores con{' '}
            <Box
              component="span"
              sx={{
                fontWeight: 'bold',
                color: '#e2f0a6',
                display: 'block',
                mt: { xs: 1, sm: 0 }
              }}
            >
              el regalo que todos desearán ganar
            </Box>
            !
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default CestaSection;