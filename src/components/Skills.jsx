import React from "react";
import styled from "styled-components"; 

const SkillsContainer = styled.div`
    h1 {
        font-size: 4rem;
        margin-bottom: 1rem;
    }

    ul {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1rem;
        padding: 0;
        margin: 0;
    }

    li {
        margin-bottom: 0.5rem;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        flex-direction: column;
    }

    img {
        width: 50%;
        margin-bottom: 1rem;
    }

    border: 1px solid #ccc;
    padding: 1rem;
    text-align: center;
`;

const Skills = () => {
    return (
        <SkillsContainer>
            <h1>Skills</h1>
            <ul>
                <li>
                    <img src="https://storage.googleapis.com/cms-storage-bucket/6a07d8a62f4308d2b854.svg" alt="Flutter" />
                    <p>Flutter</p>
                </li>
                <li>
                    <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/firebase_logo_icon_168209.png" alt="Java" />
                    <p>Firebase</p>
                </li>
                <li>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png" alt="C++" />
                    <p>C++</p>
                </li>
                <li>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" alt="Python" />
                    <p>Python</p>
                </li>
                <li>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png" alt="JavaScript" />
                    <p>JavaScript</p>
                </li>
                <li>
                    <img src="data:image/png;base64,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" alt="Node.js" />
                    <p>Node.js</p>
                </li>
            </ul>
        </SkillsContainer>
    );
};

export default Skills;

