import { useState } from "react";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";

import Alert from "../components/Alert";
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import defaultConfig from "../constants/default-config";

const Editor = dynamic(() => import("../components/Editor"), { ssr: false });

const Home = () => {
	const [loading, setLoading] = useState(false);
	const [alert, setAlert] = useState(null);
	const [config, setConfig] = useState(defaultConfig);
	const [result, setResult] = useState(null);
	const [minify, setMinify] = useState(true);

	const process = () => {
		setAlert(false);
		setLoading(true);

		axios
			.post("./api/process", {
				config: JSON.stringify(config),
				minify,
			})
			.then(res => {
				setLoading(false);
				setResult(res.data);
			});
	};

	return (
		<div>
			<Head>
				<title>Tailwind CSS Builder</title>
				<link href={"/favicon.png"} rel="icon" />
			</Head>

			<div className={"container"}>
				<div className={"text-center"}>
					<Image alt={"Tailwind CSS Builder"} className={"block"} height={180} src={"/logo.png"} width={500} />
					<a className={"block"} href={"http://github.com/offset-dev/tailwindcss-builder"} rel={"noreferrer"} target={"_blank"}>
						<Image alt={"Github"} height={20} src={"https://img.shields.io/github/stars/offset-dev/tailwindcss-builder?style=social"} width={72} />
					</a>
				</div>

				{alert && <Alert onClose={() => setAlert(null)} text={alert.text} type={alert.type} />}

				<h1 className={"mb-2 text-2xl font-bold font-heading"}>
					Tailwind Configuration
					<a className={"ml-2 text-green-500"} href={"https://tailwindcss.com/docs/configuration"} rel={"noreferrer"} target={"_blank"}>
						(Documentation)
					</a>
				</h1>

				<div className={"mb-2"}>
					<Editor onChange={setConfig} value={config} />
				</div>

				<Checkbox checked={minify} label="Minify" labelClassName="mb-2 max-w-max" loading={loading} onChange={e => setMinify(e.target.checked)} />

				<Button loading={loading} onClick={process} title={"Process Configuration"} />

				{result && (
					<>
						<Button danger onClick={() => setResult(null)} title={"Reset"} />
						<div className={"my-6"}>
							<h1 className={"mb-2 text-2xl font-bold font-heading"}>
								Result{" "}
								<button
									className={"ml-2 text-green-500 font-bold"}
									onClick={() => {
										const newWindow = window.open(
											"",
											"Tailwind CSS",
											"toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,"
										);
										newWindow.document.body.innerText = result;
									}}
								>
									(Open in new Window)
								</button>
							</h1>
							<div className={"mb-2"}>
								<Editor mode={"css"} readOnly value={result} />
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default Home;
