import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Lottie from "lottie-react"; // Import Lottie from lottie-react
import animationData1 from "./Coding.json"; // Replace with your Lottie JSON file
import animationData2 from "./Education.json";
const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  padding: 16px;
`;

const StackContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TabCard = styled.div`
  position: absolute;
  width: 1000px;
  height: 500px;
  background-color: ${(props) => props.bgColor};
  border: 2px solid rgb(56, 30, 100);
  border-radius: 8px;
  padding: 16px;
  transform: translateX(${(props) => props.index * 50}px);
  z-index: ${(props) => props.zIndex};
  transition: all 0.3s ease;
  cursor: pointer;
  color: grey;

  &:hover {
    transform: translateX(${(props) => props.index * 70}px) scale(1.05);
    border: 0.1px solid #854ce6;
    box-shadow: 0px 0px 20px 2px #854ce6;
  }
    @media(max-width :1100px){
    width: 900px;
  }
    @media(max-width :1000px){
    width: 850px;
    height: 480px;
  }
    @media(max-width: 920px){
    width: 800px;
    height: 450px;
    }
    @media (max-width: 820px) {
  width: 700px;
}
    @media (max-width: 750px) {
  width: 600px;
}
  @media (max-width: 680px) {
  width: 550px;
}
    @media (max-width: 600px) {
  width: 500px;
}
    @media (max-width: 510px) {
  width: 400px;
}
  @media(max-width: 430px){
  width: 380px;
  // height: 750px;
  }
  @media(max-width: 390px){
  width: 330px;
  }
  @media(max-width: 330px){
  width: 300px;
  }
`;

const TabTitle = styled.div`
  position: absolute;
  top: -30px;
  left: calc(16px + ${(props) => props.index * 55}px);
  font-size: 16px;
  color: #b1b2b3;
  font-weight: bold;
  background-color: ${(props) => props.bgColor || "#854ce6"};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border: 1px solid grey;
  padding: 2px 8px;
  border-radius: 4px;
  transition: all 0.3s ease;
  @media(max-width: 520px){
    font-size: 15px;
  }
    @media(max-width: 390px){
    font-size: 11px;
    left: calc(16px + ${(props) => props.index * 25}px);
    // gap: 12px;
    }
    @media(max-width: 330px){
    font-size: 8px;
     left: calc(16px + ${(props) => props.index * 10}px);
    }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 16px;
  min-height: 100%;
  height: auto;
  @media(max-width: 390px){
  gap: 12px;
  }
`;

const Section = styled.div`
  flex: 1 1 40%;
  min-width: 30%;
  // background-color: white;
  height: 400px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media(max-width: 430px){
  display: none;
  }
`;

const Section1 = styled.div`
  flex: 1 1 55%;
  min-width: 45%;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const Section2 = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 16px;

  & > div {
    flex: 1 1 calc(50% - 16px); /* Each div takes up 50% of the row, minus the gap */
    max-width: calc(50% - 16px); /* Ensure it doesn't grow beyond 50% */
  }
`;


const ServiceCard = styled.div`
  background-color: #171721;
  color: #b1b2b3;
  border: 0.1px solid #854CE6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.2);
  }
  @media(max_width: 900px){
  height: 40%;
  padding: 5px;
  }
  @media(max-width: 500px){
  height: 32%;
  width: 50px;
  }
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  color: #b1b2b3;
  @media (max-width: 820px) {
    display: none; /* Hides the Title div */
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 40px; /* Adjust size as needed */
    height: 40px;
    object-fit: contain;
  }
`;


const MoreLink = styled.a`
  font-size: 14px;
  color: #007bff;
  text-decoration: none;
  margin-top: 8px;

  &:hover {
    text-decoration: underline;
  }
    @media(max_width: 800px){
    font-size: 10px;}
`;

const ExperienceCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background: ${({ theme }) => theme.card};
  color: #b1b2b3;
  border: 0.1px solid #854CE6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  @media(max-width: 800px){
    padding: 4px;
  }
`;

const ExperienceTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: bold;
  @media(max-width: 1000px){
  font-size: 13px;
  }
`;

const ExperienceTime = styled.p`
  margin: 4px 0;
  font-size: 10px;
  color: #888;
  @media(max-width: 1000px){
  font-size: 8px;
  }
`;

const ExperienceDescription = styled.p`
  margin: 0;
  font-size: 12px;
  color: #555;
  @media(max-width: 1000px){
  font-size: 10px;
  }
  @media(max-width: 530px){
  display: none;
  }
  @media(max-width: 430px){
  display: flex;
  }
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 8px; /* Adjust spacing between image and title */
  margin-bottom: 12px; /* Add some spacing below the header */
`;


const CountBadge = styled.div`
  font-size: 25px;
  font-weight: bold;

  @media (max-width: 600px) { /* Correct syntax */
    font-size: 20px;
  }
    @media(max-width: 500px){
    font-size:16px;
    }
`;
const ExperienceMarks = styled.div`
  font-size: 14px;
  color: #555; /* Grey color for the marks */
  margin-top: 8px;
`;  
const LottieWrapper = styled.div`
  width: 85%;
  height: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 720px) {
    display: none;
  }
`;
const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
  padding: 20px;

  @media (max-width: 780px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

const CertificateCard = styled.div`
  display: flex;
 background: #111827;
  color: white;
  border-radius: 12px;
  overflow: hidden;
  color: #b1b2b3;
  border: 0.1px solid #854CE6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  align-items: center;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 780px) {
    // flex-direction: column;
    width: 250px;
    height: 100px;
    padding : 4;
  }

`;

const CertificateImageWrapper = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #111827;
  @media(max-width: 380px){
  padding: 3;
  }
  @media (max-width: 780px) {
    padding: 16px 0;
  }
    @media(max-width: 810px){
    padding: -5px;
    }
   @media(max-width: 800px){
   width: 50px;
   } 
`;

const CertificateImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  @media(max-width: 800px){
  width: 50px;
  height: 50px;
  }
`;

const CertificateContent = styled.div`
  width: 60%;
  padding: 12px;

  @media (max-width: 780px) {
    width: 100%;
    text-align: center;
  }
    @media(max-width: 1000px){
    padding: 10px;}
    @media(max-width: 800px){
    padding: 8px;}
    @media(max-width: 380px){
      padding: 2px;
    }
`;

const CertificateCompanyName = styled.h3`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
  @media(max-width: 1000px){
  font-size: 12px;
  }
`;

const CertificateDescription = styled.p`
  font-size: 14px;
  margin-bottom: 8px;
  color: #cbd5e1;
  @media(max-width: 1000px){
  font-size: 10px;
  }
  @media(max-width: 800px){
   font-size: 10px;
  }
`;

const CertificateLink = styled.a`
  font-size: 14px;
  font-weight: bold;
  color: #38bdf8;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
    @media(max-width: 1000px){
    font-size: 10px;}
`;


const initialCardsData = [
  {
    id: 4,
    title: "Coding Profiles",
    animation: animationData1,
    content: "Coding profile and links here.",
    bgColor: "#231F43",
  },
  {
    id: 1,
    title: "Experience",
    animation: animationData1,
    content: "Work experience details go here.",
    bgColor: "#231F43",
  },
  {
    id: 2,
    title: "Education",
    animation: animationData2,
    content: "Educational qualifications go here.",
    bgColor: "#231F43",
  },
  {
    id: 3,
    title: "Certificates",
    animation: animationData1,
    content: "Certifications to enchance my Coding Skills.",
    bgColor: "#231F43",
  },
];

const StackedTabs = () => {

  const workExperiences = [
    { title: "React Native", time: "Dec 2024 - Present", description: "Learning React Native to build cross-platform mobile applications." },
    { title: "MERN STACK", time: "Aug 2024 - Nov 2024", description: "Skilled in building and deploying robust applications using the MERN stack." },
    { title: "Frontend Developer Intern", time: "Jun 2024 - Jul 2024", description: "Proficient in building applications using HTML, CSS, and JavaScript" },
    { title: "Cpp Intern", time: "Jan 2024 - Mar 2024", description: "Served as a intern, facilitating doubt resolution and leading technical workshops" },
  ];
  const timelineData = [
    {
      title: 'Bachelor of Technology',
      marks: '84%',
      area: 'Computer Science',
      time: '2020- Present',
    },
    {
      title: 'Intermediate',
      marks: '93.9%',
      area: 'MPC',
      time: '2020-2024',
    },
    {
      title: 'Schooling',
      marks: '97%',
      area: 'High School',
      time: '2010-2020',
    },
  ];
  const certifications = [
    {
      image: "Java.png",
      companyName: "IT Specialist",
      description: "Earned Python, HTML5, and CSS3 certification.",
      link: "Html.pdf",
    },
    {
      image: "Redhat.png",
      companyName: "Red Hat System Administration",
      description: "Earned certification in Linux system administration.",
      link: "Redhatcer.pdf",
    },
    {
      image: "c.jpg",
      companyName: "Cisco Networking Academy",
      description: "Earned C, Python, and CPP certification.",
      link: "c.pdf",
    },
  ];
  

const [activeCard, setActiveCard] = useState(4); // Default to card 4
const [codingCounts, setCodingCounts] = useState({}); // Initialize counts
const [cards, setCards] = useState(initialCardsData); // Initialize cards

useEffect(() => {
  if (activeCard === 4) {
    animateCount("Leetcode", 450);
    animateCount("GeeksforGeeks", 200);
    animateCount("CodeChef", 500);
    animateCount("HackerRank", 500);
  }
}, [activeCard]);

useEffect(() => {
  setActiveCard(4); // Trigger animation on refresh
}, []);

const animateCount = (key, target) => {
  const duration = 2000;
  const interval = 50;
  const step = target / (duration / interval);
  let current = 0;

  const intervalId = setInterval(() => {
    current += step;
    if (current >= target) {
      clearInterval(intervalId);
      setCodingCounts((prev) => ({ ...prev, [key]: target }));
    } else {
      setCodingCounts((prev) => ({ ...prev, [key]: Math.floor(current) }));
    }
  }, interval);
};

const handleCardClick = (clickedCardId) => {
  const updatedCards = cards.filter((card) => card.id !== clickedCardId);
  const clickedCard = cards.find((card) => card.id === clickedCardId);
  if (clickedCard) {
    setCards([clickedCard, ...updatedCards]);
    setActiveCard(clickedCardId);
  }
};


  return (
    <Container>
      <StackContainer>
        {cards.map((card, index) => (
          <TabCard
            key={card.id}
            index={index}
            zIndex={cards.length - index}
            bgColor={card.bgColor}
            onClick={() => handleCardClick(card.id)}
          >
            <TabTitle bgColor={card.bgColor} index={index}>
              {card.title}
            </TabTitle>
            <ContentContainer>
              <Section>
              <LottieWrapper>
  <Lottie animationData={card.animation} loop style={{ width: "100%", height: "100%" }} />
</LottieWrapper>

                <p>{card.content}</p>
              </Section>
              <Section1>
                {card.id === 1
                  ? workExperiences.map((experience, idx) => (
                      <ExperienceCard key={idx}>
                        <ExperienceTitle>{experience.title}</ExperienceTitle>
                        <ExperienceTime>{experience.time}</ExperienceTime>
                        <ExperienceDescription>
                          {experience.description}
                        </ExperienceDescription>
                      </ExperienceCard>
                    ))
                  : null}
  {card.id === 2 ?
                 timelineData.map((item, idx) => (
                      <ExperienceCard key={idx}>
                        <ExperienceTitle>{item.title}</ExperienceTitle>
                        <ExperienceDescription>
                          {item.area}
                        </ExperienceDescription>
                        <ExperienceTime>{item.time}</ExperienceTime>
                        <ExperienceMarks>{item.marks}</ExperienceMarks>
                      </ExperienceCard>
                    ))
                  : null}          {card.id === 4 ? (
                 <Section2>
                 {[
                   { title: "Leetcode", color: "#FFB400", icon: "🖌️", image: "./Leetcode.png", link: "https://leetcode.com/u/AlekhyaNam/" },
                   { title: "GeeksforGeeks", color: "#00BFFF", icon: "💻", image: "./gfg.png", link: "https://www.geeksforgeeks.org/user/alekhyt1o1/" },
                   { title: "CodeChef", color: "#0074D9", icon: "👨‍💻", image: "./codechef.png", link: "https://www.codechef.com/users/alekhyanam" },
                   { title: "HackerRank", color: "#FF851B", icon: "📱", image: "./h1.png", link: "https://www.hackerrank.com/profile/alekhyanam" },
                 ].map((service, idx) => (
                   <ServiceCard key={idx}>
                     <CountBadge>{`${codingCounts[service.title] || 0}+`}</CountBadge>
                     <br />
                     <Header>
                       <ImageWrapper>
                         <img src={service.image} alt={`${service.title} logo`} />
                       </ImageWrapper>
                       <Title>{service.title}</Title>
                     </Header>
                     <MoreLink href={service.link} target="_blank" rel="noopener noreferrer">
                       Profile
                     </MoreLink>
                   </ServiceCard>
                 ))}
               </Section2>
               
                ) : null}
     
      {/* {card.id === 3 ? (
        <>
          <CardWrapper>
            {certifications.map((cert, idx) => (
              <CertificateCard key={idx} index={idx}>
                <CertificateImage src={cert.image} alt={cert.name} />
              </CertificateCard>
            ))}
          </CardWrapper>

 <Tagsi>
            {certifications.map((cert, idx) => (
              <Tag key={idx}>{cert.name}</Tag>
            ))}
          </Tagsi>
        </>
      ) : null} */}
      {card.id === 3 ? (
  <>
    {/* <CardWrapper>
  {certifications.map((cert, idx) => (
    <CertificateCard key={idx}>
      <CertificateImage src={cert.image} alt={cert.companyName} />
      <CertificateCompanyName>{cert.companyName}</CertificateCompanyName>
      <CertificateDescription>{cert.description}</CertificateDescription>
      <CertificateLink href={cert.link} target="_blank">
        View Certificate
      </CertificateLink>
    </CertificateCard>
  ))}
</CardWrapper> */}
<CardWrapper>
  {certifications.map((cert, idx) => (
    <CertificateCard key={idx}>
      <CertificateImageWrapper>
        <CertificateImage src={cert.image} alt={cert.companyName} />
      </CertificateImageWrapper>
      <CertificateContent>
        <CertificateCompanyName>{cert.companyName}</CertificateCompanyName>
        <CertificateDescription>{cert.description}</CertificateDescription>
        <CertificateLink href={cert.link} target="_blank">
          View Certificates
        </CertificateLink>
      </CertificateContent>
    </CertificateCard>
  ))}
</CardWrapper>

  </>
) : null}
              </Section1>
            </ContentContainer>
          </TabCard>
        ))}
      </StackContainer>
    </Container>
  );
};

export default StackedTabs;
