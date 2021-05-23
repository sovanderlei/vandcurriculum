import { Component } from '@angular/core';
import {Config} from '../app/model/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vandcurriculum';

  config = new Config;
  constructor() {

    this.config = this.actualizes("BR");

  }


  public actualizes(language: string){

    var config_temp = new Config;


    config_temp.name = "VANDERLEI S. OLIVEIRA";
    config_temp.profession = "Engenheiro de Software";
    config_temp.path_photo = "./assets/images/fotovand.jpeg";

    return config_temp;

  }

}
