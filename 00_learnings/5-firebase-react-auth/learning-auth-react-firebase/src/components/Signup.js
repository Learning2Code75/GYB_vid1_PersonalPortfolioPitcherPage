import React,{useRef} from 'react';
// import {Form,Button,Card} from 'react-bootstrap';


export default function Signup(){

	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmationRef = useRef();

	return(

			<>
				<div>
					<div>
						<h2 className="text-center mb-4">Sign Up</h2>
						<form>
							<div id="email">
								<label>Email</label>
								<input type="email" ref={emailRef} required />
							</div>
							<div id="password">
								<label>Password</label>
								<input type="password" ref={passwordRef} required />
							</div>
							<div id="password-confirm">
								<label>Confirm Password</label>
								<input type="password" ref={passwordConfirmationRef} required />
							</div>

							<button className="w-100" type="submit">Sign up</button>

						</form>
					</div>

				</div>
				<div className="w-100 text-center mt-2">
					Already have an account? Log In
				</div>


			</>
	)
}