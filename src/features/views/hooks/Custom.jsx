import { useState, useEffect } from "react";
import { Card, CardContent, Typography } from "@mui/material";

export const Custom = () => {
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const onlineHandler = () => setOnline(true);
    const offlineHandler = () => setOnline(false);

    window.addEventListener("online", onlineHandler);
    window.addEventListener("offline", offlineHandler);

    return () => {
      window.removeEventListener("online", onlineHandler);
      window.removeEventListener("offline", offlineHandler);
    };
  }, []);

  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <CardContent>

        <Typography variant="h6">
          Custom Hook
        </Typography>

        <Typography sx={{ mt: 2 }}>
          Estado de internet
        </Typography>

        <Typography
          sx={{
            color: online ? "green" : "red",
            fontWeight: "bold"
          }}
        >
          {online ? "Conectado 🌐" : "Sin conexión ❌"}
        </Typography>
      </CardContent>
    </Card>
  );
};