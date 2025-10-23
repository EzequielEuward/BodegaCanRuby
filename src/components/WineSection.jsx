import React from "react";
import { Box, Typography } from "@mui/material";

export const WineSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row" },
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
          flex: { xs: "0 0 auto", sm: "0 0 auto", md: 1 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: { xs: "center", md: "flex-start" },
          textAlign: { xs: "center", sm: "center", md: "justify" },
          px: { xs: 3, sm: 6, md: 10 },
          py: { xs: 4, sm: 4, md: 0 },
          color: "#fff",
          width: { xs: "100%", sm: "100%", md: "auto" },
          maxWidth: { xs: "100%", sm: "100%", md: "600px" },
        }}
      >
        {/* Frase principal */}
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Lora, serif",
            fontSize: { xs: "20px", sm: "24px", md: "26px", lg: "28px" },
            lineHeight: 1.6,
            mb: 4,
            textAlign: { xs: "center", sm: "center", md: "justify" },
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
            textAlign: { xs: "center", sm: "center", md: "left" },
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
            textAlign: { xs: "center", sm: "center", md: "left" },
          }}
        >
          por persona
        </Typography>
      </Box>

      {/* Contenedor de la imagen */}
      <Box
        sx={{
          flex: { xs: "0 0 auto", sm: "0 0 auto", md: 1 },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: { 
            xs: "100%", 
            sm: "100%", 
            md: "100%" 
          },
          height: { 
            xs: "auto", 
            sm: "auto", 
            md: "auto" 
          },
          maxWidth: { 
            xs: "400px", 
            sm: "500px", 
            md: "none" 
          },
          mt: { xs: 4, sm: 4, md: 0 },
          ml: { md: 4 },
          px: { xs: 3, sm: 6, md: 0 },
          pb: { xs: 4, sm: 4, md: 0 },
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src="/foto2.jpg"
          alt="Cata de vinos"
          sx={{
            width: "100%",
            height: { 
              xs: "250px", 
              sm: "300px", 
              md: "600px",
              lg: "0PX" 
            },
            maxWidth: "100%",
            objectFit: "cover",
            boxShadow: { xs: "0 4px 20px rgba(0,0,0,0.3)", md: "0 4px 20px rgba(0,0,0,0.3)" },
          }}
        />
      </Box>
    </Box>
  );
};

export default WineSection;