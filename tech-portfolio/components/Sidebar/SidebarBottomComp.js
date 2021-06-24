import Link from 'next/link';
import styled from 'styled-components';
// import {useRouter} from 'next/router';
import Icon from '../common/icons/icons';

const SidebarBottomComp = () => {
    // const router = useRouter();

    return (

        <SidebarBottomContainer>
                <Link href="/">
                    <SIdebarBottomIconContainer>
                        <Icon name='AccountIcon' width={15} height={15} />
                    </SIdebarBottomIconContainer>
                </Link>
                <Link href="/">
                    <SIdebarBottomIconContainer>
                        <Icon name='SettingsIcon' width={15} height={15} />
                    </SIdebarBottomIconContainer>
                </Link>
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
    border: 1px solid red;
    margin: 0 auto;
`
const SIdebarBottomIconContainer = styled.div`
     cursor: pointer;
     width: 100%;
     margin: 10px auto;
`
