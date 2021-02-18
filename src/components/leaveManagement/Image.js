import React from 'react';

import { createFileUrl } from '../../utils';
import RemoveButton from '../../assets/images/remove-button.png'

const Image = ({ fileId, alt, width, onRemove = () => { } }) => (
    fileId ? (
        <div className="image-container" style={{ width }}>
            <img
                src={createFileUrl(fileId)}
                alt={alt}
                width={width}
            />
            <div className="remove-button" title="Remove image" onClick={onRemove}>
                <img src={RemoveButton} alt="remove" />
            </div>
        </div>
    ) : ''
);

export default Image;
