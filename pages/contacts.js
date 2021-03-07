import NavBar from "../components/navbar/Navbar";
import Contact from "../components/contact/contact";
import ContactInfo from "../components/contact-info/contact-info";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import emailjs from "emailjs-com";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    bigField: {
      height: "50px",
    },
  },
}));

export default function Contacts() {
  const classes = useStyles();

  function sendEmail(e) {
    console.log("privet");

    e.preventDefault();

    emailjs
      .sendForm(
        "service_bd05yec",
        "template_ryaiefk",
        e.target,
        "user_0YNf5nft1MHdU745e4Uq1"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div id="contact">
      <NavBar />

      <form className="contact-form" onSubmit={sendEmail}>
        <section>
          <div className="c-container">
            <div className="contactInfo">
              <div>
                <h1 style={{ marginBottom: "20px" }}>Contact info</h1>
                <ContactInfo />
              </div>
              <div id="info">
                <Contact />
              </div>
            </div>
            <div className="contactForm">
              <h1>Send a Message</h1>

              <div className="imputs">
                <div className="i-top">
                  <TextField
                    id="name"
                    name="name"
                    required
                    label="Name"
                    variant="standard"
                    style={{
                      width: "100%",
                      marginBottom: "20px",
                    }}
                  />
                  <div className="calhoz"></div>
                  <TextField
                    id="email"
                    name="email"
                    required
                    label="Email"
                    variant="standard"
                    style={{
                      width: "100%",
                      marginBottom: "20px",
                    }}
                  />
                </div>
                <TextField
                  id="standard-basic"
                  name="subject"
                  required
                  label="Subject"
                  variant="standard"
                  style={{ marginBottom: "20px" }}
                />
                <TextField
                  id="standard-basic"
                  name="message"
                  className={classes.bigField}
                  multiline
                  maxRows={5}
                  required
                  label="Message"
                  variant="standard"
                  style={{
                    height: "25px",
                  }}
                />
              </div>

              <input type="submit" value="Send" className="send-message" />
            </div>
          </div>
        </section>
      </form>
    </div>
  );
}
