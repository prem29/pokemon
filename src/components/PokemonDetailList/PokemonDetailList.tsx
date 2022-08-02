import { List, 
    Avatar, 
    ListItem, 
    ListItemAvatar, 
    ListItemText, 
    Typography
   } from '@mui/material';
import React from 'react';

export const PokemonDetailList = ({pokemon}: any) => {
return ( 
    <List key={pokemon?.number} 
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem  key={pokemon?.number} alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={pokemon?.image} />
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
                 Name: {pokemon?.name}
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
                  Number: {pokemon?.number} <br/>
                  Type: {pokemon?.types} <br/>
                  Classification: {pokemon?.classification} <br/>
                  FleeRate: {pokemon?.fleeRate} <br/>
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        </List>
    );
};


