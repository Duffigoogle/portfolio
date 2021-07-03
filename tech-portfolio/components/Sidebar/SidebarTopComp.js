// import {useRouter} from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import Icon from '../common/icons/icons';
import {useRouter} from 'next/router';


const SidebarTopComp = ({toggle}) => {
    const router = useRouter();
    

    return (
        <SidebarTopContainer>
        
                <SidebarTopIconsContainer>
                    <Icon name='FilesIcon' 
                    width={15} 
                    height={15} 
                    onClick={toggle}
                    color={router.pathname === '/' || '/home' ? '#fff' : 'rgb(106, 115, 125)' }
                    />
                    <ToolTipSpan>Explorer</ToolTipSpan>
                </SidebarTopIconsContainer>
    
            <Link href="/contact">
                <SidebarTopIconsContainer>
                    <Icon name='SearchIcon' 
                    width={15} 
                    height={15}
                    color={router.pathname === '/search' ? '#fff' : 'currentcolor' }
                    />
                </SidebarTopIconsContainer>
            </Link>
            <Link href="/">
                <SidebarTopIconsContainer>
                    <Icon name='CodeIcon' 
                    width={15} 
                    height={15}
                    color={router.pathname === '/codebase' ? '#fff' : 'currentcolor' }
                    />
                    <ToolTipSpan>Codebase</ToolTipSpan>
                </SidebarTopIconsContainer>
            </Link>
            <Link href="/">
                <SidebarTopIconsContainer>
                    <Icon name='GithubIcon' 
                    width={15} 
                    height={15}
                    color={router.pathname === '/githubConnect' ? '#fff' : 'currentcolor' }
                    />
                </SidebarTopIconsContainer>
            </Link>
            <Link href="/">
                <SidebarTopIconsContainer>
                    <Icon name='MailIcon' 
                    width={15} 
                    height={15}
                    color={router.pathname === '/contactMe' ? '#fff' : 'currentcolor' }
                    />
                </SidebarTopIconsContainer>
            </Link>
            <Link href="/">
                <SidebarTopIconsContainer>
                    <Icon name='PluralsightIcon' 
                    width={15} 
                    height={15}
                    color={router.pathname === '/pluralsight' ? '#fff' : 'yellow' }
                    />
                </SidebarTopIconsContainer>
            </Link>
        </SidebarTopContainer>
    //     <div className={styles.sidebarTop}>
    //     <Link href="/">
    //       <div
    //         className={`${styles.iconContainer} ${
    //           router.pathname === '/' && styles.active
    //         }`}
    //       >
    //         <FilesIcon
    //           fill={
    //             router.pathname === '/'
    //               ? 'rgb(225, 228, 232)'
    //               : 'rgb(106, 115, 125)'
    //           }
    //           className={styles.icon}
    //         />
    //       </div>
    //     </Link>
    //     <Link href="/github">
    //       <div
    //         className={`${styles.iconContainer} ${
    //           router.pathname === '/github' && styles.active
    //         }`}
    //       >
    //         <GithubIcon
    //           fill={
    //             router.pathname === '/github'
    //               ? 'rgb(225, 228, 232)'
    //               : 'rgb(106, 115, 125)'
    //           }
    //           className={styles.icon}
    //         />
    //       </div>
    //     </Link>
    //     <Link href="/projects">
    //       <div
    //         className={`${styles.iconContainer} ${
    //           router.pathname === '/projects' && styles.active
    //         }`}
    //       >
    //         <CodeIcon
    //           fill={
    //             router.pathname === '/projects'
    //               ? 'rgb(225, 228, 232)'
    //               : 'rgb(106, 115, 125)'
    //           }
    //           className={styles.icon}
    //         />
    //       </div>
    //     </Link>
    //     <Link href="/articles">
    //       <div
    //         className={`${styles.iconContainer} ${
    //           router.pathname === '/articles' && styles.active
    //         }`}
    //       >
    //         <PencilIcon
    //           fill={
    //             router.pathname === '/articles'
    //               ? 'rgb(225, 228, 232)'
    //               : 'rgb(106, 115, 125)'
    //           }
    //           className={styles.icon}
    //         />
    //       </div>
    //     </Link>
    //     <Link href="/contact">
    //       <div
    //         className={`${styles.iconContainer} ${
    //           router.pathname === '/contact' && styles.active
    //         }`}
    //       >
    //         <MailIcon
    //           fill={
    //             router.pathname === '/contact'
    //               ? 'rgb(225, 228, 232)'
    //               : 'rgb(106, 115, 125)'
    //           }
    //           className={styles.icon}
    //         />
    //       </div>
    //     </Link>
    //   </div>
    )
}

export default SidebarTopComp;


//styled-components for SIDEBARTOPCOMP

const SidebarTopContainer = styled.div`
    /* border: 1px solid red; */
    margin: 0 auto;
`

const SidebarTopIconsContainer = styled.div`
    cursor: pointer;
    width: 100%;
    /* position: relative; */
    margin-top: 15px;
    /* display: inline-block; */
    /* border: 1px solid #fff; */

    &:hover {
        color: #fff;
    }
    &:hover span {
        visibility: visible;
        opacity: 1;
    }
    /* &:active {
        border-left: 2px solid var(--accent-color);
    } */
`
// opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
//     top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};

const ToolTipSpan = styled.span`
    visibility: hidden;
    width: 80px;
    background-color: black;
    color: #fff;
    font-size: 0.7rem;
    text-align: center;
    padding: 3px 0;
    border-radius: 6px;
    /* Position the tooltip text */
    position: absolute;
    z-index: 1;
    top: 130px;
    left: 3.5%;
    /* Fade In tooltips (Animation) */
    opacity: 0;
    transition: opacity 1s;

    ::after {
        content: " ";
        position: absolute;
        top: 50%;
        right: 100%; /* To the left of the tooltip */
        margin-top: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: transparent black transparent transparent;
    }
`