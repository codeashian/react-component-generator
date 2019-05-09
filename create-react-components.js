#!/usr/bin/env node

const fs = require('fs-extra');
const prompts = require('prompts');
const ora = require('ora');

const pascalCase = str => {
	return str.replace(str[0], str[0].toUpperCase());
};

(async () => {
	const type = await prompts({
		type: 'select',
		name: 'value',
		message: 'Choose type of Component',
		choices: [
			{ title: 'Component', value: 'component' },
			{ title: 'Composition', value: 'composition' },
			{ title: 'Page', value: 'page' }
		],
		initial: 0
    });
    
	const name = await prompts({
		type: 'text',
		name: 'value',
		message: `What's the name of the ${type.value}?`
	});

	const spinner = ora(`Creating new ${name.value} ${type.value}`).start();

	const templateFilePath = `templates/${type.value}.js`;
	let rootFolder = `./src/${type.value}s/${name.value}`;
	let filePath = `${rootFolder}/index.js`;

	if (type.value === 'page') {
		rootFolder = `./src/${type.value}s/`;
		filePath = `${rootFolder}/${name.value}.js`;
	}

	// Create folder
	await fs.mkdirp(rootFolder).catch(err => {
		spinner.fail(err);
	});

	const templateFile = await fs.readFile(templateFilePath, 'utf8').catch(err => spinner.fail(err));
	const fileContents = templateFile.replace(/COMPONENTNAME/g, pascalCase(name.value));

	// Create file
	await fs.appendFile(filePath, fileContents).catch(err => spinner.fail(err));

	spinner.succeed(`
******************************************************

	A new ${name.value} ${type.value} was created 👏

******************************************************
`);
})();