import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import NavBarComponent from "./NavBarComponent";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import CardComponent from "./CardComponent";

//create your first component
const Home = () => {
	return (
		<>
			<NavBarComponent />
			<div className="container"><HeaderComponent />
				<div className="row row-cols-1 row-cols-lg-4 g-4 py-3">
					<CardComponent />
					<CardComponent />
					<CardComponent />
					<CardComponent />
				</div>
			</div>
			<FooterComponent />
		</>
	);
};

export default Home;