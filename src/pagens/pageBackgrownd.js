import React from 'react';
import './pageBackgrownd.css';
import CpRightHeader from '../components/cpRightHeader'
import CpShowPhoto from '../components/cpShowPhoto'
import CpLanguage from '../components/cpLanguage'
import CpThinkBox from '../components/cpThinkBox'
import CpContact from '../components/cpContact'
import CpSoftware from '../components/cpSoftware'
import CpSkills from '../components/cpSkills'
import CpLanguageCicle from '../components/cpLanguageCicle'
import CpEducation from '../components/cpEducation'
import CpExperience from '../components/cpExperience'
import CpExempleCode from '../components/cpExempleCode';


function PageBackgrownd({ showEducation, showLangCicle, showSkills, showSoftwaret, showContact,
    showThink, showLag, showPhto, order, language, configData,
    education, experience, success_case, handleLanguageChange, showSuccess_case }) {

    return (
        <div className="page landscape">

            <div className="container">
                <div className="row">

                    <div className="col-4 col_left"  >
                        <CpShowPhoto showPhto={showPhto} language={language} configData={configData} />
                        <CpLanguage showLag={showLag} language={language} configData={configData} handleLanguageChange={handleLanguageChange} />
                        <CpThinkBox showThink={showThink} language={language} configData={configData} />
                        <CpContact showContact={showContact} language={language} configData={configData} />
                        <CpSoftware showSoftwaret={showSoftwaret} language={language} configData={configData} />
                        <CpSkills showSkills={showSkills} language={language} configData={configData} />
                        <CpLanguageCicle showLangCicle={showLangCicle} language={language} configData={configData} />
                        <CpExempleCode show={showSuccess_case} language={language} success_case={success_case} />
                    </div>
                    <div className="col-8 col_right " >
                        <CpRightHeader language={language} configData={configData} />
                        <CpEducation showEducation={showEducation} education={education} />
                        <CpExperience experience={experience} />

                    </div >

                </div >
            </div >

        </div >

    );
}

export default PageBackgrownd;
