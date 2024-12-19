import React, { useState } from 'react';
import { Header,Footer } from 'sections';
import NavBar from '../NavBar';
import PostJobStepper from './stepper';
const PostJob = () => {
  return (
    <div className="w-[100%] h-[100%]">
      {/* for header */}
      <Header />
      {/* for nav items */}
      <NavBar />

      <PostJobStepper />

      <Footer />
    </div>
  );
};

export default PostJob;
