import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            MUI
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default DrawerAppBar;

// import React, { useState } from "react";
// import logo from "../../images/heladoLogo.png";
// import menuBurgerIcono from "../../images/menuBurger.png";
// import "remixicon/fonts/remixicon.css";
// import CartWidget from "./CartWidget";
// import { Link, NavLink } from "react-router-dom";
// import "./NavBar.css";

// function HeaderComp(props) {
//   //FUNCION CLICK PARA MENU BURGER
//   const [clicked, setClicked] = useState(false);
//   const handleClick = () => {
//     setClicked(!clicked);
//   };

//   return (
//     <header className="header">
//       <nav className="navegador">
//         {/* LOGO */}
//         <Link className="linkLogo" to="/">
//           <img
//             className="logoImg"
//             src={logo}
//             alt="Logo de Helado para pagina de Heladeria"
//           />
//         </Link>

//         {/* MENU BURGER */}
//         <div className="contenedorBurger" onClick={handleClick}>
//           <img
//             className="iconoBurger"
//             src={menuBurgerIcono}
//             alt="Menu Hamburguesa"
//           />
//         </div>

//         {/* LISTA DESORDENADA */}
//         <ul
//           className={`listaDesordenada ${clicked ? "toggleBurger" : ""}`}
//           id="lista"
//         >
//           <li>
//             <NavLink
//               onClick={handleClick}
//               to={"/"}
//               activeclassname="active"
//               className="link"
//             >
//               Inicio
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               onClick={handleClick}
//               to={"/items"}
//               activeclassname="active"
//               className="link"
//             >
//               Productos
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               onClick={handleClick}
//               to={"/contacto"}
//               activeclassname="active"
//               className="link"
//             >
//               Contacto
//             </NavLink>
//           </li>

//           <div className="redesNav">
//             <a href="https://www.instagram.com/felipejuaneda/">
//               <i className="ri-instagram-line"></i>
//             </a>
//             <a href="https://web.whatsapp.com/">
//               <i className="ri-whatsapp-line"></i>
//             </a>
//             <a href="https://www.facebook.com/felipe.juaneda">
//               <i className="ri-facebook-circle-line"></i>
//             </a>
//           </div>
//         </ul>

//         {/* LOGO CARRITO */}
//         <NavLink className="linkCarrito" to={"/cart"}>
//           <CartWidget />
//         </NavLink>
//       </nav>
//     </header>
//   );
// }
// export default HeaderComp;
