import * as React from 'react';
import Card from "./article.component";

export default function VideoComponent({ title, website, link }) {
    return (
        <iframe 
          src={link} 
          title="Direct Video Frame" 
          style={{ border: "none", width: "30vw", height: "50vh" }}
          allowFullScreen>
        </iframe>
    );
}
