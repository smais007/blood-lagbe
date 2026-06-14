import React from 'react';

interface title  {
    title: string;
    headTitle: string;  // Optional prop for a subheading in the title tag.
  };



export const Title: React.FC <title> = ({ title, headTitle }) => {
  return (
    <div className="text-center mt-16 mb-6">
      <h1 className="text-4xl font-bold">{title}</h1>
      <h2 className="text-xl text-red-400 max-w-3xl mx-auto">{headTitle}</h2>
    </div>
  );
};


