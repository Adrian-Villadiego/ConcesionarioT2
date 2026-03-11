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

export const Articles = ({ favoritos, setFavoritos, carrito, setCarrito }) => {

  const motos = [
    { nombre: "MT-09", precio: "$40.000.000", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgJrRl12ns788IUVaNbmWujVi7n5RANtdZWw&s" },
    { nombre: "Ducati V4", precio: "$70.000.000", imagen: "https://images.ctfassets.net/8zlbnewncp6f/6U37pFZ1sG6Qwv8HUAp28o/2ee82164507c3cb18a8118f402637f02/motocicleta-ducati-panigale-v4-sp2-plano-general.jpg"},
    { nombre: "YZ 150", precio: "$38.000.000", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxu2ZRuQHVgUE27JltG9DzmQthXtGcHUtn9g&s"},
    { nombre: "Kawasaki Ninja ZX-10R", precio: "$60.500.000", imagen: "https://images.unsplash.com/photo-1609630875171-b1321377ee65"},
    { nombre: "MT-09", precio: "$40.000.000", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgJrRl12ns788IUVaNbmWujVi7n5RANtdZWw&s" },
    { nombre: "Ducati V4", precio: "$70.000.000", imagen: "https://images.ctfassets.net/8zlbnewncp6f/6U37pFZ1sG6Qwv8HUAp28o/2ee82164507c3cb18a8118f402637f02/motocicleta-ducati-panigale-v4-sp2-plano-general.jpg"},
    { nombre: "YZ 150", precio: "$38.000.000", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxu2ZRuQHVgUE27JltG9DzmQthXtGcHUtn9g&s"},
    { nombre: "Kawasaki Ninja ZX-10R", precio: "$60.500.000", imagen: "https://images.unsplash.com/photo-1609630875171-b1321377ee65"},
  ];

  return (
    <Box sx={{ background: "linear-gradient(135deg, #ffffff, #2563eb)", p: 4, color: "#111", mt: 5 }}>
      <Container>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 6, textAlign: "center", color: "#0f172a" }}>
          Nuestras Motocicletas
        </Typography>

        <Grid container spacing={4}>
          {motos.map((moto, index) => {

            const yaAgregado = favoritos.some(fav => fav.nombre === moto.nombre);
            const yaEnCarrito = carrito.some(item => item.nombre === moto.nombre);

            return (
              <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }} sx={{ display: "flex" }}>
                <Card sx={{ borderRadius: 4, boxShadow: 3, transition: "0.3s", height: "100%", display: "flex", flexDirection: "column", "&:hover": { transform: "translateY(-8px)", boxShadow: 10 } }}>

                  <CardMedia component="img" image={moto.imagen} alt={moto.nombre} sx={{ height: 220, objectFit: "cover" }} />

                  <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        {moto.nombre}
                      </Typography>
                      <Typography variant="body1" sx={{ color: "#2563eb", fontWeight: "bold", mt: 1 }}>
                        {moto.precio}
                      </Typography>
                    </Box>

                    <Box sx={{ display: "flex", gap: 2, mt: 3 }}>

                      <Button
                        variant="contained"
                        fullWidth
                        disabled={yaEnCarrito}
                        onClick={() => {
                          if (!yaEnCarrito) {
                            setCarrito([...carrito, { ...moto, estado: "En carrito" }]);
                          }
                        }}
                        sx={{ borderRadius: 3, backgroundColor: "#0f172a", "&:hover": { backgroundColor: "#1e293b" } }}
                      >
                        {yaEnCarrito ? "En carrito" : "Comprar"}
                      </Button>

                      <Button
                        variant="outlined"
                        fullWidth
                        disabled={yaAgregado}
                        onClick={() => {
                          if (!yaAgregado) {
                            setFavoritos([...favoritos, moto]);
                          }
                        }}
                        sx={{ borderRadius: 3 }}
                      >
                        {yaAgregado ? "Agregado" : "Favoritos"}
                      </Button>

                    </Box>
                  </CardContent>

                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};