import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box
} from "@mui/material";

export const Myfavorities = ({ favoritos, setFavoritos }) => {

  const quitarFavorito = (nombreMoto) => {
    const nuevosFavoritos = favoritos.filter(
      (moto) => moto.nombre !== nombreMoto
    );
    setFavoritos(nuevosFavoritos);
  };

  return (
    <Box sx={{ p: 4, mt: 5 }}>

      <Container>

        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 6,
            textAlign: "center"
          }}
        >
          Mis Favoritos
        </Typography>

        {favoritos.length === 0 ? (
          <Typography textAlign="center">
            No tienes motos favoritas aún.
          </Typography>
        ) : (
          <Grid container spacing={4}>
            {favoritos.map((moto, index) => (
              <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
                <Card
                  sx={{
                    borderRadius: 4,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxShadow: 4
                  }}
                >
                  <CardMedia
                    component="img"
                    image={moto.imagen}
                    alt={moto.nombre}
                    sx={{ height: 220, objectFit: "cover" }}
                  />

                  <CardContent>
                    <Typography variant="h6" fontWeight="bold">
                      {moto.nombre}
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{ color: "#2563eb", fontWeight: "bold", mb: 2 }}
                    >
                      {moto.precio}
                    </Typography>

                    <Box sx={{ display: "flex", gap: 2 }}>

                      <Button
                        variant="contained"
                        fullWidth
                        sx={{
                          borderRadius: 3,
                          backgroundColor: "#0f172a",
                          "&:hover": { backgroundColor: "#1e293b" }
                        }}
                      >
                        Comprar
                      </Button>

                      <Button
                        variant="outlined"
                        color="error"
                        fullWidth
                        onClick={() => quitarFavorito(moto.nombre)}
                        sx={{ borderRadius: 3 }}
                      >
                        Quitar
                      </Button>

                    </Box>

                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};