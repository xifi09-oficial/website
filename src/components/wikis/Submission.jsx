import { useState } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm"; // For GitHub flavored markdown

const Submissions = () => {
  const [wikiContent, setWikiContent] = useState("");
  const user = JSON.parse(localStorage.getItem("discord_user"));
  const isLoggedIn = user !== null && user !== "false";
  const avatar =
    user && `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`;
  console.log(user);

  if (!user) {
    window.location =
      "https://discordapp.com/oauth2/authorize?client_id=1000517138802552952&redirect_uri=http://localhost:4321/auth&scope=identify&response_type=token";
    return "Not logged in.. redirecting";
  }

  const handleContentChange = (event) => {
    setWikiContent(event.target.value);
  };

  return (
    <>
      <div id="wiki-submission">
        <input
          type="text"
          id="wiki-title"
          placeholder="Wiki Title"
          disabled={!isLoggedIn}
          className="input"
        />
        <textarea
          id="wiki-description"
          placeholder="Wiki Description"
          disabled={!isLoggedIn}
          className="input"
        ></textarea>
        <textarea
          id="wiki-content"
          placeholder="Wiki Content"
          disabled={!isLoggedIn}
          onChange={handleContentChange}
          value={wikiContent}
          className="input"
        ></textarea>
        <div className="markdown-preview">
          <h3>Preview:</h3>
          {isLoggedIn && user && (
            <div className="user-info">
              <img src={avatar} alt="Avatar" className="avatar" />
              <p className="username">{user.username}</p>
              <p className="user-id">{user.id}</p>
            </div>
          )}
          <ReactMarkdown remarkPlugins={[gfm]} children={wikiContent} />
        </div>
        {isLoggedIn && user && (
          <>
            <div className="menu">
              <a
                className="logout-button"
                onClick={() => {
                  localStorage.setItem("discord_user", false);
                  localStorage.setItem("expires", "0");
                  window.location = "/";
                }}
              >
                Logout
              </a>
            </div>
          </>
        )}
      </div>
      <style>
        {`
          .input {
            width: 100%;
            margin-bottom: 10px;
            padding: 8px;
            border-radius: 4px;
            border: 1px solid #ccc;
            box-sizing: border-box;
          }

          .markdown-preview {
            margin-top: 20px;
            border: 1px solid #ccc;
            padding: 10px;
          }

          .avatar {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            margin-right: 10px;
          }

          .user-info {
            display: flex;
            align-items: center;
          }
          
          .avatar {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            margin-right: 10px;
          }
          
          .username {
            margin-top: 0px !important;
            display: block;
            margin-bottom: 5px;
          }
          
          .user-id {
            margin-top: 0px !important;
            font-size: 12px;
            margin-left: 10px;
            color: #777;
          }

          .menu .logout-button {
            border-radius: 4px;
            padding: 14px 16px;
            background: var(--sl-color-gray-6);
          }

          .menu .logout-button:hover {
            cursor: pointer;
          }

          .menu {
            margin-top: 2rem;
          }
      `}
      </style>
    </>
  );
};

export default Submissions;
