import { Box, Typography, Grid, Divider, Stack } from "@mui/material";

export const Customization = () => {
  return (
    <Box
      sx={{
        width: "100%",
        m: 0,
        p: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      background: "linear-gradient(to bottom, #7C0D14 10%, #721416 60%, #721416 100%)",
        py: { xs: 6, md: 10 },
      }}
    >
      <Grid
        container
        spacing={{ xs: 6, md: 8 }}
        alignItems="center"
        justifyContent="center"
        sx={{
          maxWidth: "1200px",
          px: { xs: 3, md: 8 },
          width: "100%",
          m: 0,
        }}
      >
        {/* Imagen redonda */}
        <Grid item xs={12} md={5} sx={{ textAlign: "center" }}>
          <Box
            component="img"
            src="/brindis.jpg"
            alt="Brindis"
            sx={{
              width: { xs: "240px", sm: "300px", md: "400px" },
              height: { xs: "240px", sm: "300px", md: "400px" },
              borderRadius: "50%",
              border: "6px solid #b87070",
              objectFit: "cover",
              boxShadow: "0 0 30px rgba(0,0,0,0.4)",
            }}
          />
        </Grid>

        {/* Texto */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h3"
            sx={{
              color: "#fff5e1",
              fontWeight: 600,
              fontFamily: "Lora, serif",
              mb: 4,
              textAlign: { xs: "center", md: "left" },
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            ¿Cómo funciona?
          </Typography>

          <Stack spacing={3}>
            {/* Paso 1 */}
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <Box
                  component="img"
                  src="/star-icon.svg"
                  alt="estrella"
                  sx={{
                    width: "28px",
                    height: "28px",
                    mr: 1.5,
                  }}
                />
                <Typography
                  variant="h5"
                  sx={{
                    color: "#fff5e1",
                    fontWeight: 600,
                     fontFamily: "Lora, serif",
                    fontSize: { xs: "1.3rem", md: "1.5rem" },
                  }}
                >
                  Elige tu Opción
                </Typography>
              </Box>
              <Typography
                sx={{
                  color: "#f1d0d0",
                  fontSize: "1rem",
                  pl: 5,
                   fontFamily: "Lora, serif",
                  mb: 2,
                }}
              >
                Selecciona el lote de Navidad que más te guste.
              </Typography>
              <Divider sx={{ bgcolor: "#d4a5a5", opacity: 0.3 }} />
            </Box>

            {/* Paso 2 */}
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <Box
                  component="img"
                  src="/star-icon.svg"
                  alt="estrella"
                  sx={{
                    width: "28px",
                    height: "28px",
                    mr: 1.5,
                  }}
                />
                <Typography
                  variant="h5"
                  sx={{
                    color: "#fff5e1",
                    fontWeight: 600,
                    fontSize: { xs: "1.3rem", md: "1.5rem" },
                     fontFamily: "Lora, serif",
                  }}
                >
                  Personaliza Tu Selección
                </Typography>
              </Box>
              <Typography
                sx={{
                  color: "#f1d0d0",
                  fontSize: "1rem",
                  fontFamily: "Lora, serif",
                  pl: 5,
                  mb: 2,
                }}
              >
                Agrega tus productos favoritos a la canasta o lote.
              </Typography>
              <Divider sx={{ bgcolor: "#d4a5a5", opacity: 0.3 }} />
            </Box>

            {/* Paso 3 */}
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <Box
                  component="img"
                  src="/star-icon.svg"
                  alt="estrella"
                  sx={{
                    width: "28px",
                    height: "28px",
                    mr: 1.5,
                  }}
                />
                <Typography
                  variant="h5"
                  sx={{
                    color: "#fff5e1",
                    fontWeight: 600,
                     fontFamily: "Lora, serif",
                    fontSize: { xs: "1.3rem", md: "1.5rem" },
                  }}
                >
                  ¡Listo para Celebrar!
                </Typography>
              </Box>
              <Typography
                sx={{
                  color: "#f1d0d0",
                  fontSize: "1rem",
                   fontFamily: "Lora, serif",
                  pl: 5,
                }}
              >
                ¡Contáctanos para hacer tu pedido y discutir los detalles de
                entrega!
              </Typography>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Customization;
