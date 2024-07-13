// app/projects/page.tsx
import Layout from '../layout';
import Head from "next/head";
import Link from 'next/link';
import {CustomLink} from "@/components/CustomLink";
import {Card} from "@/components/Card";

const Projects = () => {
    return (
        <>
                <div className="w3-light-grey">
                    <div className="w3-content w3-margin-top" style={{maxWidth: '1400px'}}>
                        <div className="w3-row-padding">
                            <div className="w3-col">
                                <Card title = "Previous projects" icon = "fa fa-suitcase">
                                    <div className="w3-container">
                                        <h5 className="w3-opacity"><b>Chess games website / WWW class</b></h5>
                                        <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>Fall 2022</h6>
                                        <p>As a final project for my intro to CS class, I was tasked with creating a website
                                            using HTML, CSS, and JavaScript elements. The code for this website alongside a link
                                            to the website can be found
                                            <span className="w3-tag w3-teal w3-round"><Link href="https://github.com/GustavoLucca/Chess-Games" target="_blank"><CustomLink display_text={"here."}></CustomLink></Link></span></p>
                                    </div>
                                    <div className="w3-container">
                                        <h5 className="w3-opacity"><b>Website presentation / Programming class</b></h5>
                                        <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>January
                                            2022</h6>
                                        <p>As a final project for my senior year programming class, I had to create a
                                            presentation on a Hispanic country assigned to me by the professor. This
                                            presentation was done in the format of a website, which helped me get a foundation
                                            on HTML and CSS. The code for this website can be found
                                            <span className="w3-tag w3-teal w3-round"><Link href="https://github.com/GustavoLucca/Argentina" target="_blank"><CustomLink display_text={"here."}></CustomLink></Link></span></p>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
};

export default Projects;
