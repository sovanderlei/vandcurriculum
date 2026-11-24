import React from 'react';
import './cpContact.css';

function CpContact({ showContact, language, configData }) {

    let listContac = configData[language].Contact.items;

    return (
        <div>
            {showContact ? <div className="row">
                <div className="col col_left_line_left fontCtrl"  >
                    <span className="left_title" >{configData[language].Contact.title}  </span>

                    <ul className="list-group">
                        {listContac.map(item => (
                            <li key={item.order} className="list-group-item lictrl" >
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

export default CpContact;
