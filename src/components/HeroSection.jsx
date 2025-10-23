import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import WavyDivider from "./WavyDivider";

export const HeroSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        background: "#720A10",
        color: "#f7e7c6",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        overflow: "hidden",
        px: 2,
      }}
    >
      {/* Fondo decorativo navideño */}
      <Box
        component="img"
        src="portada.png"
        alt="Decoración navideña"
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      />

      {/* Capa semitransparente para oscurecer fondo */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "rgba(0, 0, 0, 0.25)",
          zIndex: 1,
        }}
      />

      {/* Contenido principal - RESPONSIVE */}
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ width: "100%" }}
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Lora, serif",
              fontStyle: "italic",
              fontWeight: 700,
              color: "#fce8b2",
              mb: 2,
              textShadow: "2px 2px 8px rgba(0,0,0,0.4)",
              whiteSpace: { xs: "normal", sm: "nowrap" },
              fontSize: {
                xs: "1.75rem",
                sm: "2rem",
                md: "2.5rem",
                lg: "3rem"
              },
              lineHeight: { xs: 1.3, sm: 1.2 },
              px: { xs: 1, sm: 2 }
            }}
          >
            Tu brindis navideño {""}
            <Box
              component="span"
              sx={{
                color: "#fce8b2",
                fontFamily: "Lora, serif",

                fontStyle: "italic",
                fontWeight: 500,
              }}
            >
              embieza en {""}
            </Box>
            <Box
              component="span"
              sx={{
                color: "#fce8b2",
                fontFamily: "Lora, serif",

                fontStyle: "italic bold",
                fontWeight: 800,
              }}
            >
              Can Rubí
            </Box>
            .
          </Typography>
          <br />
          <Typography
            variant="h4"
            sx={{
              fontFamily: "'Lora', serif",
              fontWeight: 800,
              mb: 3,
              color: "#fce8b2",
              textShadow: "2px 2px 8px rgba(0,0,0,0.3)",
              fontSize: {
                xs: "1.25rem",
                sm: "1.5rem",
                md: "1.75rem",
                lg: "2.125rem"
              },
              px: { xs: 1, sm: 0 }
            }}
          >
            ¡Descubre  {""}

            <Box
              component="span"
              sx={{
                color: "#fce8b2",
                fontFamily: "Lora, serif",

                fontStyle: "italic",
                fontWeight: 500,
              }}
            >
              nuestros {""}
            </Box>
            <Box
              component="span"
              sx={{
                color: "#fce8b2",
                fontFamily: "Lora, serif",

                fontStyle: "italic bold",
                fontWeight: 800,
              }}
            >
              lotes gourmet y sorprende!
            </Box>
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "'Lora', serif",
              color: "#f7e7c6",
              fontStyle: "italic",
              fontWeight: 500,
              mb: 5,
              fontSize: {
                xs: "1.25rem",
                sm: "1.5rem",
                md: "1.75rem",
                lg: "1.65rem"
              },
              px: { xs: 2, sm: 0 }
            }}
          >
            Detalles únicos para empleados, <br />  clientes o sorteos.
          </Typography>

          {/* Logo */}
          <Box
            component="img"
            src="logo-blanco.png"
            alt="Bodega Can Rubí"
            sx={{
              mt: { xs: 4, sm: 6 },
              width: { xs: 150, sm: 180, md: 200, lg: 220 },
              filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.5))",
            }}
          />
        </motion.div>
      </Container>
    </Box>
  );
};

export default HeroSection;