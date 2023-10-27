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
  Toolbar,
} from "@mui/material";

function NavBar(props) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <AppBar
      sx={{
        width: "100%",
        top: 0,
        zIndex: 100,
        backgroundColor: "#5c6829d4",
        transition: "all 0.7s",
      }}
      position="static"
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
            <MenuIcon />
          </IconButton>
        </Box>
        <List
          sx={{
            display: { xs: "none", md: "flex" },
            gap: "1rem",
            padding: "0",
            color: "#fccc9a",
          }}
          component="nav"
          aria-label="main mailbox folders"
        >
          <ListItemButton
            button
            component={NavLink}
            to="/"
            onClick={handleDrawerClose}
          >
            <ListItemText primary="Inicio" />
          </ListItemButton>
          <ListItemButton
            button
            component={NavLink}
            to="/items"
            onClick={handleDrawerClose}
          >
            <ListItemText primary="Productos" />
          </ListItemButton>
          <ListItemButton
            button
            component={NavLink}
            to="/contacto"
            onClick={handleDrawerClose}
          >
            <ListItemText primary="Contacto" />
          </ListItemButton>
        </List>
        <Link to={"/cart"} className="linkCarrito">
          <CartWidget />
        </Link>
      </Toolbar>
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
        <div
          role="presentation"
          onClick={handleDrawerClose}
          onKeyDown={handleDrawerClose}
        >
          <List>
            <ListItemButton
              component={NavLink}
              to="/"
              onClick={handleDrawerClose}
            >
              <ListItemText primary="Inicio" />
            </ListItemButton>
            <ListItemButton
              component={NavLink}
              to="/items"
              onClick={handleDrawerClose}
            >
              <ListItemText primary="Productos" />
            </ListItemButton>
            <ListItemButton
              component={NavLink}
              to="/contacto"
              onClick={handleDrawerClose}
            >
              <ListItemText primary="Contacto" />
            </ListItemButton>
          </List>
        </div>
      </Drawer>
    </AppBar>
  );
}

export default NavBar;
