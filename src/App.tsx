import React from "react";
import { Tag } from "./components/Tag";
import { Header } from "./components/typography/Header";
import { Subheader } from "./components/typography/Subheader";
import { Title } from "./components/typography/Title";
import { BodyText } from "./components/typography/BodyText";
import { Project } from "./components/Project";

export function App() {
  const logoLight = new URL("./assets/logo-light.png", import.meta.url).href;
  const logoDark = new URL("./assets/logo-dark.png", import.meta.url).href;
  const profilePhoto = new URL("./assets/photo.jpg", import.meta.url).href;

  return (
    <div className="content">
      <img
        src={logoLight}
        alt="Georgii Antipin Branding Logo"
        width="153"
        height="28"
        className="logo light"
      />
      <img
        src={logoDark}
        alt="Georgii Antipin Branding Logo"
        width="153"
        height="28"
        className="logo dark"
      />
      <Header>Hi, I'm Georgii 👋</Header>
      <div className="tags">
        <Tag>Indie Game Developer</Tag>
        <Tag>Frontend Developer</Tag>
        <Tag>Visionary</Tag>
        <Tag>Writer</Tag>
      </div>
      <Title>Personal projects</Title>
      <div className="projects">
        <Project title="Debut novel" meta="To be announced" />
        <Project
          title="The Echoes of Mars"
          meta="Released: May 28, 2024"
          content="A tower defence strategy game with a voxel-styled design, set against the backdrop of a futuristic Martian landscape."
          buttonLink="https://store.steampowered.com/app/2948460/The_Echoes_of_Mars"
          buttonText="View on Steam"
          image="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2948460/extras/teom_gameplay.gif"
        />
        <Project
          title="Sakha Civilisation"
          meta="Released: Aug 7, 2017"
          content="A Sid Meier’s Civilization VI mod featuring the Sakha people, offering unique units, buildings, and gameplay mechanics."
          buttonLink="https://steamcommunity.com/sharedfiles/filedetails/?id=1103250960"
          buttonText="View on Steam Workshop"
          image="https://steamuserimages-a.akamaihd.net/ugc/2261434080467170682/FEEA4315B66469D92B51AC4E2DC4E01FDEDBF0A0/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
        />
      </div>
      <Subheader>About me</Subheader>
      <img
        src={profilePhoto}
        alt="Georgii's Photo"
        width="200"
        className="float-right"
      />
      <BodyText>
        I'm a visionary game developer, writer, and creative force with a
        passion for crafting immersive gaming experiences and innovative digital
        content. With expertise in front-end development, UX/UI design,
        programming, and storytelling, I bring a multidisciplinary approach to
        engaging audiences and elevating the entertainment landscape.
      </BodyText>
      <BodyText>
        At the core of my work are my values of innovation, user-centric design,
        and continual learning, ensuring that every project not only meets but
        exceeds the ever-evolving digital landscape's standards.
      </BodyText>
      <BodyText>
        My goal is to manifest the extraordinary, turning ideas into media that
        captivates and brings sheer enjoyment to viewers.
      </BodyText>
      <Subheader>Socials</Subheader>
      <ul>
        <li>
          <a
            href="https://github.com/carbongo"
            target="_blank"
            rel="noopener noreferrer"
            className="external"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.behance.net/carbongo"
            target="_blank"
            rel="noopener noreferrer"
            className="external"
          >
            Behance
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/carbongo"
            target="_blank"
            rel="noopener noreferrer"
            className="external"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://x.com/carbongo1643"
            target="_blank"
            rel="noopener noreferrer"
            className="external"
          >
            Twitter / X
          </a>
        </li>
      </ul>
      <Title>Have a question?</Title>
      <BodyText>
        Feel free to reach out to me via &nbsp;
        <a
          href="mailto:g.antipin@icloud.com"
          aria-label="Send an email to g.antipin@icloud.com"
        >
          email
        </a>
        &nbsp; or on any of the socials listed above for collaboration,
        inquiries, or simply to connect.
      </BodyText>
    </div>
  );
}
