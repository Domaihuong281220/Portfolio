import React from "react";

import { useState, useEffect } from 'react';
import "./style.css"
import {useNavigate} from "react-router-dom"

function Login() {
	const [isHovering, setIsHovering] = useState(false);

	const handleMouseEnter = () => {
		setIsHovering(true);
	};

	const handleMouseLeave = () => {
		setIsHovering(false);
	};

	const navigate = useNavigate(); 

	const [ClassList, setClassList] = useState("login-container");

	useEffect(() => {
		//Runs only on the first render
	}, [ClassList]);

	const SignInOnClick = () => {
		setClassList("login-container")
	}
	const SignUpOnClick = () => {
		setClassList("login-container login-right-panel-active")
	}

	return (
		<>
		<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css'></link>
		<section style={{ position: "relative", zIndex: "-2", paddingTop: "5rem", height: "100vh" }} className="login">
			<div class={ClassList} id="login-container">
				<div class="login-form-container login-sign-up-container">
					<form action="#">
						<h1>Create Account</h1>
						<div class="login-social-container">
							<a href="#" class="login-social"><i class="login-fab login-fa-facebook-f"></i></a>
							<a href="#" class="login-social"><i class="login-fab login-fa-google-plus-g"></i></a>
							<a href="#" class="login-social"><i class="login-fab login-fa-linkedin-in"></i></a>
						</div>
						<span>or use your email for registration</span>
						<input type="text" placeholder="Name" />
						<input type="email" placeholder="Email" />
						<input type="password" placeholder="Password" />
						<button onClick={()=>navigate("/login")}>Sign Up</button>
					</form>
				</div>
				<div class="login-form-container login-sign-in-container">
					<form action="#">
						<h1>Sign in</h1>
						<div class="login-social-container">
							<a href="#" class="login-social"><i class="login-fab login-fa-facebook-f"></i></a>
							<a href="#" class="login-social"><i class="login-fab login-fa-google-plus-g"></i></a>
							<a href="#" class="login-social"><i class="login-fab login-fa-linkedin-in"></i></a>
						</div>
						<span>or use your account</span>
						<input type="email" placeholder="Email" />
						<input type="password" placeholder="Password" />
						<a href="#">Forgot your password?</a>
						<button onClick={()=>navigate("/")}>Sign In</button>
					</form>
				</div>
				<div class="login-overlay-container">
					<div class="login-overlay">
						<div class="login-overlay-panel login-overlay-left">
							<h1>Welcome Back!</h1>
							<p>To keep connected with us please login with your personal info</p>
							<button class="login-ghost" id="login-signIn" onClick={SignInOnClick}>Sign In</button>
						</div>
						<div class="login-overlay-panel login-overlay-right">
							<h1>Hello, Friend!</h1>
							<p>Enter your personal details and start journey with us</p>
							<button class="login-ghost" id="login-signUp" onClick={SignUpOnClick}>Sign Up</button>
						</div>
					</div>
				</div>
			</div>
		</section>
		</>
	);
}

export default Login;
