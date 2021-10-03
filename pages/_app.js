import propTypes from "prop-types";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

MyApp.propTypes = {
	Component: propTypes.func,
	pageProps: propTypes.object,
};

export default MyApp;
