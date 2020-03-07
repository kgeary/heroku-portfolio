import screenPwGen from "./screens/place1.jpg";
import screenQuiz from "./screens/place2.jpg";
import screenSchedule from "./screens/place3.jpg";
import screenWeather from "./screens/place4.jpg";
import screenAtxNow from "./screens/place5.jpg";
import screenTemplate from "./screens/place6.jpg";
import screenTracker from "./screens/place7.jpg";
import screenHandlebars from "./screens/place8.jpg";
import screenFitness from "./screens/place9.jpg";
import screenDirectory from "./screens/place10.jpg";

const projects = [
  {
    link: "password-generator",
    title: "Password Generator",
    tags: "",
    img: screenPwGen
  },
  {
    link: "web-apis",
    title: "Interactive Quiz",
    tags: "",
    img: screenQuiz
  },
  {
    link: "third-party-apis",
    title: "Work Day Scheduler",
    tags: "jQuery MomentJs",
    img: screenSchedule
  },
  {
    link: "server-side-apis",
    title: "Weather Dashboard",
    tags: "API AJAX",
    img: screenWeather
  },
  {
    link: "atxnow",
    title: "Event Aggregator",
    tags: "jQuery API Leaflet",
    img: screenAtxNow
  },
  {
    link: "template-engine",
    title: "Template Engine",
    tags: "node",
    img: screenTemplate
  },
  {
    link: "employee-tracker",
    title: "MySql Employee Tracker",
    tags: "node MySql",
    img: screenTracker
  },
  {
    link: "express-handlebars",
    title: "Sequelize Handlebars",
    tags: "node Express Handlebars Sequelize MySql",
    img: screenHandlebars
  },
  {
    link: "fitness-tracker",
    title: "A MongoDB backed fitness tracker",
    tags: "MongoDB, Mongoose, Express, API",
    img: screenFitness
  },
  {
    link: "react-directory",
    title: "Employee Directory",
    tags: "React",
    img: screenDirectory
  }
];

export default projects.reverse();