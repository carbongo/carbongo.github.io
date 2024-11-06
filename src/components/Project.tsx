import React, { ReactNode } from "react";
import { Subtitle } from "./typography/Subtitle";
import { BodyText } from "./typography/BodyText";
import { MetaText } from "./typography/MetaText";

type ProjectProps = {
  title: ReactNode;
  meta?: ReactNode;
  content?: ReactNode;
  image?: string;
  buttonText?: ReactNode;
  buttonLink?: string;
};

export const Project: React.FC<ProjectProps> = ({
  title,
  meta,
  content,
  image,
  buttonText,
  buttonLink,
}) => {
  return (
    <article className="project">
      {image && <img src={image}></img>}
      <div>
        <div>
          <Subtitle>{title}</Subtitle>
          {meta && <MetaText>{meta}</MetaText>}
          {content && <BodyText>{content}</BodyText>}
        </div>
        {buttonLink && (
          <BodyText>
            <a
              href={buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="external button"
              aria-label={
                "Open " + title + " (" + buttonLink + ") in a new tab"
              }
            >
              {buttonText || "View Project"}
            </a>
          </BodyText>
        )}
      </div>
    </article>
  );
};
