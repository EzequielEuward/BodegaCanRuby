import React, { useState } from 'react';
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

export const CestaCompletaSection = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const sections = [
        {
            icon: <LocalBar />,
            color: "#4a7c2e",
            items: [
                "1 Bot La Mar de Bé Sauvignon Blanc",
                "1 Bot La Mar de Bé Cuvée",
                "1 Bot Es Padrí",
                "1 Bot Cava Gran Palas",
                "1 Bot Hierbas Rubí Semi 70cl",
            ],
        },
        {
            icon: <Restaurant />,
            color: "#b83838",
            items: [
                "1 Jamón Serrano Reserva Sierra Morena 7.5kg",
                "1 Chorizo Ibérico Vela 250gr",
                "1 Sardinas en Aceite 115gr",
                "1 Bolsa Sal Mediterránea 250gr",
                "1 Crema Balsámica 250gr",
                "1 Cuña Queso Semi Binigarba 360gr",
                "1 Aceitunas Bernard 250gr",
                "1 Aceite Bernard Virgen Extra 500ml",
            ],
        },
        {
            icon: <Cake />,
            color: "#d4843e",
            items: [
                "1 Chocolate Simón Coll 85gr",
                "1 Bote Barquillos Pico Artesanos Cacao 175gr",
                "1 Almendra Tostada 500gr",
                "1 Turrón Duro Can Guixé 200gr",
                "1 Turrón Blando Can Guixé 200gr",
                "1 Turrón Choco Crujiente Pico 200gr",
                "1 Surtido Tradicional Navidad La Confitera 300gr",
            ],
        },
    ];

    return (
        <Box
            sx={{
                width: '100%',
                overflow: 'hidden',
                position: 'relative',
            }}
        >

            {/* --- Sección de introducción --- */}
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 3,
                    padding: { xs: '60px 10px 40px', md: '100px 10px 60px' },
                    textAlign: 'center',
                    zindex: 0,
                    color: '#e6c88a',
                background: 'linear-gradient(#7f1416ff, transparent 30%)',
                }}
            >
                <Container maxWidth="md">
                    <Typography
                        variant="h5"
                        component="p"
                        sx={{
                            fontWeight: 300,
                            fontFamily: "Lora, serif",
                            marginBottom: '20px',
                            lineHeight: 1.6,
                            color: '#fff',
                            fontSize: { xs: '1.1rem', md: '1.5rem' },
                        }}
                    >
                        Descubre nuestra{' '}
                        <Box
                            component="span"
                            sx={{
                                fontWeight: 'bold',
                                fontStyle: 'italic',
                                color: '#f5d06a',
                            }}
                        >
                            Cesta Navideña
                        </Box>
                        , la opción perfecta para tu{' '}
                        <Box
                            component="span"
                            sx={{
                                fontWeight: 'bold',
                                fontStyle: 'italic',
                            }}
                        >
                            sorteo empresarial
                        </Box>
                        .
                    </Typography>

                    <Typography
                        variant="h4"
                        component="p"
                        sx={{
                            fontWeight: 300,
                            fontFamily: "Georgia, 'Times New Roman', serif",
                            fontStyle: 'italic',
                            color: '#fff',
                            lineHeight: 1.6,
                            fontSize: { xs: '1.3rem', md: '2rem' },
                        }}
                    >
                        ¡Sorprende y premia a tus colaboradores con{' '}
                        <Box
                            component="span"
                            sx={{
                                fontWeight: 'bold',
                                color: '#e2f0a6',
                            }}
                        >
                            el regalo que todos desearán ganar
                        </Box>
                        !
                    </Typography>
                </Container>
            </Box>

            {/* --- Sección principal con contenido --- */}
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 3,
                    width: '100%',
                    py: { xs: 4, md: 8 },
                    px: { xs: 2, md: 4 }
                }}
            >
                <Grid
                    container
                    spacing={4}
                    alignItems="center"
                    justifyContent="center"
                    sx={{ maxWidth: "1200px", mx: "auto" }}
                >
                    {/* CARD IZQUIERDA */}
                    <Grid item xs={12} md={5}>
                        <Card
                            sx={{
                                backgroundColor: "#f5e6d3",
                                borderRadius: "24px",
                                p: { xs: 3, md: 4 },
                                boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                            }}
                        >
                            <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
                                <Typography
                                    variant="h4"
                                    sx={{
                                        fontSize: { xs: "1.8rem", md: "2rem" },
                                        color: "#5c1a1a",
                                        fontWeight: 700,
                                        fontFamily: "Lora, serif",
                                        mb: 1,
                                    }}
                                >
                                    Cesta de Navidad
                                </Typography>

                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        mb: 1,
                                    }}
                                >
                                    <Button
                                        variant="contained"
                                        sx={{
                                            backgroundColor: "#5c1a1a",
                                            "&:hover": { backgroundColor: "#7a2424" },
                                            color: "white",
                                            borderRadius: "9999px",
                                            px: 4,
                                            py: 1.2,
                                            fontSize: "1rem",
                                            fontWeight: "600",
                                            textTransform: "none",
                                        }}
                                    >
                                        169 € + IVA
                                    </Button>

                                    <IconButton
                                        onClick={() => setIsExpanded(!isExpanded)}
                                        sx={{
                                            width: 42,
                                            height: 42,
                                            borderRadius: "50%",
                                            border: "2px solid #5c1a1a",
                                            color: "#5c1a1a",
                                            "&:hover": {
                                                backgroundColor: "#5c1a1a",
                                                color: "white",
                                            },
                                        }}
                                    >
                                        {isExpanded ? <ExpandLess /> : <ExpandMore />}
                                    </IconButton>
                                </Box>

                                <Collapse in={isExpanded} timeout="auto" sx={{ mt: 2 }}>
                                    <Box sx={{ color: "#5c1a1a" }}>
                                        {sections.map((section, idx) => (
                                            <Box
                                                key={idx}
                                                sx={{
                                                    display: "flex",
                                                    gap: 2,
                                                    mb: 3,
                                                    alignItems: "flex-start",
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        flexShrink: 0,
                                                        width: 36,
                                                        height: 36,
                                                        bgcolor: section.color,
                                                        borderRadius: "50%",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        color: "white",
                                                    }}
                                                >
                                                    {section.icon}
                                                </Box>
                                                <Box>
                                                    {section.items.map((item, i) => (
                                                        <Typography
                                                            key={i}
                                                            sx={{
                                                                fontSize: "0.9rem",
                                                                mb: 0.4,
                                                                lineHeight: 1.4,
                                                            }}
                                                        >
                                                            {item}
                                                        </Typography>
                                                    ))}
                                                </Box>
                                            </Box>
                                        ))}
                                    </Box>
                                </Collapse>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* IMAGEN DERECHA */}
                    <Grid item xs={12} md={7} textAlign="center">
                        <Box
                            component="img"
                            src="/Canasta 2025.png"
                            alt="Cesta de Navidad"
                            sx={{
                                width: { xs: "90%", md: "100%" },
                                maxWidth: "600px",
                                height: "auto",
                                mx: "auto",
                                display: "block",
                            }}
                        />
                        <Typography
                            sx={{
                                mt: 2,
                                color: "#5c1a1a",
                                fontSize: { xs: "0.9rem", md: "1rem" },
                                lineHeight: 1.6,
                                fontWeight: 500,
                                maxWidth: "600px",
                                mx: "auto",
                            }}
                        >
                            Le entregamos el cartel con los 100 números para su sorteo y le
                            ofrecemos la opción de recibir un reembolso de 15 € más IVA si
                            decide devolver la cesta vacía después de haber realizado el sorteo.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default CestaCompletaSection;