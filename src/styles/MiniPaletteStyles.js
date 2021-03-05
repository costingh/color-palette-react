const styles = {
    root: {
        backgroundColor: 'white',
        borderRadius: '5px',
        padding: '0.5rem',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        '&:hover svg': {
            opacity: '1'
        }
    },
    colors: {
        backgroundColor: '#dae1e4',
        height: '150px',
        width: '100%',
        borderRadius: '5px',
        'overflow': 'hidden'
    },
    title: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0',
        color: 'black',
        paddingTop: '0.5rem',
        fontSize: '1rem',
        position: 'relative'
    },
    emoji: {
        marginLeft: '0.5rem',
        fontSize: '1.5rem'
    },
    miniColor: {
        height: '25%',
        width: '20%',
        display: 'inline-block',
        margin: '0 auto',
        position: 'relative',
        marginBottom: '-4.5px'
    },
    delete: {},
    deleteIcon: {
        background: '#333',
        color: '#fff',
        width: '35px',
        height: '35px',
        padding: '5px',
        position: 'absolute',
        right: '0px',
        top: '0px',
        zIndex: '100',
        opacity: '0',
    }
}

export default styles;