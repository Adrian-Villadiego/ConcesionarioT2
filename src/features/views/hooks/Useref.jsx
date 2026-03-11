import { useRef } from "react";
import { Card, CardContent, Typography, Button, TextField } from "@mui/material";

export const Useref = () => {
  const inputRef = useRef();

  const enfocar = () => {
    inputRef.current.focus();
  };

  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <CardContent>

        <Typography variant="h6">useRef</Typography>

        <TextField
          inputRef={inputRef}
          label="Nombre"
          fullWidth
          sx={{ mt:2 }}
        />

        <Button
          variant="contained"
          onClick={enfocar}
          sx={{ mt:2 }}
        >
          Enfocar input
        </Button>

      </CardContent>
    </Card>
  );
};