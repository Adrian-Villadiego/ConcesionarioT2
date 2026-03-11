import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Chip,
  Stack,
  Alert
} from "@mui/material";

import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import DeleteIcon from "@mui/icons-material/Delete";

export const Carrito = ({ carrito = [], setCarrito }) => {

  const [error, setError] = useState(null);

  const handleRemove = (nombre) => {
    try {
      if (!setCarrito) {
        throw new Error("setCarrito no está definido");
      }

      const nuevoCarrito = carrito.filter(
        item => item.nombre !== nombre
      );

      setCarrito(nuevoCarrito);
      setError(null);

    } catch (err) {
      console.error("Error eliminando producto:", err);
      setError("Ocurrió un error al quitar el producto.");
    }
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #ffffff, #2563eb)",
        p: 4,
        color: "#111",
        marginTop: 5
      }}
    >
      <Container maxWidth="lg">

        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 5,
            textAlign: "center",
            color: "black"
          }}
        >
          Mi Carrito
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        {carrito.length === 0 && (
          <Typography align="center" sx={{ fontWeight: "bold" }}>
            No tienes productos en el carrito.
          </Typography>
        )}

        <Grid container spacing={4}>

          {carrito.map((moto, index) => (
            <Grid key={index} size={{ xs: 12, md: 6, lg: 4 }}>

              <Card
                sx={{
                  borderRadius: 4,
                  overflow: "hidden",
                  boxShadow: 6,
                  transition: "0.3s",
                  "&:hover": { transform: "translateY(-6px)" }
                }}
              >

                <CardMedia
                  component="img"
                  height="200"
                  image={moto.imagen}
                  alt={moto.nombre}
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/400x200?text=Imagen+no+disponible";
                  }}
                />

                <CardContent>

                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {moto.nombre}
                    </Typography>

                    <DirectionsBikeIcon color="error" />
                  </Stack>

                  <Typography
                    variant="body1"
                    sx={{
                      mt: 1,
                      fontWeight: "bold",
                      color: "#b91c1c"
                    }}
                  >
                    {moto.precio}
                  </Typography>

                  <Chip
                    label="En carrito"
                    color="info"
                    sx={{ mt: 2 }}
                  />

                  <Stack direction="row" spacing={2} sx={{ mt: 3 }}>

                    <Button
                      variant="contained"
                      color="success"
                      startIcon={<ShoppingCartCheckoutIcon />}
                      fullWidth
                      sx={{
                        borderRadius: 2,
                        fontWeight: "bold"
                      }}
                      onClick={() => {
                        alert("Compra finalizada (simulación)");
                      }}
                    >
                      Finalizar Compra
                    </Button>

                    <Button
                      variant="outlined"
                      color="error"
                      startIcon={<DeleteIcon />}
                      fullWidth
                      sx={{
                        borderRadius: 2,
                        fontWeight: "bold"
                      }}
                      onClick={() => handleRemove(moto.nombre)}
                    >
                      Quitar
                    </Button>

                  </Stack>

                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};