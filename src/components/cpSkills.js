import React from 'react';
import './cpSkills.css';

function CpSkills({ showSkills, language, configData }) {

    let listContac = configData[language].Skills.items;

    return (
        <div>
            {showSkills ? <div className="row">
                <div className="col col_left_line_left"  >
                    <span className="left_title" >{configData[language].Skills.title}</span>
                    <ul className="list-group" >
                        {listContac.map(item => (
                            <li key={item.order} className="list-group-item liLine">

                                <div className="row">
                                    <div className="col-7">
                                        <span className={item.icon_show} style={{ marginRight: '5px' }} aria-hidden="true"></span>
                                        <span>  {item.text}</span>
                                    </div>
                                    <div className="col-4">
                                        <div className="progress" style={{ height: '10px', padding: '0px', margin: '0px', marginTop: '3px' }}>
                                            <div className="progress-bar" style={{ width: '100%', height: '10px' }}></div>
                                        </div>
                                    </div>
                                </div>

                            </li>
                        ))}


                    </ul>
                </div>
            </div>
                : <div></div>}

        </div>
    );
}

export default CpSkills;
