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
            Personalización disponbile{' '}
            <Typography></Typography>
            <Box
              component="span"
              sx={{
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
                fontStyle: 'italic',
              }}
            >
              Estos son algunos de nuestros lotes, pero <bold>puedes adaptarlos a tu usto</bold>
              <br />
              con nuestra amplia variedad de productos y precios.
              <Typography>
                Los productos fuera de Bodega Can Rubí pueden variar, pero siempre <bold>garantizamos calidad equivalente</bold>
              </Typography>
            </Box>

          </Typography>


        </Container>
      </Box>


    </Box>
  );
};

export default CustomSection;
