export default {
    'roundedColorBox': {
        height: '160px',
        width: '400px',
        position: 'relative',
        borderRadius: '15px',
        borderTopLeftRadius: '30px',
        borderTopRightRadius: '30px',
        margin: '20px',
        overflow: 'hidden',
        cursor: 'pointer',
        '& .menuBar': {
            width: '100%',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            border: '1px solid #cdd',
            borderTop: 'none',
            background: '#fff',
            padding: '5px 15px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: '100',
            height: '40px',
            overflow: 'hidden',
            borderBottomLeftRadius: '15px',
            borderBottomRightRadius: '15px',
            color: 'rgb(100, 99, 105)'
        }
    }, 
    'inner': {
        height: '100%',
        width: '100%',
        display: 'flex'
    },
    
}