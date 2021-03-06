import { makeStyles } from '@material-ui/core/styles';
import sizes from '../helpers/sizes'
import {DRAWER_WIDTH} from '../constants/Constants'

const drawerWidth = DRAWER_WIDTH;

const useStyles = makeStyles((theme) => ({
    appBar: {
        background: props => props.palette.primary.main,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    buttonPrimary: {
        background: props => props.palette.primary.main,
        color: props => props.palette.text.main,
        margin: '0 15px',
        height: '40px'
    },
    buttonSecondary: {
        background:props => props.palette.secondary.main,
        color: props => props.palette.text.main,
        margin: '0 15px',
        height: '40px'
    }, 
    'text': {
        color: props => props.palette.text.main
    },
    'navBtns': {
        marginLeft: 'auto !important',
        display: 'flex',
        marginRight: '15px',
        [sizes.down('xs')]: {
            margin: 0
        }
    },
    link: {
        textDecoration: 'none !important' 
    }
}));

export default useStyles;