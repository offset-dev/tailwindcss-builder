import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";

import Alert from "../components/Alert";
import Button from "../components/Button";
import defaultConfig from "../constants/default-config";

const Editor = dynamic(() => import("../components/Editor"), { ssr: false });

const Home = () => {
	const [loading, setLoading] = useState(false);
	const [alert, setAlert] = useState(null);
	const [config, setConfig] = useState(defaultConfig);
	const [result, setResult] = useState(null);

	const process = () => {
		setAlert(false);
		setLoading(true);

		window.setTimeout(() => {
			setLoading(false);
			setResult("RESULTS");
		}, 3000);
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

				<Button loading={loading} onClick={process} title={"Process Configuration"} />

				{result && (
					<>
						<Button danger onClick={() => setResult(null)} title={"Reset"} />
						<div className={"my-6"}>
							<h1 className={"mb-2 text-2xl font-bold font-heading"}>Result</h1>
							<div className={"mb-2"}>
								<Editor readOnly value={result} />
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default Home;
