import React from "react";
import propTypes from "prop-types";

const Button = ({ title, loading, onClick, danger, ...props }) => {
	let classes = "bg-green-500 hover:bg-green-600";
	if (danger) classes = "bg-red-500 hover:bg-red-600";

	return (
		<button
			className={`inline-block w-full md:w-auto px-10 py-3 font-medium text-white rounded transition duration-200 mr-2 ${classes}`}
			onClick={onClick}
			{...props}
		>
			{loading && (
				<svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
					<path
						className="opacity-75"
						d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
						fill="currentColor"
					/>
				</svg>
			)}
			{title}
		</button>
	);
};

Button.propTypes = {
	danger: propTypes.bool,
	loading: propTypes.bool,
	onClick: propTypes.func.isRequired,
	title: propTypes.string.isRequired,
};

Button.defaultProps = {
	danger: false,
	loading: false,
};

export default Button;
