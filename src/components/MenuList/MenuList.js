import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import WorkIcon from '@material-ui/icons/Work';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import GroupIcon from '@material-ui/icons/Group';
import FavoriteIcon from '@material-ui/icons/Favorite';
import WeekendIcon from '@material-ui/icons/Weekend';
import Divider from '@material-ui/core/Divider';
import TodayIcon from '@material-ui/icons/Today';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DateRangeIcon from '@material-ui/icons/DateRange';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';

function MenuList() {
  return (
    <div>
      <List>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText>
            Inbox
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <TodayIcon />
          </ListItemIcon>
          <ListItemText>
            Today
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DateRangeIcon />
          </ListItemIcon>
          <ListItemText>
            Upcoming
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <EmojiEventsIcon />
          </ListItemIcon>
          <ListItemText>
            Completed
          </ListItemText>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText>
            Work
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AttachMoneyIcon />
          </ListItemIcon>
          <ListItemText>
            Finances
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <FitnessCenterIcon />
          </ListItemIcon>
          <ListItemText>
            Fitness
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText>
            Social
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <FavoriteIcon />
          </ListItemIcon>
          <ListItemText>
            Spiritual
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <WeekendIcon />
          </ListItemIcon>
          <ListItemText>
            Watchlist
          </ListItemText>
        </ListItem>
        </List>
    </div>
  )
}

export default MenuList
