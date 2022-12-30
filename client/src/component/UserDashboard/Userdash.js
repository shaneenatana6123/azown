// import React, { useContext, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
// import propertyContext from '../../context/PropertyContext'
import Myrrprop from './Property/Myrrprop'
import Contected from './You Contacted/Contected'
import Myprofile from './Profile/Myprofile'
// import { leadContext } from '../../context/LeadContext'
// import {Col,Nav,Row, Tab} from 'react-bootstrap';

// const Userdash = () => {
//   const history = useNavigate()
//   const leadcontext = useContext(leadContext)
//   const {old,value}= leadcontext
//     const context = useContext(propertyContext)
//     const {Userrrprop,dash,rrprop}= context
//     useEffect(()=>{
//       if (!localStorage.getItem("token")) {
//         history("/login");
//       }else{
//         // Userrrprop()
//       }

//     },[])
//   return (
//     <div className='container'>
//       <h1 className=' m-4'>User DashBoard</h1>

//       <Tab.Container id="left-tabs-example" defaultActiveKey="first">
//       <Row>
//         <Col sm={2}>
//           <Nav variant="pills" className="flex-column">
//             <Nav.Item>
//               <Nav.Link eventKey="first">Profile</Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link eventKey="second">Property</Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link eventKey="third">You Contacted</Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link eventKey="four">Payment</Nav.Link>
//             </Nav.Item>
//           </Nav>
//         </Col>
//         <Col sm={10}>
//           <Tab.Content>
//             <Tab.Pane eventKey="first">
//                   <Myprofile/>  
//             </Tab.Pane>
//             <Tab.Pane eventKey="second">
//             <Myrrprop/>
//             </Tab.Pane>
//             <Tab.Pane eventKey="third">
//             <Contected/>
//              </Tab.Pane>
//              <Tab.Pane eventKey="four">
//              ....
//              </Tab.Pane>
//           </Tab.Content>
//         </Col>
//       </Row>
//     </Tab.Container>
//     </div>
//   )
// }

// export default Userdash


import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems } from './listItems';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import { Navbar } from 'react-bootstrap';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import StarBorder from '@mui/icons-material/StarBorder';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SettingsPhoneIcon from '@mui/icons-material/SettingsPhone';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import SettingsPhone from '@mui/icons-material/SettingsPhone';
import MapsHomeWork from '@mui/icons-material/MapsHomeWork';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
// import Chart from './Chart';
// import Deposits from './Deposits';
// import Orders from './Orders';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
    
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      fontSize:'1rem',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(false);
  const [fav, setfav] = React.useState(false)
  const [prop,setprop] = React.useState(false)
  const [cont , setcont ] = React.useState(false)
  const [tab, settab] = React.useState(1)
  const toggleDrawer = () => {
    setOpen(!open);
  };
  // const handleClick = () => {
  //   seteOpen(!eopen);
  // };

  return (
    <>

      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar position="absolute" open={open}>
            <Toolbar
              sx={{
                pr: '24px', // keep right padding when drawer closed
              }}
            >
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                sx={{
                  marginRight: '36px',
                  ...(open && { display: 'none' }),
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
                Azown
              </Typography>
              <IconButton color="inherit">
                {/* <Badge badgeContent={4} color="secondary"> */}
                <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
                {/* </Badge> */}
              </IconButton>
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" open={open}>
            <Toolbar
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                px: [1],
              }}
            >
              <IconButton onClick={toggleDrawer}>
                <ChevronLeftIcon />
              </IconButton>
            </Toolbar>
            <Divider />
            <List component="nav">
              <ListItemButton onClick={() => { settab(1) }} >
                <ListItemIcon>
                  <AccountBoxIcon />
                </ListItemIcon>
                <ListItemText primary="Basic Profile" />
              </ListItemButton>


              <ListItemButton onClick={()=>{setfav(!fav)}}>
                <ListItemIcon>
                  <FavoriteIcon />
                </ListItemIcon>
                <ListItemText primary="Favorate" />
                {fav ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={fav} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4  }}>
                    <ListItemIcon>
                      <i class="fa-sharp fa-solid fa-building-user"></i>
                    </ListItemIcon>
                    <ListItemText  primary="Residential Rent" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <i class="fa-solid fa-house-circle-check"></i>
                    </ListItemIcon>
                    <ListItemText primary="Residential Sale" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <i class="fa-solid fa-house-chimney-user"></i>
                    </ListItemIcon>
                    <ListItemText primary="Residential Pg" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <i class="fa-solid fa-user-group"></i>
                    </ListItemIcon>
                    <ListItemText primary="Residential Flat" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                    <i class="fa-solid fa-briefcase"></i>
                    </ListItemIcon>
                    <ListItemText primary="Commertial Rent" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <i class="fa-solid fa-industry"></i>
                    </ListItemIcon>
                    <ListItemText primary="Commertial Sale" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                    <i class="fa-solid fa-map-location-dot"></i>
                    </ListItemIcon>
                    <ListItemText primary="Land/Plot" />
                  </ListItemButton>
                </List>
              </Collapse>
              <ListItemButton onClick={()=>{setcont(! cont)}}>
                <ListItemIcon>
                <SettingsPhone />
                </ListItemIcon>
                <ListItemText primary="You Contacted" />
                { cont ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={cont} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <i class="fa-sharp fa-solid fa-building-user"></i>
                    </ListItemIcon>
                    <ListItemText primary="Residential Rent" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <i class="fa-solid fa-house-circle-check"></i>
                    </ListItemIcon>
                    <ListItemText primary="Residential Sale" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <i class="fa-solid fa-house-chimney-user"></i>
                    </ListItemIcon>
                    <ListItemText primary="Residential Pg" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <i class="fa-solid fa-user-group"></i>
                    </ListItemIcon>
                    <ListItemText primary="Residential Flat" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                    <i class="fa-solid fa-briefcase"></i>
                    </ListItemIcon>
                    <ListItemText primary="Commertial Rent" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <i class="fa-solid fa-industry"></i>
                    </ListItemIcon>
                    <ListItemText primary="Commertial Sale" />
                  </ListItemButton>
                  <ListItemButton  sx={{ pl: 4 }}>
                    <ListItemIcon>
                    <i class="fa-solid fa-map-location-dot"></i>
                    </ListItemIcon>
                    <ListItemText primary="Land/Plot" />
                  </ListItemButton>
                </List>
              </Collapse>
              <ListItemButton onClick={()=>{setprop(!prop)}}>
                <ListItemIcon>
                 <MapsHomeWork/>
                </ListItemIcon>
                <ListItemText primary="My Property" />
                {prop ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={prop} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <i class="fa-sharp fa-solid fa-building-user"></i>
                    </ListItemIcon>
                    <ListItemText primary="Residential Rent" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <i class="fa-solid fa-house-circle-check"></i>
                    </ListItemIcon>
                    <ListItemText primary="Residential Sale" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <i class="fa-solid fa-house-chimney-user"></i>
                    </ListItemIcon>
                    <ListItemText primary="Residential Pg" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <i class="fa-solid fa-user-group"></i>
                    </ListItemIcon>
                    <ListItemText primary="Residential Flat" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                    <i class="fa-solid fa-briefcase"></i>
                    </ListItemIcon>
                    <ListItemText primary="Commertial Rent" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <i class="fa-solid fa-industry"></i>
                    </ListItemIcon>
                    <ListItemText primary="Commertial Sale" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                    <i class="fa-solid fa-map-location-dot"></i>
                    </ListItemIcon>
                    <ListItemText primary="Land/Plot" />
                  </ListItemButton>
                </List>
              </Collapse>



              
             
              <ListItemButton>
                <ListItemIcon>
                  <AccountBalanceIcon />
                </ListItemIcon>
                <ListItemText primary="Payment" />
              </ListItemButton>
              {/* <Divider sx={{ my: 1 }} /> */}
              {/* {secondaryListItems} */}
            </List>
          </Drawer>
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: '100vh',
              overflow: 'auto',
            }}
          >
            <Toolbar />
            {tab === 0 && <> <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              <Grid container spacing={3}>
                {/* Chart */}
                <Grid item xs={12} md={8} lg={9}>
                  <Paper
                    sx={{
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      height: 240,
                    }}
                  >

                  </Paper>
                </Grid>
                {/* Recent Deposits */}
                <Grid item xs={12} md={4} lg={3}>
                  <Paper
                    sx={{
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      height: 240,
                    }}
                  >

                  </Paper>
                </Grid>
                {/* Recent Orders */}
                <Grid item xs={12}>
                  <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>

                  </Paper>
                </Grid>
              </Grid>
              <Copyright sx={{ pt: 4 }} />
            </Container> </>}
            {tab === 1 && <><Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              <Grid container spacing={12}>
               
               
               
                <Grid item xs={12} md={10} lg={12}>
                  <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' ,height:'auto' }}>
<Myprofile/>
                  </Paper>
                </Grid>
              </Grid>
             
            </Container></>}
          </Box>
        </Box>
      </ThemeProvider>
    </>

  );
}

export default function Userdash() {
  return <DashboardContent />;
}