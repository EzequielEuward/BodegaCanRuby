// WavyDivider.jsx
import React from "react";
import { Box } from "@mui/material";

export const WavyDivider = ({
  position = "bottom", // "top" | "bottom"
  color = "#f6e3b4",
  waveHeight = 40,
  flip = false,
  zIndex = 1,
}) => {
  
  // 👇 AQUÍ DEFINIMOS EL PATH QUE GENERASTE
  // Este es el atributo "d" de tu SVG
  const pathString = 
    "M0,192L60,208C120,224,240,256,360,250.7C480,245,600,203,720,176C840,149,960,139,1080,138.7C1200,139,1320,149,1380,154.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z";

  // (El <svg...> que tenías suelto aquí arriba se eliminó)

  return (
    <Box
      sx={{
        position: "absolute",
        left: 0,
        right: 0,
        [position]: 0,
        height: `${waveHeight}px`, // El Box define la altura y "corta" la ola
        overflow: "hidden",
        zIndex: zIndex,
        transform: flip ? "scaleY(-1)" : "none",
      }}
    >
      {/* Este SVG usa el viewBox del generador (0 0 1440 320).
        'preserveAspectRatio="none"' es CLAVE para que la ola
        se estire para llenar el Box (que tiene tu 'waveHeight').
      */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320" // Usamos el viewBox del generador
        preserveAspectRatio="none"
        style={{
          width: "100%",
          height: "100%", // Hacemos que el SVG llene el Box
          display: "block",
        }}
      >
        <path
          d={pathString} // ¡Aquí usamos tu path!
          fill={color} // ¡Y aquí usamos el color de las props!
          fillOpacity="1"
        />
      </svg>
    </Box>
  );
};

export default WavyDivider;