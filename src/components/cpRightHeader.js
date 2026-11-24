import React from 'react';
import './cpRightHeader.css';

function CpRightHeader({ language, configData }) {

    return (
        <div className="rowHeader"  >

            <h4><strong>  {configData[language].DataGeral.name} </strong></h4>
            <h6> {configData[language].DataGeral.profession} </h6>
            <p style={{ fontSize: 'x-small' }}  >
                {configData[language].DataGeral.text_think1}
            </p>

        </div>
    );
}

export default CpRightHeader;
