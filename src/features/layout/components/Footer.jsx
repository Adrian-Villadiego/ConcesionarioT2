import React from "react";
import {
  Box,
  Container,
  Typography,
  IconButton,
  Link,
} from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#0f172a",
        color: "#fff",
        pt: 3,
        pb: 3,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          <Box sx={{ textAlign: "left", fontSize: "1 rem" }}>
            <Typography variant="h6" gutterBottom>
              Contáctanos
            </Typography>

            <Typography variant="body2" sx={{ mb: 2 }}>
              Medellín, Colombia
            </Typography>

            <Box>
              <IconButton sx={{ color: "#fff" }}>
                <FacebookIcon />
              </IconButton>
              <IconButton sx={{ color: "#fff" }}>
                <InstagramIcon />
              </IconButton>
              <IconButton sx={{ color: "#fff" }}>
                <WhatsAppIcon />
              </IconButton>
              <IconButton sx={{ color: "#fff" }}>
                <EmailIcon />
              </IconButton>
            </Box>
          </Box>
          <Box sx={{ textAlign: "center", fontSize: "1 rem" }}>
            <Typography variant="h6" gutterBottom>
              Ayuda
            </Typography>

            <Link href="#" underline="hover" color="inherit" display="block">
              Preguntas Frecuentes
            </Link>
            <Link href="#" underline="hover" color="inherit" display="block">
              Soporte
            </Link>
            <Link href="#" underline="hover" color="inherit" display="block">
              Términos y Condiciones
            </Link>
            <Link href="#" underline="hover" color="inherit" display="block">
              Política de Privacidad
            </Link>
          </Box>
          <Box sx={{ textAlign: "right", maxWidth: "250px" }}>
            <Typography variant="h6" gutterBottom>
              Sobre Nosotros
            </Typography>

            <Typography
              variant="body2"
              sx={{
                fontSize: "0.85rem",
                lineHeight: 1.7,
                color: "#cbd5e1",
              }}
            >
              Somos una empresa comprometida con la calidad.
              Ofrecemos productos tecnológicos modernos.
              Brindamos atención personalizada y soporte.
              Desarrollado con React y Material UI.
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            borderTop: "1px solid #334155",
            mt: 4,
            pt: 2,
            textAlign: "center",
          }}
        >
          <Typography variant="body2" sx={{ color: "#94a3b8" }}>
            © {new Date().getFullYear()} Adrian Villadiego Berrio | Todos los derechos reservados
          </Typography>
        </Box>

      </Container>
    </Box>
  );
};