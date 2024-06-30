# CS465-fullstack
CS-465 Full Stack Development with MEAN

## Architecture
The Travlr Getaways application began as a static HTML webpage that utilized Express and Javascript in order to define routes and controllers that dictate how the web page handles requests. Handlebars was also utilized in order to provide templates for the web page so that it is visually appealing and easily navigable. With this architecture, the browser would need to load each page individually by request via Express, where Express would then retrieve or create the page that pertained to the enetered URL. 

Angular was eventually implemented in order to produce a single-page application (SPA) that would be able to retrieve data dynamically, meaning that the need for multiple pages or browser refreshing would not be necessary to view changes in data. The SPA only needs to load once and does not need to include multiple web pages in order to provide full functionality, at the cost of a longer initial loading time. With all of the data retrieved from the database on the first load, there is no need for multiple server calls such as with a static HTML web page using Express, where navigating multiple pages and/or refreshing the browser may be necessary in order to function properly and display all relevant data.

MongoDB, a NoSQL database product, was used for the sake of storing and retrieving data. Being a NoSQL database, MongoDB deviates from the traditional structures of relational databases, offering a more dynamic means for storage of data. MongoDB is also scalable so that it can adapt to the potential growth of an application, works well with JSON formatting, and queries quickly to reduce response times when making requests to the database.


## Functionality
Although derived from JavaScript, JSON is not a programming language but, rather, a data interchange format that is capable of storing and moving data whilst being compatible with a wide variety of programming languages. JSONs are used within APIs in order to receive requests and send responses to these requests, and these requests and their responses via JSON within the API are what tie the front end and the back end of the application together.

To enhance the organization of the application code as well as offer reusability to specific UI elements, refactoring static HTML pages through the use of Handlebars was eventually undertaken in order to improve the functionality of the application. Instead of including all data for all trips within the code to be presented to the front end view in a single HTML file, it was decided to implement a trip schema that dictated the necessary elements that would be required for every trip. By doing so, we can efficiently add trips by entering the necessary data for each field, and Handlebars is able to iterate through each trip and display information from these trips by using calls to the different elements rather than repeatedly defining these elements explicitly.


## Testing
Testing was carried out mainly through the use of Postman, which can access different API calls that are provided by the web application. Through Postman, it was possible to register and authenticate a new user in order to produce a JWT token that would allow the user to access specific API endpoints. Namely, the endpoints that underwent this testing consisted of GET, PUT, POST, and DELETE. GET allowed the user to test retrieving data from the application, POST allowed for the addition of new trips and their associated data, PUT allowed for updating existing trips, and DLETE allowed for deleting a specific trip. The JWT token itself ensures that data being transmitted is encrypted and secure.


## Reflection
This course and the assignments undergone within included a lot of new material for me. This is my first time working in depth with both JavaScript and HTML, and also an instance where I was working in development on the front end, as previous courses mainly revolved around back end development. This helped to bridge the gap in understanding how the back end of an application can influence what a user sees when utilizing an application I've developed, and how changes to the back end translate to changes on the front end, whether or not these changes may be immediately visible to the end user. Having an understanding of both ends of application development is an invaluable tool that will surely further enhance my capabilities within software engineering and application development.
