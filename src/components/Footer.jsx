import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link,
} from "@mui/material";
import { motion } from "framer-motion";
import { Phone, Email, LocationOn, Language } from "@mui/icons-material";

const iconStyle = {
  minWidth: 36,
  color: "#f7e7c6",
  fontSize: "1.3rem",
};

const textStyle = {
  fontFamily: "'Lora', serif",
  fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
  color: "#f7e7c6",
  lineHeight: 1.6,
};

// ---
export const Footer = () => {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "120vh",
        background: "#981b1e",
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
      {/* Imagen de fondo */}
      <Box
        component="img"
        src="contraportada2.png"
        alt="Decoración navideña"
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "1500px",
          objectFit: "cover",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "rgba(0, 0, 0, 0.25)",
          zIndex: 1,
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          zIndex: 2,
          width: "100%",
          maxWidth: "800px",
          padding: "16px",
        }}
      >
        {/* --- Sección de contacto --- */}
        <Box sx={{ mb: 8, textAlign: { xs: "center", sm: "left" } }}>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Lora, serif",
              flexDirection: { xs: "column", sm: "row" },
              fontWeight: 700,
              fontSize: { xs: "1.7rem", sm: "2rem", md: "2.2rem" },
              color: "#f7e7c6",
              mb: 3,
            }}
          >
            Contáctanos
          </Typography>

          <List dense>
            <ListItem disablePadding>
              <ListItemIcon sx={iconStyle}>
                <Phone sx={{ fontSize: "inherit" }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Link
                    href="tel:+34971620940"
                    sx={{ ...textStyle, textDecoration: "none", color: "inherit" }}
                  >
                    +34 971 62 09 40
                  </Link>
                }
              />
            </ListItem>

            <ListItem disablePadding>
              <ListItemIcon sx={iconStyle}>
                <Email sx={{ fontSize: "inherit" }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Link
                    href="mailto:tienda@bodegacanrubi.com"
                    sx={{ ...textStyle, textDecoration: "none", color: "inherit" }}
                  >
                    tienda@bodegacanrubi.com
                  </Link>
                }
              />
            </ListItem>

            <ListItem disablePadding sx={{ alignItems: "flex-start", mt: 0.5 }}>
              <ListItemIcon sx={{ ...iconStyle, mt: 0.5 }}>
                <LocationOn sx={{ fontSize: "inherit" }} />
              </ListItemIcon>
              <ListItemText
                primary="Plaça Nova, 26 – 07320 Santa Maria del Camí"
                secondary="Illes Balears, España"
                primaryTypographyProps={{ style: textStyle }}
                secondaryTypographyProps={{
                  style: { ...textStyle, opacity: 0.85, fontSize: { xs: "0.9rem", sm: "1rem" } },
                }}
              />
            </ListItem>

            <ListItem disablePadding>
              <ListItemIcon sx={iconStyle}>
                <Language sx={{ fontSize: "inherit" }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Link
                    href="https://www.bodegacanrubi.com"
                    target="_blank"
                    rel="noopener"
                    sx={{ ...textStyle, textDecoration: "none", color: "inherit" }}
                  >
                    www.bodegacanrubi.com
                  </Link>
                }
              />
            </ListItem>
          </List>
        </Box>

        {/* --- Eslogan centrado --- */}
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Lora, serif",
            fontWeight: 600,
            color: "#fce8b2",
            textShadow: "2px 2px 8px rgba(0,0,0,0.4)",
            fontSize: { xs: "1.8rem", sm: "2.4rem", md: "2.8rem" },
          }}
        >
          ¡Celebra la Navidad con elegancia y sabor!
        </Typography>

        {/* Logo centrado */}
        <Box sx={{ mt: 4 }}>
          <Box
            component="img"
            src="logo-blanco.png"
            alt="Bodega Can Rubí"
            sx={{
              width: { xs: 180, sm: 220, md: 260 },
              filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.5))",
              zIndex: 2,
            }}
          />
        </Box>
      </motion.div>
    </Box>
  );
};

export default Footer;
