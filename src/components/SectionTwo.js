import React from 'react';
import imageEditor from '../assets/images/illustration-editor-mobile.svg';
 

const SectionTwo = () => (
  <section className="sect-2">
    <h2 className="title">Designed for the future</h2>
    <img id="imageeditor" alt="mobile editor" src={imageEditor} />
    <div className="info">
      <h2>Introducing an extensible editor</h2>
      <p>
        Blogr features an exceedingly intuitive interface which lets you focus
        on one thing: creating content. The editor supports management of
        multiple blogs and allows easy manipulation of embeds such as images,
        videos, and Markdown. Extensibility with plugins and themes provide easy
        ways to add functionality or change the looks of a blog.
      </p>
    </div>
    <div className="info">
      <h2>Robust content management</h2>
      <p>
        Flexible content management enables users to easily move through posts.
        Increase the usability of your blog by adding customized categories,
        sections, format, or flow. With this functionality, you’re in full
        control.
      </p>
    </div>
  </section>
);

export default SectionTwo;
