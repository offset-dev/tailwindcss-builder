import propTypes from "prop-types";

import styles from "../styles/components/Checkbox.module.css";

const Checkbox = ({ labelClassName, label, loading, checked, onChange }) => {
	return (
		<label className={`flex items-center space-x-3 cursor-pointer ${labelClassName}`}>
			<input
				checked={checked}
				className={`${styles.formTick} appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-green-500 checked:border-transparent focus:outline-none`}
				disabled={loading}
				onChange={onChange}
				type="checkbox"
			/>
			<span className="text-gray-900 font-medium select-none">{label}</span>
		</label>
	);
};

Checkbox.propTypes = {
	checked: propTypes.bool.isRequired,
	label: propTypes.string.isRequired,
	labelClassName: propTypes.string,
	loading: propTypes.bool,
	onChange: propTypes.func.isRequired,
};

Checkbox.defaultProps = {
	labelClassName: "",
	loading: false,
};

export default Checkbox;
