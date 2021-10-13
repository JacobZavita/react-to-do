import { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Button, Dialog, IconButton, TextField, Typography } from '@material-ui/core'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import { MdClose } from 'react-icons/md'
import { MdMoreHoriz } from 'react-icons/md'

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
})

// This is the top of the dialogue
const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <MdClose />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  )
})

// This is the middle of it with the body, text field - this is where I want to add the 
const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent)


const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions)

export default function CustomizedDialogs(props) {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [descriptions, setDescriptions] = useState([])

  const handleSetDescription = event => {
    event.preventDefault()
    setDescriptions([
      ...descriptions,
      { text: input}
    ])
    setInput('')
    console.log(descriptions)
  }

  const handleChange = ({ target }) => {
    setInput(target.value)
  }

  const handleClickOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }

  return (
    <div>
      <MdMoreHoriz className={"edit-icon"} onClick={handleClickOpen} />
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle
          variant='h4'
          id="customized-dialog-title"
          onClose={handleClose}
        >
          {props.text}
        </DialogTitle>
        <DialogContent dividers>
          <Typography>
            {input}
            {/* or is it descriptions to use here? Input seems to be rendering onchange but descriptions breaks it */}
          </Typography>
          {/* <TextField
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={2}
            placeholder="Add a more detailed description..."
            variant="outlined"
            onChange={handleChange}
          /> */}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleSetDescription} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
