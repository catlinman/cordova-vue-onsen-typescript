
# Cordova, Vue.js, OnsenUI & TypeScript Stack #

This repository is a stack I created for a mobile application running
through [Apache Cordova](https://cordova.apache.org/). The stack consists
of [Vue.js](https://vuejs.org/) for the front-end view management and general
logic, the [TypeScript programming language](https://www.typescriptlang.org/)
for front-end controllers and back-end processing, [OnsenUI](https://onsen.io/)
for the user interface styling as well as [webpack](https://webpack.js.org/)
for the build and bundling system.

Though the backend management of the application is done entirely through
TypeScript, the front-end Vue.js components have the option of using either
JavaScript or TypeScript. Both have separate linters and are transpiled through
[Babel](https://babeljs.io/).

The project comes with completely documented code, a project structure that I have
iterated on multiple times during development to find the optimal solution as well
as a rich ecosystem of linters and their configurations for rapid development.

Building has been tested with Android, iOS and Browser platforms. They are not
included but instructions on how to add them can be found below.

## Setup & Requirements ##

Since this is a Cordova project you will need to install it from
[npm](https://www.npmjs.com/).

    $ npm install -g cordova

At this point you might want to add the projects you intend to build for later on.
I recommend checking the *config.xml* file beforehand and editing any information
relevant to your project. After that you can use Cordova to add your desired
platforms.

    $ cordova platform add [ios, android, browser]

Once that is complete you will want to install all dependencies by running
the following command in the root project directory. This will read the
*package.json* file and install the required versions of each module.

    $ npm install

Additionally you might want to install Webpack, TypeScript, Vue.js, stylelint,
ESLint and TSLint for use on the command line from outside the project.

    $ npm install -g webpack-cli vue-cli typescript stylelint eslint tslint

If you don't intend to use these otherwise you can continue without globally
installing these dependencies since they are bundled in the development ones.

Before running anything make sure that your you have the prerequisites for
building the platforms. To do so, run the following command and follow the
instructions provided.

    $ cordova requirements

The basic gist of the main requirements is described in the following sections.

### Android ###

For Android build, emulation and deployment; make sure that you have Java
Development Kit and the Android SDK installed. Additionally Gradle is required
which if not shipped with the previous two requirements needs to be installed
separately.

Further actions can be done on any operating system.

### iOS ###

For Android build, emulation and deployment; ensure that you have XCode
installed and updated to the latest version that complies with the current
Cordova version.

Any actions relating to this platform must be done on an Apple macOS system.

# Build & Live Reload #

To prepare the current project for deployment to further devices run the
following command. This will also create all the files for the *www* directory
from which Cordova will create actual builds.

    $ npm run build

By design this command is not triggered through Cordova's build command to avoid
rebuilding every time a new platform is targeted. Instead, all files are
prepared once and then Cordova can take over the rest.

The system comes with a live reload option which you can use to incrementally
see changes made to your code-base live in a browser of your choice. This is
useful when debugging or designing the application. To enable this feature run
the live command.

    $ npm run live

You can then open up your browser and navigate to *localhost:8080*.

In case you want to use the build in a custom setup with the development config
you can differentiate between the build types with the following commands.

    $ npm run (build:dev|build:prod)

By default the build command runs the production config. The development build
does not process the code for production and furthermore keeps linter and
development messages in place.

# Emulation & Deploying #

Once all requirements have been met from the previous sections, plug in your
devices and run the following command for either platforms.

    $ cordova run [ios|android]

You can also emulate the platform instead using the following command.

    $ cordova emulate [ios|android]

Both commands should run the build command beforehand and as such bundle up all
your assets ready for deploying.

If you run into issues and have missing dependencies: Make sure to follow the
instructions in the [Setup & Requirements](#setup--requirements) section.

## License ##

This repository is released under the MIT license. For more information please refer to [LICENSE](https://github.com/catlinman/cordova-vue-onsen-typescript/blob/master/LICENSE).
