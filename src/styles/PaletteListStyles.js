import sizes from '../helpers/sizes'

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
            letterSpacing: '2px',
            [sizes.down('sm')]: {
                fontSize: '30px'
            },
            [sizes.down('xs')]: {
                fontSize: '25px'
            },
        },
        [sizes.down('sm')]: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            height: 'calc(100vh - 90px)',
            marginTop: '0',
        },
        '& p': {
            'width': '500px',
            margin: '35px auto',
            color: '#646369',
            fontSize: '17px',
            fontWeight: '300',
            letterSpacing: '.5px',
            [sizes.down('sm')]: {
                width: '300px',
                fontSize: '16px'
            },
            [sizes.down('xs')]: {
                width: '275px',
                fontSize: '15px'
            },
        }
    },
    palettes: {
        margin: '0 auto',
        marginTop: '100px',
        boxSizing: 'border-box',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginBottom: '200px',
    }
}