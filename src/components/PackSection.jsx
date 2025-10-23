import { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  IconButton,
  Collapse,
  Card,
  CardContent,
  Container,
} from "@mui/material";
import {
  ExpandLess,
  ExpandMore,
  LocalBar,
  Restaurant,
  Cake,
} from "@mui/icons-material";
import { combos } from "../data/combos";

function ComboCard({ combo }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { title, subtitle, price, description, wines, meats, sweets } = combo;

  return (
    <Card
      sx={{
        backgroundColor: "#f5e6d3",
        borderRadius: "20px",
        p: { xs: 1.75, sm: 2.5 },
        boxShadow: "0 10px 18px -6px rgba(0, 0, 0, 0.12)",
        display: "flex",
        flexDirection: "column",
        width: "90%",
        overflow: "visible",
        minHeight: { xs: 350, sm: 350, md: 200 },
      }}
    >
      <CardContent
        sx={{
          p: 0,
          "&:last-child": { pb: 0 },
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "1.35rem", sm: "1.6rem", md: "2rem" },
            color: "#5c1a1a",
            fontWeight: 700,
            fontFamily: "Lora, serif",
            mb: 1,
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "0.88rem", sm: "0.95rem", md: "1.15rem" },
            color: "#5c1a1a",
            fontWeight: 800,
            fontFamily: "Lora, serif",
            mb: 2,
          }}
        >
          {subtitle}
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2,
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#5c1a1a",
              "&:hover": { backgroundColor: "#7a2424" },
              color: "white",
              borderRadius: "9999px",
              px: { xs: 2.5, sm: 3 },
              py: { xs: 1, sm: 1.5 },
              fontSize: { xs: "0.92rem", sm: "1rem" },
              fontWeight: "600",
              textTransform: "none",
            }}
          >
            {price}
          </Button>

          <IconButton
            onClick={() => setIsExpanded(!isExpanded)}
            sx={{
              width: { xs: 36, sm: 40 },
              height: { xs: 36, sm: 40 },
              borderRadius: "50%",
              border: "2px solid #5c1a1a",
              color: "#5c1a1a",
              "&:hover": { backgroundColor: "#5c1a1a", color: "white" },
            }}
            aria-expanded={isExpanded}
          >
            {isExpanded ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        </Box>

        <Collapse in={isExpanded} timeout="auto">
          <Typography
            sx={{
              fontSize: { xs: "0.85rem", sm: "0.9rem" },
              color: "#5c1a1a",
              mb: 2,
              lineHeight: 1.6,
              whiteSpace: "pre-line",
              wordBreak: "break-word",
            }}
          >
            {description}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              pt: 1,
              color: "#5c1a1a",
            }}
          >
            {wines.length > 0 && (
              <ItemList icon={<LocalBar />} color="#4a7c2e" items={wines} />
            )}
            {meats.length > 0 && (
              <ItemList icon={<Restaurant />} color="#b83838" items={meats} />
            )}
            {sweets.length > 0 && (
              <ItemList icon={<Cake />} color="#d4843e" items={sweets} />
            )}
          </Box>
        </Collapse>
      </CardContent>
    </Card>
  );
}

function ItemList({ icon, color, items }) {
  return (
    <Box sx={{ display: "flex", gap: 1.5 }}>
      <Box
        sx={{
          flexShrink: 0,
          width: { xs: 30, sm: 40 },
          height: { xs: 30, sm: 40 },
          backgroundColor: color,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        {icon}
      </Box>

      <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
        {items.map((item, index) => (
          <Typography
            key={index}
            sx={{
              fontSize: { xs: "0.75rem", sm: "0.82rem", md: "0.9rem" },
              lineHeight: 1.45,
            }}
          >
            {item}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}

export const PackSection = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        py: { xs: 5, sm: 6, md: 7 },
        px: { xs: 3, sm: 4, md: 6 }, 
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 4, md: 3 } }}>
        {/* Imagen de "Lote 2025" */}
        <Box sx={{ width: "100%", textAlign: "center" }}>
          <Box
            component="img"
            src="Lote 2025.png"
            alt="Lotes Navideños 2025"
            sx={{
              width: { xs: "88%", sm: "75%", md: "65%", lg: "55%" },
              maxWidth: "500px",
              height: "auto",
              mx: "auto",
            }}
          />
        </Box>

        {/* Grid de combos */}
        <Grid
          container
          spacing={{ xs: 6, sm: 5, md: 6, lg: 8 }} // spacing mayor en xs para separar filas
          justifyContent="center"
          alignItems="stretch"
        >
          {combos.map((combo, index) => (
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                mb: { xs: 3, sm: 0 }, // margen inferior adicional en móvil
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  maxWidth: { xs: "360px", sm: "400px", md: "450px" },
                  mx: "auto",
                }}
              >
                <ComboCard combo={combo} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Espaciado inferior responsivo */}
      <Box
        sx={{
          height: { xs: "18px", sm: "20px", md: "30px", lg: "40px" },
        }}
      />
    </Container>
  );
};

export default PackSection;
