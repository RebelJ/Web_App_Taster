# Web_App_Taster
Web application build with a node.js back-end and a React.js front-end. 

This application allows you to create, delete, update and retrieve items in a mysql database. 
An API node.js communicates with the database and a front end in react.js displays in a menu items and different possible actions.

To use this application, 

you must import the database with this command : 

    UNIX shell> mysql crud_db < crud_db_items.sql

    The same in Windows command prompt:   mysql -p -u [root] [crud_db] < crud_db_items.sql

    PowerShell  C:\> cmd.exe /c "mysql -u root -p crud_db < crud_db_items.sql"

    MySQL command line

        mysql> use crud_db;
        mysql> source crud_db_items.sql;


Then you need to use a terminal to go to the api folder and type the command  :   npm start

Then you will have to go to the client folder and type the command : npm start 

In a browser you can use the application via the url: http://localhost:3000/

