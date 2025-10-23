  import React from 'react';
  import { Box, Typography, Container } from '@mui/material';

  export const CestaSection = () => {
    return (
      <Box
        sx={{
          width: '100%',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* --- Contenido principal --- */}
        <Box
          sx={{
            position: 'relative',
            padding: '100px 10px 80px',
            textAlign: 'center',
            color: '#e6c88a',
            overflow: 'hidden',
          }}
        >
          <Container maxWidth="md">
            <Typography
              variant="h5"
              component="p"
              sx={{
                fontWeight: 300,
                fontFamily: "Georgia, 'Times New Roman', serif",
                marginBottom: '20px',
                lineHeight: 1.6,
                color: '#fff',
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
              <Typography></Typography>
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
              }}
            >
              ¡Sorprende y premia a tus colaboradores con{' '}
              <Typography></Typography>
              <Box
                component="span"
                sx={{
                  fontWeight: 'bold',
                  color: '#e2f0a6',
                }}
              >
                el regalo que todos desearán ganar
              </Box>
              !
            </Typography>
          </Container>
        </Box>

      
      </Box>
    );
  };

  export default CestaSection;
