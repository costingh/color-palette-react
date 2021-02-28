import React, { useState } from 'react'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/styles'


const styles = {
    Palette: {
        height: "100vh",
        display: "flex",
        flexDirection: "column"
    },
    colors: {
        height: "90%"
    },
    goBack: {
        width: "20%",
        height: "50%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-4.5px",
        opacity: 1,
        backgroundColor: "#000",
        "& a": {
            color: "#fff",
            width: "100px",
            height: "30px",
            position: "absolute",
            display: "inline-block",
            top: "50%",
            left: "50%",
            marginLeft: "-50px",
            marginTop: "-15px",
            textAlign: "center",
            outline: "none",
            background: "rgba(255, 255, 255, 0.3)",
            fontSize: "1rem",
            lineHeight: "30px",
            textTransform: "uppercase",
            border: "none",
            textDecoration: "none"
        }
    }
}


function SingleColorPalette({ palette, colorId, classes }) {
    const [format, setFormat] = useState('hex')

    const gatherShades = (palette, colorToFilterBy) => {
        let shades = []
        let allColors = palette.colors

        for (let key in allColors) {
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorToFilterBy)
            )
        }
        return shades.slice(1)
    }

    const [_shades, setShades] = useState(gatherShades(palette, colorId))

    const colorBoxes = _shades.map(color => {
        return <ColorBox
            key={color.name}
            name={color.name}
            background={color[format]}
            showingFullPalette={false}
        />
    })

    const changeFormat = val => {
        setFormat(val)
    }

    return (
        <div className={classes.Palette}>
            <Navbar handleChange={changeFormat} showingAllColors={false} />
            <div className={classes.colors}>
                {colorBoxes}
                <div className={classes.goBack}>
                    <Link to={`/palette/${palette.id}`}>Go Back</Link>
                </div>
            </div>
        </div>
    )
}

export default withStyles(styles)(SingleColorPalette)
