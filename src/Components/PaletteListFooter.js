import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/styles'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

import styles from '../styles/PaletteListFooterStyles'

function PaletteListFooter({classes}) {
    return (
        <footer class={classes.footerClean}>
            <div class={classes.item}>
                <h1>HEXA</h1>
                <p className={classes.description}>We create possibilities!</p>
                <p class={classes.copyright}>Hexa © 2021. All rights reserved.</p>
            </div>
            <div class={classes.item}>
                <h3>Services</h3>
                <Link className={classes.link}>Web design</Link>
                <Link className={classes.link}>Web design</Link>
                <Link className={classes.link}>Web design</Link>
            </div>
            <div class={classes.item}>
                <h3>About</h3>
                <Link className={classes.link}>Web design</Link>
                <Link className={classes.link}>Web design</Link>
                <Link className={classes.link}>Web design</Link>
            </div>
            <div class={classes.item}>
                <h3>Careers</h3>
                <Link className={classes.link}>Web design</Link>
                <Link className={classes.link}>Web design</Link>
                <Link className={classes.link}>Web design</Link>
            </div>
            <div class={classes.social}>
                <div className={classes.icons}>
                    <FacebookIcon/>
                    <InstagramIcon/>
                    <TwitterIcon/>
                </div>
                <Link>TERMS & CONDITIONS</Link>
                <Link >PRIVACY POLICY</Link>
            </div>
        </footer>
    )
}

export default withStyles(styles)(PaletteListFooter)
