import React, { useState } from "react";
import logo from "../../images/heladoLogo.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CartWidget from "./CartWidget";
import {
  AppBar,
  Box,
  IconButton,
  List,
  ListItemButton,
  SwipeableDrawer,
  Toolbar,
  Typography,
} from "@mui/material";

function NavBar(props) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation(); // Obten la ubicación actual

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const listItems = [
    { value: "Inicio", to: "/" },
    { value: "Productos", to: "/items" },
    { value: "Contacto", to: "/contacto" },
  ];

  return (
    <AppBar
      sx={{
        width: "100%",
        top: 0,
        zIndex: 100,
        transition: "all 0.7s",
      }}
      position="static"
      color="primary"
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: { xs: "space-evenly", lg: "space-around" },
        }}
      >
        <Link
          to="/"
          style={{
            zIndex: 10,
          }}
        >
          <Box
            sx={{
              width: { xs: "40px", sm: "55px", md: "65px" },
              padding: "10px 0",
            }}
          >
            <img
              src={logo}
              width={"100%"}
              loading="lazy"
              alt="Logo de Helado para pagina de Heladeria"
            />
          </Box>
        </Link>

        <Box display={{ xs: "block", md: "none" }}>
          <IconButton
            color="secondary"
            edge="start"
            aria-label="menu"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
        </Box>
        <List
          sx={{
            display: { xs: "none", md: "flex" },
            gap: "1rem",
            padding: "0",
            fontFamily: "fontFamily.nav",
          }}
          component="nav"
          aria-label="main mailbox folders"
        >
          {listItems.map((e) => {
            const isSelected = location.pathname === e.to;
            return (
              <ListItemButton
                key={e.value}
                component={NavLink}
                to={e.to}
                onClick={handleDrawerClose}
                selected={isSelected}
              >
                <Typography
                  color={isSelected ? "secondary.main" : "text.primary"}
                >
                  {e.value}
                </Typography>
              </ListItemButton>
            );
          })}
        </List>
        <Link to={"/cart"}>
          <CartWidget />
        </Link>
      </Toolbar>
      <SwipeableDrawer
        anchor="top"
        open={drawerOpen}
        onClose={handleDrawerClose}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "primary.main",
            height: { xs: "64px", sm: "79px" },
          }}
          role="presentation"
          onClick={handleDrawerClose}
          onKeyDown={handleDrawerClose}
          component={"div"}
        >
          <List sx={{ display: "flex" }}>
            {listItems.map((e) => {
              const isSelected = location.pathname === e.to;
              return (
                <ListItemButton
                  sx={{ justifyContent: "center" }}
                  key={e.value}
                  component={NavLink}
                  to={e.to}
                  onClick={handleDrawerClose}
                  selected={isSelected}
                >
                  <Typography
                    color={isSelected ? "secondary.main" : "text.primary"}
                  >
                    {e.value}
                  </Typography>
                </ListItemButton>
              );
            })}
          </List>
        </Box>
      </SwipeableDrawer>
    </AppBar>
  );
}

export default NavBar;
