import { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { useTheme } from '@mui/material/styles';
import { Button, Dialog, IconButton, Typography } from '@material-ui/core'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import { MdClose } from 'react-icons/md'
import { MdMoreHoriz } from 'react-icons/md'
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Work',
  'Finances',
  'Fitness',
  'Social',
  'Spiritual',
  'Watchlist'
];

function getStyles(name, type, theme) {
  return {
    fontWeight:
      type.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

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
  const theme = useTheme();
  const [type, setType] = useState([]);

  // handle selection in select
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setType(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    // props.setTodoType({ ...props.todoType })
    // console.log(props.todoType)
    console.log("thing")
  };

  const [open, setOpen] = useState(false)

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
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-chip-label">Type</InputLabel>
            <Select
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              multiple
              value={type}
              onChange={handleChange}
              input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip
                      key={value}
                      label={value}
                    />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, type, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>
        {/* <DialogActions> */}
          {/* <Button
            autoFocus 
            onClick={handleSetDescription}
            color="primary"
          >
            Save changes
          </Button> */}
        {/* </DialogActions> */}
      </Dialog>
    </div>
  )
}
