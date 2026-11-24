import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {



  return (
    <div className="page landscape">

      <div className="container">
        <div className="row">

          <div className="col-4 col_left"  >
            <div className="row">
              <div className="col col_left_line_left"  >  </div>
            </div>
            <div className="row">
              <div className="col col_left_line_center"  >
                <img src="" alt="..." style={{ width: '150px', height: '150px' }} className="shadow-sm p-1 mb-1 bg-white rounded" />
                <label>Vanderlei Soares de Oliveira</label>
                <label>Engenheiro de Software</label>
              </div>
            </div>

            <div className="row" style={{ padding: '3px' }}   >
              <div className="col-1"  >
                <a title="Portuguese(Brasil)" href="#"><img alt="port" src="./assets/images/brazil_flags_flag_16979.png" style={{ height: '20px', width: '20px' }} /></a>
              </div>
              <div className="col-1"  >
                <a title="Ingles" href="#"><img alt="ingles" src="./assets/images/united_kingdom_flags_flag_17079.png" style={{ height: '20px', width: '20px' }} /></a>
              </div>
            </div>

            <div className="alert alert-success" role="alert">
              <h4 className="alert-heading"> config.title  !</h4>
              <p>
                config.text_think2
              </p>
              <hr />
              <p className="mb-0"> config.title2 </p>
            </div>

            <div className="row">
              <div className="col col_left_line_left"  >
                <span className="left_title" > config.Contact_title   </span>
                <ul className="list-group" >
                  <li className="list-group-item">
                    <span className="{{item.icon_show}}" aria-hidden="true"></span>
                    <span>   item.text </span></li>
                </ul>
              </div>
            </div>

            <div className="row">
              <div className="col col_left_line_left"  >
                <span className="left_title" > config.software_title   </span>
                <ul className="list-group" >
                  <li className="list-group-item">
                    <span className="{{item.icon_show}}" aria-hidden="true"></span>
                    <span>   item.text  </span></li>
                </ul>
              </div>
            </div>

          </div>
          <div className="col-8 col_right" >

            <div className="row" style={{ backgroundColor: '#14a2ba', height: '135px', color: 'white', paddingTop: '10px' }}  >
              <div className="row">
                <h1><strong>  config.name  </strong></h1>
                <h3>  config.profession </h3>
                <p style={{ fontSize: 'x-small' }}  >
                  config.text_think1
                </p>

              </div>
            </div>
            <div className="row">
              <div className="container" style={{ marginTop: '10px', marginBottom: '12px' }}  >
                <div className="card shadow-sm  " >
                  <h3 className="card-header">  detail.Education_title  </h3>
                  <div className="card-body"  >
                    <h3 className="card-title">  item.formation </h3>
                    <p className="card-text"> item.school </p>

                  </div>
                </div>
              </div>

            </div>
            <div className="row">
              <div className="container">
                <ul className="timeline"     >
                  <li   >
                    <div className="timeline-badge info"><i className="glyphicon glyphicon-ok-sign"></i></div>
                    <div className="timeline-panel" >
                      <div className="timeline-heading">
                        <h4 className="timeline-title">  item.company  </h4>
                        <h5 className="timeline-title"> item.position  </h5>
                        <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i>  item.date_start   item.date_end   </small></p>
                      </div>
                      <div className="timeline-body">
                        <ul    >
                          <li> item_temp.occupation </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div >
            </div >


          </div >

        </div >
      </div >

    </div >

  );
}

export default App;
