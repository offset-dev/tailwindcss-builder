import React from "react";
import AceEditor from "react-ace";
import propTypes from "prop-types";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

const Editor = ({ value, onChange, readOnly }) => {
	return (
		<AceEditor
			editorProps={{ $blockScrolling: true }}
			mode="javascript"
			onChange={onChange}
			readOnly={readOnly}
			setOptions={{
				enableBasicAutocompletion: true,
				enableLiveAutocompletion: true,
				enableSnippets: true,
			}}
			showPrintMargin={false}
			theme="monokai"
			value={value}
			width={"100%"}
		/>
	);
};

Editor.propTypes = {
	onChange: propTypes.func,
	readOnly: propTypes.bool,
	value: propTypes.string.isRequired,
};

Editor.defaultProps = {
	readOnly: false,
};

export default Editor;
