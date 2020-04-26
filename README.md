
# Sapper Template

This is the modified version of the original [Rollup Sapper Template](https://github.com/sveltejs/sapper-template-rollup) that we use to create new Sapper website applications. Some of the changes include:

- Use __editorconfig__ for file consistency (e.g. 2-spaces instead of tabs)
- Use __eslint__ to support the __airbnb__ style guide (99% of it anyway)
- Use __gitattributes__ to normalize cross-os line endings (pre git commit)
- Use __node_modules__ instead of __src/node_modules__ for Sapper build artifacts
- Use __nvmrc__ to support Node version consistency across dev environments
- Remove __cypress__ support (temporary, still evaluating)
- Simplify __npm run__ workflow and command names (see below)
- Normalize __package.json__ dependency versions for "safe" updates (see __semver__)

_Note: For further planned changes see the [TODO](TODO.md) list._

### Copy

Use `degit` to copy this template repo to your machine for use as a new project.

```zsh
[~] npm i -g degit
[~] degit tobiusventures/sapper-template sapper
[~] vi README.md LICENSE
[~] git init
```

### Install

Everything needed to build this project is available as a Node dependency.

```zsh
[~] nvm use
[~] npm i
```

### Development

File changes will automatically trigger the browser to reload. Watch the terminal console for lint and compile errors. Watch the browser console for Website application errors.

```zsh
[~] npm run dev
[~] open http://localhost:3000
```

### Production

Use the `build` &#8594;	`dynamic` workflow in production if you're building a `dynamic` server-side Node app.

```zsh
[~] npm run build
[~] npm run dynamic
```

Use the `export` &#8594;	`static` workflow in production if you're building a `static` client-side Web app.

```zsh
[~] npm run export
[~] npm run static
```

Choose the desired workflow step (`dynamic` or `static`) and re-alias the `start` command appropriately.

```zsh
[~] npm start
```

### License

[MIT](LICENSE)

### Supporting Links

- [dev setup instructions (macOS)](https://github.com/tobiusventures/macos-dev-setup)
- [svelte docs](https://svelte.dev/)
- [sapper docs](https://sapper.svelte.dev/)
- [tailwind docs](https://tailwindcss.com/docs/installation/)
- [eslint rules](https://eslint.org/docs/rules/)
- [editorconfig docs](https://editorconfig.org/)
- [airbnb javascript style guide](https://github.com/airbnb/javascript)
- [airbnb css/sass style guide](https://github.com/airbnb/css)
- [nvm command](https://github.com/nvm-sh/nvm)
- [degit command](https://www.npmjs.com/package/degit)
- [semver 2.0.0 specification](https://semver.org/)
- [npm semver implementation](https://www.npmjs.com/package/semver)

