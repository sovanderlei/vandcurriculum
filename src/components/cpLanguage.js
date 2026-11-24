import React from 'react';
import './cpLanguage.css';

function CpLanguage({ showLag, language, configData, handleLanguageChange }) {
    return (
        <div>
            {showLag ? <div className="row" style={{ padding: '3px' }}   >
                <div className="col-1"  >
                    <a title="Portuguese(Brasil)" href="#"
                        onClick={() => handleLanguageChange(0)}
                    ><img alt="port" src={require('../imagens/brazil_flags_flag_16979.png')} style={{ height: '20px', width: '20px' }} /></a>
                </div>
                <div className="col-1"  >
                    <a title="Ingles" href="#"
                        onClick={() => handleLanguageChange(1)}
                    ><img alt="ingles" src={require('../imagens/united_kingdom_flags_flag_17079.png')} style={{ height: '20px', width: '20px' }} /></a>
                </div>
            </div>
                : <div></div>}
        </div>
    );
}

export default CpLanguage;
