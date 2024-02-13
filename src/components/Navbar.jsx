import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

const pages = [
  { name: "Home", isActive: false },
  { name: "About Us", isActive: false },
  { name: "Work", isActive: false },
  { name: "Services", isActive: false },
  { name: "Client", isActive: false },
  { name: "Team", isActive: false },
  { name: "Contact Us", isActive: false },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [activeButton, setActiveButton] = useState("Home");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleButtonClick = (pageName) => {
    setActiveButton(pageName);
  };
  return (
    <div>
      <Box
        sx={{
          padding: "25px 70px",
          background:"white"
        }}
      >
        <AppBar
          position="static"
          elevation={0}
          sx={{ backgroundColor: "transparent" }}
        >
          <Toolbar disableGutters>
            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, mr: 1 }}
            >
              <img src="./logo.png" alt="logo" height={50} width={50} />
            </Box>

            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="black"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box
              sx={{
                flexGrow: 0,
                display: { xs: "none", md: "flex" },
                backgroundImage: "linear-gradient(to right, #e3eafa, #fcf4ed)",
                borderRadius: 9,
                gap: 6,
                padding: "0px 20px",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page.name}
                  onClick={() => handleButtonClick(page.name)}
                  sx={{
                    my: 2,
                    color: "black",
                    display: "block",
                    backgroundColor:
                      activeButton === page.name ? "white" : "transparent",
                    borderRadius: 
                      activeButton === page.name ? 9 : 0,
                      boxShadow: activeButton === page.name ? " 0px 10px 15px rgba(0, 0, 0, 0.2)" : "none"
                  }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Navbar;
