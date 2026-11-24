import React from 'react';
import './cpEducation.css';

function CpEducation({ showEducation, education }) {
    return (
        <div>
            {showEducation ? <div className="card shadow-sm cadEducation" style={{ maxWidth: '518px' }}>
                <h5 className="card-header">{education.title}</h5>
                <div className="card-body cardBody">
                    <h6 className="card-title">{education.items[0].formation}</h6>
                    <p className="card-text">{education.items[0].school}</p>
                </div>
                <div className="card-body cardBody">
                    <h6 className="card-title">{education.items[1].formation}</h6>
                    <p className="card-text">{education.items[1].school}</p>
                </div>
                <div className="card-body cardBody">
                    <h6 className="card-title">{education.items[2].formation}</h6>
                    <p className="card-text">{education.items[2].school}</p>
                </div>
            </div>
                : <div></div>}
        </div>
    );
}

export default CpEducation;
