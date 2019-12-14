import React, {useState} from 'react'
import {Paper, TextField, Select, InputLabel, FormControl, FormGroup, FormControlLabel, Checkbox, Fab} from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red'

const watermelon = red[600]

const WatermelonCheckbox = withStyles({
  root: {
    color: watermelon,
    '&$checked': {
      color: watermelon,
    },
    marginLeft: "20px"
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1.5),
      width: '90%',
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  formG: {
    width: '50%',
    margin: 'auto'
  }
}));





export default function Form(props) {
  const { addLipstick } = props
  const classes = useStyles();

  const [state, setState] = React.useState({
    checkedMini: true,
    brand: '',
    color: '',
    desc: '',

  });
  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };
  const handleChangeBrand = brand => e => {
    console.log('slkdf')
    setState({...state, [brand]: e.target.value})
  }
  const handleChangeColor = color => e => {
    setState({...state, [color]: e.target.value})
  }
  const handleChangeDesc = desc => e => {
    console.log('ee')
    setState({...state, [desc]: e.target.value})
  }
  const handleSubmit = (e) => {
    // e.preventDefault()
    const { brand, color, desc, checkedMini} = state
    let values = {
      brand,
      color,
      desc,
      mini: checkedMini
    }
    addLipstick(values)
  }


  return (
    <Paper>
       <form className={classes.root}  autoComplete="off">
       <TextField
          onChange={handleChangeBrand('brand')}
          id="brand"
          label="Brand"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={state.brand}
        />
        <TextField
          id="color"
          label="Color"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={state.color}
          onChange={handleChangeColor('color')}

        />
                <TextField
                onChange={handleChangeDesc('desc')}
          id="desc"
          label="Descrpition"
          multiline
          rows="4"
          variant="outlined"
          value={state.desc}
        />
          <FormControlLabel
        control={
          <WatermelonCheckbox
            checked={state.checkedMini}
            onChange={handleChange('checkedMini')}
            value="true"
          />
        }
        label="Mini"
      />
      <Fab variant="extended" onClick={(e)=> handleSubmit(e)} type="button">
      <FavoriteIcon className={classes.extendedIcon} />
        Add 
      </Fab>
       </form>
    </Paper>
  )
}
