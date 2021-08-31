import React from 'react';
import { Link } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import BookIcon from '@material-ui/icons/Book';

import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';

function Social(){
	return (
		<div className="social">



  				
  				<Link href="https://www.facebook.com/takshila.choksi.5" target="_blank">
					<IconButton><FacebookIcon style={{ color: blue[500], fontSize: 50 }}>  </FacebookIcon></IconButton>
  				</Link>	


  				<Link href="https://www.instagram.com/takshila_gujarathi_choksi/" target="_blank">
					<IconButton><InstagramIcon style={{ color: red[600] , fontSize: 50}}>  </InstagramIcon></IconButton>
  				</Link>	
				
				<Link href="https://docs.google.com/document/d/1ETlBTN3y5x_YbCJ0f2Pvpxgyq4VPgyjbfzeHulznooc/edit#" target="_blank">
					<IconButton><BookIcon style={{ color: grey[600] , fontSize: 50}}>  </BookIcon></IconButton>
  				</Link>	



				
		</div>



	);
}

export default Social;