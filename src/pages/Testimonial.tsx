import React, { useRef } from "react";
import Slider, { Settings } from "react-slick"; 
import { Box, Typography, Avatar, Button } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useScroll, useTransform,motion } from "framer-motion";

const Testimonials = () => {
  const sliderRef = React.useRef<Slider | null>(null);  

  const settings: Settings = {
    dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,  
  autoplaySpeed: 4000,  
   cssEase: "ease-in-out"
  };

  const handlePrevious = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const testimonials = [
    {
      name: "Rajesh",
      // role: "Nursing Assistant",
      image: "images/cus.jpg",
      text: "Clean and high-quality grocery items available at affordable prices. The delivery was prompt and excellent.",
      rating: 4.5,
    },
    {
      name: " Viki",
      // role: "Nursing Assistant",
      image: "images/cu1.jpg",
      text: "புதிய காய்கறிகள் மற்றும் பழங்கள் கிடைத்தது. தரத்தை பற்றி கவலைப்பட வேண்டாம். மிகவும் பரிந்துரைக்கிறேன்!",
      rating: 3,
    },
    {
      name: "Naveen",
      // role: "Software Engineer",
      image: "images/cus2.jpg",
      text: "All the items were in excellent condition. The best store for all your family's grocery needs!",
      rating: 4,
    },
  ];
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 0.4], ["100px", "0px"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  return (
    <Box
      sx={{
        padding: "2rem",
        backgroundColor: "#f9f9f9",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <motion.h3
       ref={ref}
       style={{ opacity, x,textAlign: "center", fontWeight: "bold", marginBottom: "2rem",fontSize:'1.7rem' }}
        // variant="h4"
        // gutterBottom
        // style={{ textAlign: "center", fontWeight: "bold", marginBottom: "2rem" }}
      >
        What Our Awesome Customers Say
      </motion.h3>

      <Box sx={{ position: "relative" ,}}>
       
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((testimonial, index) => (
            <Box
              key={index}
              sx={{
                // background: "linear-gradient(145deg, #ffffff, #f1f1f1)",
                padding: "2rem",
                borderRadius: "16px",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
                textAlign: "center",
                // margin: "10px",
                position: "relative",
                overflow: "hidden",
              }}
            >
            
              <Box
                sx={{
                  position: "absolute",
                  top: "-10px",
                  right: "-10px",
                  width: "50px",
                  height: "50px",
                  background: "linear-gradient(145deg, #ffd700, #ff9c00)",
                  borderRadius: "50%",
                  opacity: 0.2,
                  zIndex: 0,
                }}
              ></Box>

              
              <Avatar
                src={testimonial.image}
                alt={testimonial.name}
                sx={{
                  width: 100,
                  height: 100,
                  margin: "0 auto",
                  marginBottom: "1rem",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                  zIndex: 1,
                  border: "3px solid #fff",
                }}
              />

              
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                  color: "#333",
                  zIndex: 1,
                }}
              >
                {testimonial.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "0.9rem",
                  color: "#777",
                  marginBottom: "1rem",
                  zIndex: 1,
                }}
              >
                {/* {testimonial.role} */}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1rem",
                  color: "#555",
                  lineHeight: "1.5",
                  zIndex: 1,
                }}
              >
                {testimonial.text}
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
                {Array.from({ length: 5 }, (_, index) => (
                  <i
                    key={index}
                    className={`fas fa-star ${index < testimonial.rating ? "text-yellow-500" : "text-gray-400"}`}
                    style={{ marginRight: "5px", fontSize: "20px" }}
                  ></i>
                ))}
              </Box>

            
              <Box
                sx={{
                  position: "absolute",
                  bottom: "-15px",
                  left: "-15px",
                  width: "80px",
                  height: "80px",
                  background: "linear-gradient(145deg, #ffd700, #ff9c00)",
                  borderRadius: "50%",
                  opacity: 0.3,
                  zIndex: 0,
                }}
              ></Box>
           
              <Box
                component="img"
                src="images/shop.png"
                alt="Star Icon"
                sx={{
                  position: "absolute",
                  top: "20px",
                  left: "20px",
                  width: "30px",
                  height: "30px",
                  opacity: 0.8,
                  zIndex: 1,
                }}
              />
              <Box
                component="img"
                src="images/bg1.png"
                alt="Circle Icon"
                sx={{
                  position: "absolute",
                  bottom: "20px",
                  right: "20px",
                  width: "30px",
                  height: "30px",
                  opacity: 0.8,
                  zIndex: 1,
                }}
              />
            </Box>
          ))}
        </Slider>
        
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            transform: "translateY(-50%)",
            px: 2,
          }}
        >
          <Button
            onClick={handlePrevious}
            variant="contained"
            sx={{
              backgroundColor: "#f5f5f5",
              color: "black",
              minWidth: "40px",
            }}
          >
            &#8592;
          </Button>
          <Button
            onClick={handleNext}
            variant="contained"
            sx={{
              backgroundColor: "#f5f5f5",
              color: "black",
              minWidth: "40px",
            }}
          >
            &#8594;
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonials;
