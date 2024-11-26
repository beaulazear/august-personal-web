import React, { useEffect } from "react";
import styled from "styled-components";

// Styled Component for the Embed Container
const InstagramEmbedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background-color: #f9f9f9;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  max-width: 540px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 12px;
    max-width: 100%;
  }

  iframe {
    width: 100%;
    border: none;
  }
`;

const InstagramEmbed = () => {
    useEffect(() => {
        // Load the Instagram embed script dynamically
        const script = document.createElement("script");
        script.async = true;
        script.src = "//www.instagram.com/embed.js";
        script.onload = () => {
            if (window.instgrm) {
                window.instgrm.Embeds.process();
            }
        };
        document.body.appendChild(script);

        return () => {
            // Cleanup the script if the component is unmounted
            document.body.removeChild(script);
        };
    }, []);

    return (
        <InstagramEmbedContainer>
            <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/beau.lazear/?utm_source=ig_embed&amp;utm_campaign=loading"
                data-instgrm-version="14"
                style={{
                    background: "#FFF",
                    border: "0",
                    borderRadius: "3px",
                    boxShadow: "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
                    margin: "1px",
                    padding: "0",
                }}
            >
                <a
                    href="https://www.instagram.com/beau.lazear/?utm_source=ig_embed&amp;utm_campaign=loading"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View this profile on Instagram
                </a>
            </blockquote>
        </InstagramEmbedContainer>
    );
};

export default InstagramEmbed;