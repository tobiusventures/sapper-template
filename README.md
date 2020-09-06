# Sapper Template

This is the modified [Rollup Sapper Template](https://github.com/sveltejs/sapper-template-rollup) that we use at [Tobius Ventures](https://www.tobius.com) to build new Sapper website applications.

Some key differences include:

- We use __editorconfig__ for file consistency (e.g. 2-spaces instead of tabs)
- We use __eslint__ to help us adhere to the __airbnb__ style guide (99% of it anyway)
- We use __husky__ and __eslint__ to catch unresolved linting errors (git push hook)
- We use __.gitattributes__ to normalize Multi-OS (Windows/MacOS/Linux) line endings (git push hook)
- We write Sapper build artifacts to __node_modules__ instead of __src/node_modules__
- We use __.nvmrc__ to keep Node versions consistent across environments
- We use __dotenv__ to remain environment agnostic (through user-defined env vars)
- We removed __cypress__ support (we are re-evaluating e2e solutions .. because cypress is heavy)
- We normalized most of the __package.json__ dependency versions (for "safer" __semver__ auto-updates)
- We use a less obscure set of __npm run__ workflow commands (__dev__/__dynamic__/__static__)
- We use __tailwindcss__ as our styling framework of choice (which is globally implemented)

_Please see the [TODO](TODO.md) list for future plans._

### Copy

Use `degit` to copy this template repo to your machine to use as the baseline for a new project.

```zsh
[~] mkdir project
[~] npm i degit
[~] npx degit tobiusventures/sapper-template .
[~] git init
[~] less README.md
```

### Setup

Everything needed to create a new project from this code will be installed as a Node dependency.

```zsh
[~] nvm use
[~] cp .env-example .env && vi .env
[~] npm ci
```

### Development Mode

File changes will automatically trigger the browser to reload in `dev` mode. Watch the terminal console for compile errors. Watch the browser console for Website application errors.

```zsh
[~] npm run dev
[~] open http://localhost:3000
```

_Important! `npm run lint` will fail if you do not test `dynamic` or `build` mode before pushing your git changes, so don't be lazy._

### Dynamic Mode

Use `dynamic` mode to test your dynamic `dev` mode application (live Node.js + static assets) before deploying changes to a production environment.

```zsh
[~] npm run dynamic
```

### Static Mode

Use `static` mode to test your static `dev` mode application (static assets only) before deploying changes to production.

```zsh
[~] npm run static
```

### Production

Remap `build` and `start` (inside package.json) to either of the `buildDynamic` and `startDynamic` OR the `buildStatic` and `startStatic` commands. Then your CI/CD solution can be configured to run:

```zsh
[~] npm run build
[~] npm run start
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
