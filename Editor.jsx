import React, { useState, useEffect } from 'react';
import { createDocument, updateDocument } from '../utils/api';

const Editor = ({ documentId, initialContent, onSave }) => {
    const [content, setContent] = useState(initialContent || '');
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        setContent(initialContent);
    }, [initialContent]);

    const handleChange = (event) => {
        setContent(event.target.value);
    };

    const handleSave = async () => {
        setIsSaving(true);
        try {
            if (documentId) {
                await updateDocument(documentId, { content });
            } else {
                await createDocument({ content });
            }
            onSave();
        } catch (error) {
            console.error('Error saving document:', error);
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <div>
            <textarea
                value={content}
                onChange={handleChange}
                placeholder="Start writing your document..."
                rows="10"
                cols="50"
            />
            <button onClick={handleSave} disabled={isSaving}>
                {isSaving ? 'Saving...' : 'Save Document'}
            </button>
        </div>
    );
};

export default Editor;
