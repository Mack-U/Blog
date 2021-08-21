// src/components/AllPosts.js

// src/components/AllPosts.js

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";

export default function AllPosts() {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        mainImage{
          asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h2 class="title">Self-Developing</h2>
      <h3 class="intro">Personal Blog by Donnie Underwood</h3>
      <h3 class="intro">Welcome to my blog! This is a blog that targets to help out beginners who want to be front-end developers. I hope that I will be able to take small concepts and break them down in a way that anybody can understand it. We will be diving into HTML, CSS, and JavaScript concepts. There will also be articles in which we dive into the psychology of front-end development and how you can use it to be a more effective developer.</h3>
      <div class ="post">
        {allPostsData &&
          allPostsData.map((post, index) => (
            <Link to={"/" + post.slug.current} key={post.slug.current}>
              <span key={index}>
                <img class="picture" src={post.mainImage.asset.url} alt="" />
                <span>
                  <h2>{post.title}</h2>
                </span>
              </span>
            </Link>
          ))}
      </div>
    </div>
  );
}