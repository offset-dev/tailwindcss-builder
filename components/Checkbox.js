import propTypes from "prop-types";

import styles from "../styles/components/Checkbox.module.css";

const Checkbox = ({ labelClassName, label, loading, checked, onChange }) => {
	return (
		<label className={`inline-flex align-middle items-center space-x-3 cursor-pointer ${labelClassName}`}>
			<input
				disabled={loading}
				type="checkbox"
				className={`${styles.formTick} appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-green-500 checked:border-transparent focus:outline-none`}
				checked={checked}
				onChange={onChange}
			/>
			<span className="text-gray-900 font-medium select-none">{label}</span>
		</label>
	);
};

Checkbox.propTypes = {
	labelClassName: propTypes.string,
	label: propTypes.string.isRequired,
	loading: propTypes.bool,
	checked: propTypes.bool.isRequired,
	onChange: propTypes.func.isRequired,
};

Checkbox.defaultProps = {
	labelClassName: "",
	loading: false,
};

export default Checkbox;
