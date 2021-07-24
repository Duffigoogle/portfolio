import styled from "styled-components";
import Link from 'next/link';
import SocialsComp from '../Socials/socialComp';
import Icon from '../common/icons/icons';



const person = {
    First_Name: 'Caleb Ini.',
    Last_Name: 'Duff',
    Nickname: 'Duffigoogle',
    Gender: 'Male',
    Birth_Date: '29th Nov.'
};

const hobbies = {
    Sport: ['Football', 'Golf', 'Tennis', 'Chess'],
    Lifestyle: 'Traveler',
    Creativity_Quotient: 10,

};
const profession = {
    Sport: 'Football',
    Lifestyle: 'Traveler',
    Creativity_Quotient: 10,

};

const personal_skills = {
    i: 'Time Management',
    ii: 'Excellent Communication',
    iii: 'Best Team Player',
    iv: 'Good Sense of Humuor',
    v: 'Sense of Responsibility',
    vi: 'Problem Solving Initiative',
};



const Bio = ({text, person, replacer = null, space = 2}) => {
    return (
        <StyledObjBox>
            <pre style={{
                backgroundColor: '#696969',
                padding: '1rem 0.5rem',
                width: '21rem',
                color: '#eee',
                borderRadius: '0px 0px 5px 5px',
                boxShadow: '0px 5px 6px #f9f9f9'
            
            }}>
                <span>{text} = </span>
                <code>
                    {JSON.stringify(person, replacer, space)}
                </code>
            </pre>
        </StyledObjBox>
    )
}



const BioComp = () => {
    
    
    return (
        <>
            <BioContainer>
                <Bio text='const who_I_am' person={person} />
                <Bio text='const personal_skills' person={personal_skills} />
                <Bio text='const hobbies' person={hobbies} />
            </BioContainer>
           
                
        </>
    )
}

export default BioComp;


const BioContainer = styled.div`
    width: 100%;
    padding-left: 1rem;
    /* display: flex; */
    /* border: 1px solid red; */
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0.7rem;
`;

const StyledObjBox = styled.div`
    margin: 1rem 0;


    span {
        font-weight: bold;
        font-size: 1.3rem;
        color: orange;
    }
`