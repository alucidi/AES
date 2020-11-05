# AES Landing Pages

Allsup Employment Services Landing Pages

### System Dependencies
* [Node.js](https://nodejs.org/en/) (version 12.16.1) and NPM. (**Note:** NPM comes with Node.js)

### Build Tools Used
* [Webpack](https://webpack.js.org/) - Module Bundler
* [SASS](https://sass-lang.com/) - CSS Preprocessor
* [PostCSS](https://postcss.org/) - A tool for transforming CSS with JavaScript
* [ESLint](https://eslint.org/) - JavaScript Linting Utility
* [Stylelint](https://stylelint.io/) - Styles Linting Utility
* [Babel](https://babeljs.io/) - JavaScript Compiler
* [Pug](https://pugjs.org/api/getting-started.html) - Pug Template Engine


### Getting Started
Open Terminal and install all the Node Modules needed by running the following command:

```bash
npm install
```

### Development

To start development, run the following command on your Terminal:

```bash
npm run start
```

To view your project, open the browser to http://localhost:8080

### Production

If you just want to compile SCSS and JS without running the watch or live reloading, just run the following command:

```bash
npm run build
```

### Run a Local Server

If you would like to view the Production build in a local server, run the build command and then run this command:

```bash
npx serve ./dist
```

To view your project, open the browser to http://localhost:5000

### IIS Setup

Create a website in IIS (unless you already have one setup) and copy the files from the "dist" folder (after having run `npm run build`) into the website folder.

Be sure to exclude the "index.html" file, as that is only there for demonstration purposes.

To ensure proper caching and serving of files, ensure the web.config has a `<staticContent>` section similar to this sample web.config:

```xml
<?xml version="1.0" encoding="utf-8" ?>
<configuration>
	<system.webServer>
		<staticContent>
			<clientCache cacheControlMode="UseMaxAge" cacheControlMaxAge="365.00:00:00" />
			<!-- SVG in particular may also require a modification to applicationHost.config. -->
			<remove fileExtension=".svg" />
			<mimeMap fileExtension=".svg" mimeType="image/svg+xml" />
			<remove fileExtension=".webp" />
			<mimeMap fileExtension=".webp" mimeType="image/webp" />
		</staticContent>
	</system.webServer>
</configuration>
```