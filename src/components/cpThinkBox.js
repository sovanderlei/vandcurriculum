import React from 'react';
import './cpThinkBox.css';

function CpThinkBox({ showThink, language, configData }) {
    return (
        <div>
            {showThink ? <div className="alert alert-success" role="alert" style={{ marginTop: '10px' }}>
                <h4 className="alert-heading">{configData[language].DataGeral.title} !</h4>
                <p>
                    {configData[language].DataGeral.text_think2}
                </p>
                <hr />
                <p className="mb-0">{configData[language].DataGeral.title2} </p>
            </div>
                : <div></div>}
        </div>
    );
}

export default CpThinkBox;
