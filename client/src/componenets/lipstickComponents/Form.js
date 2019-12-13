import React, {useState} from 'react'
import {Paper, TextField, Select, InputLabel, FormControl, FormGroup, FormControlLabel, Checkbox } from '@material-ui/core'
import MenuItem from '@material-ui/core/MenuItem';
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
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));





export default function Form() {
  const classes = useStyles();

  // const [size, setSize] = React.useState(true)

  // const handleChange = e => {
  //     setSize(e.target.value)
  // };


  const [state, setState] = React.useState({
    checkedMini: true,
    checkedFullSize: true,

  });



  return (
    <Paper>
      <FormGroup>
       <form className={classes.root} noValidate autoComplete="off">
       <TextField
          id="brand"
          label="Brand"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <TextField
          id="color"
          label="Color"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
                <TextField
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
            onChange={handleChange('checkedG')}
            value="true"
          />
        }
        label="Mini"
      />
       </form>
       </FormGroup>
    </Paper>
  )
}
