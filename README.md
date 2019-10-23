#
# The Holiday Selector

The application is an interactive website to allow users find the holiday that suits them best. The site will retrieve attractions and hotels available for any location in the world.

## **UX**

The purpose of this project is to create a dynamic interactive **(front-end only)** website for users to be able to find the best holiday destination to meet their needs by search attractions and hotels from anywhere in the world.

My goal in design was to deliver an easy to navigate website allowing users to easily access the information and book a holiday package in just a couple of clicks.

**User Stories**

- As a user I would like to be able easily navigate between all features on the site
- As a user I would like to be able to search for a holiday packages based on destination and dates
- As a user I would like to be able to view attractions in an area I am interested in visiting
- As a user I would like to the attraction to be displayed on a map
- As site owner I would like the user to be able to quickly book a package after search
- As a site owner I would like Social media links for users to follow to increase the Holiday Selector presence on social media
- As a site owner I would like a Ticket booking page opens on new tab and main website remains open

**Features**

- Place field for Package and Attraction search that auto completes with any location in the world.
- A package search that pulls back hotels from anywhere in the world based on criteria entered.
  - Package search results are displayed for the user with booking button
- An Attraction search that pulls back attractions from anywhere in the world based on the criteria entered
  - Attraction search are displayed for the user on a map

### Wireframe Mockups

These can be found [here](https://github.com/mickh14/holiday-selecter/blob/master/Hol-select.pdf)

## Features

### [Landing Section](https://mickh14.github.io/holiday-selecter/)

- Background image of a picturesque holiday
- Customers can enter search criteria and retrieve holiday packages

### [Navigation Bar](https://mickh14.github.io/holiday-selecter/) 

- A navigation bar to allow the users easily navigate between, search, packages and attractions section

### [Package Section](https://mickh14.github.io/holiday-selecter/#packages)

- Place field for that auto completes with any location in the world.
- Result from the search on landing page to displayed for the user with booking button
  - Clicking the booking tab opens a modal to allow users enter details

### [Attraction Section](https://mickh14.github.io/holiday-selecter/#attractions) 

- Place field for that auto completes with any location in the world.
- Customers can enter search criteria and retrieve attractions in any location in the world
- Results of search are displayed on a map for the user

## **Technologies**

- **HTML5** was used as the layout to fully build the website
- **CSS** This was used to style the website
- [**Bootstrap**](https://getbootstrap.com/docs/3.3/) was used
  - To get the layout up and running quickly and also use grids to help with the responsive design
  - To support quick set up of Modals and carousal
- [**JavaScript**](https://www.javascript.com/) was used to write the logic of the application
- **Jquery** library was used to improve the use of Javascript
- **Map and Places API** was used to load map and mark attractions
- **RapidAPI** was used to retrieve information on hotels from around the world

## **Testing**

### Testing Passed:

No custom automated testing has been done on this project.

All custom js file are checked through [https://jshint.com/](https://jshint.com/) with no error found only 5 warnings relating to ES6

All html and css are checked through [https://validator.w3.org](https://validator.w3.org/#validate_by_uri) with no major errors found.

**Functional Testing**

- **The navbar is always on top of screen and all navigation links direct the user to the desired location**
- **All social links direct the user to the desired location**
- **Field Validation of booking Submit form with blank fields is not possible**
  - **The appropriate error message is displayed**
- **I have thoroughly tested the usability of the website and was satisfied with the results**
- **Both Place fields will auto complete based on customer input**
- **The Hotels returned from RapidAPI match the search criteria entered on Landing Page**
- **The &#39;Book Now!&#39; will open a new Tab for the customer to enter details and complete booking**
- **The attractions returned match the criteria entered for the attraction search**
- **A map is populated with Markers as expected**
- **Clicking on the Marker will display information on the place**

### Devices Used:

- Samsung Galaxy S5
- Pixel 2
- iPhone 5/SE
- iPhone 6/7/8
- iPhone 6/7/8 Plus
- Iphone X
- iPad
- iPad Pro
- Lenovo ThinkPad laptop

### Browsers Used:

- Chrome
- Firefox

## **Deployment**

My website is currently deployed on Github Pages - [https://mickh14.github.io/holiday-selecter/](https://mickh14.github.io/holiday-selecter/)
[Git HUB repository](https://github.com/mickh14/holiday-selecter)

I was able to deploy the website here by

- Navigate to my repository in which all the files are saved
- Clicking on settings at the top \&gt; Scrolling down to the heading GitHub Pages
-  Underneath the heading there is a source and I chose master branch from the dropdown which allows you to host the website on GitHub Pages.

## **Credits**

### Content:

- Hotel details are retrieved from RapidAPI - [https://rapidapi.com/](https://rapidapi.com/)
- The Map and places were retrieved for Google Map and Places API [https://developers.google.com/maps/documentation](https://developers.google.com/maps/documentation)

### Media Content

The photos used on this site were obtained from [https://www.pexels.com/](https://www.pexels.com/)

### **Acknowledgements**

- [com](https://www.w3schools.com/howto/howto_css_modal_images.asp) - I used example here to troubleshoot a lot of issues encountered.
- YouTube – I used many tutorial videos to troubleshoot issues
- My Code Institute mentor - My mentor Guido Cecilio Garcia Bernal for his help and tips