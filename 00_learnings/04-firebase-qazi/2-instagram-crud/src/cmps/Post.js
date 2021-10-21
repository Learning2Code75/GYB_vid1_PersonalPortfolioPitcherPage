import React from 'react';
import './Post.css';
import Avatar from '@material-ui/core/Avatar';
const Post = ({username,caption,imageUrl})=>{
	return(
		<div className="post">
			<div className="post__header">
				<Avatar 
					className="post__avatar"
					alt={username}
					src="/alt"
				/>

				<h3>{username}</h3>
			</div>
			
			<img className="post__img" src={imageUrl} />

			<h4 className="post__text"><strong>{username}:</strong> {caption} </h4>

		</div>
	);
}

export default Post;

		// {/* header = avatar + username*/}

		// {/*image*/}

		// {/*username + caption*/}
