# devlift-spa

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.0.

**devlift-spa is a frontend Angular application and in order to run this application you need download the [backend application called "devLift-api"](https://github.com/renancosme/devLift-api) available in my github repository.**

Steps:
1. Download this frontend application (in Angular)
2. Download this backend application (in Asp.Net WEB API)
3. Run the backend application locally using Visual Studio

![Backend API running](https://github.com/renancosme/devlift-spa/blob/master/docs/dev-lift-api-local-demo.png)

4. Copy the url from the backend application and than update the url in the **environment.ts** file.

Replace:
*devLiftBackendApiUrl: 'http://localhost:31242/api/event';

By:
*devLiftBackendApiUrl = 'http://yourLocalUrl/api/event';

Finally, run the frontend application using the command `ng serve`. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

![Spa running](https://github.com/renancosme/devlift-spa/blob/master/docs/dev-lift-app-running-local-demo.png)

## Local Live Demo

![Spa Page](https://github.com/renancosme/devlift-spa/blob/master/docs/dev-lift-api-local-demo.png)




