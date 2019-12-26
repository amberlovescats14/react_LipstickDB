import React, {useState} from 'react'
import {Paper, TextField,FormControlLabel, Checkbox, Fab, MenuItem} from '@material-ui/core'
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

const colorsArr = [
  {
    value: 'red',
    label: 'Red'
  },
  {
    value: 'pink',
    label: 'Pink'
  },
  {
    value: 'maroon',
    label: 'Maroon'
  },
  {
    value: 'orange',
    label: 'Orange'
  }
]


const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 150,
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
}));



export default function LipstickEdit(props) {
  const { lipstick, updateLipstick, handleClose } = props
  const classes = useStyles();

  const [state, setState] = useState({
    checkedFull: lipstick.full,
    brand: lipstick.brand,
    color: lipstick.color,
    name: lipstick.name,
    desc: lipstick.desc,
  });
  const handleChange = full => event => {
    setState({ ...state, [full]: event.target.checked });
  };
  const handleChangeBrand = brand => e => {
    setState({...state, [brand]: e.target.value})
  }
  const handleChangeColor = color => e => {
    setState({...state, [color]: e.target.value})
  };
  const handleChangeName = name => e => {
    setState({...state, [name]: e.target.value})
  }
  const handleChangeDesc = desc => e => {
    setState({...state, [desc]: e.target.value})
  }
  const handleSubmit = (e) => {
    const { brand, color, name, desc, checkedFull} = state
    let values = {
      brand,
      color,
      name,
      desc,
      full: checkedFull
    }
    updateLipstick(lipstick._id, values)
    handleClose()
  }


  return (
    <Paper style={{margin: '5% 10%'}}>
       <form className={classes.root}  autoComplete="off">
       <TextField
          required
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
        {/* select */}
         <TextField
          required
          id="outlined-select-currency"
          select
          label="Color"
          value={state.color}
          onChange={handleChangeColor('color')}
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        >
          {colorsArr.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        {/* end select */}
        <TextField
          required
          id="name"
          label="Name"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={state.name}
          onChange={handleChangeName('name')}

        />
          <TextField
          required
          onChange={handleChangeDesc('desc')}
          id="desc"
          type="text"
          label="Descrpition"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          value={state.desc}
        />
        <div>
          <FormControlLabel
        control={
          <WatermelonCheckbox
            checked={state.checkedFull}
            onChange={handleChange('checkedFull')}
            value="true"
          />
        }
        label="Full Size"
      />
      <Fab variant="extended" onClick={(e)=> handleSubmit(e)} 
      type="button"
      size="small">
      <FavoriteIcon className={classes.extendedIcon} />
        Update 
      </Fab>
      </div>
       </form>
    </Paper>
  )
}
