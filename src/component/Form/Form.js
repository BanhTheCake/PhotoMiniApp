import { style } from '@mui/system';
import React, { useCallback, useRef, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import styled from 'styled-components';

import SaveIcon from '@mui/icons-material/Save';

import Button from '@mui/material/Button';
import Select from 'react-select';

import OPTIONS_SELECT from '../../constant/optionSelect';
import FormInput from './FormInput';
import FormTextarea from './FormTextarea';
import FormSelected from './FormSelected';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { addPhotos, editPhoto } from '../../features/photos/photoSlice';

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const FormWapper = styled.div`
    display: flex;
    max-width: 500px;
    margin: 1rem auto;

    & .form-inner {
        width: 100%;
    }

    & .form-item {
        display: flex;
        flex-direction: column;
        width: 100%;

        &:not(:first-child) {
            margin-top: 1rem;
        }

        & .form-label {
            margin-bottom: 0.6rem;
        }

        & .random-img {
            border-radius: 10px;
            margin-top: 1rem;
        }

        & .form-errors {
            margin: 0;
            margin-top: 0.2rem;
            font-size: 14px;
            color: tomato;
        }
    }
`;

const schema = yup.object().shape({
    Title: yup.string().required('First name is a required field'),
    Descriptions: yup.string().required(),
    Img: yup.string().test({
        message: 'Please Random a picture',
        test: (value) => value !== 'https://picsum.photos/300/300',
    }),
});

function Form({ idPhoto }) {

    const [isEditMode, setIsEditMode] = useState(false);
    const [dataEditMode, setDataEditMode] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const photoList = useSelector(state => state.photos)

    const methods = useForm({ resolver: yupResolver(schema) });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = methods;
    
    
    const dispatch = useDispatch();
    
    let navigate = useNavigate();
    
    let alertTimeout = useRef();

    if (idPhoto && !isEditMode) {
        const currentPhoto = photoList.find(photo => photo.id === +idPhoto);
        setDataEditMode(currentPhoto)
        setIsEditMode(true)
    }
    
    const onSubmit = (data) => {
        if (alertTimeout.current) {
            clearTimeout(alertTimeout.current);
            setIsLoading(false);
        }
        setIsLoading(true);
        alertTimeout.current = setTimeout(() => {
            const { Category, Descriptions, Title, Img } = data
            if (isEditMode) {
                dispatch(editPhoto({
                    id: +idPhoto,
                    Descriptions,
                    Title,
                    Category,
                    img: Img,
                }))
                setIsLoading(false);
                return navigate('/');
            }
            dispatch(
                addPhotos({
                    id: randomInteger(1, 2000),
                    Descriptions,
                    Title,
                    Category,
                    img: Img,
                })
            );
            setIsLoading(false);
            return navigate('/');
        }, 300);
    };

    function handleRandomImg(onchange) {
        const randomID = randomInteger(1, 2000);
        const value = `https://picsum.photos/id/${randomID}/300/300`;
        onchange(value);
    }

    return (
        <FormWapper>
            <form onSubmit={handleSubmit(onSubmit)} className="form-inner">
                <FormInput
                    register={register}
                    label="Title"
                    value="Title"
                    errors={errors}
                    defaultValue={isEditMode ? dataEditMode?.Title : ''}
                />
                <FormTextarea
                    register={register}
                    label="Descriptions"
                    value="Descriptions"
                    errors={errors}
                    defaultValue={isEditMode ? dataEditMode?.Descriptions : ''}
                />
                <FormSelected
                    options={OPTIONS_SELECT}
                    methods={methods}
                    defaultValue={isEditMode ? dataEditMode?.Category : '1'}
                    label="Category"
                />
                <div className="form-item">
                    <Controller
                        control={methods.control}
                        name="Img"
                        defaultValue={isEditMode ? dataEditMode?.img : 'https://picsum.photos/300/300'}
                        render={({ field: { onChange, value, ref } }) => (
                            <>
                                <Button
                                    sx={{ width: 'fit-content' }}
                                    variant="contained"
                                    onClick={() => handleRandomImg(onChange)}
                                >
                                    Random a picture
                                </Button>
                                <img
                                    ref={ref}
                                    className="random-img"
                                    src={value}
                                    alt="Opps!... Something wrong"
                                    width="300"
                                    height="300"
                                    onError={() => handleRandomImg(onChange)}
                                />
                                <p className="form-errors">
                                    {errors && errors.Img?.message}
                                </p>
                            </>
                        )}
                    />
                </div>
                <Button type="submit" sx={{ marginTop: 2 }} variant="outlined">
                    <SaveIcon />
                    {isEditMode ? 'Save Change' : 'Submit ...'}
                </Button>
            </form>
        </FormWapper>
    );
}

export default Form;
