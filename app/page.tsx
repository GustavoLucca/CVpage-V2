import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import {LBubble} from "@/components/LBubble";
import {Card} from "@/components/Card";
import {CustomLink} from "@/components/CustomLink";
import {CustomLink1} from "@/components/CustomLink1";

const Home = () => {
  return (
      <>
        <div className="w3-light-grey">
          <Head>
            <title>W3.CSS Template</title>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <link rel="stylesheet" href="/styles/globals.css"/>
          </Head>

          <div className="w3-content w3-margin-top" style={{maxWidth: '1400px'}}>
            <div className="w3-row-padding">
              <div className="w3-third">

                <div className="w3-white w3-text-grey w3-card-4">
                  <div className="w3-display-container">
                    <Image src="/profilePic.JPG" width={447} height={450} alt='photo of candidate'/>

                    <div className="w3-display-bottomleft w3-container w3-text-black">
                      <h2 style={{position: 'relative', top: '62px'}}>Gustavo Lucca</h2>
                    </div>
                  </div>

                  <div className="w3-container" style={{paddingTop: '50px'}}>
                    <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>Computer Science Student</p>
                    <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>San Juan, Puerto Rico</p>
                    <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>gustavo.lucca@slu.edu</p>
                    <p><i className="fa fa-university fa-fw w3-margin-right w3-large w3-text-teal"></i>St. Louis, Missouri</p>

                    <p className="w3-large"><b><i
                        className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p>
                    <LBubble title = "Java" description="Learned and used Java during Spring 2024 in my software design class."></LBubble>
                    <LBubble title = "C++" description="Learned and used C++ during Fall 2023 in my data structures class."></LBubble>
                    <LBubble title = "Python" description="Learned and used Python during Spring 2023 in my OOP class."></LBubble>
                    <LBubble title = "HTML & CSS" description="Learned and used HTML & CSS during Fall 2022 in my WWW class."></LBubble>

                    <p className="w3-large w3-text-theme"><b><i
                        className="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>Languages</b></p>
                    <LBubble title = "English" description="Grew up in a bilingual household, am currently attending college in the US."></LBubble>
                    <LBubble title = "Java" description="My first language."></LBubble>
                  </div>
                </div>
              </div>

              <div className="w3-twothird">
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

                <Card title= "Education" icon="fa fa-certificate">
                  <div className="w3-container">
                    <h5 className="w3-opacity"><b>Saint Louis University</b></h5>
                    <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>2022-2026</h6>
                    <p>Bachelor's degree in Computer Science, with minors in Entrepreneurship and Philosophy.</p>
                  </div>
                  <div className="w3-container">
                    <h5 className="w3-opacity"><b>University of Puerto Rico - University High School</b></h5>
                    <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>2018-2022</h6>
                    <p>High School Diploma, Summa Cum Laude.</p>
                  </div>
                </Card>

                <Card title="About me" icon="fa fa-user-circle">
                  <div className="w3-container">
                    <h5 className="w3-opacity"><b>
                      Hello! My name is Gustavo Lucca, and I am a highly motivated third-year SLU
                      student currently studying Computer Science with a minor in Entrepreneurship and
                      Philosophy. I am passionate about computer science and all the areas this field encompasses,
                      such as Artificial Intelligence and machine learning, to mention a few. At SLU,
                      I have taken a number of CS courses related to Object-Oriented Programming and Data
                      Structures which have led to a proficiency in C++, Java and Python. My favorite
                      class so far has been World Wide Web, where we applied concepts from discrete
                      math, such as graph theory, to the web.
                      <br/>
                      <br/>
                      At SLU, I am currently maintaining a 3.80 GPA, as well as gratefully receiving a
                      Vice President tuition scholarship and a Magis Award. I am from Puerto Rico, and
                      I completed my High school studies there at the University of Puerto Rico's High
                      School, where I graduated magna cum laude. I am fluent in English and Spanish. I
                      look forward to working with you.
                    </b></h5>
                  </div>
                </Card>

                <div className="parent">
                  <CustomLink1 href={"https://www.linkedin.com/in/gustavo-lucca-padilla-0a545a2a6/details/certifications/1635554289416/single-media-viewer/?profileId=ACoAAEm_6P0B4uaoz9zXTYJk9jssf1ofAmP8eGc"} display_text = "Excel Certification"></CustomLink1>
                  <CustomLink1 href={"https://www.linkedin.com/in/gustavo-lucca-padilla-0a545a2a6/details/certifications/1635554286627/single-media-viewer/?profileId=ACoAAEm_6P0B4uaoz9zXTYJk9jssf1ofAmP8eGc"} display_text = "Database Certification"></CustomLink1>
                </div>
              </div>
            </div>
          </div>

          <footer className="w3-container w3-teal w3-center w3-margin-top">
            <p>Find me on LinkedIn.</p>
            <a href="https://www.linkedin.com/in/gustavo-lucca-padilla-0a545a2a6/" target="_blank"><i
                className="fa fa-linkedin w3-hover-opacity"></i></a>
            <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
          </footer>
        </div>
      </>
  );
};
export default Home;