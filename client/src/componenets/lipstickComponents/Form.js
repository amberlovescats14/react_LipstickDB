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





export default function Form() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    brand: '',
    color: '',
    desc: '',
    mini: false
  })
  const [state, setState] = React.useState({
    checkedMini: true,
  });
  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };
  const handleChangeBrand = brand => (e) => {
    setValues({...values, [brand]: e.target.value})
  }
  const handleChangeColor = color => (e) => {
    setValues({...values, [color]: e.target.value})
  }
  const handleChangeDesc = desc => (e) => {
    console.log('ee')
    setValues({...values, [desc]: e.target.value})
  }
  const handleSubmit = () => {
    console.log("values: ", values);
  }


  return (
    <Paper>
       <form className={classes.root} noValidate autoComplete="off">
       <TextField
          onChange={(e)=> handleChangeBrand(e)}
          id="brand"
          label="Brand"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <TextField
          onChange={(e)=> handleChangeColor(e)}
          id="color"
          label="Color"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
                <TextField
                onChange={(e)=> handleChangeDesc(e)}
          id="outlined-multiline-static"
          label="Descrpition"
          multiline
          rows="4"
          defaultValue=" "
          variant="outlined"
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
      <Fab variant="extended" onClick={()=> handleSubmit()}>
      <FavoriteIcon className={classes.extendedIcon} />
        Add 
      </Fab>
       </form>
    </Paper>
  )
}
