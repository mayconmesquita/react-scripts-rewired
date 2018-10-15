# react-scripts-rewired

> This fork exists to bring back the basic functionality of `react-app-rewired` in
> a simple and non intrusive way.  
> I do my best to keep this fork up-to-date and to inject as little custom code as
> possible.

This package includes scripts and configuration used by [Create React App](https://github.com/facebook/create-react-app).<br>
Please refer to its documentation:

- [Getting Started](https://github.com/facebook/create-react-app/blob/master/README.md#getting-started) – How to create a new app.
- [User Guide](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md) – How to develop apps bootstrapped with Create React App.

---

## Quick Start

    npx create-react-app project-name --scripts-version react-scripts-rewired

## Extend Webpack config

In your project's root you'll find `webpack.config.extend.js` which contains a simple
function that could mutate the webpack configuration that is provided by `create-react-app`.

    module.exports = (webpackConfig, env, { paths }) => {
        webpackConfig = rewireEslint(webpackConfig)
        return webpackConfig
    }

## Compatible Rewire Libraries:

- [rewire-eslint](./lib/rewire-eslint)

## Extend Webpack DevServer config

The very same concept and signature is applied to the `webpackDevServer.config.extend.js`.

## Custom App Template

You can create your own app template as `.cra-template/` and place it in the
folder in which you are going to create your new app.

If you want to specify a custom template folder to use, there is what I believe
to be a temporary CLI option that will make CRA to use a local template:

    create-react-app \
        project-name \
        --scripts-version react-scripts-rewired \
        --internal-testing-template my-custom-template

## Existing Templates

This custom fork of `react-scripts` comes with a couple of specific templates
that might come in handy to bootstrap a new project:

- [barebone](./lib/template-barebone): plain folder to start with, no existing code.
- [fullstack](./lib/template-fullstack): radium, redux, react-router, express, graphql client, ssr, ... (under construction)


