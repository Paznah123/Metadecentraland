import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';

import styled from 'styled-components';
import axios from 'axios';

import { useForm } from '../../hooks/useForm';
import { registerForm } from '../../utils/formsConfig';

import { uiColors } from '../../constants/Colors';

import { REGISTER } from '../../endpoints';

// ============================================================ styles

const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 18rem;

    @media (max-height: 768px) {
        padding-top: 15rem;
    }
`;

const ActionContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const NotAMember = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-indent: 3px;
    font-size: .75rem;
    cursor: default;
    margin: .5rem;

    @media (max-height: 768px) {
        margin: .25rem;
    }
    
    p {
        cursor: pointer;
        text-decoration: underline;
        margin: 0;
        font-size: .75rem;
    }
`;

const buttonStyle = { 
    backgroundColor: uiColors.tertiary, 
    borderColor: uiColors.tertiary, 
    margin: '6px'
};

const formStyle = { 
    backgroundColor: uiColors.secondary, 
    padding: '3rem', 
    border: `2px solid ${uiColors.primary}`, 
    borderRadius: '16px' 
};

const whiteColorStyle = { color: 'white' };

// ============================================================ component

const Register = () => {

    // ===================================== hooks

    const { renderFormInputs, isFormValid } = useForm(registerForm);
    const [error, setError] = useState();
    const navigate = useNavigate();

    // ===================================== handlers

    const registerHandler = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios
                .post(REGISTER, {
                fullName: e.target[0].value,
                email: e.target[1].value,
                password: e.target[2].value,
                });
            localStorage.setItem('userInfo', JSON.stringify(data));
            navigate('/home');
        } catch (err) {  setError(err.response?.data?.message || err.message); }
    };

    // ===================================== JSX
    
    return (
        <FormContainer>
            <Form style={formStyle} onSubmit={registerHandler}>

                {renderFormInputs()}
                { error && <p style={{ color: 'red', margin: '1rem'  }}>{error}</p> }

                <ActionContainer>

                    <NotAMember style={whiteColorStyle}>
                        Registered? 
                        <p onClick={() => navigate('/')}> 
                            click here.
                        </p>
                    </NotAMember>

                    <Button 
                        style={buttonStyle} 
                        type="submit" 
                        disabled={!isFormValid()}
                    >
                        Register
                    </Button>

                </ActionContainer>
                
            </Form>
        </FormContainer>
    );
};

// ============================================================

export default Register