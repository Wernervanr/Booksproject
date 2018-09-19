# Comicbooks project
## Synopsis
A simple Comic Book catalog. A two-page app that generates a list of in the database stored comic books. Displays as a clickable summarized table showing the name, publisher, series number, and price. When clicked, it shows the details of the comic book . 

Amongst the table, it shows the most populair comic book based on votes, and the most recent added comic book. It has a summary of 3 recommended rare comic books, based on their price.

There is a login function, which will allow adding, editting and deleting of the comic books.

## Basic instructions
The app is build with php7, javascript, html and it's fair share of dependencies. Below is my attempt to make installation this easy for you.

 ### Steps
 
 - Download and install this repository.
 - Run composer install (Click the link under 'composer.json' at 'Dependencies' to see instructions if you don't have composer installed yet).
 - Create a database and populate with the SQL script provided in the sql directory at the folder 'SQLScripts'.
 - Copy .env.example to .env and replace dummydata with your own details.
 - Copy environment-settings-example.js to environment-settings.js and replace dummydata with your own details.
 - Check the infrastructure/Authentication.php file for the username and password to login.

 ### Dependencies

 **Composer.json**
 
 Go to [this](https://getcomposer.org/doc/01-basic-usage.md) website for instructions on how to install composer.
 
 **Sass**
 
 Go to [this](https://sass-lang.com/) website for instruction on how to install Sass.
 
 ## SQL Base file
 
 I have added the basefile of SQL to this repository. This is an empty books table, with the fields id, category_id, author_id, title, description, price, isbn, created_at, updated_at and votes. You can add to, edit or delete the content of it using the app, or directly in the file with your database management system for working with MySQL databases.
 
 
 
 