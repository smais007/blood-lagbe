// pages/blog.tsx
import React from 'react';

type BlogPost = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Why Blood Donation Matters",
    description: "Learn why donating blood is essential and how it saves lives.",
    imageUrl: "/images/blood-donation-1.jpg", // Replace with actual image paths
  },
  {
    id: 2,
    title: "Health Tips for Blood Donors",
    description: "Tips to prepare and recover after blood donation.",
    imageUrl: "/images/blood-donation-2.jpg",
  },
  // Add more blog posts here
];

const Blog = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-red-600 text-center mb-8">Blood Donation Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="border rounded-lg shadow-md overflow-hidden">
            <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-red-700">{post.title}</h2>
              <p className="text-gray-600 mt-2">{post.description}</p>
              <button className="mt-4 text-red-500 font-semibold hover:underline">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
