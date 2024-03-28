# Simple Issue Viewer

<img class="inline-block" src="https://img.shields.io/github/package-json/dependency-version/alex8088/electron-vite-boilerplate/dev/electron" alt="electron-version">
<img class="inline-block" src="https://img.shields.io/github/package-json/dependency-version/alex8088/electron-vite-boilerplate/dev/electron-vite" alt="electron-vite-version" />
<img class="inline-block" src="https://img.shields.io/github/package-json/dependency-version/alex8088/electron-vite-boilerplate/dev/electron-builder" alt="electron-builder-version" />
<img class="inline-block" src="https://img.shields.io/github/package-json/dependency-version/alex8088/electron-vite-boilerplate/dev/vite" alt="vite-version" />
<img class="inline-block" src="https://img.shields.io/github/package-json/dependency-version/alex8088/electron-vite-boilerplate/dev/vue" alt="vue-version" />
<img class="inline-block" src="https://img.shields.io/github/package-json/dependency-version/alex8088/electron-vite-boilerplate/dev/typescript" alt="typescript-version" />

## Features

|                                                       |                  |                |
| :---------------------------------------------------- | :--------------- | :------------- |
| 💡 Optimize asset handling                            | 🏗️ typescript    | 🌈 Vue         |
| 🚀 Fast HMR for renderer processes                    | 🔌 Easy to debug | ⚛️ Electron    |
| 🔒 Compile to v8 bytecode to protect source code      | 🐙 octokit       | 📙 Markdown-it |
| 🔥 Hot reloading for main process and preload scripts | 💨 Tailwind      | 💅 Flowbite    |

## Getting Started

### pre requirements

- Download repo
- need to have Node V > 18
- you will need to have a valid `GitHub App user access tokens` or [`Fine-grained personal access tokens`](https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/generating-a-user-access-token-for-a-github-app)
- **Rename `.env.template` to `.env`** and add you personal token
- **NOTE:** In order to easily test the application, I provide a `.env.template` with a temporary github token , this token is not valid anymore so please **generate your own token**

### Warning

- This application by no means is a ready production App.
- Some security licenses have been taken like not adding [Content Security Policies](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- No error components besides console logs are provided if an error ocurred
- Since it is only a show case I didn't take the time to create enough tests but I will describe the test needed on testing section

### Project Setup

Please install dependencies

```bash
$ npm install
```

Make sure that you have a valid github token , please see pre requirements

### Development

Tu run the application in dev mode you can run

```bash
$ npm run dev
```

This command will launch the electron app for you on dev mode with hot reload changes

### Build

You can generate the desktop application by running one of these commands upon your OS system.

The application will be save in `/dist` folder

```bash
# For windows
$ npm run build:win

# For macOS
$ npm run build:mac

# For Linux
$ npm run build:linux
```

### Testing

Since time was limited and application is small I didn't take the time to make the test and focus more on generating a placid ux

**Unit test:**

- I would use vitest and testing library to generate unit test
- Another important thing is that I will only generate unit test for non component based modules so in this particular case I will only make test for the composable useGitHubAPI

**Component test**

- To test components (\*.vue) I would use Cypress and the new component testing framework were you can test components in an isolated way and also check for component states (hover, visited, etc)

**Automatic visual regression test**

- With Cypress and plugins like [cypress-visual-regression](https://github.com/cypress-visual-regression/cypress-visual-regression) you can easily generate snapshots to do a visual regression of the components

**E2E test**

- Finally we could do some e2e/functional test to test the overall flow of the application

### Steps

These are the steps follow to create the app. You can also see the branches created that are relate to this flow on github

- Install seed
- Install tailwind
- Install a UI kit (flowbite-vite)
- Adding Tailwind
- Install electron devtools
- Install router
- Install octokit
- Adding Suspense and Transition
- Adding List and detail page
- UX / UI
- cleanup
- dotenv .env
- Doc
