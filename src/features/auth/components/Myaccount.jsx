import React from "react";
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  Button,
  TextField,
  Divider,
  Stack,
  Paper,
  Chip,
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";

export const Myaccount = () => {
  return (
      <Box
        sx={{
          background: "linear-gradient(135deg, #ffffff, #2563eb)",
          p: 4,
          color: "#111",
          marginTop: 5,
        }}
      >
      <Container maxWidth="lg">

        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", mb: 4, textAlign: "center" }}
        >
          Mi Cuenta
        </Typography>

        <Grid container spacing={4}>

          {/* PERFIL */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Card
              sx={{
                borderRadius: 4,
                textAlign: "center",
                boxShadow: 4,
                p: 3,
              }}
            >
              <Avatar
                sx={{
                  width: 90,
                  height: 90,
                  margin: "auto",
                  bgcolor: "#1976d2",
                }}
              >
                <PersonIcon sx={{ fontSize: 45 }} />
              </Avatar>

              <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold" }}>
                Adrián Villadiego
              </Typography>

              <Typography variant="body2" color="text.secondary">
                Cliente Premium
              </Typography>

              <Chip
                icon={<DirectionsBikeIcon />}
                label="Amante de las motos"
                sx={{ mt: 2 }}
                color="primary"
              />

              <Divider sx={{ my: 3 }} />

              <Stack spacing={2}>
                <Button variant="outlined" startIcon={<FavoriteIcon />} fullWidth>
                  Mis Favoritos
                </Button>

                <Button variant="outlined" startIcon={<ShoppingCartIcon />} fullWidth>
                  Mis Compras
                </Button>

                <Button variant="outlined" startIcon={<LockIcon />} fullWidth>
                  Cambiar Contraseña
                </Button>
              </Stack>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 8 }}>
            <Card sx={{ borderRadius: 4, boxShadow: 4 }}>
              <CardContent>

                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 3 }}>
                  Información Personal
                </Typography>

                <Grid container spacing={3}>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField label="Nombre" fullWidth defaultValue="Adrián" />
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField label="Apellido" fullWidth defaultValue="Villadiego" />
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField label="Correo electrónico" fullWidth defaultValue="cliente@email.com" />
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField label="Teléfono" fullWidth defaultValue="+57 300 000 0000" />
                  </Grid>

                  <Grid size={12}>
                    <TextField label="Dirección" fullWidth defaultValue="Medellín, Antioquia" />
                  </Grid>

                </Grid>

                <Box sx={{ mt: 4 }}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{ borderRadius: 3, px: 4 }}
                  >
                    Guardar Cambios
                  </Button>
                </Box>

              </CardContent>
            </Card>

            <Paper
              sx={{
                mt: 4,
                p: 3,
                borderRadius: 4,
                boxShadow: 3,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                Actividad Reciente
              </Typography>

              <Stack spacing={1}>
                <Typography variant="body2">
                  • Agregaste una moto a favoritos
                </Typography>

                <Typography variant="body2">
                  • Compraste una Yamaha R15
                </Typography>

                <Typography variant="body2">
                  • Actualizaste tu información personal
                </Typography>
              </Stack>

            </Paper>

          </Grid>

        </Grid>

      </Container>
    </Box>
  );
};