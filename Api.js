import axios from 'axios';

const API_URL = 'http://localhost:5000/api/documents';

export const fetchDocuments = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching documents:', error);
        throw error;
    }
};

export const createDocument = async (document) => {
    try {
        const response = await axios.post(API_URL, document);
        return response.data;
    } catch (error) {
        console.error('Error creating document:', error);
        throw error;
    }
};

export const updateDocument = async (id, document) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, document);
        return response.data;
    } catch (error) {
        console.error('Error updating document:', error);
        throw error;
    }
};

export const deleteDocument = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting document:', error);
        throw error;
    }
};
