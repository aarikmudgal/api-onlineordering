# Metro Ui Components library

## Installation

```bash
nvm use
yarn install
```

## Development

To startup the storybook in dev-mode, run either `yarn start`.

Then go to http://localhost:4000

All storybook story sources are located within the `src/react` directory and have the `.stories.js` appendix.

### Linting

The project uses eslint, which can be run via

```bash
yarn lint
```

### Tests

The library creates [jest snapshot tests](https://facebook.github.io/jest/docs/snapshot-testing.html)
for all Storybook stories, and has [unit tests](https://facebook.github.io/jest/docs/tutorial-react.html#dom-testing)
for components that implement some kind of logic.

To run all tests, execute

```bash
yarn test
```

#### Only run unit and snapshot tests

```bash
yarn test:jest -- --watch
```

If markup changes are intentional, run the following command, to update the snapshot reference:

```bash
yarn test:jest -- -u
```
