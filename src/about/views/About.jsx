import React from "react";
import "./About.css";

const projects = [
  {
    text: "this site",
    href: "https://github.com/animate-object/alex-prinsen-dot-com"
  },
  {
    text: "command line tool that generates dnd characters",
    href: "https://github.com/animate-object/chargen"
  },
  {
    text: "lambda that serves random text snippets from dynamo",
    href: "https://github.com/animate-object/pithy-text-lambda"
  },
  {
    text: "a revolutionary library to check for tenness",
    href: "https://github.com/animate-object/is-ten"
  },
  {
    text:
      "band that sang randomly generated lyrics over improvised instrumentals",
    href: "https://rejectedgnarl.bandcamp.com/album/brazen-savior/"
  },
  {
    text: "pretty excellent baked macaroni and cheese (sorry, no link)"
  }
];

export const About = () => (
  <div className="about-container">
    <div className="about-content">
      <h4>welcome</h4>
      <p>
        hello! my name is alex prinsen. this is my corner of virtual space
        <br />
        <p>
          <a href="/resume.pdf">resume </a>
          <br />
          <a href="https://github.com/animate-object">github</a>
          <br />
          <a href="mailto:alexander.f.prinsen@gmail.com">
            alexander.f.prinsen@gmail.com
          </a>
        </p>
      </p>
      <h4>interests</h4>
      <p>
        here are a few of my interests: web development, intentional living,
        hiking and naturalism, cooking, biking, and song writing.
      </p>
      <h4>examples</h4>
      <p>here are some projects I've worked on in my freetime</p>
      <ul className="projects">
        {projects.map(item => {
          return (
            <li key={item.text}>
              {item.href ? <a href={item.href}>{item.text}</a> : item.text}
            </li>
          );
        })}
      </ul>
      <h4>coming soon</h4>
      <ul>
        <li>write ups about tech used on the site</li>
        <li>more goofy widgets</li>
      </ul>
    </div>
  </div>
);
