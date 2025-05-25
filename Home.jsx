import React, { useEffect, useState } from 'react';
import { fetchDocuments, createDocument } from '../utils/api';

const Home = () => {
    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        const loadDocuments = async () => {
            const docs = await fetchDocuments();
            setDocuments(docs);
        };
        loadDocuments();
    }, []);

    const handleCreateDocument = async () => {
        const newDoc = await createDocument({ title: 'New Document', content: '' });
        setDocuments([...documents, newDoc]);
    };

    return (
        <div>
            <h1>Document List</h1>
            <button onClick={handleCreateDocument}>Create New Document</button>
            <ul>
                {documents.map(doc => (
                    <li key={doc._id}>{doc.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
