import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import {useRouter} from 'next/router';



const ExplorerPortfolioComp = () => {
    const router = useRouter();

    return (
        <>
            <Link href="/home">
                <ExplorerPortfolioItem>
                    <ExplorerSpan/>
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
                    <ExplorerSpan/>
                    <Image
                        src="/html.svg"
                        alt="Html Icon"
                        height={18}
                        width={18}
                    />{' '}
                    <ExplorerPortfolioP>About.html</ExplorerPortfolioP>
                </ExplorerPortfolioItem>
            </Link>  
            <Link href="/bio">
                <ExplorerPortfolioItem>
                    <ExplorerSpan/>
                    <Image
                        src="/css.svg"
                        alt="CSS Icon"
                        height={18}
                        width={18}
                    />{' '}
                    <ExplorerPortfolioP>Bio.css</ExplorerPortfolioP>
                </ExplorerPortfolioItem>
            </Link>  
            <Link href="/contact">
                <ExplorerPortfolioItem>
                    <ExplorerSpan/>
                    <Image
                        src="/javascript.svg"
                        alt="JavaScriptt Icon"
                        height={18}
                        width={18}
                    />{' '}
                    <ExplorerPortfolioP>Contact.js</ExplorerPortfolioP>
                </ExplorerPortfolioItem>
          </Link>  
            <Link href="/articles">
                <ExplorerPortfolioItem>
                    <ExplorerSpan/>
                    <Image
                        src="/javascript.svg"
                        alt="Sass Icon"
                        height={18}
                        width={18}
                    />{' '}
                    <ExplorerPortfolioP>Articles.sass</ExplorerPortfolioP>
                </ExplorerPortfolioItem>
            </Link>  
            <Link href="/projects">
                <ExplorerPortfolioItem>
                    <ExplorerSpan/>
                    <Image
                        src="/react.svg"
                        alt="React Icon"
                        height={18}
                        width={18}
                    />{' '}
                    <ExplorerPortfolioP>Projects.jsx</ExplorerPortfolioP>
                </ExplorerPortfolioItem>
          </Link>  
            <Link href="/github">
                <ExplorerPortfolioItem>
                    <ExplorerSpan/>
                    <Image
                        src="/json.svg"
                        alt="Json Icon"
                        height={18}
                        width={18}
                    />{' '}
                    <ExplorerPortfolioP>Github.json</ExplorerPortfolioP>
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
    width: 13.9vw;
    /* background-color: skyblue; */
    margin-top: 1px;
    padding-left: 25px;
    cursor: pointer;
    &:hover {
        background-color: blue;
    }
    &.active {
        background-color: red;
        /* background-color: ${router.pathname === '/' ? '#fff' : 'rgb(106, 115, 125)' }; */
    }
`

const ExplorerSpan = styled.span`
    width: 1px;
    height: 100%;
    background-color: gray;
    margin-right: 5px;
`

const ExplorerPortfolioP = styled.p`
    font-size: 0.8rem;
    padding-left: 5px;
`
