import * as React from "react";
import {useState} from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import AdbIcon from "@mui/icons-material/Adb";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import {NavLink} from "react-router-dom";
import {useAuth} from "../../context/FakeAuth";

const pages = ['Category', 'Contact'];


export default function ClientNavBar() {

    const [anchorElNav, setAnchorElNav] = useState(null);
    const {user, isAuthenticated, logout, login, role} = useAuth()


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <AppBar position="static" style={{backgroundColor: "rgb(188, 140, 212"}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        ShopNow
                    </Typography>

                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <AdbIcon sx={{display: {xs: 'flex', md: 'none'}, mr: 1}}/>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: {xs: 'flex', md: 'none'},
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Nom Client Shop
                    </Typography>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                sx={{my: 2, color: 'white', display: 'block'}}
                            >


                                <NavLink className="navlink" to={`/${page.toLowerCase()}`}>{page}</NavLink>

                            </Button>
                        ))}
                    </Box>

                    <Box display={"flex"} flexDirection={"row"}>

                        {isAuthenticated && (
                            <>
                                {role === 'admin' && (
                                    <> <Button sx={{my: 2, display: 'block'}}>
                                            <NavLink className="navlink-admin" to="/admin">Admin</NavLink>
                                        </Button>
                                    </>
                                )}
                                <Button sx={{my: 2, color: 'white', display: 'block'}}>
                                    <NavLink className="navlink" to="/profile">Profile</NavLink>
                                </Button>
                                <Button sx={{my: 2, color: 'white', display: 'block'}}>
                                    <NavLink className="navlink" to="/panier">Panier</NavLink>
                                </Button>
                                <Button sx={{my: 2, color: 'white', display: 'black', bgcolor: "white", borderRadius: "50px"}} variant="contained">
                                    <NavLink className="navlink" to="/" onClick={()=>logout()}>Logout</NavLink>
                                </Button>
                            </>
                        )}

                        {!isAuthenticated && (
                            <>
                                <Button
                                    sx={{my: 2, color: 'white', display: 'block'}}
                                >
                                    <NavLink className="navlink" to="/login">Login</NavLink>
                                </Button>

                                <Button sx={{my: 2, color: 'white', display: 'black', bgcolor: "white", borderRadius: "50px"}} variant="contained">
                                    <NavLink className="navlink" to="/register">Register</NavLink>
                                </Button>
                            </>
                    )}


                </Box>
            </Toolbar>
        </Container>
</AppBar>
)

}