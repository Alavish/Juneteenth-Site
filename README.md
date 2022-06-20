# 14four-frontend-nuxt
This project uses Nuxt: [https://nuxtjs.org/]

## Initial Setup
 1. Fork this repository
 2. Switch to whichever feature branch suits the project the best
 3. Run `./setup.sh`
 4. Gut what you don't need. Keep what you do. Commit!

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload
npm run dev

# docker install
make install
make dev

```

## Notes

This project uses a Visual Studio Code workspace (`.vscode`). It is highly encouraged to have linting enabled. To do so, please make sure you install the following VSCode extension - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint). If you'd prefer a different linter, make sure to update your workspace.

## Deployments

If pipelines are setup, to deploy, just push to the stage or master branches.

**stage**: Goes to staging

**master**: Goes to production