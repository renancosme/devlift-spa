# DevliftSpa

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.0.

**In order to run this application you need download the backend application called "DevLiftApp" in my github repository.**

Steps:
1. Download this frontend application (in Angular)
2. Download this backend application (in Asp.Net WEB API)
3. Run the backend application locally using Visual Studio

![Backend API running](https://github.com/renancosme/devlift-spa/blob/master/docs/dev-lift-api-local-demo.png)

4. Copy the url from the backend application and than update the url in the environment.ts file.

Replace:
*devLiftBackendApiUrl: 'http://localhost:31242/api/event'; // WebAPI URL*

By:
*devLiftBackendApiUrl = 'http://yourLocalUrl/api/event'; // WebAPI URL*

Finally, run the frontend application using the command `ng serve` Angular CLI.

## Local Live Demo

![Spa running](https://github.com/renancosme/devlift-spa/blob/master/docs/dev-lift-app-running-local-demo.png)

![Spa Page](https://github.com/renancosme/devlift-spa/blob/master/docs/dev-lift-api-local-demo.png)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
