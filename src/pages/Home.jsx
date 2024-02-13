import { Box, Typography, useMediaQuery, Button } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import {  createTheme } from "@mui/material/styles";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const theme = createTheme();
function Home() {
  const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      sx={{
        display: "flex",
        margin: 0,
        padding: isMediumScreen ? "25px 70px" : "0",
      }}
    >
      <Box
        sx={{
          backgroundImage: "linear-gradient(to bottom, white, transparent)",
          borderRadius: 4,
          padding: "25px 20px",
        }}
      >
        <Grid container columns={{ xs: 12, sm: 12, md: 12 }}>
          <Grid item xs={12}>
            <Box
              p={2}
              textAlign="center"
              sx={{ display: { xs: "flex", md: "none" } }}
            >
              <img
                src="./homeImg1.png"
                alt="image"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Box>
          </Grid>
          <Grid xs={12} sm={12} md={6}>
            <Box
              sx={{
                padding: "25px 20px",
              }}
            >
              <Typography variant="h3" gutterBottom color="#0a56f1">
                Diversifying the Designs of Digital World
              </Typography>

              <Typography variant="body1" paragraph color="black" fontSize={21}>
                Explorogent International Services Private Limited (EISPL) is
                one of the most famous companies in the sector of Web and Mobile
                Development. In the market, EISPL has a strong presence in
                providing quality services to its clients
              </Typography>
              <Typography variant="body1" paragraph color="black" fontSize={21}>
                EISPL is convinced that one should diversify the offering, given
                the changing needs of the clients. That is why we engage in
                multiple projects and activities. We also possess knowledge in
                web development, app development, UI/UX design, as well as
                digital marketing.
              </Typography>

              <Button
                sx={{
                  borderRadius: "30px",
                  backgroundColor: "#e68f50",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#eb8765",
                  },
                  padding:2,
                  mr: 1,
                  
                }}
              >
                <LocalPhoneIcon sx={{ background: "white",color:"#eb8765",borderRadius:3,mr:1 }} />
                Book a Call
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              p={2}
              textAlign="center"
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <img
                src="./homeImg1.png"
                alt="image"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Home;
