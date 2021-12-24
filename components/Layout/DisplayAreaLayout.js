import styled from "styled-components";
import TabsTaskbarComp from "../Tabs/TabTaskbar";
// import {useRouter} from 'next/router';
import FilepathComp from "../common/Filepath";

const DisplayAreaLayoutComp = ({
  children,
  pagepath,
  stylepath,
  filename,
  filename_icon,
}) => {
  return (
    <>
      {/* <TabsTaskbarComp /> */}
      {/* <DisplayAreaContainerTop> */}
      <TabsTaskbarComp />
      {/* <FilepathComp rootpath='tech-portfolio' pagepath={pagepath} stylepath={stylepath} filename={filename} filename_icon={filename_icon} icon_name='ChevronRight' icon_size='15' /> */}
      {/* </DisplayAreaContainerTop> */}
      <PageContainer>
        <FilepathComp
          rootpath="tech-portfolio"
          pagepath={pagepath}
          stylepath={stylepath}
          filename={filename}
          filename_icon={filename_icon}
          icon_name="ChevronRight"
          icon_size="15"
        />
        {children}
      </PageContainer>
    </>
  );
};

export default DisplayAreaLayoutComp;

const PageContainer = styled.div`
  /* position: relative; */
  /* margin-left: 0px; */
  /* position: absolute; */
  /* left: 100px; */
`;
