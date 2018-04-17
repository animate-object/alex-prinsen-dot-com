import React from 'react';
import './about.css';

export default class About extends React.Component {
    render() {
        const projects = [
            {
                text: "this site",
                href: "https://github.com/animate-object/alex-prinsen-dot-com",
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
                text: "band that sang randomly generated lyrics over improvised instrumentals",
                href: "https://rejectedgnarl.bandcamp.com/album/brazen-savior/"
            },
            {
                text: "pretty excellent baked macaroni and cheese (sorry, no link)"
            }
        ]
        return (
            <div className="about-container">
                <div className="about-content">
                    <h4>welcome</h4>
                    <p>
                        hello! my name is alex prinsen.<br/>
                        this is a space where I will experiment with
                        new or new to me tech and
                        share projects that I've been working on.<br/>
                        the projects I work on usually pertain to my interests.
                    </p>
                    <h4>interests</h4>
                    <p>
                        here are a few of my interests: web development, intentional living, songwriting, cooking, hiking, and biking.
                    </p>
                    <h4>examples</h4>
                    <p>here are some projects I've worked on in my freetime</p>
                    <ul className="projects">
                        {
                            projects.map(item => {
                                return (
                                    <li key={item.text}>
                                        {item.href ? <a href={item.href}>{item.text}</a> : item.text}
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <h4>coming soon</h4>
                    <ul>
                        <li>blog component</li>
                        <li>write ups about tech used on the site</li>
                        <li>more goofy widgets</li>
                    </ul>
                    <h4>contact</h4>
                    <p>
                        <a href="https://github.com/animate-object">github</a><br/>
                        <a href="mailto:alexander.f.prinsen@gmail.com">alexander.f.prinsen@gmail.com</a>
                    </p>
                </div>
            </div>
        )
    }
}
