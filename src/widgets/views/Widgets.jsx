import React from "react";
import "./Widgets.css";

const widget = (href, title, desc) => ({ href, title, desc });

const vanillaJsWidgets = [
  widget(
    "/stripees.html",
    "Stripees",
    "Started as an experiment with css width/height animations"
  )
];

const widgetGroup = (title, group) => ({ title, group });

const widgetGroups = [widgetGroup("Vanilla JS Experiments", vanillaJsWidgets)];

export const Widgets = () => (
  <div class="container">
    <div class="list">
      {widgetGroups.map(g => (
        <div key={g.title} class="group">
          <span class="group-title">{g.title}</span>
          <div class="group-content">
            {g.group.map(w => (
              <a href={w.href} class="widget">
                <div key={w.title} class="widget-entry">
                  <span class="widget-title">{w.title}</span>
                  <span class="widget-info">{w.desc}</span>
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
