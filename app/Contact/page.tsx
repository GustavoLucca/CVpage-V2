import Layout from "@/app/layout";
import Head from "next/head";
import {CustomLink1} from "@/components/CustomLink1";
import {Card} from "@/components/Card";
import {LBubble} from "@/components/LBubble";


const Contact = () => {
    return (
        <>
                <div className="w3-light-grey">
                    <div className="w3-content w3-margin-top" style={{maxWidth: '1400px'}}>
                        <div className="w3-row-padding">
                            <div className="w3-half">
                                <div className="parent">
                                    <CustomLink1
                                        href={"mailto:gustavo.lucca@slu.edu"}
                                        display_text="Email"></CustomLink1>
                                </div>
                            </div>
                            <div className="w3-half">
                                <div className="parent">
                                    <CustomLink1
                                        href={"https://www.linkedin.com/in/gustavo-lucca-padilla-0a545a2a6/?profileId=ACoAAEm_6P0B4uaoz9zXTYJk9jssf1ofAmP8eGc"}
                                        display_text="LinkedIn"></CustomLink1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
};

export default Contact;
