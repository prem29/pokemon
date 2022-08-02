import { List, 
         Avatar, 
         ListItem, 
         ListItemAvatar, 
         ListItemText, 
         Typography,
         Divider
        } from '@mui/material';
import React, { useEffect, useReducer, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useGetPokemons } from '../../hooks/useGetPokemons';
import { SearchBox } from '../search';
import { DailogComponent } from '../dailogComponent';
import { Link, Outlet, useLocation } from 'react-router-dom';

export const filterData = (query: any, data: any) => {
  if (!query) {
    return data;
  } else {
    return data.filter((d: any) => d.name.toLowerCase().includes(query)) ;
  }
};

export const PokemonList = () => {
  const classes = useStyles();
  const [state, setState] = useReducer(
    (state: any, newState: any) => ({...state, ...newState}),
    {searchQuery: '', dailogFlag: false, selectedPokemon:{id: '', name: ''}}
  )
  const { pokemons, loading } = useGetPokemons();
  const dataFiltered = filterData(state.searchQuery, pokemons);
  const location = useLocation();
  
    useEffect(()=>{ 
      setState({dailogFlag: state.dailogFlag, selectedPokemon: state.selectedPokemon});
    }, [state.dailogFlag]);

  const handleClickOpen = (data: any) => {
    console.log(data);
    setState({dailogFlag: true, selectedPokemon: data})
  };

  return ( 
    <div className={classes.root}>
      {loading && <div>Loading...</div>}
      {<DailogComponent selectedPokemon={state.selectedPokemon}
                        dailogFlag={state.dailogFlag} 
                        setDailogFlag={setState}/>}
      {<SearchBox setSearchQuery={setState}/>}
      {dataFiltered.map((pkmn: any) => (
        <Link
          key={pkmn.number}
          to={`/img/${pkmn.name}`}
          state={{backgroundLocation: location}}
          onClick={() => handleClickOpen(pkmn)}>
          <List key={pkmn.number} 
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem  key={pkmn.image.number} alignItems="flex-start" className={classes.itemHoverEffect}>
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={pkmn.image} />
          </ListItemAvatar>
          <ListItemText
            primary= {
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                 Name: {pkmn.name}
                </Typography>
              </React.Fragment>}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Number: {pkmn.number} <br/>
                  Type: {pkmn.types}
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        </List>
      </Link>
      ))}
      <Outlet />
    </div>
  );
};

const useStyles = createUseStyles(
  {
    root: {
      width: '100%',
      textAlign: 'center',
      padding: '32px',
      boxSizing: 'border-box',
    },
    search:{
      marginBottom: '10px',
    },
    itemHoverEffect: {
      '&:hover': {
         border: '2px solid #0000ffc7'
    }
  }
  },
  { name: 'PokemonList' }
);

