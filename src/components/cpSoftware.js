import React from 'react';
import './cpSoftware.css';

function CpSoftware({ showSoftwaret, language, configData }) {

    let listSoftware = configData[language].Software.items;

    return (
        <div>
            {showSoftwaret ? <div className="row">
                <div className="col col_left_line_left"  >
                    <span className="left_titleSt" >{configData[language].Software.title}  </span>

                    <ul className="list-group">
                        {listSoftware.map(item => (
                            <li key={item.order} className="list-group-item liLine lictrl">
                                <span className={item.icon_show} style={{ marginRight: '5px' }} aria-hidden="true"></span>
                                <span>{item.text}</span>
                            </li>
                        ))}
                    </ul>

                </div>
            </div>
                : <div></div>}
        </div>
    );
}

export default CpSoftware;
