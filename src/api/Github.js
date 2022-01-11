import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.github.com/users/',
    headers: {
        Accept: 'application/vnd.github.v3.raw',
        Authorization: `Token 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`,
    },
});

export const Repositories = async (username) => {
    return api.get(`${username}/repos`).then((response) => {
        return response.data;
    });
};