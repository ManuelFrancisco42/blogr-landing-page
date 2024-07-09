import React from 'react';
import illustrationPhones from '../assets/images/illustration-phones.svg';
 


const SectionThree = () => (
  <section className="sect-3">
    <img id="illusrationphones" alt="phones" src={illustrationPhones} />
    <div className="info">
      <h3>State of the Art Infrastructure</h3>
      <p>
        With reliability and speed in mind, worldwide data centers provide the
        backbone for ultra-fast connectivity. This ensures your site will load
        instantly, no matter where your readers are, keeping your site
        competitive.
      </p>
    </div>
  </section>
);

export default SectionThree;
