import React from 'react';
import './cpLanguageCicle.css';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';



function CpLanguageCicle({ showLangCicle, language, configData }) {
    // let listLanguage = configData[language].Language.items;
    const percpt = 100;
    const perceng = 70;
    return (
        <div>
            {showLangCicle ? <div className="row" style={{ marginTop: '10px' }} >
                <span className="left_title" >{configData[language].Language.title} </span><br></br>
                <div className="col col_left_line_left col_aling" style={{ height: '100px', alignItems: 'center', textAlign: 'center' }}  >

                    <div style={{ height: '70px', width: '70px', marginBottom: '5px' }} >
                        <CircularProgressbar
                            value={percpt}
                            text={`${percpt}%`}
                            styles={buildStyles({
                                rotation: 0.25,
                                strokeLinecap: 'butt',
                                textSize: '16px',
                                pathTransitionDuration: 0.5,
                                pathColor: `rgba(88, 255, 75, ${percpt / 100})`,
                                textColor: '#f88',
                                trailColor: '#d6d6d6',
                                backgroundColor: '#3e98c7',
                            })}
                        />
                    </div>
                    <label>Português</label>

                </div>
                <div className="col col_left_line_left col_aling" style={{ height: '100px', alignItems: 'center', textAlign: 'center' }}  >

                    <div style={{ height: '70px', width: '70px', marginBottom: '5px' }} >
                        <CircularProgressbar
                            value={perceng}
                            text={`${perceng}%`}
                            styles={buildStyles({
                                rotation: 0.25,
                                strokeLinecap: 'butt',
                                textSize: '16px',
                                pathTransitionDuration: 0.5,
                                pathColor: `rgba(255, 0, 0, ${perceng / 100})`,
                                textColor: '#f88',
                                trailColor: '#d6d6d6',
                                backgroundColor: '#3e98c7',
                            })}
                        />
                    </div>
                    <label>Ingles-B2</label>

                </div>
            </div >
                : <div></div>
            }

        </div >
    );
}

export default CpLanguageCicle;
