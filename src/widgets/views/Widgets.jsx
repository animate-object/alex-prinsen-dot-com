import React from "react";
import "./Widgets.css";

const widget = (href, title, desc, tech) => ({
  href,
  title,
  desc,
  tech,
});

const widgets = [
  widget(
    "https://alexprinsen.com/stripees.html",
    "Stripees",
    "Get ready for some stripes",
    "vanillajs"
  ),
  widget(
    "https://alexprinsen.com/word.html",
    "Simple word API GUI",
    "A minimal frontend for my spelling API",
    "vanillajs"
  ),
];

const games = [
  widget(
    "https://animate-object.github.io/followed",
    "Followed",
    "A game of mazes and monsters",
    "fullstack react lambda rust aws"
  ),
  widget(
    "https://orthogra.fish",
    "Orthografish",
    "Earth's favorite spelling game",
    "fullstack react lambda python aws"
  ),
  widget(
    "https://orthogra.fish/#/learner",
    "Spelling drills",
    "Orthogra.fish spinoff to drill short word speling",
    "fullstack react lambda python aws"
  ),
  widget(
    "https://alexprinsen.com/rain.html",
    "Rain",
    "A 'flood the board' style game with triangles in pure elm",
    "elm functional-programming"
  ),
];

const widgetGroup = (title, group) => ({ title, group });

const widgetGroups = [
  widgetGroup("Games", games),
  widgetGroup("Explorations", widgets),
];

export const Widgets = () => (
  <div className="container">
    {widgetGroups.map((group) => (
      <div className="widget-group" key={group.title}>
        <div className="row ">
          <div className="col">{group.title}</div>
        </div>
        <div className="row">
          <div className="col title">Name</div>
          <div className="col desc">Description</div>
          <div className="col tech">Tech</div>
        </div>
        {group.group.map((item) => (
          <div
            className="row item"
            onClick={() => {
              window.open(item.href);
            }}
          >
            <div className="col title entry">{item.title}</div>
            <div className="col desc">{item.desc}</div>
            <div className="col tech">
              {item.tech.split(" ").map((tech) => (
                <div className="tech-tag">{tech}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    ))}
  </div>
);
