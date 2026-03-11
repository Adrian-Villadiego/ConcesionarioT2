import React from "react";
import { NavLink } from "react-router-dom";

import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
  Paper
} from "@mui/material";

import SpeedIcon from "@mui/icons-material/Speed";
import SecurityIcon from "@mui/icons-material/Security";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

import { Articles } from "../../views/components/Articles"

export const Content = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(135deg, #ffffff, #2563eb)",
        color: "#111",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        
        <Box
          sx={{
            height: "100vh",
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://img.freepik.com/fotos-premium/parte-trasera-motocicleta-moderna-deportiva-es-negra-hay-humo-fondo-ilustracion-3d_717906-117620.jpg?semt=ais_rp_progressive&w=740&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            color: "white",
            textAlign: "center",
          }}
        >
          <Container>
            <Typography variant="h2" fontWeight="bold" gutterBottom>
              Siente la velocidad
            </Typography>

            <Typography variant="h6" sx={{ opacity: 0.9 }}>
              Descubre las mejores motos deportivas y urbanas
            </Typography>


            <Button
              component={NavLink}
              to="/Articles"
              variant="contained"
              size="large"
              sx={{
                mt: 4,
                backgroundColor: "#ff3d00",
                px: 5,
                py: 1.5,
                fontSize: "1rem",
                borderRadius: "30px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
                "&:hover": {
                  backgroundColor: "#e53935",
                },
              }}
            >
              Explorar Catálogo
            </Button>
          
          </Container>
        </Box>

        <Container sx={{ py: 10 }}>

          <Typography
            variant="h4"
            textAlign="center"
            fontWeight="bold"
            sx={{ mt: 10 }}
            gutterBottom
          >
            ¿Por qué elegirnos?
          </Typography>

          <Grid container spacing={4} sx={{ mt: 4 }}>
            {[
              { icon: <SpeedIcon fontSize="large" />, text: "Motos de alto rendimiento" },
              { icon: <SecurityIcon fontSize="large" />, text: "Garantía y seguridad" },
              { icon: <SupportAgentIcon fontSize="large" />, text: "Soporte personalizado" },
              { icon: <EmojiEventsIcon fontSize="large" />, text: "Más de 10 años de experiencia" },
            ].map((item, index) => (
              <Grid key={index} size={{ xs: 12, md: 3 }}>
                <Paper
                  sx={{
                    p: 4,
                    textAlign: "center",
                    borderRadius: 4,
                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                    },
                  }}
                >
                  <Box sx={{ color: "#ff3d00", mb: 2 }}>
                    {item.icon}
                  </Box>
                  <Typography fontWeight="bold">
                    {item.text}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>

          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            gutterBottom
            sx={{ mt: 12 }}
          >
            Nuestra Empresa
          </Typography>

          <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>

            <Grid size={{ xs: 12, md: 6 }} display="flex" justifyContent="center">
              <Card
                sx={{
                  width: 340,
                  borderRadius: 4,
                  overflow: "hidden",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgQE50X50xR2tem6vC9LCKeNYvgRShQK-fLQ&s"
                  alt="Servicio profesional"
                />
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{ color: "#ff3d00", mb: 2 }}
                  >
                    Misión
                  </Typography>
                  <Typography variant="body2">
                    Ofrecer motocicletas de alta calidad con asesoría
                    profesional y servicio confiable que garantice
                    satisfacción y seguridad.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }} display="flex" justifyContent="center">
              <Card
                sx={{
                  width: 340,
                  borderRadius: 4,
                  overflow: "hidden",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image="https://images.unsplash.com/photo-1609630875171-b1321377ee65"
                  alt="Innovación y libertad"
                />
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{ color: "#ff3d00", mb: 2 }}
                  >
                    Visión
                  </Typography>
                  <Typography variant="body2">
                    Ser el concesionario líder en innovación y excelencia,
                    reconocido por brindar pasión y libertad sobre dos ruedas.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Box sx={{ mt: 12 }}>
            <Paper
              sx={{
                p: 6,
                borderRadius: 5,
                textAlign: "center",
                background: "linear-gradient(135deg, #1e3c72, #2a5298)",
                color: "white",
                boxShadow: "0 15px 40px rgba(0,0,0,0.25)",
              }}
            >
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Repositorio del Proyecto
              </Typography>

              <Typography sx={{ maxWidth: 600, mx: "auto", opacity: 0.9 }}>
                Este proyecto fue desarrollado utilizando React y Material UI.
                Puedes ver el código fuente completo en mi repositorio de GitHub.
              </Typography>

              <Button
                href="https://github.com/Adrian-Villadiego/ConcesionarioT2.git"
                target="_blank"
                variant="contained"
                size="large"
                sx={{
                  mt: 4,
                  backgroundColor: "#ff3d00",
                  px: 5,
                  py: 1.5,
                  borderRadius: "30px",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#e53935",
                  },
                }}
              >
                Ver Repositorio
              </Button>
            </Paper>
          </Box>

        </Container>
      </Box>
    </Box>
  );
};