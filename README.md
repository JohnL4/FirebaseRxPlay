# Question for StackOverflow (or whoever)

## Setup and question

So, I'm not grokking this RxJS thing as it pertains to Angular.  I've got a Promise working (user authentication event),
but my attempt to get data asynchronously from Firebase ain't going quite as well.

This code works, for the most part, except in one case: when the user logs in (via redirect).  In that case, we see the 
user-authentication event occur, then (presumably) a change-detection cycle runs that results in the UI being updated to 
show the currently-logged-in user, then (presumably) a databasse event comes in from Firebase (which we see logged in the
console), but there's not another change-detection cycle (and I assume there should be), so the UI doesn't update with the 
new info from the d/b.  If I wait 10-15 seconds (roughly; I haven't actually timed it), OR if I type something in the UI's 
text field, THEN the UI updates with the data snapshot.

So... what have I done wrong?  (I'm sure I've done a number of things wrong, actually.)

## Code walkthrough

I have a service that connects to Firebase, but only during `AppComponent.ngOnInit()` (via two calls to the service).  
In `service.init()`, I hook up the Firebase authStateChanged() event to resolve the user Promise.  
In `service.connectToDatabase()`, I hook up the Observable to a Firebase event via `Observable.fromEventPattern()`.

In the `session-ops` component, I display both the currrent user and the current data snapshot (a list of "cluster names").

Also, `session-ops` has login/logout functions.

### The glitch

So, the problem is on the login-via-redirect.  This thing works like a champ if you're already logged in and you open 
or refresh the page.  It just doesn't work  if you're trying to log in.  It probably doesn't help that I don't fully
understand what's going on in the redirect, either.


# FirebaseRxPlay

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
