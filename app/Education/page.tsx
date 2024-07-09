import Layout from "@/app/layout";
import Head from "next/head";
import {CustomLink1} from "@/components/CustomLink1";
import {Card} from "@/components/Card";
import {LBubble} from "@/components/LBubble";


const Education = () => {
    return (
        <>
            <Head>
                <title>W3.CSS Template</title>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <link rel="stylesheet" href="/styles/globals.css"/>
            </Head>
            <Layout>
                <div className="w3-light-grey">
                    <div className="w3-content w3-margin-top" style={{maxWidth: '1400px'}}>
                        <div className="w3-row-padding">
                            <div className="w3-half">
                                <Card title="Education" icon="fa fa-certificate">
                                    <div className="w3-container">
                                        <h5 className="w3-opacity"><b>Saint Louis University</b></h5>
                                        <h6 className="w3-text-teal"><i
                                            className="fa fa-calendar fa-fw w3-margin-right"></i>2022-2026</h6>
                                        <p>Bachelor's degree in Computer Science, with minors in Entrepreneurship and
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
                                    <CustomLink1
                                        href={"https://www.linkedin.com/in/gustavo-lucca-padilla-0a545a2a6/details/certifications/1635554289416/single-media-viewer/?profileId=ACoAAEm_6P0B4uaoz9zXTYJk9jssf1ofAmP8eGc"}
                                        display_text="Excel Certification"></CustomLink1>
                                    <CustomLink1
                                        href={"https://www.linkedin.com/in/gustavo-lucca-padilla-0a545a2a6/details/certifications/1635554286627/single-media-viewer/?profileId=ACoAAEm_6P0B4uaoz9zXTYJk9jssf1ofAmP8eGc"}
                                        display_text="Database Certification"></CustomLink1>
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
                                        <LBubble title="Java" description="My first language."></LBubble>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Education;
