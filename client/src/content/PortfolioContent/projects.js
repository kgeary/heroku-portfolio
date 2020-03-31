import screenPwGen from "./screens/password.jpg";
import screenQuiz from "./screens/quiz.jpg";
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
  {
    link: "password-generator",
    title: "Password Generator",
    tags: "Javascript",
    img: screenPwGen,
    description: "A random password generator written in Javascript"
  },
  {
    link: "interactive-quiz",
    title: "Interactive Quiz",
    tags: "Bootstrap, Javascript",
    img: screenQuiz,
    description: "An interactive quiz application written in Javascript"
  },
  {
    link: "workday-planner",
    title: "Work Day Scheduler",
    tags: "jQuery, MomentJs",
    img: screenSchedule,
    description: "A day planner writte in Javascript/jQuery"
  },
  {
    link: "weather-dashboard",
    title: "Weather Dashboard",
    tags: "AJAX, API, Javascript",
    img: screenWeather,
    description: "A weather dashboard using Javascript and AJAX"
  },
  {
    link: "template-engine",
    title: "Template Engine",
    tags: "Node",
    img: screenTemplate,
    description: "A homebrewed server side template engine"
  },
  {
    link: "employee-tracker",
    title: "MySQL Employee Tracker",
    tags: "MySQL, Node",
    img: screenTracker,
    description: "Node based employee tracking application. Support CRUD operations and using MySQL backed data."
  },
  {
    link: "express-handlebars",
    title: "Burger Tracker",
    tags: "Express, Handlebars, MySQL, Node, ORM, Sequelize",
    img: screenHandlebars,
    description: "An application to supoprt CRUD of burger orders. Uses Handlebars for templating and Sequelize ORM"
  },
  {
    link: "fitness-tracker",
    title: "A MongoDB backed fitness tracker",
    tags: "API, Express, MongoDB, Mongoose, Node",
    img: screenFitness,
    description: "A NoSql based fitness tracking application using Mongoose/MongoDB"
  },
  {
    link: "react-directory",
    title: "Employee Directory using React",
    tags: "React",
    img: screenDirectory,
    description: "Interactive employee directory application built using React. Filter and sort employee tables"
  },
  {
    link: "atxnow",
    title: "ATX Now",
    tags: "AJAX, API, Javascript, jQuery, Leaflet, Pagination",
    img: screenAtxNow,
    description: "Group Project 1. An Event Aggregator that finds local events"
  },
  {
    link: "movie-review-db",
    title: "Movie Reviews DB",
    tags: "EJS, Express, MySQL, Node",
    img: screenMovieReview,
    description: "Group Project 2. A Full-Stack movie review database.  Features authentication, server side rendering, AJAX"
  },
  {
    link: "roster-rocket",
    title: "Roster Rocket",
    tags: "Express, MySQL, Node, React",
    img: screenRoster,
    description: "Group Project 3. Full-stack school registration application. Provides different views and options based on user type (Admin/Parent)"
  },
  {
    link: "show-ratings",
    title: "Interactive TV Show Ratings",
    tags: "Express, Node, React, Chart",
    img: showRatings,
    description: "See how each episode of a TV Series stacked up. An interactive chart with the rating of each episode across the seasons. Built using React, recharts, Express. Date from the OMDB and IMDPB"
  },
];

export default projects.reverse();