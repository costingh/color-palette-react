import React, { useState } from 'react'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import { withStyles } from '@material-ui/styles'

import '../styles/Palette.css'

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
        marginBottom: "-3.5px",
        opacity: 1,
        backgroundColor: "black",
        "& a": {
            color: "white",
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

function Palette({ palette, classes }) {
    const [level, setLevel] = useState(500)
    const [format, setFormat] = useState('hex')

    const colorBoxes = palette.colors[level].map(color => {
        return <ColorBox
            key={color.id}
            background={color[format]}
            name={color.name}
            moreUrl={`/palette/${palette.id}/${color.id}`}
            showingFullPalette
        />
    })

    const changeLevel = (newLevel) => {
        setLevel(newLevel)
    }

    const changeFormat = val => {
        setFormat(val)
    }
    return (
        <div className={classes.Palette}>
            <Navbar
                level={level}
                changeLevel={changeLevel}
                handleChange={changeFormat}
                showingAllColors
            />
            <div className={classes.colors}>
                {colorBoxes}
            </div>
            <footer className="Palette-footer">
                {palette.paletteName}
                <span className="emoji">{palette.emoji}</span>
            </footer>
        </div>
    )
}

export default withStyles(styles)(Palette)
