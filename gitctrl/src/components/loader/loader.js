import React, { createRef, useEffect } from "react";
import lottie from "lottie-web";
import { AnimatePresence, motion } from "framer-motion";
import animation from "../../assets/animation/loader.json";

const Loader = () => {
  let animationContainer = createRef();

  useEffect(() => {
    lottie.loadAnimation({
      container: animationContainer.current,
      animationData: animation,
    });
  }, [animationContainer]);

  return (
    <div
      className="fixed  z-50 w-screen h-screen bg-white loader dark:bg-black"
      ref={animationContainer}
      key="loaderJSON"
    />
  );
};

export default Loader;
