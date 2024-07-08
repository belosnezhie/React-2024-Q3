## Available Scripts

In the project directory, you can run:

### `npm dev`

Runs the app in the development mode.\
Open [http://localhost:5173/](http://localhost:5173/) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run lint`

Runs ESLint to check syntax and code style in TypeScript files. It checks all files with the .ts or .tsx extension in the src folder.

### `npm run lint:fix`

Runs ESLint with the --fix option to automatically fix any syntax and code style issues found.

### `npm run lint:staged`

Runs lint-staged to check only the changed files in the Git index before committing. This helps maintain consistency in commits and prevents unchecked code from being added.

### `npm run format:fix`

Runs Prettier to automatically format files in the src folder according to defined standards.

### `npm run prepare`

Runs Husky to initialize Git hooks from the .husky folder. Husky is used to add pre-commit hooks that can run scripts before committing, such as lint-staged.

### `npm run preview`

Locally preview the production build.
