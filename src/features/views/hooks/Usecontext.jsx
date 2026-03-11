import { createContext, useContext, useState, useEffect } from "react";
import { Card, CardContent, Typography, Button, Stack } from "@mui/material";

const UserContext = createContext();

const MostrarUsuario = () => {
  const { nombre, estado, hora } = useContext(UserContext);

  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <CardContent>

        <Typography variant="h6">
          useContext - Tiempo Real
        </Typography>

        <Stack spacing={1}>
          <Typography>
            Usuario: {nombre}
          </Typography>

          <Typography>
            Estado: {estado}
          </Typography>
        </Stack>

      </CardContent>
    </Card>
  );
};

export const Usecontext = () => {

  const [estado, setEstado] = useState("En línea");
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  const cambiarEstado = () => {
    setEstado(prev => prev === "En línea" ? "Ausente" : "En línea");
  };

  return (
    <UserContext.Provider value={{ nombre: "Adrian", estado, hora }}>
      <Stack spacing={2}>
        <MostrarUsuario />
        <Button variant="contained" onClick={cambiarEstado}>
          Cambiar Estado
        </Button>
      </Stack>
    </UserContext.Provider>
  );
};