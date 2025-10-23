import React from "react";
import { Box, Typography } from "@mui/material";

export const WineSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        
        height: "100%",
        minHeight: { xs: "auto", md: "600px" },
      }}
    >
      {/* Contenedor del texto */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: { xs: "center", md: "flex-start" },
          textAlign: { xs: "justify", md: "justify" },
          px: { xs: 3, sm: 6, md: 10 },
          py: { xs: 6, md: 0 },
          color: "#fff",
        }}
      >
        {/* Frase principal */}
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Lora, serif",
            fontSize: { xs: "20px", sm: "24px", md: "26px", lg: "28px" },
            lineHeight: 1.6,
            maxWidth: "600px",
            mb: 4,
            textAlign: "justify",
          }}
        >
          En estas fiestas,{" "}
          <Box component="span" sx={{ fontWeight: "bold", fontStyle: "italic" }}>
            sorprende a tu equipo
          </Box>{" "}
          con un regalo diferente:{" "}
          <Box component="span" sx={{ fontWeight: "bold" }}>
            una Cata de Vinos para grupos
          </Box>{" "}
          en la Tienda Degustación de nuestra bodega.
        </Typography>

        {/* Precio */}
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Lora, serif",
            fontWeight: "bold",
            color: "#ffd18a",
            mb: 1,
            fontSize: { xs: "22px", sm: "26px", md: "30px" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          POR SÓLO 19.84€ + IVA
        </Typography>

        {/* Subtexto */}
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Lora, serif",
            fontSize: { xs: "16px", sm: "18px", md: "20px" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          por persona
        </Typography>
      </Box>

      {/* Imagen del fondo viene desde App.jsx */}
    </Box>
  );
};

export default WineSection;
