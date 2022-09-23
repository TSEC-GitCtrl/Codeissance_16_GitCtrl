import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ProfilePic from "./ProfilePic.js";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import {
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  Container,
} from "@material-ui/core";
import { DashboardData } from "../Dashboard_data/DashboardData/DashboardData.js";
// import Grievance from "../Grievance/Grievance.js";
// import ChangePassword from "../Form/ChangePassword.js";
import ViewProfile from "../Profile/ViewProfile.js";
import NotesIcon from "@mui/icons-material/Notes";
import PeopleIcon from "@mui/icons-material/People";
import EditIcon from "@mui/icons-material/Edit";
import PasswordIcon from "@mui/icons-material/Password";

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open, icon }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const menuItem = [
  {
    text: "Dashboard",
    icon: <DashboardIcon sx={{ color: "#00263b" }} />,
  },
  {
    text: "Lodge Grievance",
    icon: <NotesIcon sx={{ color: "#00263b" }} />,
  },
  {
    text: "View Grievance",
    icon: <PeopleIcon sx={{ color: "#00263b" }} />,
  },
  {
    text: "View Profile",
    icon: <EditIcon sx={{ color: "#00263b" }} />,
  },
  {
    text: "Change Password",
    icon: <PasswordIcon sx={{ color: "#00263b" }} />,
  },
];

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const mdTheme = createTheme();
export function DashboardContent() {
  const icon = document.getElementById("left-icon");
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(true);
    document.getElementById("left-icon").style.visibility = "visible";
  };
  const handleDrawerClose = () => {
    setOpen(false);
    document.getElementById("left-icon").style.visibility = "hidden";
  };

  const [active, setActive] = React.useState("");

  const drawer = (
    <div>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          marginTop: "0px",
          px: [1],
        }}
      >
        <ChevronLeftIcon
          onClick={handleDrawerClose}
          id="left-icon"
          sx={{ visibility: "hidden" }}
          icon={icon}
        />
      </Toolbar>
      <Divider />
      <List>
        {menuItem.map((item) => (
          <ListItem key={item.text} button onClick={() => setActive(item.text)}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <Divider />
            <ListItemText primary={item.text} />
            <Divider />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <ThemeProvider theme={mdTheme}>
      <Box>
        <CssBaseline />
        <Toolbar
          sx={{
            pr: "24px",
            background: "#00263b", // keep right padding when drawer closed
            color: "white",
          }}
          className="appbar"
          open={open}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Dashboard
          </Typography>
          <IconButton color="inherit">
            <Badge color="secondary" sx={{ width: "100%" }}>
              <ProfilePic />
            </Badge>
          </IconButton>
        </Toolbar>
        <Box sx={{ display: "flex", height: "400px" }}>
          <Drawer className="draw" variant="permanent" open={open}>
            {drawer}
          </Drawer>
          {active === "" && (
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <h1>Welcome to User Dashboard</h1>

              <section className="third-section">
                <div className="sub-third-section">
                  <div className="mini-box first-box">
                    <Link to="/admin">
                      <img src="https://pgportal.gov.in/Images/iconHome/register.png" />
                      <p className="third-section-p">Admin</p>
                    </Link>
                  </div>
                  <div className="mini-box second-box">
                    <Link to="/teachers">
                      <img src="https://pgportal.gov.in/Images/iconHome/status.png" />
                      <p className="third-section-p">Teachers</p>
                    </Link>
                  </div>
                  <div className="mini-box third-box">
                    <Link to="/students">
                      <img src="https://pgportal.gov.in/Images/iconHome/contact.png" />
                      <p className="third-section-p">Students</p>
                    </Link>
                  </div>
                </div>
              </section>
            </Box>
          )}
          {active === "Dashboard" && (
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <DashboardData />
            </Box>
          )}
          {/* {active === "Lodge Grievance" && (
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <Grievance />
            </Box>
          )} */}
          {/* {active === "View Grievances" && (
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <Grievance />
            </Box>
          )} */}
          {active === "View Profile" && (
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <ViewProfile />
            </Box>
          )}
          {/* {active === "Change Password" && (
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <ChangePassword />
            </Box>
          )} */}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Admin() {
  return <DashboardContent />;
}
