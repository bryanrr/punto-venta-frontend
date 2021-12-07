# Puntoventa Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.3.  
Puntoventa is an administrative app to manage product details from an store and also related sells, and let the access based on users rights and credentials.  
It is a SPA built on Angular to be able to work with app "punto-venta-backend" app, which has modules that does the following, via http request made to the backend:
- Authenticates user via a login form.
- Gets the details of an specific product, and send a http request to modify the desired values.
- Can get the exact moment an specif product was bought, during an specified period of time.
- Can get all products that match an string to its product description.

## Technical Description
It's a SPA built on Angular and Bootstrap, that makes use of forms to submit any data.  
Each field to be submited is already validated by a regex expresion, and in case there's somethig wrong with the input, it shows a custom message giving a hint	on the problem.  
The way to go through each of the options is by using client side routing.  
A logout mechanism that automatically logouts from backend after a certain period of inactivity.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Backend installation
As mentioned before this Angular app works with "punto-venta-backend" which is a Java Spring Boot backend app.  
Place content from dist folder in your Angular Project, to the "punto-venta-backend" app as it follows:
- index.html place it in /resources/templates and renamed as main.html
- All JS files placed at /resources/static/js
- All CSS files placed at /resources/static/css
- All images placed at /resources/static/assets/img  

Don't forget to modify new **main.html** with Thymeleaf directive **th:src="@{/js/js-filename}"** with each of the JS files names, placed at /resources/static/js appended,
			in the script tag. Apply same thing for CSS files.


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
