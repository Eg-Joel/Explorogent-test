import { Box, Typography, useMediaQuery, } from "@mui/material";
import React from "react";
import { createTheme } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import PersonIcon from '@mui/icons-material/Person';
import PeopleIcon from '@mui/icons-material/People';
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import FolderSpecialRoundedIcon from '@mui/icons-material/FolderSpecialRounded';
import WorkHistoryRoundedIcon from '@mui/icons-material/WorkHistoryRounded';

const theme = createTheme();
const datas = [
    { name: "user-Centric Approach", icon: PersonIcon },
    { name: "Customer Satisfaction", icon: PeopleIcon },
    { name: "Intergrating FeedBack", icon: PersonAddAltRoundedIcon },
    { name: "High Quality Products", icon: FolderSpecialRoundedIcon },
    { name: "On-Time Product Delivery", icon: WorkHistoryRoundedIcon },
  ];
function WorkPage() {
    const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div>
      <Box
        sx={{
          marginTop: 3,
          padding: isMediumScreen ? "25px 70px" : "0",
        }}
      >
        <Box>
          <Typography variant="h3" gutterBottom color="#e68f50"  textAlign="center">
            Stay Ahead!
          </Typography>
          <Typography
            variant="body1"
            paragraph
            color="black"
            fontSize={21}
            textAlign="center"
          >
            showcasing our proficiency across various facets of the digital
            platform
          </Typography>
        </Box>

        <Box
        sx={{ padding: "25px 70px"}}>
        <Grid container columns={{ xs: 12, sm: 12, md: 12 }}>
              {datas.map((item, index) => (
                <Grid item xs={12} sm={6} md={4}>
                  <Box
                    key={index}
                  
                    sx={{
                      border: "1px solid white",
                      borderRadius: 9,
                      padding:2,
                      margin: "20px 10px",
                      boxShadow:" 0px 10px 15px rgba(198, 214, 250, 1)",
                      display:"flex",
                      backgroundImage: "linear-gradient(to right, #e3eafa, transparent )",
                      justifyContent:"space-between"
                    }}
                  >
                 <item.icon sx={{ background:"white", borderRadius:2, height:90,width:90,}} />
                    <Typography
                      variant="h3"
                      paragraph
                      color="#0a56f1"
                      fontSize={30}
                      textAlign={"center"}
                    >
                      {item.name}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default WorkPage;
