import { makeStyles } from '@material-ui/core/styles';
import {DRAWER_WIDTH} from '../constants/Constants'

const drawerWidth = DRAWER_WIDTH;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        backgroundColor: props => props.palette.primary.main
    },
    drawerPaper: {
        width: drawerWidth,    
        backgroundColor: props => props.palette.primary.main,
    },
    drawerHeader: {
        backgroundColor: props => props.palette.primary.main,
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(2, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        height: 'calc(100vh - 64px)',
        padding: 0,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    header: {
        color: props => props.palette.text.main,
        textAlign: 'center',
        fontSize: '16px',
        textTransform: 'uppercase',
        letterSpacing: '0.7px',
        fontWeight: '800',
        marginTop: '40px',
        marginBottom: '30px'
    },
    buttonsContainer: {
        width: '70%',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '30px',
        marginBottom: '50px'
    },
    button: {
        width: '85px',
        height: '85px',
        margin: '0px 15px',
        padding: '20px',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: props => props.palette.secondary.main,
        color: props => props.palette.text.main,
        transition: 'all 0.4s ease-in-out',
        cursor: 'pointer',
        appearance: 'none',
        fontSize: '11px',
        textTransform: 'uppercase',
        letterSpacing: '0.6px',
        fontWeight: '500',
        border: 'none',
        outline: 'none',
        animation: 'none',
        '&:hover': {
            background: props => props.palette.hover.main,
        }
    },
    icons: {
        color: props => props.palette.text.main,
        marginBottom: '10px'
    },
    addButton: {
        backgroundColor: props => props.palette.secondary.main,
        width: '70%',
        padding: '15px 25px',
        marginTop: '40px',
        borderRadius: '30px',
        color: props => props.palette.text.main,
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '&:hover': {
            background: props => props.palette.hover.main,
        }
    },
    btnCenter: {
        color: props => props.palette.text.main,
        fontSize: '12px',
        textTransform: 'uppercase',
        letterSpacing: '0.6px',
        fontWeight: '500',
        display: 'flex',
        alignItems: 'center'
    },
    buttonCenterIcon: {
        marginLeft: '15px',
        color: props => props.palette.text.main
    },
    colorPicker: {
        margin: '20px auto',
        width: '330px !important',
        borderRadius: '15px !important',
        background: props => props.palette.primary.main + ' !important',
        '& input': {
            background: props => props.palette.secondary.main + ' !important',
            height: '30px !important',
            borderRadius: '8px !important',
            border: 'none !important',
            outline: 'none !important',
            boxShadow: 'none !important',
            color: props => props.palette.icons.main + ' !important',
        }
    },
    colorValidator: {
        width: '70%',
        display: 'block',
        margin: '0 auto !important',
        background: props => props.palette.secondary.main,
        borderRadius: '5px',
        color: props => props.palette.text.main,
        '& .MuiInputBase-root': {
            width: '100% !important'
        }
    },
    toggleDrawer: {
        padding: theme,
        color: props => props.palette.text.main
    },
    buttonPrimary: {
        background: props => props.palette.primary.main
    },
    buttonSecondary: {
        background:props => props.palette.secondary.main
    }
}));

export default useStyles;