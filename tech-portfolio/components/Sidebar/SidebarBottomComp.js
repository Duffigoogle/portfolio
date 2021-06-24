// import Link from 'next/link';
import styled from 'styled-components';
// import {useRouter} from 'next/router';
// import Icon from '../common/icons/icons';

const SidebarBottomComp = () => {
    // const router = useRouter();

    return (

        <SidebarBottomContainer>
            {/* <SidebarBottomIconContainer>
                <Link href="/about">
                    <Icon name='AccountIcon' fill={
                         router.pathname === "/about"
                        ? "rgb(225, 228, 232)"
                        : "rgb(106, 115, 125)"
                    } />
                </Link>
            </SidebarBottomIconContainer>
            <SidebarBottomIconContainer>
                <Link href="/settings">
                    <Icon name='SettingsIcon' fill={
                        router.pathname === "/settings"
                        ? "rgb(225, 228, 232)"
                        : "rgb(106, 115, 125)"
                    } />
                </Link>
            </SidebarBottomIconContainer> */}
        </SidebarBottomContainer>
    //     <div className={styles.sidebarBottom}>
    //         <div className={styles.iconContainer}>
    //             <Link href="/about">
    //                 <AccountIcon
    //                     fill={
    //                     router.pathname === "/about"
    //                     ? "rgb(225, 228, 232)"
    //                     : "rgb(106, 115, 125)"
    //                 }
    //                 className={styles.icon}
    //                 />
    //             </Link>
    //         </div>
    //     <div className={styles.iconContainer}>
    //       <Link href="/settings">
    //         <SettingsIcon fill={
    //             router.pathname === "/settings"
    //               ? "rgb(225, 228, 232)"
    //               : "rgb(106, 115, 125)"
    //           } className={styles.icon} />
    //       </Link>
    //     </div>
    //   </div>
    )
}

export default SidebarBottomComp;


//styled components for the SIDEBARBOTTOMCOMPONENT
const SidebarBottomContainer = styled.div`
    border: 1px solid #000;
    background-color: green;
`

// const SidebarBottomIconContainer = styled.div`
//     cursor: pointer;
//     width: 100%;
// `