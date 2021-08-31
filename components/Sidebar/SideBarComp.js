// import styles from '../styles/Sidebar.module.css';
import styled from 'styled-components';
import SidebarTopComp from '../Sidebar/SidebarTopComp';
import SidebarBottomComp from '../Sidebar/SidebarBottomComp';

//SideBar Copmponent
const SidebarComp = ({toggle}) => {

  return (
      <SideBarAside>
          <SidebarTopComp toggle={toggle}/>
          <SidebarBottomComp />
      </SideBarAside>
  );
};

export default SidebarComp;


//styled Components for the SIDEBARCOMPONENT
const SideBarAside = styled.aside`
    background: gray;
    /* border: 1px solid #000; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    width: 3vw;
    min-width: 40px;
    height: calc(100vh - 30px - 30px);
`