import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';


const ExplorerPortfolioComp = () => {
    return (
        <>
            <Link href="/">
                <ExplorerPortfolioItem>
                    <Image
                        src="/markdown.svg"
                        alt="Markdown Icon"
                        height={18}
                        width={18}
                    />{' '}
                    <ExplorerPortfolioP>Home.md</ExplorerPortfolioP>
                </ExplorerPortfolioItem>
          </Link>  
            <Link href="/about">
                <ExplorerPortfolioItem>
                    <Image
                        src="/html.svg"
                        alt="Html Icon"
                        height={18}
                        width={18}
                    />{' '}
                    <ExplorerPortfolioP>About.html</ExplorerPortfolioP>
                </ExplorerPortfolioItem>
          </Link>  
            <Link href="/contact">
                <ExplorerPortfolioItem>
                    <Image
                        src="/javascript.svg"
                        alt="JavaScriptt Icon"
                        height={18}
                        width={18}
                    />{' '}
                    <ExplorerPortfolioP>Contact.js</ExplorerPortfolioP>
                </ExplorerPortfolioItem>
          </Link>  
            <Link href="/projects">
                <ExplorerPortfolioItem>
                    <Image
                        src="/react.svg"
                        alt="React Icon"
                        height={18}
                        width={18}
                    />{' '}
                    <ExplorerPortfolioP>Projects.jsx</ExplorerPortfolioP>
                </ExplorerPortfolioItem>
          </Link>  
        </>
    )
}

export default ExplorerPortfolioComp;

const ExplorerPortfolioItem = styled.div`
    display: flex;
    align-items: center;
    height: 3.5vh;
    width: 10vw;
    background-color: skyblue;
    margin-top: 5px;
`

const ExplorerPortfolioP = styled.p`
    font-size: 0.8rem;
`
