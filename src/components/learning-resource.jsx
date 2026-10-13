import "../assets/library/flaticon/css/all.css"; 
import "../assets/library/flaticon/css/all.min.css";
import "../dist/style.css"; import "../css/learning-resources.css";

import React, { useState, useEffect } from 'react';

function LearningResources(){
  return(
    <>
      <section className="learning--resources w-full px-5 py-5 h-auto mb-2">
        <div className="learning--resources-wrapper flex flex-col gap-2 py-2">
          <div className="learning-resouces-header flex flex-col gap-5" data-aos="fade-up">
            <span className="lr-header-span font-bold text-orange-500">RESOURCES</span>
            <h2 className="lr-header-heading text-lg font-bold text-amber-800">Learn Sandwich, your way</h2>
            <p className="lr-header-paragrapgh">
              Tutorials, guides, and playbooks to help every department get the most out of the platform.
            </p>
          </div>
          <div className="learning-resources-card-wrapper flex gap-1" data-aos="fade-up">

            <div className="resources--card flex flex-col gap-5 px-1 py-1">
              <div className="r-card-icon"><i className="fab fa-youtube text-orange-500"></i></div>
              <div className="r-card-disc font-bold"><h4>Video Tutorial</h4></div>
              <div className="r-card-para">
                <p>Step-by-step walkthroughs of every module, from procurement to POS.</p>
              </div>
              <a href="" className="text-orange-500 flex items-center gap-5 font-bold">
                <span>Watch on Youtube</span><i className="fa fa-arrow-right"></i>
              </a>
            </div>

            <div className="resources--card flex flex-col gap-5 px-1 py-1">
              <div className="r-card-icon"><i className="fas fa-receipt text-orange-500"></i></div>
              <div className="r-card-disc font-bold"><h4>Setup Guides</h4></div>
              <div className="r-card-para">
                <p>Written guides that get each department fully onboarded in a day.</p>
              </div>
              <a href="" className="text-orange-500 flex items-center gap-5 font-bold">
                <span>Browse guides</span><i className="fa fa-arrow-right"></i>
              </a>
            </div>

            <div className="resources--card flex flex-col gap-5 px-1 py-1">
              <div className="r-card-icon"><i className="fa fa-person-circle-question text-orange-500"></i></div>
              <div className="r-card-disc font-bold"><h4>Help center</h4></div>
              <div className="r-card-para">
                <p>Answers to common setup, billing, and integration questions.</p>
              </div>
              <a href="" className="text-orange-500 flex items-center gap-5 font-bold">
                <span>Visit Help Center</span><i className="fa fa-arrow-right"></i>
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default LearningResources;