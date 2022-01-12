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