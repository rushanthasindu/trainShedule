var nodemailer = require('nodemailer');


this.seatBookings=function(email)
{
    console.log("An Email is going to sent");
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '<your Email>',
    pass: '<your Password>'
  }
});

var mailOptions = {
  from: '<your Email>',
  to: email,
  subject: ' Seat Booking',
  text: 'Your Seats booked'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

}