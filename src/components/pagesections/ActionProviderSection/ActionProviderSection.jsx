import React from "react";
import Gist from "react-gist";

import DocsContainer from "../../DocsContainer/DocsContainer";

import { ReactComponent as BoltIcon } from "../../../assets/icons/bolt.svg";

import "./ActionProviderSection.css";

const ActionProviderSection = () => {
  return (
    <div className="app-actionprovider-section">
      <div className="app-actionprovider-section-gist-container">
        <Gist id="9c994790c6dd76f3d1d9dffac59ef2bb" />
      </div>

      <div className="app-actionprovider-section-docs-container">
        <div className="app-actionprovider-section-docs-inner-container">
          <DocsContainer
            title="ActionProvider"
            icon={<BoltIcon className="app-actionprovider-section-icon" />}
          >
            <p>
              The actionprovider controls what kind of action that the chatbot
              is going to perform. The actionprovider is given the
              createChatBotMessage function in the constructor, which you can
              use to create a new response.
            </p>
          </DocsContainer>

          <DocsContainer title="createChatBotMessage">
            <p>
              The createChatBotMessage constructs a chatBotMessage that you can
              insert into the chatbots state. It defines the chat message
              response, and defines whether or not you want to render any custom
              components (widgets) with the response.
              <Gist id="2f0855a6fe8908bddc9f03db31d5caa4" />
            </p>
          </DocsContainer>

          <a
            href="https://gist.github.com/FredrikOseberg/9c994790c6dd76f3d1d9dffac59ef2bb#file-actionprovider-js"
            target="_blank"
            rel="noopener norefferer"
            className="app-gists-link"
          >
            Go to gist
          </a>
        </div>
      </div>
    </div>
  );
};

export default ActionProviderSection;
