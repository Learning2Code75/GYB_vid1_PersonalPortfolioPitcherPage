import React from 'react';
import { Link } from '@material-ui/core';
import pj1 from '../img/html_css.png';
import IconButton from '@material-ui/core/IconButton';
import DescriptionIcon from '@material-ui/icons/Description';
import grey from '@material-ui/core/colors/grey';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';



export const WorkCard = ({ description,header, githubLink, pitcherLink, deployedLink }) => {

    return (
        <div className="card">
            <div className="card-img">
                <Link href={deployedLink} target="_blank">
                    <img src={pj1} alt="preprocessing and tensorflow" />
                </Link>
            </div>

            <h2>{header}</h2>
            <p>{description}</p>
            <div className="card-btns">
                {/* <Link href="https://github.com/Learning2Code75/email_spam_ai" target="_blank"> */}
                <Link href={githubLink} target="_blank">
                    <IconButton><DescriptionIcon style={{ color: grey[900], fontSize: 50 }} /></IconButton>
                </Link>
                {/* <Link href="/PreprocessingTensorFlow" target="_blank">
                    <IconButton><DoubleArrowIcon style={{ color: grey[900], fontSize: 50 }} /></IconButton> */}
                <Link href={pitcherLink} target="_blank">
                    <IconButton><DoubleArrowIcon style={{ color: grey[900], fontSize: 50 }} /></IconButton>
                </Link>
            </div>

        </div>

    )
}
