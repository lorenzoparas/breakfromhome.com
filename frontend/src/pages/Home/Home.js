import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import HomeBody from "./HomeBody";

export default function Home() {
	return (
		<React.Fragment>
			<NavBar/>
			<HomeBody/>
			<Footer/>
		</React.Fragment>
	);
}
