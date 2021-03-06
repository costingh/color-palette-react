export default {
    nav: {
        display: 'flex',
        width: '100%',
        padding: '10px 30px',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    'logo': {
        height: '70px'
    },
    'link': {
        padding: '10px 30px',
        background: '#4896FF',
        borderRadius: '8px',
        color: '#fff',
        fontSize: '14px',
        letterSpacing: '.5px',
        textDecoration: 'none',
        border: '1px solid #4896FF',
        transition: 'background .4s ease-in-out',
        '&:hover': {
            background: 'transparent',
            color: '#4896FF'
        }
    }
}