# Developer Guide

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- [npm](https://www.npmjs.com/)
- [VS Code](https://code.visualstudio.com/) >= 1.85.0
- [Git](https://git-scm.com/)

## Installation

```bash
git clone https://github.com/stephanebouget/vscode-debugger.git
cd vscode-debugger
npm install
```

## Project Structure

```
src/
  extension.ts          # Extension entry point
  test/
    extension.test.ts   # Mocha tests
    index.ts            # Test runner
out/                    # Compiled output (generated, not versioned)
images/                 # Extension icon
package.json            # VS Code extension manifest
tsconfig.json           # TypeScript configuration
tslint.json             # Linter configuration
```

## Build

Single build:

```bash
npm run compile
```

Watch mode (recompiles on every save):

```bash
npm run watch
```

Compiled files are output to the `out/` folder.

## Running the Extension in Development

1. Open the project in VS Code.
2. Press `F5` to launch a new VS Code window with the extension loaded (Extension Development Host).
3. In that window, open any `.js` or `.ts` file and use `Ctrl+Alt+D` to test the `debugger` command.

## Testing

```bash
npm test
```

This compiles the project and runs the tests via the VS Code test runner (Mocha).

Tests live in `src/test/extension.test.ts`. To add a test, create a new suite or `test()` call in that file.

## Linting

```bash
npx tslint -p tsconfig.json
```

Make sure all linting rules defined in `tslint.json` pass before submitting a contribution.

## Publishing the Extension

Compile for production:

```bash
npm run vscode:prepublish
```

To package and publish to the VS Code Marketplace, use [vsce](https://github.com/microsoft/vscode-vsce):

```bash
npm install -g vsce
vsce package   # generates a .vsix file
vsce publish   # publishes to the Marketplace (requires a Personal Access Token)
```

## Contributing

1. Fork the repository.
2. Create a branch for your feature or fix:
   ```bash
   git checkout -b feat/my-feature
   ```
3. Make your changes in `src/`.
4. Ensure the build passes: `npm run compile`.
5. Ensure tests pass: `npm test`.
6. Ensure linting passes: `npx tslint -p tsconfig.json`.
7. Commit with a clear, conventional message:
   ```bash
   git commit -m "feat: short description of the change"
   ```
8. Push your branch and open a Pull Request on GitHub.

### Commit Conventions

| Prefix      | Usage                                  |
|-------------|----------------------------------------|
| `feat:`     | New feature                            |
| `fix:`      | Bug fix                                |
| `docs:`     | Documentation changes only             |
| `refactor:` | Code refactoring without behavior change |
| `test:`     | Adding or updating tests               |
| `chore:`    | Maintenance tasks (deps, config, etc.) |

## License

MIT — see [LICENSE](LICENSE).
