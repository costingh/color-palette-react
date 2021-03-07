export default {
    Navbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "70px"
    },
    logo: {
        marginLeft: '12px',
        textDecoration: "none",
        height: '70px',
        '& img': {
            height: '50px',
            marginTop: '10px'
        }
    },
    'right': {
        marginLeft: 'auto',
        display: 'flex',
        alignItems: 'center'
    },
    'link': {
        display: 'flex',
        alignItems: 'center',
        marginRight: '15px',
        color: '#646369',
        textDecoration: 'none',
        fontSize: '15px',
        fontWeight: '400',
        letterSpacing: '.5px',
        cursor: 'pointer',
        transition: 'all .4s ease-in-out',
        '&:hover': {
            color: '#000'
        }
    },
    'dividerVert': {
        height: '35px',
        width: '1px',
        backgroundColor: 'rgba(100, 99, 105, 0.2)',
        marginRight: '15px'
    },
    'btn': {
        marginRight: '12px',
        padding: '7px 18px',
        backgroundColor: '#4896FF',
        color: '#fff',
        border: '1px solid #4896FF',
        transition: 'background .4s ease-in-out',
        borderRadius: '10px',
        letterSpacing: '.5px',
        fontSize: '14px',
        textDecoration: 'none',
        '&:hover': {
            backgroundColor: 'transparent',
            color: '#4896FF'
        }
    },
    slider: {
        width: "340px",
        margin: "0 10px",
        display: "inline-block",
        "& .rc-slider-track": {
            backgroundColor: "transparent"
        },
        "& .rc-slider-rail": {
            height: "8px"
        },
        "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus,.rc-slider-handle:hover": {
            backgroundColor: "green",
            outline: "none",
            border: "2px solid green",
            boxShadow: "none",
            width: "13px",
            height: "13px",
            marginLeft: "-7px",
            marginTop: "-3px"
        }
    },
    'dropdown': {
        zIndex: '888', 
        '& p': {
            padding: '5px 20px',
            borderRadius: '8px',
            position: 'relative',
            color: '#646369',
            cursor: 'pointer',
            transition: 'all .2s ease-in-out',
            '&:hover': {
                background: '#eee'
            }
        },
        '& .MuiPopover-paper': {
            borderRadius: '5px',
            padding: '10px 20px',
            boxShadow: 'rgb(0 0 0 / 11%) 0 0 0 1px, rgb(0 0 0 / 5%) 0 10px 10px -5px',
            minWdth: '140px',
            top: '70px !important',
        },
    },
    'text': {
        textAlign: 'center',
        marginTop: '14px',
        marginBottom: '10px',
        color: '#646369',
        fontSize: '15px',
        fontWeight: '400',
        letterSpacing: '.5px',
    },
    'divider': {
        width: '100%',
        height: '1px',
        background: '#646369',
        opacity: '.4',
        marginTop: '10px',
        marginBottom: '20px'
    },
    'layout': {
        height: '30px',
        position: 'relative',
        display: 'inline-block',
        border: '1px solid #cdd',
        borderTopLeftRadius: '9px',
        borderTopRightRadius: '9px',
        borderBottomLeftRadius: '5px',
        borderBottomRightRadius: '5px',
        overflow: 'hidden',
        transition: 'all .3s ease-in-out',
    },
    'horizontalDivider': {
        position: 'absolute',
        bottom: '9px',
        left: '0px',
        right: '0px',
        widht:' 100%',
        height: '1px',
        background: '#cdd',
        overflow: 'hidden',
        zIndex: '999 !important'
    },
    'gradient': {
        position: 'absolute',
        bottom: '18px',
        left: '-1px',
        right: '0px',
        width:' 100%',
        height: '1px',
        background: '#cdd',
        overflow: 'hidden',
        zIndex: 999,
        transform: 'rotate(-25deg)'
    },
    'shades': {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'space-between',
        top: '0px',
        left: '-3px',
        right: '-3px',
        widht:' 110%',
        height: '20px',
        overflow: 'hidden',
    },
    'verticalDivider': {
        position: 'relative',
        width: '1px',
        height: '19px',
        background: '#cdd'
    },
    'currentFormat': {
        position: 'absolute',
        left: '0px',
        top: '0px',
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        background: '#4896FF',

    },
    'view': {
        display: 'flex',
        alignItems: 'center',
        margin: '4px 20px',
        cursor: 'pointer',
        '& span': {
            marginLeft: '15px',
            color: '#646369',
            fontSize: '15px',
            fontWeight: '400',
            letterSpacing: '.5px',
            transition: 'all .4s ease-in-out',
        },
        '&:hover': {
            '& span': {
                color: '#000'
            },
            '& div:first-child': {
                background: '#4896FF',
                '& div:first-child': {
                    background: '#cdd'
                }
            }
        }
    },
    'layoutOptions': {
        display: 'flex',
    }
};
