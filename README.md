# CS465-fullstack
CS-465 Full Stack Development with MEAN

## Architecture
The Travlr Getaways application began as a static HTML webpage that utilized Express and Javascript in order to define routes and controllers that dictate how the web page handles requests. Handlebars was also utilized in order to provide templates for the web page so that it is visually appealing and easily navigable. With this architecture, the browser would need to load each page individually by request via Express, where Express would then retrieve or create the page that pertained to the enetered URL. 

Angular was eventually implemented in order to produce a single-page application (SPA) that would be able to retrieve data dynamically, meaning that the need for multiple pages or browser refreshing would not be necessary to view changes in data. The SPA only needs to load once and does not need to include multiple web pages in order to provide full functionality, at the cost of a longer initial loading time. With all of the data retrieved from the database on the first load, there is no need for multiple server calls such as with a static HTML web page using Express, where navigating multiple pages and/or refreshing the browser may be necessary in order to function properly and display all relevant data.

MongoDB, a NoSQL database product, was used for the sake of storing and retrieving data. Being a NoSQL database, MongoDB deviates from the traditional structures of relational databases, offering a more dynamic means for storage of data. MongoDB is also scalable so that it can adapt to the potential growth of an application, works well with JSON formatting, and queries quickly to reduce response times when making requests to the database.

## Functionality
