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
import { combos } from "../data/Combos.js";

function ComboCard({ combo }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { title, subtitle, price, description, wines, meats, sweets } = combo;

  return (
    <Card
      sx={{
        backgroundColor: "#f5e6d3",
        borderRadius: "24px",
        p: 3,
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        width: "100%",
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
            fontSize: { xs: "1.5rem", md: "2rem" },
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
            fontSize: { xs: "0.875rem", md: "1.2rem" },
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
              px: 3,
              py: 1.5,
              fontSize: "1rem",
              fontWeight: "600",
              textTransform: "none",
            }}
          >
            {price}
          </Button>

          <IconButton
            onClick={() => setIsExpanded(!isExpanded)}
            sx={{
              width: 40,
              height: 40,
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


        <Collapse in={isExpanded} timeout="auto" >
          <Typography
            sx={{
              fontSize: "0.875rem",
              color: "#5c1a1a",
              mb: 2,
              lineHeight: 1.625,
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
          width: 40,
          height: 40,
          backgroundColor: color,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
      </Box>

      <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
        {items.map((item, index) => (
          <Typography
            key={index}
            sx={{ fontSize: { xs: "0.75rem", md: "0.875rem" } }}
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
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <Box sx={{ width: "100%" }}>
          <Box
            component="img"
            src="Lote 2025.png"
            alt="Lotes Navideños 2025"
            sx={{ width: "100%", height: "auto" }}
          />
        </Box>

        {/* 🔹 Grid perfectamente responsivo */}
        <Grid
          container
          spacing={10}
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
              }}
            >
              <Box sx={{ width: "100%", maxWidth: 510 }}>
                <ComboCard combo={combo} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <br /><br /> <br /><br />

    </Container>
  );
};

export default PackSection;
