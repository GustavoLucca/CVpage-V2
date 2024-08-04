
import {Card} from "@/components/Card";
import {LBubble} from "@/components/LBubble";
import {CustomLink3} from "@/components/CustomLink3";
import {CustomLink4} from "@/components/CustomLink4";


const Education = () => {
    return (
        <>
                <div className="w3-light-grey">
                    <div className="w3-content w3-margin-top" style={{maxWidth: '1400px'}}>
                        <div className="w3-row-padding">
                            <div className="w3-half">
                                <Card title="Education" icon="fa fa-certificate">
                                    <div className="w3-container">
                                        <h5 className="w3-opacity"><b>Saint Louis University</b></h5>
                                        <h6 className="w3-text-teal"><i
                                            className="fa fa-calendar fa-fw w3-margin-right"></i>2022-2026</h6>
                                        <p>Bachelor&apos;s degree in Computer Science, with minors in Entrepreneurship and
                                            Philosophy.</p>
                                    </div>
                                    <div className="w3-container">
                                        <h5 className="w3-opacity"><b>University of Puerto Rico - University High
                                            School</b></h5>
                                        <h6 className="w3-text-teal"><i
                                            className="fa fa-calendar fa-fw w3-margin-right"></i>2018-2022</h6>
                                        <p>High School Diploma, Summa Cum Laude. While in High School, I completed courses related to using Microsoft Excel software and Database Administration. The certificates for both are below.</p>
                                    </div>
                                </Card>

                                <div className="parent">
                                    <CustomLink4
                                        href={"https://www.linkedin.com/in/gustavo-lucca-padilla-0a545a2a6/details/certifications/1635554289416/single-media-viewer/?profileId=ACoAAEm_6P0B4uaoz9zXTYJk9jssf1ofAmP8eGc"}
                                        display_text="Excel Certification"></CustomLink4>
                                    <CustomLink3
                                        href={"https://www.linkedin.com/in/gustavo-lucca-padilla-0a545a2a6/details/certifications/1635554286627/single-media-viewer/?profileId=ACoAAEm_6P0B4uaoz9zXTYJk9jssf1ofAmP8eGc"}
                                        display_text="Database Certification"></CustomLink3>
                                </div>

                            </div>
                            <div className="w3-half">
                                <Card title="Skills" icon="fa fa-laptop">
                                    <div className="w3-container">
                                        <p className="w3-large"><b><i
                                            className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Coding</b>
                                        </p>
                                        <LBubble title="Java"
                                                 description="Learned and used Java during Spring 2024 in my software design class."></LBubble>
                                        <LBubble title="C++"
                                                 description="Learned and used C++ during Fall 2023 in my data structures class."></LBubble>
                                        <LBubble title="Python"
                                                 description="Learned and used Python during Spring 2023 in my OOP class."></LBubble>
                                        <LBubble title="HTML & CSS"
                                                 description="Learned and used HTML & CSS during Fall 2022 in my WWW class."></LBubble>

                                        <p className="w3-large w3-text-theme"><b><i
                                            className="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>Languages</b>
                                        </p>
                                        <LBubble title="English"
                                                 description="Grew up in a bilingual household, am currently attending college in the US."></LBubble>
                                        <LBubble title="Spanish" description="My first language."></LBubble>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
};

export default Education;
