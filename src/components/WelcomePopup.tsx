import React, { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
// import { validateEmail } from '../../utils/validation';
import emailjs from "@emailjs/browser";
import { TextField } from "@mui/material";

interface WelcomePopupProps {
  onClose: () => void;
}

const WelcomePopup: React.FC<WelcomePopupProps> = ({ onClose }) => {
  //   const [email, setEmail] = useState('');
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // if (!validateEmail(email)) {
    //   setError('Please enter a valid email address');
    //   return;
    // }
    if (!name) {
      setError("Please enter your name!");
      return;
    }
    setIsSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 2000);
    const templateParams = {
      user_answer: "",
      user_name: name,
      to_email: "arunpandi49388@gmail.com",
    };

    // console.log(templateParams);

    emailjs
      .send(
        "service_a1oq498",
        //   "service_6emb3fj",
        "template_bf0lddl",
        //   "template_doqcpuk",
        templateParams,
        // "iAqS2WsP5gyQhkNg2"
        "_KTTPZIZ2Z2iPVvEy"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          // alert("Your response has been sent!");
        },
        (err) => {
          console.error("FAILED...", err);
          alert("Failed to send your response. Please try again.");
        }
      );
  };
  //   const sendFeedback = () => {
  //     if (!name) {
  //       alert("Please enter your name!");
  //       return;
  //     }

  //     const templateParams = {
  //       user_answer: "",
  //       user_name: name,
  //       to_email: "arunpandi49388@gmail.com",
  //     };

  //     console.log(templateParams);

  //     emailjs
  //       .send(
  //         "service_6emb3fj",
  //         "template_doqcpuk",
  //         templateParams,
  //         "iAqS2WsP5gyQhkNg2"
  //       )
  //       .then(
  //         (response) => {
  //           console.log("SUCCESS!", response.status, response.text);
  //           alert("Your response has been sent!");
  //         },
  //         (err) => {
  //           console.error("FAILED...", err);
  //           alert("Failed to send your response. Please try again.");
  //         }
  //       );
  //   };
  const sendFeedbacks = () => {
    // onClose();
    const templateParams = {
        user_answer: "",
        user_name: name || "Others",
        to_email: "arunpandi49388@gmail.com",
      };

      console.log(templateParams);

      emailjs
      .send(
        "service_a1oq498",
        //   "service_6emb3fj",
        "template_bf0lddl",
        //   "template_doqcpuk",
        templateParams,
        // "iAqS2WsP5gyQhkNg2"
        "_KTTPZIZ2Z2iPVvEy"
      )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            onClose();
          },
          (err) => {
            console.error("FAILED...", err);
            // alert("Failed to send your response. Please try again");
          }
        );
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 4 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 4 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative bg-white rounded-2xl p-10 max-w-md w-full mx-4 shadow-2xl"
      >
        <button
          onClick={sendFeedbacks}
          //   color='#007BFF'
          style={{ color: "#007BFF" }}
          className="absolute top-4 right-4 hover:text-gray-600 transition-colors"
        >
          <X size={24} />
        </button>

        <div className="text-center mb-1">
          <motion.div
            initial={{ rotate: -180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring" }}
            className="inline-block mb-4"
          >
            <img width={200} height={200} src="./images/SMP_logo2.png" alt="" />
            {/* <Leaf size={48} className="text-primary-500" /> */}
            <img width={200} height={200} src="./images/bg3.png" alt="" />
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-2">
              Welcome to <span style={{ color: "#007BFF" }}>SMP</span> Grocery
              store
            </h2>
            <p className="text-gray-600">
              எங்களின் community சேருங்கள், சிறப்பு Offers மற்றும் புதிய
              அப்டேட்கள் பெற!
            </p>
          </motion.div>
        </div>

        {!isSubmitted ? (
          <motion.form
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-2"
          >
            <div>
              <TextField
                size="small"
                label="உங்கள் பெயர் ( Enter your name )"
                InputLabelProps={{
                  style: { fontSize: "14px" },
                }}
                variant="outlined"
                fullWidth
                value={name}
                //   focused
                onChange={(e) => setName(e.target.value)}
                sx={{
                  marginBottom: "20px",
                  marginTop: "20px",
                  "& .MuiInputBase-root": {
                    borderRadius: "8px",
                    fontSize: "16px",
                    //   width: "80%",
                    //   height: "48px",
                    //   alignItems:'center'
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#007BFF",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#0056b3",
                  },
                }}
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
              {/* <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="உங்கள் பெயர் ( Enter your name )"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              /> */}
            </div>
            <button
              type="submit"
              style={{ backgroundColor: " #007BFF" }}
              className="w-full bg-primary-500 text-white py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
              //   onClick={sendFeedback}
            >
              Get Started
            </button>
            {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ color: " #007BFF" }}

            className="text-center text-green-600"
          >

            <p className="text-lg font-semibold">Thank you for joining!</p>
            <p className="text-sm">Redirecting to our store...</p>
          </motion.div> */}
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ color: " #007BFF" }}
            className="text-center text-green-600"
          >
            <p className="text-lg font-semibold">Thank you for joining!</p>
            <p className="text-sm">Redirecting to our website...</p>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default WelcomePopup;
