import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BottomNav() {

    const [value, setValue] = React.useState(0);

    const navigate = useNavigate();

    return (
        <>
            <BottomNavigation
                showLabels
                sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
                elevation={25}
                value={(value)}
                onChange={(event, newValue) => {
                    setValue(newValue)
                }}
            >
                <BottomNavigationAction
                    label="Inicio"
                    icon={<HomeIcon />}
                    onClick={() => navigate('/')}
                />
                <BottomNavigationAction
                    label="Buscar"
                    icon={<SearchIcon />}
                    onClick={() => navigate('/busqueda')}
                />
                <BottomNavigationAction
                    label="Favoritos"
                    icon={<FavoriteIcon />}
                    onClick={() => navigate('/favoritos')}
                />
            </BottomNavigation>
        </>
    )
}