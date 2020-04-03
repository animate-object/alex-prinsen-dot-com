import React from "react";
import "./Widgets.css";

const widget = (href, title, desc, tech) => ({
  href,
  title,
  desc,
  tech
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
  )
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
  )
];

const widgetGroup = (title, group) => ({ title, group });

const widgetGroups = [
  widgetGroup("Games", games),
  widgetGroup("Explorations", widgets)
];

export const Widgets = () => (
  <div className="container">
    {widgetGroups.map(group => (
      <table className="widget-table" key={group.title}>
        <tr>
          <th colspan={3}>{group.title}</th>
        </tr>
        <tr>
          <td>Name</td>
          <td>Description</td>
          <td>Tech</td>
        </tr>
        {group.group.map(item => (
          <tr
            key={item.title}
            className="table-row"
            onClick={() => {
              window.open(item.href);
            }}
          >
            <td className="title-col">{item.title}</td>

            <td className="desc-col">{item.desc}</td>
            <td className="tech-col">
              {item.tech.split(" ").map(tech => (
                <span className="tech-tag">{tech}</span>
              ))}
            </td>
          </tr>
        ))}
      </table>
    ))}
  </div>
);
