// import {useRouter} from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import Icon from '../common/icons/icons';


const SidebarTopComp = () => {
    // const router = useRouter();

    return (
        <SidebarTopContainer>
            <Link href="/">
                <SIdebarTopIconsContainer>
                    <Icon name='FilesIcon' width={15} height={15} />
                </SIdebarTopIconsContainer>
            </Link>
            <Link href="/">
                <SIdebarTopIconsContainer>
                    <Icon name='SearchIcon' width={15} height={15}/>
                </SIdebarTopIconsContainer>
            </Link>
            <Link href="/">
                <SIdebarTopIconsContainer>
                    <Icon name='CodeIcon' width={15} height={15}/>
                </SIdebarTopIconsContainer>
            </Link>
            <Link href="/">
                <SIdebarTopIconsContainer>
                    <Icon name='GithubIcon' width={15} height={15}/>
                </SIdebarTopIconsContainer>
            </Link>
            <Link href="/">
                <SIdebarTopIconsContainer>
                    <Icon name='MailIcon' width={15} height={15}/>
                </SIdebarTopIconsContainer>
            </Link>
            <Link href="/">
                <SIdebarTopIconsContainer>
                    <Icon name='PluralsightIcon' width={15} height={15}/>
                </SIdebarTopIconsContainer>
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
    border: 1px solid #fff;
`

const SIdebarTopIconsContainer = styled.div`
    cursor: pointer;
    width: 100%;
    /* border: ({ active }) => active ? #e6007e : #000;  */
    &:hover {
        background: var(--sidebar-hover-bg);
    }
    /* &:active {
        border-left: 2px solid var(--accent-color);
    } */
`
