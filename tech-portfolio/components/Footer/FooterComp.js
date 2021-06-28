import styled from 'styled-components';
import Image from 'next/image';


const FooterComp = () => {
    return (
        <FooterContainer>
            <FooterLink
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                 Developed by{' '}
                <FooterLogoSpan>
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                </FooterLogoSpan>
            </FooterLink>
      </FooterContainer>
    )
}

export default FooterComp;


const FooterContainer = styled.footer`
     width: 100%;
     height: 30px;
     border-top: 1px solid #8f2626;
     display: flex;
     justify-content: center;
     align-items: center;
`

const FooterLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
`
const FooterLogoSpan = styled.span`
    height: 1em;
    margin-left: 0.5rem;
`