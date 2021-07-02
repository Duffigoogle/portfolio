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
                </SidebarTopIconsContainer>
    
            <Link href="/contact">
                <SidebarTopIconsContainer>
                    <Icon name='SearchIcon' 
                    width={15} 
                    height={15}
                    color={router.pathname === '/search' ? '#fff' : 'rgb(106, 115, 125)' }
                    />
                </SidebarTopIconsContainer>
            </Link>
            <Link href="/">
                <SidebarTopIconsContainer>
                    <Icon name='CodeIcon' 
                    width={15} 
                    height={15}
                    color={router.pathname === '/codebase' ? '#fff' : 'rgb(106, 115, 125)' }
                    />
                </SidebarTopIconsContainer>
            </Link>
            <Link href="/">
                <SidebarTopIconsContainer>
                    <Icon name='GithubIcon' 
                    width={15} 
                    height={15}
                    color={router.pathname === '/github' ? '#fff' : 'rgb(106, 115, 125)' }
                    />
                </SidebarTopIconsContainer>
            </Link>
            <Link href="/">
                <SidebarTopIconsContainer>
                    <Icon name='MailIcon' 
                    width={15} 
                    height={15}
                    color={router.pathname === '/contactMe' ? '#fff' : 'rgb(106, 115, 125)' }
                    />
                </SidebarTopIconsContainer>
            </Link>
            <Link href="/">
                <SidebarTopIconsContainer>
                    <Icon name='PluralsightIcon' 
                    width={15} 
                    height={15}
                    color={router.pathname === '/pluralsight' ? '#fff' : 'rgb(106, 115, 125)' }
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
    margin-top: 15px;
    /* border: 1px solid #fff; */
    /* border: ({ active }) => active ? #e6007e : #000;  */
    &:hover {
        /* background: var(--sidebar-hover-bg); */
        color: #fff;
    }
    /* &:active {
        border-left: 2px solid var(--accent-color);
    } */
`
// opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
//     top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};