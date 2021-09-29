import React from 'react';
import { Link } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';

function Social(){
	return (
		<div className="social">

				<Link href="https://www.linkedin.com/in/neel-choksi-73232719b" target="_blank">
					<IconButton><LinkedInIcon style={{ color: blue[500], fontSize: 50 }}>  </LinkedInIcon></IconButton>
  				</Link>	

  				
  				<Link href="https://www.facebook.com/neel.choksi.98" target="_blank">
					<IconButton><FacebookIcon style={{ color: blue[500], fontSize: 50 }}>  </FacebookIcon></IconButton>
  				</Link>	


  				<Link href="https://www.instagram.com/neelchoksi1611/" target="_blank">
					<IconButton><InstagramIcon style={{ color: red[600] , fontSize: 50}}>  </InstagramIcon></IconButton>
  				</Link>	

  				<Link href="https://github.com/NeelChoksi" target="_blank">
					<IconButton><GitHubIcon style={{ color: grey[900] , fontSize: 50}}>  </GitHubIcon></IconButton>
  				</Link>	


				
		</div>



	);
}

export default Social;