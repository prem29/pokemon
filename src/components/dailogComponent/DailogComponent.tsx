import { DialogContentText,
        DialogContent,
        Dialog,
        DialogTitle,
        DialogActions,
        Button
        } from '@mui/material';
import React, { useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { useNavigate } from 'react-router-dom';
import { useGetPokemon } from '../../hooks/useGetPokemons';
import { PokemonDetailList } from '../PokemonDetailList/PokemonDetailList';


export const DailogComponent = ({dailogFlag, setDailogFlag, selectedPokemon}: any) => {

const classes = useStyles();
const navigate = useNavigate();
/************** Here we  are getting the whole selected object value of pokemon But as the requirement is to use graphql api call Implemented the below line of statement*******************/
const { pokemon} = selectedPokemon && useGetPokemon(selectedPokemon.id, selectedPokemon.name) || "" ;

const onDismiss= () => {
  setDailogFlag({dailogFlag: false});
    navigate(-1);
  }

return ( 
    <React.Fragment>
        <Dialog
          open={dailogFlag}
          onClose={onDismiss}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        
        >
          <DialogTitle id="alert-dialog-title" style={{color: '#666666'}}>
          {pokemon?.name} details
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <PokemonDetailList pokemon={pokemon}/>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={onDismiss} autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
    </React.Fragment>
) ;
};

const useStyles = createUseStyles(
{
  titleDetail:{
    color: 'black',
  },
  dialogPokemon:{
      width: '450px',
      height: '400px'
  }
},
{ name: 'DailogComponent' }
);


