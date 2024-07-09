// app/page.tsx
import Layout from './layout';
import Head from 'next/head';
import Image from 'next/image';
import {Card} from "@/components/Card";

const Home = () => {
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
                            <div className="w3-third">
                                <div className="w3-white w3-text-grey w3-card-4">
                                    <div className="w3-display-container w3-margin-top">
                                        <Image src="/profilePic.JPG" width={447} height={450} alt='photo of candidate'/>
                                    </div>
                                </div>
                            </div>
                            <div className="w3-twothird">
                                    <Card title="Gustavo Lucca" icon="fa fa-server">
                                    <div className="w3-container w3-margin-bottom">
                                        <p><b><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>Computer Science Student</b></p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit eu turpis eu rutrum. In mattis quam ac maximus bibendum. Aenean quis turpis cursus mi congue ultricies. Donec laoreet varius nulla, et imperdiet libero feugiat non.</p>
                                        <p><b><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>San Juan, Puerto Rico</b></p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit eu turpis eu rutrum. In mattis quam ac maximus bibendum. Aenean quis turpis cursus mi congue ultricies. Donec laoreet varius nulla, et imperdiet libero feugiat non.</p>
                                        <p><b><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>gustavo.lucca@slu.edu</b></p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit eu turpis eu rutrum. In mattis quam ac maximus bibendum. Aenean quis turpis cursus mi congue ultricies. Donec laoreet varius nulla, et imperdiet libero feugiat non.</p>
                                        <p><b><i className="fa fa-university fa-fw w3-margin-right w3-large w3-text-teal"></i>Saint Louis University</b></p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit eu turpis eu rutrum. In mattis quam ac maximus bibendum. Aenean quis turpis cursus mi congue ultricies. Donec laoreet varius nulla, et imperdiet libero feugiat non.</p>
                                    </div>
                                    </Card>
                            </div>
                            <div className="w3-col">
                                <Card title="About me" icon="fa fa-user-circle">
                                    <div className="w3-container">
                                        <h5 className="w3-opacity"><b>
                                            Hello! My name is Gustavo Lucca, and I am a highly motivated third-year SLU student currently studying Computer Science with a minor in Entrepreneurship and Philosophy. I am passionate about computer science and all the areas this field encompasses, such as Artificial Intelligence and machine learning, to mention a few. At SLU, I have taken a number of CS courses related to Object-Oriented Programming and Data Structures which have led to a proficiency in C++, Java and Python. My favorite class so far has been World Wide Web, where we applied concepts from discrete math, such as graph theory, to the web.
                                            <br/>
                                            <br/>
                                            At SLU, I am currently maintaining a 3.80 GPA, as well as gratefully receiving a Vice President tuition scholarship and a Magis Award. I am from Puerto Rico, and I completed my High school studies there at the University of Puerto Rico's High School, where I graduated magna cum laude. I am fluent in English and Spanish. I look forward to working with you.
                                        </b></h5>
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

export default Home;
