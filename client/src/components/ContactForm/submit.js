import API from "../../utils/API";

const submit = (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();

  if (message.length < 3) {
    document.getElementById("alert").textContent = "Message is too short";
    return;
  }

  if (!/^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/i.test(email)) {
    document.getElementById("alert").textContent = "You must specify a valid return email";
    return;
  }

  API.sendEmail(email, name, "Contact Form from Heroku", message)
    .then(res => {
      document.getElementById("alert").textContent = "Message Sent!";
      document.getElementById("email").value = "";
      document.getElementById("name").value = "";
      document.getElementById("message").value = "";
      const alert = document.getElementById("alert");
      alert.textContent = "Message Sent!";
      alert.setAttribute("style", "color: green;")

    })
    .catch(err => {
      const alert = document.getElementById("alert");
      alert.textContent = "Problem Sending Message";
      alert.setAttribute("style", "color: red;")
      console.log(err);
    })
};


export default submit;