import sizes from '../helpers/sizes'

const styles = {
    root: {
        width: '20%',
        height: '25%',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '-6.5px',
        '&:hover svg': {
            color: '#fff',
            transform: 'scale(1.2)'
        },
        [sizes.down('lg')]: {
            width: '25%',
            height: 'calc((100vh - 64px) / 4 )'
        },
        [sizes.down('md')]: {
            width: '33.33%',
            height: 'calc((100vh - 64px) / 6.66 )'
        },
        [sizes.down('sm')]: {
            width: '50%',
            height: 'calc((100vh - 64px) / 5 )'
        },
        [sizes.down('xs')]: {
            width: '100%',
            height: 'calc((100vh - 64px) / 5 )'
        }
    },
    boxContent: {
        position: "absolute",
        width: "100%",
        left: "0px",
        bottom: "0px",
        padding: "10px",
        color: "black",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px",
        display: 'flex',
        justifyContent: 'space-between'
    },
    deleteIcon: {
        color: 'rgba(0,0,0,0.5)',
        transition: 'all 0.3s ease-in-out'
    }
}

export default styles;