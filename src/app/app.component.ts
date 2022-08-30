import { Component } from '@angular/core';
import {Config} from '../app/model/config';
import {Detail} from '../app/model/detail';
import * as data_config from '../assets/filejsons/config.json';
import * as data_detail from '../assets/filejsons/detail.json';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Curriculum - Vanderlei Soares de Oliveira';

  config = new Config;
  detail = new Detail;
  constructor() {

    //console.log(data_config[0].Brasil.name);
    this.config = this.actualizes_config("BR");
    this.detail = this.actualizes_detail("BR");

  }

  public ngOnInit()
  {
    $(document).ready(function(){

    });
  }

  translate(value){
    this.config = this.actualizes_config(value);
    this.detail = this.actualizes_detail(value);
  }

  public actualizes_config(language: string){

    var config_temp = new Config;
    var data_display = null;
    var Contact_display = null;
    var skills_display = null;
    var software_display = null;
    var language_display = null;

    if(language == "BR"){
      data_display = data_config[0].Brasil;
      Contact_display = data_config[0].Contact_br;
      skills_display = data_config[0].skills_br;
      software_display = data_config[0].software_br;
      language_display = data_config[0].language_br;
    }else{
      data_display = data_config[0].English;
      Contact_display = data_config[0].Contact_en;
      skills_display = data_config[0].skills_en;
      software_display = data_config[0].software_en;
      language_display = data_config[0].language_en;
    }

    config_temp.name = data_display.name;
    config_temp.profession = data_display.profession;
    config_temp.path_photo = data_display.path_photo;
    config_temp.text_think1 = data_display.text_think1;
    config_temp.text_think2 = data_display.text_think2;
    config_temp.text_think3 = data_display.text_think3;
    config_temp.title = data_display.title;
    config_temp.title2 = data_display.title2;
    config_temp.title3 = data_display.title3;


    config_temp.Contact_title = Contact_display.title;
    config_temp.Contact_items = Contact_display.items;

    config_temp.skills_title = skills_display.title;
    config_temp.skills_items = skills_display.items;

    config_temp.software_title = software_display.title;
    config_temp.software_items = software_display.items;

    config_temp.language_title = language_display.title;
    config_temp.language_items = language_display.items;



    return config_temp;

  }

  public actualizes_detail(language: string){

    var detail_temp = new Detail;
    var Education_display = null;
    var Detail_display = null;
    var Success_display = null;

    if(language == "BR"){
      Education_display =  data_detail[0].education_br;
      Detail_display =  data_detail[0].experience_br;
      Success_display =  data_detail[0].success_case_br;
    }else{
      Education_display =  data_detail[0].education_en;
      Detail_display =  data_detail[0].experience_en;
      Success_display =  data_detail[0].success_case_en;
    }

    detail_temp.Education_title = Education_display.title;
    detail_temp.Education_items = Education_display.items;

    detail_temp.Detail_title = Detail_display.title;
    detail_temp.Detail_items = Detail_display.items;

    detail_temp.Success_case_title = Success_display.title;
    detail_temp.Success_case_items = Success_display.items;



    return detail_temp;

  }




}
