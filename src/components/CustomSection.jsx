import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { Person } from '@mui/icons-material';

export const CustomSection = () => {
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
          padding: '50px 10px 45px ',
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
              fontWeight: 700,
              fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.4rem' },
              fontFamily: "Lora, serif",
              marginBottom: '20px',
              lineHeight: 2,
              color: '#fff',
            }}
          >
            Personalización disponbile{' '}
            <Typography></Typography>
            <Box
              component="span"
              sx={{
                fontFamily: "Lora, serif",
                fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.9rem' },
                fontWeight: 'bold',
                fontStyle: 'italic',
                color: '#f5d06a',
              }}
            >
              ¡Crea tu lote o cesta navideña única!
            </Box>


            <Typography></Typography>
            <Box
              component="span"
              sx={{
                fontWeight: 'bold',
                fontWeight: 500,
                fontStyle: 'italic',
              }}
            >
              Estos son algunos de nuestros lotes, pero {' '}
              <Box
                component="span"
                sx={{
                  color: "#fff",
                  fontFamily: "Lora, serif",
                  fontWeight: 800,
                  fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.9rem' },
                }}
              >
                puedes adaptarlo a tu gusto
              </Box>
              <br />
              con nuestra amplia variedad de productos y precios. <br /> Los productos fuera de Bodega Can Rubí pueden variar, pero siempre
              <Typography>
                <Box
                  component="span"
                  sx={{
                    fontWeight: 'bold',
                    fontFamily: "Lora, serif",
                    fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.9rem' },
                    fontWeight: 800,
                    fontStyle: 'italic',
                  }}
                >garantizamos calidad equivalente.</Box><br />
              </Typography>
            </Box>

          </Typography>


        </Container>
      </Box>


    </Box>
  );
};

export default CustomSection;
