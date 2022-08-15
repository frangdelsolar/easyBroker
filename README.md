# EasyBroker

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## NOTES

I found the project to be good learning experience for me. Overall, I am quite happy with the results I was able to achieve within the given timeframe. I believe the most remarkable points of my implementation are the ui elements and the basic functionality.

This project uses both Material UI and PrimeNG components for UI. There is some basic css customization done by me in some elements.

The Property List page displays a list of fifteen cards with the requested details and a thumbnail as well as a link to the Property Detail page. There is also a pagination section, so that the server doesn't overload and user can still navigate through the entire list of published properties.



https://user-images.githubusercontent.com/54779433/184656472-a0f7f193-0b03-48e3-8ae7-213907ac52ec.mp4



The Property Detail Page shows the information related to the specific property: title, description and public id. There is also a carousel for all the images the property object retrieves. Finally, this page contains a contact form where the user can send a request about the property that is on screen (property id is a hidden field that is also sent along with the details the user fills).



https://user-images.githubusercontent.com/54779433/184656498-3227a990-2ef1-47a1-9a3e-a499650f1fa1.mp4



**_ Testing _**

Overall, there is an 85.89% test coverage of the code. Although, all the tests are successful, there is still room for improvements.

**_ Known Limitations _**

- Property list page

* If property is missing thumbnail, no placeholder is set.
* Pagination is missing spanish translation.

- Property detail page

* If you fill the form with good data, you will be able to submit. The form will clear up after success response. In this case, you could try to send a new message, but the source will be lost as a consequence of the form clearing. Submit button will still be clickable, but action will fail unless page refresh.
* There is no way to navigate back to the property list page.
* If the property response is missing images, gallery will be empty without a proper placeholder.

- UX

* Website is not responsive and not mobile friendly.

**_ Posible improvements _**

- Toolbar and Footer navigation tree
- Breadcrumbs
- Toast Service for alerts
- Design and branding
- Social Media links
