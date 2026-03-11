import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  InputBase,
  alpha,
  Badge,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery
} from "@mui/material";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";
import LocalOfferRoundedIcon from "@mui/icons-material/LocalOfferRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

export const Header = ({
  favoritos = 0,
  carrito = 0,
  search = "",
  setSearch
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);

  const menuItems = [
    { text: "Inicio", icon: <HomeRoundedIcon />, path: "/" },
    { text: "Artículos", icon: <Inventory2RoundedIcon />, path: "/Articles" },
    { text: "Ofertas", icon: <LocalOfferRoundedIcon />, path: "/Offers" },
    { text: "Mi Cuenta", icon: <AccountCircleRoundedIcon />, path: "/Myaccount" },
    { text: "Carrito", icon: <ShoppingCartRoundedIcon />, path: "/Carrito" },
    { text: "Favoritos", icon: <FavoriteRoundedIcon />, path: "/Myfavorities" }
  ];

  const renderIconWithBadge = (item) => {
    if (item.text === "Favoritos") {
      return (
        <Badge badgeContent={favoritos} color="error">
          {item.icon}
        </Badge>
      );
    }

    if (item.text === "Carrito") {
      return (
        <Badge badgeContent={carrito} color="primary">
          {item.icon}
        </Badge>
      );
    }

    return item.icon;
  };

  return (
    <>
      <a href="#main-content" style={skipLinkStyle}>
        Saltar al contenido
      </a>

      <AppBar position="fixed" sx={{ background: "#0f172a", boxShadow: 4 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>

            {isMobile && (
              <IconButton
                color="inherit"
                onClick={() => setOpen(true)}
                aria-label="Abrir menú"
              >
                <MenuRoundedIcon />
              </IconButton>
            )}

            <Typography variant="h6" component="h1" sx={{ fontWeight: "bold" }}>
              Concesionario Motos
            </Typography>

            {!isMobile && (
              <Box component="nav" aria-label="Navegación principal">
                <Box
                  component="ul"
                  sx={{
                    display: "flex",
                    gap: 3,
                    listStyle: "none",
                    m: 0,
                    p: 0
                  }}
                >
                  {menuItems.map((item) => (
                    <li key={item.text}>
                      <NavLink to={item.path} style={linkStyle}>
                        {renderIconWithBadge(item)}
                        {item.text}
                      </NavLink>
                    </li>
                  ))}
                </Box>
              </Box>
            )}
          </Box>

          {!isMobile && (
            <Box
              role="search"
              sx={{
                borderRadius: "30px",
                backgroundColor: alpha("#fff", 0.15),
                display: "flex",
                alignItems: "center",
                px: 2,
                width: 280
              }}
            >
              <SearchRoundedIcon sx={{ mr: 1 }} />
              <InputBase
                placeholder="Buscar productos..."
                value={search}
                onChange={(e) => setSearch?.(e.target.value)}
                sx={{ color: "white", width: "100%" }}
              />
            </Box>
          )}
        </Toolbar>

        <Drawer
          anchor="left"
          open={open}
          onClose={() => setOpen(false)}
        >
          <Box sx={{ width: 250 }}>
            <List>
              {menuItems.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton
                    component={NavLink}
                    to={item.path}
                    onClick={() => setOpen(false)}
                  >
                    <ListItemIcon>
                      {renderIconWithBadge(item)}
                    </ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>

      </AppBar>
    </>
  );
};

const linkStyle = {
  display: "flex",
  alignItems: "center",
  gap: "5px",
  textDecoration: "none",
  color: "white",
  fontWeight: "500"
};

const skipLinkStyle = {
  position: "absolute",
  top: "-40px",
  left: 0,
  background: "#000",
  color: "#fff",
  padding: "8px",
  zIndex: 2000,
  textDecoration: "none"
};