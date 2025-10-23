import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import WavyDivider from "./WavyDivider"; // Ajusta la ruta según tu estructura

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

      {/* Contenido principal */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ zIndex: 2, maxWidth: "800px" }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 600,
            color: "#fce8b2",
            mb: 2,
            textShadow: "2px 2px 8px rgba(0,0,0,0.4)",
          }}
        >
          Tu brindis navideño empieza en{" "}
          <Box component="span" sx={{ color: "#fff" }}>
            Can Rubí
          </Box>
          .
        </Typography>

        <Typography
          variant="h4"
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            mb: 3,
            color: "#fff",
            textShadow: "2px 2px 8px rgba(0,0,0,0.3)",
          }}
        >
          ¡Descubre nuestros lotes gourmet y sorprende!
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontFamily: "'Lora', serif",
            color: "#f7e7c6",
            fontWeight: 400,
            mb: 5,
          }}
        >
          Detalles únicos para empleados, clientes o sorteos.
        </Typography>

        {/* Logo */}
        <Box
          component="img"
          src="logo-blanco.png"
          alt="Bodega Can Rubí"
          sx={{
            mt: 6,
            width: { xs: 180, sm: 220 },
            filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.5))",
            zIndex: 2,
          }}
        />
      </motion.div>
  
    </Box>
  );
};

export default HeroSection;