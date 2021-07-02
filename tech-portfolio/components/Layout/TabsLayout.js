// import TitlebarComp from '../Titlebar/TitlebarComp';
// import SidebarComp from '../Sidebar/SideBarComp';
import TabsTaskbarComp from '../Tabs/TabTaskbar';
import styles from '../../styles/Home.module.scss';
// import styles from '../../styles/TabsLayout.module.scss';
// import styled from 'styled-components';

const TabsLayoutComp = ({children}) => {

    // const [isOpen, setIsOpen] = useState(false);

    // const toggle = () => {
    //     setIsOpen(!isOpen);
    // };

    return (
        <>
            <main className={styles.container}>
                <TabsTaskbarComp />
                    <div>
                        {children}
                    </div>

            </main>
        </>
    )
}

export default TabsLayoutComp;

