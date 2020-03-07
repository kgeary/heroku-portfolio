const mailgun = require('mailgun-js')({ apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN });

function sendMailgun(res, from, to, subject, text) {

  const data = {
    from,
    to,
    subject,
    text,
  };

  mailgun.messages().send(data, (error, body) => {
    if (error) {
      console.log("MAILGUN SEND ERROR", error);
      res.status(422).json(err);
    } else {
      console.log(body);
      res.json(body);
    }
  });
}

module.exports = {
  sendEmail: (req, res) => {
    sendMailgun(
      res,
      req.body.from,
      "kgeary@gmail.com",
      req.body.subject,
      req.body.name + " sent a message: " + req.body.message);
  },
};
