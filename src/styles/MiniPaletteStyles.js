const styles = {
    root: {
        backgroundColor: 'white',
        width: '290px',
        height: '180px',
        margin: '20px',
        borderRadius: '15px',
        padding: '0',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        '&:hover svg': {
            opacity: '1'
        }
    },
    colors: {
        backgroundColor: '#dae1e4',
        height: '130px',
        width: '100%',
        'overflow': 'hidden'
    },
    paletteDetails: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0',
        padding: '6px 12px',
        paddingBottom: '10px',
        borderBottomLeftRadius: '15px',
        borderBottomRightRadius: '15px',
        border: '1px solid #cdd',
        borderTop: 'none'
    }, 
    title: {
        fontSize: '15px',
        fontWeight: '400',
        letterSpacing: '.4px',
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
        height: '100%',
        width: '16.6%',
        display: 'inline-block',
        margin: '0 auto',
        position: 'relative',
        marginBottom: '-4.5px'
    },
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