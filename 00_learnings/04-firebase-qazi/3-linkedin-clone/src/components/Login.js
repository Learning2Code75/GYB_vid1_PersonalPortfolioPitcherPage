import styled from 'styled-components';

const Login = ({props}) =>{
	return(
		<Container>
			<Nav>
				<a href="/">
					<img src="/images/LinkedInLogin.svg"/>
				</a>
				<div>
					<Join>Join Now</Join>
					<SignIn>Sign In</SignIn>
				</div>
			</Nav>

			<Section>
				<Hero>
					<h1> User Selling Proposition </h1>
					<img src="/images/hero.svg" />
				</Hero>
				<Form>
					<Google>
						<img src="/images/google.svg"/>
						Sign In with google
					</Google>
				</Form>
			</Section>
		</Container>
	)
}

const Container = styled.div`
	padding:0;
`

const Nav = styled.nav`
	max-width:1120px;
	margin:auto;
	padding: 12px 0 16px;
	display:flex;
	align-items:center;
	position:relative;
	justify-content:space-between;
	flex-wrap:nowrap;

	& > a > img{
		width:135px;
		height:50px;
		@media(max-width:768px){
			padding: 0 5px;
		}
	}

	@media(max-width:382px){
		flex-direction:column;
	}
`
const Join = styled.a`
	cursor:pointer;
	font-size:1rem;
	padding:10px 12px;
	text-decoration:none;
	color: rgba(0,0,0,0.8);
	margin-right: 12px;
	border-radius:10px;
	&:hover{
		background:rgba(0,0,0,0.08);
		color:rgba(0,0,0,0.9);
	}
	@media(max-width:768px){
		padding: 5px 6px;
	}

`
const SignIn = styled.a`
	box-shadow: inset 0 0 0 2px #00aaff;
	color:#00aaff;
	border-radius:20px;
	transition: 300ms ease-in;
	font-size:1.2rem;
	font-weight:900;
	line-height:40px;
	padding: 10px 24px;
	text-align:center;
	background:rgba(0,0,0,0);
	cursor:pointer;
	&:hover{
		background:rgba(173,216,230,0.4);
		text-decoration:none;
	}


`
const Section = styled.div`
	display:flex;
	align-content:start;
	min-height:700px;
	padding: 60px 0;
	position:relative;
	flex-wrap:wrap;
	width:100%;
	max-width:1120px;
	margin: 0 auto;
	align-items:center;
	@media(max-width:768px){
		min-height:0px;
		margin:auto;
	}
`;

const Hero = styled.div`
	width:100%;
	display:flex;
	flex-direction:column;
	justify-content:space-between;
	align-items:center;
	min-height:600px;
	max-height:max-content;
	h1{
		padding-bottom:0;
		width:55%;
		font-size:4rem;
		color:#2977c9;
		font-weight:200;
		line-height:70px;
		@media(max-width:988px){
			text-align:center;
			font-size:20px;
			width:100%;
			line-height:2;
		}
	}

	img{
		width:700px;
		height:670px;
		position:absolute;
		bottom:-2px;
		right:5%;

		@media(max-width:988px){
			top:230px;
			width: 85vw;
			position:initial;
			height:60vh;

		}
	}
`
const Form = styled.form`

`
const Google = styled.button`
	display:flex;
	justify-content:center;
	align-items:center;
	background:#fff;
	width:100%;
	margin-top:10px;
	border:none;
	border-radius:30px;
	height:3rem;
	vertical-align: middle;
	z-index: 0;
	transition-duration:200ms;
	font-size:1.3rem;
	color: rgba(0,0,0,0.6);
	border: .5px solid grey;
	img{
		height:2rem;
		width:2rem;
	}
	&:hover{
		background:rgba(0,0,0,0.1);
		color:black;
		cursor:pointer;
	}
`

export default Login;
