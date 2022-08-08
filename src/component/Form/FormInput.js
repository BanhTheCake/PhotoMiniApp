import { ErrorMessage } from '@hookform/error-message';
import React from 'react';
import styled from 'styled-components';

const FormWapper = styled.div`

    display: flex;
    flex-direction: column;
    width: 100%;

    &:not(:first-child) {
        margin-top: 0.6rem;
    }

    & .form-input {
        font-family: inherit;
        outline: none;
        border: 1px solid black;
        padding: 0.6rem;
        border-radius: 2px;
        resize: none;

        &.errors {
            border-color: tomato;
        }
    }

    & .form-label {
        margin-bottom: 0.6rem;
    }

    & .form-errors {
        margin: 0;
        margin-top: 0.2rem;
        font-size: 14px;
        color: tomato;
    }
`;

function FormInput({ register, label, value, defaultValue = '', errors }) {
    return (
        <FormWapper>
            <label className='form-label' htmlFor={value}>
                {label}
            </label>
            <input defaultValue={defaultValue} className={`form-input ${errors && errors[value]?.message ? 'errors' : ''}`} id={value} {...register(value)} />
            <p className='form-errors'> {errors && errors[value]?.message } </p>
        </FormWapper>
    );
}

export default FormInput;
