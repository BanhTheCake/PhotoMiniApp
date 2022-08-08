import { createSlice } from '@reduxjs/toolkit';

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const initialState = [
    {
        id: randomInteger(1, 2000),
        Descriptions:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
        Title: 'Cake',
        Category: '1',
        img: 'https://picsum.photos/id/982/300/300'
    },
    {
        id: randomInteger(1, 2000),
        Descriptions:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
        Title: 'Cake',
        Category: '2',
        img: 'https://picsum.photos/id/982/300/300'
    },
    {
        id: randomInteger(1, 2000),
        Descriptions:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
        Title: 'Cake',
        Category: '3',
        img: 'https://picsum.photos/id/982/300/300'
    },
    {
        id: randomInteger(1, 2000),
        Descriptions:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
        Title: 'Cake',
        Category: '1',
        img: 'https://picsum.photos/id/982/300/300'
    },
];

export const photoSlice = createSlice({
    name: 'photos',
    initialState,
    reducers: {
        addPhotos: (state, action) => {
            state.push(action.payload)
        },

        deletePhoto: (state, action) => {
            const indexOfPhoto = state.findIndex(photo => photo.id === action.payload)
            if (indexOfPhoto >= 0) {
                state.splice(indexOfPhoto, 1)
            }
        },

        editPhoto: (state, action) => {
            const indexOfPhoto = state.findIndex(photo => photo.id === action.payload.id)
            if (indexOfPhoto >= 0) {
                state[indexOfPhoto] = action.payload
            }
        }
    },
});

export const { addPhotos, deletePhoto, editPhoto } = photoSlice.actions;

export default photoSlice.reducer;
