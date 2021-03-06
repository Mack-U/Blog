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
    <div class="body">
      <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"></meta>
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
      <meta name="HandheldFriendly" content="true"></meta>
      <div class = "container1">
      <div class="bgimg" alt="/s">
      <h2 class="title">Self-Developing</h2>
      <h3 class="intro author">Personal Blog by Donnie Underwood</h3>
      <h3 class="intro para">Welcome! This is a blog that targets to help out beginners who want to be front-end developers. I hope that I will be able to take small concepts and break them down in a way that anybody can understand it. We will be diving into HTML, CSS, and JavaScript concepts. There will also be articles in which we dive into the psychology of front-end development and how you can use it to be a more effective developer.</h3>
    </div>
    <div class="container2">
      <h2 class="title">Recent Post</h2>
      <div class ="post">
        {allPostsData &&
          allPostsData.map((post, index) => (
            <Link to={"/" + post.slug.current} key={post.slug.current} class="au">
              <span key={index}>
                <img class="picture" src={post.mainImage.asset.url} alt="" />
                <span>
                  <h2 class = "posttitle">{post.title}</h2>
                </span>
                </span>
            </Link>
          ))}
          </div>
      </div>
      <footer>
        <a href="https://www.linkedin.com/in/donnie-underwood-7b6a63159/">
        <svg class = "logo" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
        </a>
        <a href ="https://github.com/Mack-U">
        <svg class="logo" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        </a>
        <a href ="/">
      <svg class="logo" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z"/></svg>
          </a>
      </footer>
      </div>
    </div>
  );
}