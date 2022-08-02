import { Paper, 
        IconButton, 
        InputBase} from '@mui/material';
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { createUseStyles } from 'react-jss';



export const SearchBox = ({setSearchQuery} :any) => {
    const classes = useStyles();
    return ( 
       <React.Fragment>
        {<Paper
            component="form"
            className={classes.search}
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
          >
        <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search pokemon"
            inputProps={{ 'aria-label': 'search google maps' }}
            onInput={(e: any) => {
                  setSearchQuery({searchQuery: e.target.value});
                 }}
          />
        <IconButton type="submit" sx={{ p: '10px',color: 'blue'}} aria-label="search">
          <SearchIcon style={{ fill: "#0000ffc7" }} />
        </IconButton>
      </Paper>}
      </React.Fragment>
    );
  };

  const useStyles = createUseStyles(
    {
      search:{
        marginBottom: '10px',
      },
      itemHoverEffect: {
        '&:hover': {
           //opacity:  0.3,
           border: '2px solid #0000ffc7'
      }
    }
    },
    { name: 'PokemonList' }
  );
