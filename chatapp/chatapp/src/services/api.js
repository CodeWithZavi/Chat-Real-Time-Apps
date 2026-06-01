import { API_BASE } from '../config';

const getToken = () => localStorage.getItem('token');

const request = async (path, options = {}) => {
    const url = `${API_BASE}${path}`;
    const headers = {
        'Content-Type': 'application/json',
        ...(options.headers || {})
    };

    const token = getToken();
    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }

    const response = await fetch(url, {
        ...options,
        headers,
        body: options.body ? JSON.stringify(options.body) : undefined
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
        const error = new Error(data.message || 'Request failed');
        error.status = response.status;
        error.data = data;
        throw error;
    }

    return data;
};

export const authAPI = {
    login: (payload) => request('/api/login', { method: 'POST', body: payload }),
    signup: (payload) => request('/api/signup', { method: 'POST', body: payload })
};

export default { request };
