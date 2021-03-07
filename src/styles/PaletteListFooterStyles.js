import sizes from '../helpers/sizes'

export default {
    footerClean: {
        borderTop: '1px solid rgba(75,76,77,0.5)',
        padding: '0',
        backgroundColor: '#fff',
        color: '#4b4c4d',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        '& h3': {
            marginBottom: '27px'
        },
        [sizes.down('md')]: {
            flexDirection: 'column'
        }
    },
    'item': {
        textAlign: 'center',
        margin: '50px 0',
        [sizes.down('lg')]: {
            width: '33.33%'
        },
        [sizes.down('sm')]: {
            width: '100%'
        }
    },
    'social': {
        margin: '50px 0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        '& a': {
            fontSize:'15px',
            fontWeight: '500',
            textTransform: 'upppercase',
            letterSpacing: '.7px',
            display:'block',
            marginTop:'14px',
            color: '#4b4c4d',
            opacity:'1',
            textDecoration: 'none',
            '&:hover': {
                opacity:'0.8',
            }
        }
    },
    'icons': {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '20px',
        '& svg': {
            margin: '0px 20px',
            transition: 'all .4s ease-in-out',
            cursor: 'pointer',
            '&:hover': {
                color: '#111'
            }
        }
    },
    'link': {
        fontSize:'14px',
        display:'block',
        marginTop:'14px',
        color:'inherit',
        opacity:'0.75',
        textDecoration: 'none',
        '&:hover': {
            opacity:'0.9',
        }
    },
    'description': {
        textAlign: 'center',
        marginBottom:'30px',
        fontSize:'20px',
    },
    'copyright': {
        textAlign: 'center',
        marginTop:'14px',
        marginBottom:'0',
        fontSize:'13px',
        opacity:'0.6',
    }
}
 
  
  

  