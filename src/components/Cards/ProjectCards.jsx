
import React from 'react'
import styled from 'styled-components'
import { FaGithub } from 'react-icons/fa' // Import GitHub icon from react-icons

const Button = styled.button`
    display: none;
    width: 100%;
    padding: 10px;
    background-color: ${({ theme }) => theme.white};
    color: white;
    font-size: 14px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.8s ease-in-out;
`

const Card = styled.div`
    width: 330px;
    height: 490px;
    background-color: #231f43;
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
    overflow: hidden;
    padding: 26px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.5s ease-in-out;
    position: relative;

    &:hover {
        transform: scale(1.1); /* Increased scaling on hover */
        background-color: #3b2e5c; /* New background color on hover */
        box-shadow: 0 0 50px 6px rgba(0, 0, 0, 0.8);
        filter: brightness(1.1);
    }

    &:hover ${Button} {
        display: block;
    }
`

const Image = styled.img`
    width: 100%;
    height: 180px;
    background-color: ${({ theme }) => theme.white};
    border-radius: 10px;
    box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`

const Tags = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
    color: "white";
`

const Tag = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.primary + 15};
    padding: 2px 8px;
    border-radius: 10px;
`

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px; /* Reduced gap */
    padding: 0px 2px;
`

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`

const GitHubLink = styled.a`
    font-size: 20px; /* Adjust font size for the icon */
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
    font-weight: 600;
    margin-left: auto; /* Pushes GitHub link to the right */
    display: flex;
    align-items: center; /* Ensure vertical centering */
    justify-content: center; /* Center the icon horizontally */
    height: 24px; /* Set the fixed height for the icon */
    width: 24px; /* Set the fixed width for the icon */
    transition: color 0.3s ease;
    &:hover {
        color: ${({ theme }) => theme.secondary};
    }

    svg {
        transition: transform 0.3s ease; /* Add smooth transition to icon */
    }

    &:hover svg {
        transform: scale(1.2); /* Slightly scale up the icon */
    }
`

const Date = styled.div`
    font-size: 12px;
    margin-left: 2px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    margin-top: 0; /* Remove any top margin to reduce space */
    @media only screen and (max-width: 768px) {
        font-size: 10px;
    }
`

const Description = styled.div`
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 99};
    // overflow: hidden;
    margin-top: 8px;
    // display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`

const Members = styled.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
`
const Avatar = styled.img`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    margin-left: -10px;
    background-color: ${({ theme }) => theme.white};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border: 3px solid ${({ theme }) => theme.card};
`

const ProjectCards = ({ project, setOpenModal }) => {
    return (
        <Card>
            <Image src={project.image} />
            <Details>
                <TitleContainer>
                    <Title>{project.title}</Title>
                    <GitHubLink href={project.github} target="_blank">
                        <FaGithub size={45} /> {/* Displaying GitHub icon */}
                    </GitHubLink>
                </TitleContainer>
                <Date>{project.date}</Date>
                <Description>{project.description}</Description>
            </Details>
            <Tags>
                {project.tags?.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                ))}
            </Tags>
        </Card>
    )
}

export default ProjectCards
