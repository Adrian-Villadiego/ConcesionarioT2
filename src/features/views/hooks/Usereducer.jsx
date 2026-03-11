import { useReducer } from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

const reducer = (state, action) => {
  switch (action.type) {
    case "toggle":
      return { dark: !state.dark };

    default:
      return state;
  }
};

export const Usereducer = () => {

  const [state, dispatch] = useReducer(reducer, { dark: false });

  return (
    <Card
      sx={{
        height: 180,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        bgcolor: state.dark ? "#1e293b" : "#ffffff",
        color: state.dark ? "#ffffff" : "#000000",
        transition: "0.3s"
      }}
    >
      <CardContent>

        <Typography variant="h6">useReducer</Typography>

        <Typography>
          Modo {state.dark ? "Oscuro" : "Claro"}
        </Typography>

        <Button
          variant="contained"
          onClick={() => dispatch({ type: "toggle" })}
          sx={{ mt: 2 }}
        >
          Cambiar modo
        </Button>

      </CardContent>
    </Card>
  );
};