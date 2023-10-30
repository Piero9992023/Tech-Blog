# Tech-Blog
  ![Github license](https://img.shields.io/badge/license--blue.svg)
  ## table of contents
  • [Description](#description)
  • [Installation](#installation)
  • [Usage](#usage)
  • [Contributors](#contributors)
  • [License](#license)
  • [Links](#links)
  ## Description
  The purpose of this project was to make a usable website every tech enthusiast can add, delete, and update their post and comments about tech on my tech word/blog website once the user logs into my website. The motivation behind this project was to showcase my newly learned coding skills to show that I can create a fullstack website. The problem that this solves is not many users like to use populated forms of social media but my website offers a safe space where tech enthusiasts and tech blogger can post any thing that is tech related so show other people on my website. I have learned many new things throughout the creation of this project. A couple of the many things I have learned are how to properly use helpers/partials in the handlebars.js and also how to create my heroku with a database using the jawsdb addon on heroku and also by adding the jawsdb code in the connection.js. 
  ## Installation
  The first step was to install all the required packages to the package.json file. I have downloaded the following npm packages connect-session-sequelize, bcrypt, dotenv, express, express-handlebars, express-session, handlebars, inquirer, mysql2, nodemon, and sequelize to make my tech blog work properly. The next step was to create the heroku app to make sure everything is working properly but then I have come across the problem of the seeing my seeds. The command I had to do to make my seeds run through heroku is "heroku run node ./seeds/seed.js", this command made my seeds run in my heroku application. I also had to setup an .env file so that the server know which password, database name, and user to use to make the server run properly if the jawsdb was not working in heroku. To make my database run through heroku I had to add jawsdb to the connection.js and also include jawdb in addons on the heroku website. 
  ## Usage
  Google Drive/Screencastify Link: https://drive.google.com/file/d/1jGRdh_JItprtUXJFSewV1YtHB7RZZkBZ/view 

  Heroku Website Link: https://hidden-refuge-14791-ffc354338485.herokuapp.com/ 
  ## Contributors
  Piero Rodriguez(Me) https://github.com/Piero9992023 
  ## License
  
  https://opensource.org/licenses/
  ## Links
  https://github.com/Piero9992023/Tech-Blog  