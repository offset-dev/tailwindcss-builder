import React from "react";
import AceEditor from "react-ace";
import propTypes from "prop-types";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

const Editor = ({ mode, wrap, value, onChange, readOnly }) => {
	return (
		<AceEditor
			editorProps={{ $blockScrolling: true }}
			mode={mode}
			onChange={onChange}
			readOnly={readOnly}
			setOptions={{}}
			showPrintMargin={false}
			theme="monokai"
			value={value}
			width={"100%"}
			wrapEnabled={wrap}
		/>
	);
};

Editor.propTypes = {
	mode: propTypes.oneOf(["javascript", "css"]),
	onChange: propTypes.func,
	readOnly: propTypes.bool,
	value: propTypes.string.isRequired,
	wrap: propTypes.bool,
};

Editor.defaultProps = {
	mode: "javascript",
	readOnly: false,
	wrap: true,
};

export default Editor;
