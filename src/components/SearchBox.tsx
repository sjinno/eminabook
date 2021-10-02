import React, { useState } from 'react';
import styled from 'styled-components';

export default function SearchBox() {
    const [textInput, setTextInput] = useState('');

    const formSubmittedHandler = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        // alert(textInput);
        console.log(textInput);
        setTextInput('');
    };

    return (
        <div>
            <StyledForm onSubmit={formSubmittedHandler}>
                <StyledTextInput
                    value={textInput}
                    onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
                        setTextInput(evt.currentTarget.value)
                    }
                    type="text"
                    placeholder="Search Anime"
                />
            </StyledForm>
        </div>
    );
}

const StyledForm = styled.form`
    padding: 2rem 0;

    display: flex;
    justify-content: center;
`;

const StyledTextInput = styled.input`
    width: 96%;
    height: 6.9rem;

    font-size: 2.8rem;
    letter-spacing: 0.1rem;

    border-block: 0.04rem solid rgba(0, 0, 0, 0.2);
    border-inline: 0.04rem solid rgba(0, 0, 0, 0.2);

    padding: 0 2rem;
`;
