import React from "react";
import "./Widgets.css";

const widget = (href, title, desc) => ({
  href,
  title,
  desc
});

const vanillaJsWidgets = [
  widget(
    "stripees.html",
    "Stripees",
    "Started as an experiment with css width/height animations"
  ),
  widget("word.html", "Letters -> Words", "Prototype to test orthografish api.")
];

const reactGames = [
  widget("https://orthogra.fish", "Orthografish!", "Earth's favorite spelling game."),
  widget("https://orthogra.fish/#/learner", "Spelling drills!", "Orthogra.fish spinoff to drill short word speling.")
]

const elmWidgets = [
  widget(
    "rain.html",
    "Rain (WIP)",
    "A 'flood the board' style game with triangles in pure elm"
  )
];

const widgetGroup = (title, group) => ({ title, group });

const widgetGroups = [
  widgetGroup("Vanilla JS Experiments", vanillaJsWidgets),
  widgetGroup("Elm Projects", elmWidgets),
  widgetGroup("React Projects", reactGames)
];

export const Widgets = () => (
  <div className="container">
    <div className="list">
      {widgetGroups.map(g => (
        <div key={g.title} className="group">
          <span className="group-title">{g.title}</span>
          <div className="group-content">
            {g.group.map(w => (
              <a key="w.title" href={w.href} className="widget">
                <div key={w.title} className="widget-entry">
                  <span className="widget-title">{w.title}</span>
                  <span className="widget-info">{w.desc}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
    <p>More wigets to come!</p>
  </div>
);
