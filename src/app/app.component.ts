import { Component } from '@angular/core';
import {Config} from '../app/model/config';
import * as data_config from '../assets/filejsons/config.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Curriculum - Vanderlei Soares de Oliveira';

  config = new Config;
  constructor() {

    console.log(data_config[0].Brasil.name);
    this.config = this.actualizes("BR");

  }


  public actualizes(language: string){

    var config_temp = new Config;
    var data_display = null;
    if(language == "BR"){
      data_display = data_config[0].Brasil;
    }else{
      data_display = data_config[0].English;
    }

    config_temp.name = data_display.name;
    config_temp.profession = data_display.profession;
    config_temp.path_photo = data_display.path_photo;

    return config_temp;

  }

}
