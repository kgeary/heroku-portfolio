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

const projects = [
  {
    link: "password-generator",
    title: "Password Generator",
    tags: "javascript",
    img: screenPwGen
  },
  {
    link: "interactive-quiz",
    title: "Interactive Quiz",
    tags: "bootstrap, javascript",
    img: screenQuiz
  },
  {
    link: "workday-planner",
    title: "Work Day Scheduler",
    tags: "jQuery, MomentJs",
    img: screenSchedule
  },
  {
    link: "weather-dashboard",
    title: "Weather Dashboard",
    tags: "API, AJAX",
    img: screenWeather
  },
  {
    link: "atxnow",
    title: "Event Aggregator",
    tags: "jQuery, API, Leaflet, Pagination",
    img: screenAtxNow
  },
  {
    link: "template-engine",
    title: "Template Engine",
    tags: "Node",
    img: screenTemplate
  },
  {
    link: "employee-tracker",
    title: "MySQL Employee Tracker",
    tags: "Node, MySQL",
    img: screenTracker
  },
  {
    link: "express-handlebars",
    title: "Sequelize Handlebars",
    tags: "Node, Express, Handlebars, Sequelize, MySQL",
    img: screenHandlebars
  },
  {
    link: "movie-review-db",
    title: "Movie Reviews DB",
    tags: "MySQL, Express, Node, EJS",
    img: screenMovieReview
  },
  {
    link: "fitness-tracker",
    title: "A MongoDB backed fitness tracker",
    tags: "MongoDB, Mongoose, Express, API",
    img: screenFitness
  },
  {
    link: "react-directory",
    title: "Employee Directory using React",
    tags: "React",
    img: screenDirectory
  },
  {
    link: "roster-rocket",
    title: "Roster Rocket",
    tags: "MySQL, Express, React, Node",
    img: screenRoster
  }
];

export default projects.reverse();