// Import necessary modules from Next.js
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  // State variables
  const [postTitle, setPostTitle] = useState("");
  const [postKonten, setPostKonten] = useState("");
  const [postKomen, setPostKomen] = useState("");
  const [showDeleteIcon, setShowDeleteIcon] = useState(false);

  // Dummy PostData for illustration purposes
  const PostData = [
    // ... (your existing PostData array)
  ];

  // Function to handle submitting a comment
  const submitKomentar = () => {
    // Add your logic here
    console.log("Submitting Comment:", postKomen);
  };

  // Function to handle adding an image
  const addGambar = () => {
    // Add your logic here
    console.log("Adding Image");
  };

  // Function to handle navigating to a specific route
  const handleCardClick = (route) => {
    router.push(route);
  };

  return (
    <>
      <div className="container mx-auto">
        {/* Your existing HTML code */}
        {/* ... (omitting the container and styling for brevity) */}
        <div className="card w-138 glass mx-auto mt-6 xs:w-full sm:w-full md:w-full lg:w-96 xl:w-6/12">
          <div className="card-body">
            <textarea
              placeholder="Judul Post"
              className="textarea textarea-bordered textarea-md w-full textarea-primary"
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value)}
            ></textarea>
            <textarea
              placeholder="Konten"
              className="textarea textarea-bordered textarea-md w-full textarea-primary"
              value={postKonten}
              onChange={(e) => setPostKonten(e.target.value)}
            ></textarea>
            <div className="flex space-x-2 ml-2 justify text-xl">
              <button className="btn" onClick={() => my_modal_1.showModal()}>
                <i className="ri-image-add-line"></i> Add Image
              </button>
            </div>
            <button
              className="btn btn-sm btn-primary"
              onClick={() => submit("bottom-center")}
            >
              Post
            </button>
          </div>
        </div>
        {/* ... (map through PostData and display each post) ... */}
      </div>
    </>
  );
}
