import propTypes from "prop-types";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

MyApp.propTypes = {
	Component: propTypes.node,
	pageProps: propTypes.object,
};

export default MyApp;
