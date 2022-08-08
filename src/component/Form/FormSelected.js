import React from 'react';

import { Controller } from 'react-hook-form';
import Select from 'react-select';
import styled from 'styled-components';

const FormWapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    &:not(:first-child) {
        margin-top: 0.6rem;
    }

    & .form-label {
        margin-bottom: 0.6rem;
    }

`;

function FormSelected({ options, methods, defaultValue = '1', label }) {

    return (
        <FormWapper>
            <label className="form-label">{label}</label>
            <Controller
                control={methods.control}
                name={label}
                defaultValue={defaultValue}
                render={({ field: { onChange, value, ref } }) => (
                    <Select
                        inputRef={ref}
                        value={options.find((c) => {
                            return c.value === value;
                        })}
                        onChange={(val) => {
                            return onChange(val.value);
                        }}
                        options={options}
                    />
                )}
            />
        </FormWapper>
    );
}

export default FormSelected;
