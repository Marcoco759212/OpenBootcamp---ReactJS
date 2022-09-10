import React from 'react';
import { List, ListItems, ListItemIcon, ListItemText } from '@mui/material';
import {Home, Settings} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom';

const MenuListItems = ({list}) => {

    const history = useNavigate();

    const getIcon = (icon) => {
        switch (icon) {
            case 'HOME':
                return(<Home/>)
            case 'SETTINGS':
                return(<Settings/>)
            case 'TASKS':
                return(<Home/>)
            default:
                break;
        }
    }

    const navigateTo = (path) => {
        history(path)
    }

    return (
        <div>
            <List>
                {list.map(({text, path, icon}, index) =>
                    <ListItems key={index} button onClick={ () => navigateTo(path)}>
                        <ListItemIcon>
                            { getIcon(icon) }
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItems>
                )}
            </List>
        </div>
    );
}

export default MenuListItems;
