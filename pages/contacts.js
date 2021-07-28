import NavBar from "../components/navbar/Navbar";
import Contact from "../components/contact/contact";
import ContactInfo from "../components/contact-info/contact-info";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";

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

  const [validation, setValidation] = useState(false)

  // Is called on click event of Submit button
  const validate = () => {
    // Changes the current state of validation
    setValidation(!validation)

    // Sets the current state of text const
    setText("Unfortunately, this feature is temporarily disabled :(");
  }

  const [text, setText] = useState("Waiting...")

  function sendEmail(e) {
    console.log("Send email function called");
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

              <div style={{ display: validation ? 'none' : 'initial' }}>

                <h1>Send a Message</h1>

                <div className="imputs">
                  <div className="i-top">
                    <TextField
                      id="name"
                      name="name"
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
                    label="Message"
                    variant="standard"
                    style={{
                      height: "25px",
                    }}
                  />
                </div>

                <input type="button" value="Send" className="send-message" onClick={validate} />
              </div>

              <div style={{ display: validation ? 'initial' : 'none' }}>
                <div className='validation' >
                  <h1>Thank you for contacting me.</h1>
                  <h2 style={{ color: '#ff0000' }}>{text}</h2>
                  <a href='/'>Return to home page</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
}
