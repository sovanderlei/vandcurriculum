import React from 'react';
import './cpExperience.css';

function CpExperience({ experience }) {

    if (!experience || !experience.experience.items) {
        return null;
    }
    const { items } = experience.experience;

    return (
        <div>
            <div className="row" >

                <div className="container"   >
                    <ul className="timeline" >
                        {items.map((item, index) => (
                            <li key={index + 1} >
                                <div className="timeline-panel" >
                                    <div className="timeline-heading">
                                        <h5 className="timeline-title"> {item.company} </h5>
                                        <h6 className="timeline-title"> {item.position} </h6>
                                        <p><small className="text-muted">
                                            <i className="fas fa-clock"></i>  {item.date_start} {item.date_end}  </small>
                                        </p>
                                    </div>
                                    <div className="timeline-body">
                                        <ul >
                                            {item.items_func.map((itemFunc) => (
                                                <li className='timeline-body-li' > {itemFunc.occupation} </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </li>

                        ))}

                    </ul>

                </div>

            </div>

        </div>
    );
}

export default CpExperience;
