import { useState } from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

export const Usestate = () => {

  const [color, setColor] = useState("white");

  return (
    <Card
      sx={{
        height: 180,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        bgcolor: color,
        transition: "0.3s"
      }}
    >
      <CardContent>

        <Typography variant="h6">useState</Typography>

        <Typography variant="body2">
          Cambia el color de la tarjeta
        </Typography>

        <Button
          variant="contained"
          onClick={() => setColor("lightblue")}
          sx={{ mt: 2 }}
        >
          Cambiar color
        </Button>

      </CardContent>
    </Card>
  );
};