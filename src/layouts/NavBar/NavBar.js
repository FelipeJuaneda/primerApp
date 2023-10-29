import React, { useState } from "react";
import logo from "../../images/heladoLogo.png";
import { Link, NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CartWidget from "./CartWidget";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  SwipeableDrawer,
  Toolbar,
  Typography,
} from "@mui/material";

function NavBar(props) {
  const [drawerOpen, setDrawerOpen] = useState(false);

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
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
          >
            <MenuIcon color="secondary" />
          </IconButton>
        </Box>
        <List
          sx={{
            display: { xs: "none", md: "flex" },
            gap: "1rem",
            padding: "0",
          }}
          component="nav"
          aria-label="main mailbox folders"
        >
          {listItems.map((e) => {
            return (
              <ListItemButton
                key={e.value}
                component={NavLink}
                to={e.to}
                onClick={handleDrawerClose}
              >
                <Typography color="secondary">{e.value}</Typography>
              </ListItemButton>
            );
          })}
        </List>
        <Link to={"/cart"} className="linkCarrito">
          <CartWidget />
        </Link>
      </Toolbar>
      <SwipeableDrawer
        anchor="top"
        open={drawerOpen}
        onClose={handleDrawerClose}
      >
        <Box
          sx={{ backgroundColor: (theme) => theme.palette.primary.main }}
          height={64}
          role="presentation"
          onClick={handleDrawerClose}
          onKeyDown={handleDrawerClose}
          component={"div"}
        >
          <List sx={{ display: "flex" }}>
            {listItems.map((e) => {
              return (
                <ListItemButton
                  sx={{ justifyContent: "center" }}
                  key={e.value}
                  component={NavLink}
                  to={e.to}
                  onClick={handleDrawerClose}
                >
                  <Typography color="secondary">{e.value}</Typography>
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
