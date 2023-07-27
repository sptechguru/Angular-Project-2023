// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  WEBURL: 'http://18.170.237.209:3025/',
  SignupUrl:"https://api-v1-node-dev.herokuapp.com/",
  JsonURL: 'https://jsonplaceholder.typicode.com/',
  Newsapi:' https://newsapi.org/v2/top-headlines?country=in&apiKey=db9b6a7bd1de49f0a7dd8748c0d76d70',
  busines:' https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=db9b6a7bd1de49f0a7dd8748c0d76d70'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
