import React, { useState } from 'react';
import './App.css';
import PageBackgrownd from './pagens/pageBackgrownd'
import configData from './datas/config.json';
import detailData from './datas/detail.json';

function getExperienceByPag(listData, pagGet) {
  let experience_items_pag = listData.items.filter(item => item.page === pagGet);
  experience_items_pag.sort((a, b) => a.order - b.order);
  experience_items_pag = {
    experience: {
      title: listData.title,
      items: experience_items_pag
    }
  };
  return experience_items_pag;
}

function App() {

  const [selectedLanguage, setSelectedLanguage] = useState(0);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  //let brpt = 0;
  //const eng = 1;

  let education = detailData[selectedLanguage].DataItem.education;
  let experience = detailData[selectedLanguage].DataItem.experience;
  let success_case = detailData[selectedLanguage].DataItem.success_case;

  let success_case_items_pag2 = success_case.items.filter(item => item.page === 2);
  let success_case_items_pag3 = success_case.items.filter(item => item.page === 8);

  console.log("selectedLanguage ", selectedLanguage);


  return (
    <div>
      <PageBackgrownd
        showEducation={true}
        showLangCicle={false}
        showSkills={false}
        showSoftwaret={true}
        showContact={true}
        showThink={true}
        showLag={true}
        showPhto={true}
        order={0}
        handleLanguageChange={handleLanguageChange}
        language={selectedLanguage}
        configData={configData}
        education={education}
        experience={getExperienceByPag(experience, 1)}
        success_case={null}
        showSuccess_case={false}
      />

      <PageBackgrownd
        showEducation={false}
        showLangCicle={true}
        showSkills={true}
        showSoftwaret={false}
        showContact={false}
        showThink={true}
        showLag={false}
        showPhto={false}
        order={1}
        handleLanguageChange={handleLanguageChange}
        language={selectedLanguage}
        configData={configData}
        education={null}
        experience={getExperienceByPag(experience, 2)}
        success_case={success_case_items_pag2}
        showSuccess_case={false}
      />
      <PageBackgrownd
        showEducation={false}
        showLangCicle={false}
        showSkills={false}
        showSoftwaret={false}
        showContact={false}
        showThink={false}
        showLag={false}
        showPhto={false}
        order={2}
        handleLanguageChange={handleLanguageChange}
        language={selectedLanguage}
        configData={configData}
        education={null}
        experience={getExperienceByPag(experience, 3)}
        success_case={success_case_items_pag3}
        showSuccess_case={false}
      />
      {/*
      <PageBackgrownd
        showEducation={false}
        showLangCicle={false}
        showSkills={false}
        showSoftwaret={false}
        showContact={false}
        showThink={false}
        showLag={false}
        showPhto={false}
        order={3}
        handleLanguageChange={handleLanguageChange}
        language={selectedLanguage}
        configData={configData}
        education={null}
        experience={getExperienceByPag(experience, 4)}
        success_case={success_case_items_pag3}
        showSuccess_case={false}
      />
      */}
    </div >

  );
}

export default App;
