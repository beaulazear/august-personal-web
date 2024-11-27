import React, { useEffect } from "react";
import styled from "styled-components";

// Styled Component for Instagram Embed
const InstagramEmbedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  max-width: 100%;
  overflow: hidden;

  blockquote {
    width: 100%;
    max-width: 600px;
    border: none;
  }

  @media (max-width: 768px) {
    blockquote {
      max-width: 100%; /* Fully responsive width for smaller screens */
    }
  }
`;

const InstagramEmbed = () => {
    useEffect(() => {
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
                    border: 0,
                    margin: "1px",
                    padding: 0,
                    maxWidth: "600px",
                    width: "100%",
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