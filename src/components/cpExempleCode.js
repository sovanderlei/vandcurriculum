import React from 'react';
import './cpExempleCode.css';
import 'react-circular-progressbar/dist/styles.css';


function CpExempleCode({ show, language, success_case }) {

    let items = success_case;

    return (
        <div>

            {show ? <div className="row">

                <div className="col col_left_line_left"  >
                    {items.map(item => (

                        <div className="card cad-adjusts"  >
                            <div className='imgDiv' >
                                <img alt="Imagem de capa do card" className='imgs' src={require('../imagens/java-logo.jpg')} />
                            </div>
                            <div className="card-body card-body-adjusts"  >
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.text}</p>
                            </div>
                            <ul className="list-group">
                                {item.items.map(itemSec => (

                                    <li className="list-group-item liLine">
                                        <a target="_blank" className="card-link" href={itemSec.link} >{itemSec.text}</a>
                                    </li>

                                ))}

                            </ul>
                        </div>

                    ))}



                </div>

            </div>
                : <div></div>}
            {/* 
                                         {listItem.map(item => (

                                <li key={item.order} className="list-group-item liLine">
                                    <a className="card-link" href="https://github.com/sovanderlei/javastoreback.git">{item.text}</a>
                                </li>

                            ))}
            */}
        </div>
    );
}

export default CpExempleCode;
