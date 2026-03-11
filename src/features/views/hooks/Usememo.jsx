import { useState, useMemo } from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

export const Usememo = () => {

  const [numero,setNumero] = useState(2);

  const cuadrado = useMemo(() => {
    return numero * numero;
  },[numero]);

  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <CardContent>

        <Typography variant="h6">useMemo</Typography>

        <Typography>
          Número: {numero}
        </Typography>

        <Typography>
          Cuadrado: {cuadrado}
        </Typography>

        <Button
          variant="contained"
          onClick={() => setNumero(numero + 1)}
          sx={{ mt:2 }}
        >
          Cambiar número
        </Button>

      </CardContent>
    </Card>
  );
};