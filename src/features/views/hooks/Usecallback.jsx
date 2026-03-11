import { useState, useCallback } from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

export const Usecallback = () => {

  const [clicks, setClicks] = useState(0);

  const mostrar = useCallback(() => {
    setClicks((prev) => prev + 1);
  }, []);

  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <CardContent>

        <Typography variant="h6">
          useCallback
        </Typography>

        <Typography sx={{ mt:1 }}>
          Veces presionado:
        </Typography>

        <Typography variant="h4">
          {clicks}
        </Typography>

        <Button
          variant="contained"
          onClick={mostrar}
          sx={{ mt: 2 }}
        >
          Presionar
        </Button>

      </CardContent>
    </Card>
  );
};