import React from 'react';
import './cpShowPhoto.css';

function CpShowPhoto({ showPhto, language, configData }) {
    const pathPhoto = configData[language].DataGeral.path_photo;

    console.log(" language ", language)
    console.log(" configData[language] ", configData[language])

    return (
        <div>
            {showPhto ? <div className="row">
                <div className="col col_left_line_center"  >
                    <img src={require('../imagens/fotovand.png')} alt="..." className="shadow-sm p-1 mb-1 bg-white rounded" /><br></br>
                    <label>{configData[language].DataGeral.name}</label><br></br>
                    <label>{configData[language].DataGeral.profession}</label>
                </div>
            </div>
                : <div></div>}
        </div>
    );
}

export default CpShowPhoto;
