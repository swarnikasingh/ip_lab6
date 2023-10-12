import React, { useState } from 'react';
import styled from 'styled-components';

const ContactMeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ContactMeForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 20px;
`;

const ContactMeLabel = styled.label`
    margin-top: 10px;
`;

const ContactMeInput = styled.input`
    margin-left: 10px;
`;

const ContactMeTextarea = styled.textarea`
    margin-left: 10px;
`;

const ContactMeButton = styled.button`
    margin-top: 20px;
`;

function ContactMe() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        setSubmitted(true);
    };

    return (
        <ContactMeContainer>
            <h1>Contact Me</h1>
            {submitted ? (
                <div>Thank you for your message!</div>
            ) : (
                <ContactMeForm onSubmit={handleSubmit}>
                    <ContactMeLabel>
                        Name:
                        <ContactMeInput type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </ContactMeLabel>
                    <ContactMeLabel>
                        Email:
                        <ContactMeInput type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </ContactMeLabel>
                    <ContactMeLabel>
                        Message:
                        <ContactMeTextarea value={message} onChange={(e) => setMessage(e.target.value)} />
                    </ContactMeLabel>
                    <ContactMeButton type="submit">Submit</ContactMeButton>
                </ContactMeForm>
            )}
        </ContactMeContainer>
    );
}

export default ContactMe;
