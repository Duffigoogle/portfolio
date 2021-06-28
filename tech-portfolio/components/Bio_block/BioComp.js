const BioComp = () => {
    return (
        <>
           <BioContainer>
               <BioDetails>
                    <BioHeading1><span>Hello,</span> I'm Duff I. David</BioHeading1>
                    <BioP>I'm a <span>Frontend Developer.</span> I build amazing and interactive products for the web.</BioP>
                    <BioP> I'm an aesthetics custodian for the web's User Interface.</BioP>
               </BioDetails>
               <BioButtonContainer>
                    <Link to="/about">
                            <WelcomeButton>
                                Check me out <Icon name='' size={15} color='#fff' />
                            </WelcomeButton>
                    </Link> 
               </BioButtonContainer>
               <BioSocialsContainer>
                   <SocialsComp />
               </BioSocialsContainer>
            </BioContainer> 
        </>
    )
}

export default BioComp;


const BioContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-between;
`;


const BioDetails = styled.div`
    
`;

const BioButtonContainer = styled.div`

`;

const BioSocialsContainer = styled.div`

`;
