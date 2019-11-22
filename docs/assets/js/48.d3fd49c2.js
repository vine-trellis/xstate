(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{257:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"tsdx-react-user-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tsdx-react-user-guide","aria-hidden":"true"}},[e._v("#")]),e._v(" TSDX React User Guide")]),e._v(" "),a("p",[e._v("Congrats! You just saved yourself hours of work by bootstrapping this project with TSDX. Let’s get you oriented with what’s here and how to use it.")]),e._v(" "),a("blockquote",[a("p",[e._v("This TSDX setup is meant for developing React components (not apps!) that can be published to NPM. If you’re looking to build an app, you should use "),a("code",[e._v("create-react-app")]),e._v(", "),a("code",[e._v("razzle")]),e._v(", "),a("code",[e._v("nextjs")]),e._v(", "),a("code",[e._v("gatsby")]),e._v(", or "),a("code",[e._v("react-static")]),e._v(".")])]),e._v(" "),a("blockquote",[a("p",[e._v("If you’re new to TypeScript and React, checkout "),a("a",{attrs:{href:"https://github.com/sw-yx/react-typescript-cheatsheet/",target:"_blank",rel:"noopener noreferrer"}},[e._v("this handy cheatsheet"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commands","aria-hidden":"true"}},[e._v("#")]),e._v(" Commands")]),e._v(" "),a("p",[e._v("TSDX scaffolds your new library inside "),a("code",[e._v("/src")]),e._v(", and also sets up a "),a("a",{attrs:{href:"https://parceljs.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Parcel-based"),a("OutboundLink")],1),e._v(" playground for it inside "),a("code",[e._v("/example")]),e._v(".")]),e._v(" "),a("p",[e._v("The recommended workflow is to run TSDX in one terminal:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("npm start # or yarn start\n")])])]),a("p",[e._v("This builds to "),a("code",[e._v("/dist")]),e._v(" and runs the project in watch mode so any edits you save inside "),a("code",[e._v("src")]),e._v(" causes a rebuild to "),a("code",[e._v("/dist")]),e._v(".")]),e._v(" "),a("p",[e._v("Then run the example inside another:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cd example\nnpm i # or yarn to install dependencies\nnpm start # or yarn start\n")])])]),a("p",[e._v("The default example imports and live reloads whatever is in "),a("code",[e._v("/dist")]),e._v(", so if you are seeing an out of date component, make sure TSDX is running in watch mode like we recommend above. "),a("strong",[e._v("No symlinking required")]),e._v(", "),a("a",{attrs:{href:"https://github.com/palmerhq/tsdx/pull/88/files",target:"_blank",rel:"noopener noreferrer"}},[e._v("we use Parcel's aliasing"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("To do a one-off build, use "),a("code",[e._v("npm run build")]),e._v(" or "),a("code",[e._v("yarn build")]),e._v(".")]),e._v(" "),a("p",[e._v("To run tests, use "),a("code",[e._v("npm test")]),e._v(" or "),a("code",[e._v("yarn test")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),a("p",[e._v("Code quality is "),a("a",{attrs:{href:"https://github.com/palmerhq/tsdx/pull/45/files",target:"_blank",rel:"noopener noreferrer"}},[e._v("set up for you"),a("OutboundLink")],1),e._v(" with "),a("code",[e._v("prettier")]),e._v(", "),a("code",[e._v("husky")]),e._v(", and "),a("code",[e._v("lint-staged")]),e._v(". Adjust the respective fields in "),a("code",[e._v("package.json")]),e._v(" accordingly.")]),e._v(" "),a("h3",{attrs:{id:"jest"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jest","aria-hidden":"true"}},[e._v("#")]),e._v(" Jest")]),e._v(" "),a("p",[e._v("Jest tests are set up to run with "),a("code",[e._v("npm test")]),e._v(" or "),a("code",[e._v("yarn test")]),e._v(". This runs the test watcher (Jest) in an interactive mode. By default, runs tests related to files changed since the last commit.")]),e._v(" "),a("h4",{attrs:{id:"setup-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup-files","aria-hidden":"true"}},[e._v("#")]),e._v(" Setup Files")]),e._v(" "),a("p",[e._v("This is the folder structure we set up for you:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/example\n  index.html\n  index.tsx       # test your component here in a demo app\n  package.json\n  tsconfig.json\n/src\n  index.tsx       # EDIT THIS\n/test\n  blah.test.tsx   # EDIT THIS\n.gitignore\npackage.json\nREADME.md         # EDIT THIS\ntsconfig.json\n")])])]),a("h4",{attrs:{id:"react-testing-library"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-testing-library","aria-hidden":"true"}},[e._v("#")]),e._v(" React Testing Library")]),e._v(" "),a("p",[e._v("We do not set up "),a("code",[e._v("react-testing-library")]),e._v(" for you yet, we welcome contributions and documentation on this.")]),e._v(" "),a("h3",{attrs:{id:"rollup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rollup","aria-hidden":"true"}},[e._v("#")]),e._v(" Rollup")]),e._v(" "),a("p",[e._v("TSDX uses "),a("a",{attrs:{href:"https://rollupjs.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rollup v1.x"),a("OutboundLink")],1),e._v(" as a bundler and generates multiple rollup configs for various module formats and build settings. See "),a("a",{attrs:{href:"#optimizations"}},[e._v("Optimizations")]),e._v(" for details.")]),e._v(" "),a("h3",{attrs:{id:"typescript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typescript","aria-hidden":"true"}},[e._v("#")]),e._v(" TypeScript")]),e._v(" "),a("p",[a("code",[e._v("tsconfig.json")]),e._v(" is set up to interpret "),a("code",[e._v("dom")]),e._v(" and "),a("code",[e._v("esnext")]),e._v(" types, as well as "),a("code",[e._v("react")]),e._v(" for "),a("code",[e._v("jsx")]),e._v(". Adjust according to your needs.")]),e._v(" "),a("h2",{attrs:{id:"continuous-integration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#continuous-integration","aria-hidden":"true"}},[e._v("#")]),e._v(" Continuous Integration")]),e._v(" "),a("h3",{attrs:{id:"travis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#travis","aria-hidden":"true"}},[e._v("#")]),e._v(" Travis")]),e._v(" "),a("p",[a("em",[e._v("to be completed")])]),e._v(" "),a("h3",{attrs:{id:"circle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#circle","aria-hidden":"true"}},[e._v("#")]),e._v(" Circle")]),e._v(" "),a("p",[a("em",[e._v("to be completed")])]),e._v(" "),a("h2",{attrs:{id:"optimizations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#optimizations","aria-hidden":"true"}},[e._v("#")]),e._v(" Optimizations")]),e._v(" "),a("p",[e._v("Please see the main "),a("code",[e._v("tsdx")]),e._v(" "),a("a",{attrs:{href:"https://github.com/palmerhq/tsdx#optimizations",target:"_blank",rel:"noopener noreferrer"}},[e._v("optimizations docs"),a("OutboundLink")],1),e._v(". In particular, know that you can take advantage of development-only optimizations:")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// ./types/index.d.ts")]),e._v("\ndeclare "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" __DEV__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" boolean"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// inside your code...")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("__DEV__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("You can also choose to install and use "),a("a",{attrs:{href:"https://github.com/palmerhq/tsdx#invariant",target:"_blank",rel:"noopener noreferrer"}},[e._v("invariant"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://github.com/palmerhq/tsdx#warning",target:"_blank",rel:"noopener noreferrer"}},[e._v("warning"),a("OutboundLink")],1),e._v(" functions.")]),e._v(" "),a("h2",{attrs:{id:"module-formats"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#module-formats","aria-hidden":"true"}},[e._v("#")]),e._v(" Module Formats")]),e._v(" "),a("p",[e._v("CJS, ESModules, and UMD module formats are supported.")]),e._v(" "),a("p",[e._v("The appropriate paths are configured in "),a("code",[e._v("package.json")]),e._v(" and "),a("code",[e._v("dist/index.js")]),e._v(" accordingly. Please report if any issues are found.")]),e._v(" "),a("h2",{attrs:{id:"using-the-playground"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-the-playground","aria-hidden":"true"}},[e._v("#")]),e._v(" Using the Playground")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cd example\nnpm i # or yarn to install dependencies\nnpm start # or yarn start\n")])])]),a("p",[e._v("The default example imports and live reloads whatever is in "),a("code",[e._v("/dist")]),e._v(", so if you are seeing an out of date component, make sure TSDX is running in watch mode like we recommend above. "),a("strong",[e._v("No symlinking required")]),e._v("!")]),e._v(" "),a("h2",{attrs:{id:"deploying-the-playground"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploying-the-playground","aria-hidden":"true"}},[e._v("#")]),e._v(" Deploying the Playground")]),e._v(" "),a("p",[e._v("The Playground is just a simple "),a("a",{attrs:{href:"https://parceljs.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Parcel"),a("OutboundLink")],1),e._v(" app, you can deploy it anywhere you would normally deploy that. Here are some guidelines for "),a("strong",[e._v("manually")]),e._v(" deploying with the Netlify CLI ("),a("code",[e._v("npm i -g netlify-cli")]),e._v("):")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" example "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# if not already in the example folder")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run build "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# builds to dist")]),e._v("\nnetlify deploy "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# deploy the dist folder")]),e._v("\n")])])]),a("p",[e._v("Alternatively, if you already have a git repo connected, you can set up continuous deployment with Netlify:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("netlify init\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# build command: yarn build && cd example && yarn && yarn build")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# directory to deploy: example/dist")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# pick yes for netlify.toml")]),e._v("\n")])])]),a("h2",{attrs:{id:"named-exports"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#named-exports","aria-hidden":"true"}},[e._v("#")]),e._v(" Named Exports")]),e._v(" "),a("p",[e._v("Per Palmer Group guidelines, "),a("a",{attrs:{href:"https://github.com/palmerhq/typescript#exports",target:"_blank",rel:"noopener noreferrer"}},[e._v("always use named exports."),a("OutboundLink")],1),e._v(" Code split inside your React app instead of your React library.")]),e._v(" "),a("h2",{attrs:{id:"including-styles"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#including-styles","aria-hidden":"true"}},[e._v("#")]),e._v(" Including Styles")]),e._v(" "),a("p",[e._v("There are many ways to ship styles, including with CSS-in-JS. TSDX has no opinion on this, configure how you like.")]),e._v(" "),a("p",[e._v("For vanilla CSS, you can include it at the root directory and add it to the "),a("code",[e._v("files")]),e._v(" section in your "),a("code",[e._v("package.json")]),e._v(", so that it can be imported separately by your users and run through their bundler's loader.")]),e._v(" "),a("h2",{attrs:{id:"publishing-to-npm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#publishing-to-npm","aria-hidden":"true"}},[e._v("#")]),e._v(" Publishing to NPM")]),e._v(" "),a("p",[e._v("We recommend using https://github.com/sindresorhus/np.")]),e._v(" "),a("h2",{attrs:{id:"usage-with-lerna"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-with-lerna","aria-hidden":"true"}},[e._v("#")]),e._v(" Usage with Lerna")]),e._v(" "),a("p",[e._v("When creating a new package with TSDX within a project set up with Lerna, you might encounter a "),a("code",[e._v("Cannot resolve dependency")]),e._v(" error when trying to run the "),a("code",[e._v("example")]),e._v(" project. To fix that you will need to make changes to the "),a("code",[e._v("package.json")]),e._v(" file "),a("em",[e._v("inside the "),a("code",[e._v("example")]),e._v(" directory")]),e._v(".")]),e._v(" "),a("p",[e._v("The problem is that due to the nature of how dependencies are installed in Lerna projects, the aliases in the example project's "),a("code",[e._v("package.json")]),e._v(" might not point to the right place, as those dependencies might have been installed in the root of your Lerna project.")]),e._v(" "),a("p",[e._v("Change the "),a("code",[e._v("alias")]),e._v(" to point to where those packages are actually installed. This depends on the directory structure of your Lerna project, so the actual path might be different from the diff below.")]),e._v(" "),a("div",{staticClass:"language-diff extra-class"},[a("pre",{pre:!0,attrs:{class:"language-diff"}},[a("code",[a("span",{pre:!0,attrs:{class:"token unchanged"}},[e._v('   "alias": {\n')]),a("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[e._v('-    "react": "../node_modules/react",\n-    "react-dom": "../node_modules/react-dom"\n')]),a("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[e._v('+    "react": "../../../node_modules/react",\n+    "react-dom": "../../../node_modules/react-dom"\n')]),a("span",{pre:!0,attrs:{class:"token unchanged"}},[e._v("   },\n")])])])]),a("p",[e._v("An alternative to fixing this problem would be to remove aliases altogether and define the dependencies referenced as aliases as dev dependencies instead. "),a("a",{attrs:{href:"https://github.com/palmerhq/tsdx/issues/64",target:"_blank",rel:"noopener noreferrer"}},[e._v("However, that might cause other problems."),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);