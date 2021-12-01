// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


export const environment = {
  firebase: {
    projectId: 'salud-trivia-75ccb',
    appId: '1:652870243671:web:e4ab8cdd215ca9c53f1a12',
    databaseURL: 'https://salud-trivia-75ccb-default-rtdb.firebaseio.com',
    storageBucket: 'salud-trivia-75ccb.appspot.com',
    apiKey: 'AIzaSyBaSkTnyKkQADn4nsZRK8gfjXAtFCCHImI',
    authDomain: 'salud-trivia-75ccb.firebaseapp.com',
    messagingSenderId: '652870243671',
    measurementId: 'G-YEG8TV4LXB',
  },
  
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyBaSkTnyKkQADn4nsZRK8gfjXAtFCCHImI",
    authDomain: "salud-trivia-75ccb.firebaseapp.com",
    databaseURL: "https://salud-trivia-75ccb-default-rtdb.firebaseio.com",
    projectId: "salud-trivia-75ccb",
    storageBucket: "salud-trivia-75ccb.appspot.com",
    messagingSenderId: "652870243671",
    appId: "1:652870243671:web:e4ab8cdd215ca9c53f1a12",
    measurementId: "G-YEG8TV4LXB"
  },

  hostname: "http://127.0.0.1:3001"

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
