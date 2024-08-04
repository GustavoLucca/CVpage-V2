import {CustomLink1} from "@/components/CustomLink1";
import {CustomLink2} from "@/components/CustomLink2";


const Contact = () => {
    return (
        <>
                <div className="w3-light-grey">
                    <div className="w3-content w3-margin-top" style={{maxWidth: '1400px'}}>
                        <div className="w3-row-padding">
                            <div className="contacts">
                                <div className="w3-col">
                                    <div className="parent">
                                        <CustomLink1
                                            href={"mailto:gustavo.lucca@slu.edu"}
                                            display_text="Email"></CustomLink1>
                                    </div>
                                </div>
                            </div>
                            <div className="contacts">
                            <div className="w3-col">
                                <div className="parent">
                                    <CustomLink2
                                        href={"https://www.linkedin.com/in/gustavo-lucca-padilla-0a545a2a6/?profileId=ACoAAEm_6P0B4uaoz9zXTYJk9jssf1ofAmP8eGc"}
                                        display_text="LinkedIn"></CustomLink2>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
};

export default Contact;
