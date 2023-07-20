import React from "react";
import Title from "../ui/Title";
import ReviewItem from "./ReviewItem";
import Slider from "react-slick";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Textarea from "@mui/joy/Textarea";
import Typography from "@mui/joy/Typography";
import { Button } from "@mui/material";
import Add from "@mui/icons-material/Add";
import { useState } from "react";
function Review() {
  //!
  const [comment, setComment] = useState("");
  const addEmoji = (emoji) => () => setComment(`${comment}${emoji}`);
  //!
  const [comments, setComments] = useState([]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="w-screen">
      <div className="container mx-auto w-full h-full">
        <div className="w-full h-full flex-col">
          <div className="w-full h-full  px-2 sm:px-0 ">
            <Title addProps="text-[40px] py-10 ml-10 lg:ml-0 ">Customer Review</Title>
            <Slider {...settings}>
              <ReviewItem />
              <ReviewItem />
              <ReviewItem />
            </Slider>
          </div>
          <div>
            <div className="my-16 flex flex-col sm:flex-row  w-full items-center sm:justify-evenly ">
              <div className=" w-full px-3 sm:px-0">
                <Textarea
                  placeholder="Type in here…"
                  value={comment}
                  onChange={(event) => setComment(event.target.value)}
                  minRows={2}
                  maxRows={4}
                  startDecorator={
                    <Box sx={{ display: "flex", gap: 0.5 }}>
                      <IconButton
                        variant="outlined"
                        color="neutral"
                        onClick={addEmoji("👍")}
                      >
                        👍
                      </IconButton>
                      <IconButton
                        variant="outlined"
                        color="neutral"
                        onClick={addEmoji("😔")}
                      >
                        😔
                      </IconButton>
                      <IconButton
                        variant="outlined"
                        color="neutral"
                        onClick={addEmoji("😍")}
                      >
                        😍
                      </IconButton>
                    </Box>
                  }
                  endDecorator={
                    <Typography level="body3" sx={{ ml: "auto" }}>
                      {comment.length} character(s)
                    </Typography>
                  }
                  sx={{ maxWidth: 800 }}
                />
              </div>

              <Button className="text-white hover:bg-secondary font-semibold text-sm bg-primary mt-5 sm:mt-0 ml-5 lg:ml-0">
                {" "}
                <Add className="text-[30px]" /> Add to comment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
