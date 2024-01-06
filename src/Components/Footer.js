import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="flex flex-col space-y-10 justify-center p-10 bg-black">
        <nav class="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
          <a class="text-yellow-400 text-lg md:text-xl">
            " We Care for your <i>Notes</i> "
          </a>
        </nav>

        <div class="flex justify-center space-x-5">
          <a
            href="https://github.com/PSS2134"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="scale-125 mx-1"
              src="https://img.icons8.com/fluent/30/000000/github.png"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/priyansh-shrivastav-b5868b229/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="scale-125 mx-1"
              src="https://img.icons8.com/fluent/30/000000/linkedin-2.png"
            />
          </a>
          <a
            href="https://www.instagram.com/priyanssh_02"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="scale-125 mx-1"
              src="https://img.icons8.com/fluent/30/000000/instagram-new.png"
            />
          </a>
        </div>
        <p class="text-center text-white font-medium">
          &copy; 2024 PSS2134. All rights reservered.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
