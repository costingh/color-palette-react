export default {
    root: {
        backgroundColor: '#fff',
        minHeight: '100vh',
    },
    container: {
        width: '90%',
        margin: '0 auto'
    },
    heroText: {
        width: '100%',
        textAlign: 'center',
        marginTop: '200px',
        '& h1': {
            fontSize: '50px',
            letterSpacing: '2px'
        },
        '& p': {
            'width': '500px',
            margin: '35px auto',
            color: '#646369',
            fontSize: '17px',
            fontWeight: '300',
            letterSpacing: '.5px'
        }
    },
    palettes: {
        margin: '0 auto',
        marginTop: '100px',
        boxSizing: 'border-box',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 18.4%)',
        gridGap: '2%',
        gridRowGap: '40px',
        marginBottom: '200px',
    }
}