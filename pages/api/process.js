import os from "os";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";

import postcss from "postcss";
import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";

export default async function process(req, res) {
	const ID = uuidv4();
	const settings = os.tmpdir() + `/${ID}.js`;

	// Create Settings file
	await fs.writeFileSync(settings, JSON.parse(req.body.config));

	// Process
	const processor = postcss([tailwind(settings), autoprefixer(), cssnano()]);
	const result = await processor.process("@tailwind base;@tailwind components;@tailwind utilities;");

	// Delete Files
	await fs.unlinkSync(settings);
	res.status(200).send(result.css);
}
