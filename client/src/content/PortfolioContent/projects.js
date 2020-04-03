//import screenPwGen from "./screens/password.jpg";
//import screenQuiz from "./screens/quiz.jpg";
import screenSchedule from "./screens/scheduler.jpg";
import screenWeather from "./screens/weather.jpg";
import screenAtxNow from "./screens/atxnow.jpg";
import screenTemplate from "./screens/template.jpg";
import screenTracker from "./screens/employee-tracker.jpg";
import screenHandlebars from "./screens/handlebars.jpg";
import screenMovieReview from "./screens/movie-review.jpg";
import screenFitness from "./screens/fitness-tracker.jpg";
import screenDirectory from "./screens/employee-directory.jpg";
import screenRoster from "./screens/roster-rocket.jpg";
import showRatings from "./screens/showRatings.jpg";


const projects = [
  /*
    {
      github: "password-generator",
      title: "Password Generator",
      tags: "Javascript",
      img: screenPwGen,
      description: "A random password generator written in Javascript"
    },
    {
      github: "interactive-quiz",
      title: "Interactive Quiz",
      tags: "Bootstrap, Javascript",
      img: screenQuiz,
      description: "An interactive quiz application written in Javascript"
    },
    */
  {
    github: "workday-planner",
    deploy: "https://kgeary.github.io/workday-planner/",
    title: "Work Day Scheduler",
    tags: "jQuery, MomentJs",
    img: screenSchedule,
    description: "A day planner writte in Javascript/jQuery"
  },
  {
    github: "weather-dashboard",
    deploy: "https://kgeary.github.io/weather-dashboard/",
    title: "Weather Dashboard",
    tags: "AJAX, API, Javascript",
    img: screenWeather,
    description: "A weather dashboard using Javascript and AJAX"
  },
  {
    github: "template-engine",
    title: "Template Engine",
    tags: "Node",
    img: screenTemplate,
    description: "A homebrewed server side template engine"
  },
  {
    github: "employee-tracker",
    title: "MySQL Employee Tracker",
    tags: "MySQL, Node",
    img: screenTracker,
    description: "Node based employee tracking application. Support CRUD operations and using MySQL backed data."
  },
  {
    github: "express-handlebars",
    deploy: "https://kgeary.github.io/express-handlebars/",
    title: "Burger Tracker",
    tags: "Express, Handlebars, MySQL, Node, ORM, Sequelize",
    img: screenHandlebars,
    description: "An application to supoprt CRUD of burger orders. Uses Handlebars for templating and Sequelize ORM."
  },
  {
    github: "fitness-tracker",
    deploy: "https://kgeary.github.io/fitness-tracker/",
    title: "A MongoDB backed fitness tracker",
    tags: "API, Express, MongoDB, Mongoose, Node",
    img: screenFitness,
    description: "A NoSql based fitness tracking application using Mongoose/MongoDB."
  },
  {
    github: "react-directory",
    title: "Employee Directory using React",
    deploy: "https://kgeary.github.io/react-directory/",
    tags: "React",
    img: screenDirectory,
    description: "Interactive employee directory application built using React. Filter and sort employee tables."
  },
  {
    github: "atxnow",
    deploy: "https://kgeary.github.io/atxnow/",
    title: "ATX Now",
    tags: "AJAX, API, Javascript, jQuery, Leaflet, Pagination",
    img: screenAtxNow,
    description: "An Event Aggregator to find local events and tour dates."
  },
  {
    github: "movie-review-db",
    deploy: "https://lit-inlet-19657.herokuapp.com/",
    title: "Movie Reviews DB",
    tags: "EJS, Express, MySQL, Node",
    img: screenMovieReview,
    description: "A Full-Stack movie review database.  Users can create, read, and delelete their reviews and view reviews from others."
  },
  {
    github: "roster-rocket",
    title: "Roster Rocket",
    deploy: "https://roster-rocket.herokuapp.com/",
    tags: "Express, MySQL, Node, React",
    img: screenRoster,
    description: "Full-stack school registration application. Provides different views and options based on user type (Admin/Parent). Try out the administrator account -- username: blah1@blah.com, password: abcabc"
  },
  {
    github: "show-ratings",
    deploy: "https://showratings.herokuapp.com/",
    title: "Interactive TV Show Ratings",
    tags: "Express, Node, React, Chart",
    img: showRatings,
    description: "See how each episode of a TV Series stacked up. An interactive chart with the rating of each episode across the seasons. Built using React, recharts, Express. Epsiode Ratings provided by the IMDB."
  },
];

export default projects.reverse();