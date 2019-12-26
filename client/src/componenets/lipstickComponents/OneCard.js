import React, {Fragment, useState} from 'react'
import { Card, CardContent, Typography, Fab} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import deepOrange from '@material-ui/core/colors/deepOrange'
import red from '@material-ui/core/colors/red'
import pink from '@material-ui/core/colors/pink'
import CreateIcon from '@material-ui/icons/Create';
import Modal from '@material-ui/core/Modal';
import LipstickEdit from '../../containers/LipstickEditContainer';
import MoodBadIcon from '@material-ui/icons/MoodBad';


const watermelon = red[600]
const pinkish = deepOrange[50]
const maroon = pink[900]

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({ 
  root: {
    margin: theme.spacing(2),
    height: 100,
    background: pinkish
  },
  span: {
    color: watermelon
  },
  desc: {
    color: maroon
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },

}))

const OneCard = (props) => {
  const {l, i, deleteLipstick} = props
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleDelete = () => {
    deleteLipstick(l._id)
  }
  return (
    <Fragment>
          <Card className={classes.root}
          key={i} id={l.id}> 
            <CardContent>
              <Typography variant='h5'>
              <span className={classes.span}>{l.brand}: </span> 
              {l.name.toUpperCase()}
              </Typography>
              <Fab variant="extended"
                type="button"
                size="small"
                style={{float: 'right'}}
                onClick={handleDelete}>
              <MoodBadIcon className={classes.extendedIcon} />
              </Fab>
              <Fab variant="extended"
                type="button"
                size="small"
                style={{float: 'right'}}
                onClick={handleOpen}>
              <CreateIcon className={classes.extendedIcon} />
              </Fab>

            </CardContent>
            <CardContent className={classes.desc}>
            <Typography variant="subtitle1">
            {l.desc}
            </Typography>
            </CardContent>
          </Card>



      <Modal
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Edit Lipstick</h2>
          <LipstickEdit lipstick={l} handleClose={handleClose}/>
        </div>
      </Modal>
      </Fragment>
  )
}
export default OneCard
