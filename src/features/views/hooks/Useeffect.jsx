import { useState, useEffect } from "react";
import { Card, CardContent, Typography } from "@mui/material";

export const Useeffect = () => {

  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <CardContent>

        <Typography variant="h6">
          useEffect
        </Typography>

        <Typography variant="h4">
          {hora.toLocaleTimeString()}
        </Typography>

      </CardContent>
    </Card>
  );
};