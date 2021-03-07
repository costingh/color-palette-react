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
            zIndex: '11',
            height: '40px',
            overflow: 'hidden',
            borderBottomLeftRadius: '15px',
            borderBottomRightRadius: '15px',
            color: 'rgb(100, 99, 105)',
            '& div': {
                fontSize: '14px',
                letterSpacing: '.4px',
            }
        }
    }, 
    'inner': {
        height: '100%',
        width: '100%',
        display: 'flex'
    },
    'solid': {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: '600',
        marginTop: '-20px',
        cursor: 'pointer',
        '& div': {
            opacity: 0,
            transition: 'opacity .3s ease-in-out',
        },
        '&:hover': {
            '& div': {
                opacity: 1,
            },
        }
    },
    'gradient': {
        height: '100%',
        width: '100%',
    },
    'gradientInner': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: '600',
        marginTop: '-20px',
        cursor: 'pointer',
        '& div': {
            opacity: 0,
            transition: 'opacity .3s ease-in-out',
        },
        '&:hover': {
            '& div': {
                opacity: 1,
            },
        }
    },
    'hoveredColor': {
        transition: 'width .3s ease-in-out',
        position: 'relative',
        overflow: 'hidden',
        '& div': {
            opacity: 0,
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)',
            marginTop: '-20px',
            pointerEvents: 'none',
            transition: 'opacity .5s ease-in-out',
            fontWeight: '600'
        },
        '&:hover div': {
            opacity: 1
        }
    }
}