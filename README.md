# FanDuelUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.0.

## Assumptions
- The position depth starts from 1 (Though it has been mentioned as 0 in the problem statement, to make is sensible for users, I have assumed it to be better to be 1)
- If a player already exists in the depth map, that player will be updated to have the new depth.
- If the depth is higher than the list of depths, the player takes the last position. (If there are 3 depths in a position, if we decide to add a new player at depth 100, they will be placed at 4)

## Assumptions on Project
- Since there is no database involved, there is no persistance of data.
- Since there is no database, a database service and some dummy data has been created. This has only limited functionalities and tests as this is out of scope.
- Third parties like FlexboxGrid, Angular Material, FontAwesome has been used so as to not re-invent the wheel.
- Components, that are supporting the UI
- More focus is given to Team Depth chart
- The rest of the components are created as supporting structure and lack functionalities as they are out of scope as well.

## Development server

```
> nvm use // Use the suggested node version
> yarn install // Install all the dependencies
> yarn start // Application will start at http://localhost:4200
```

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running linting

Run `yarn lint` to lint the code.

## Running unit tests

Run `yarn test` to execute the unit tests via [Karma](https://karma-runner.github.io).


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
