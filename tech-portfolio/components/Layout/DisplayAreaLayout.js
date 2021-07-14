import styled from 'styled-components';
import TabsTaskbarComp from '../Tabs/TabTaskbar';
// import {useRouter} from 'next/router';
import FilepathComp from '../filepath/Filepath';


const DisplayAreaLayoutComp = ({children, pagepath, stylepath, filename, filename_icon}) => {

    return  (
        <>
                <DisplayAreaContainerTop>
                        <TabsTaskbarComp />
                        <FilepathComp rootpath='tech-portfolio' pagepath={pagepath} stylepath={stylepath} filename={filename} filename_icon={filename_icon} icon_name='ChevronRight' icon_size='15' />
                </DisplayAreaContainerTop>
                     <PageContainer>{children}</PageContainer>    
        </>
    )
}

export default DisplayAreaLayoutComp;


// const DisplayAreaContainer = styled.div`
//     width: 100%;
//     height: calc(100vh - 30px - 30px);
//     /* border: 1px solid green; */
//     overflow: hidden;
    
// `

const DisplayAreaContainerTop = styled.div`
    /* border: 1px solid red; */
`



const PageContainer = styled.div`

`



// const router = useRouter();

    // const filePathStyles = '/bio.css' || '/articles.scss';
    // const filePathPages = '/contact.js' || '/about.html' || 'projects.jsx';

    // const isCurrentPages = router.pathname === filePathPages || router.asPath === filePathPages;
    // const isCurrentStyles = router.pathname === filePathStyles || router.asPath === filePathStyles;


    // if (router.pathname === filePathPages || router.asPath === filePathPages) {
    //     return (
    //         <>
    //             <DisplayAreaContainerTop>
    //                     <TabsTaskbarComp />
    //             </DisplayAreaContainerTop>
    //             <FilepathComp rootpath='tech-portfolio' pagepath='pages' filename={filename} filename_icon={fileIcon} icon_name='ChevronRight' icon_size='15' />

    //                  <PageContainer>{children}</PageContainer>    
    //         </>
    //     )
    // } else if (router.pathname === filePathStyles || router.asPath === filePathStyles) {
    //     return (
    //         <>
    //             <DisplayAreaContainerTop>
    //                     <TabsTaskbarComp />
    //             </DisplayAreaContainerTop>
    //             <FilepathComp rootpath='tech-portfolio' stylepath='styles' filename={filename} filename_icon={fileIcon} icon_name='ChevronRight'  icon_size='15' />

    //                  <PageContainer>{children}</PageContainer>    
    //         </>
    //     )
    // } else {
    //     return (
    //         <>
    //             <DisplayAreaContainerTop>
    //                     <TabsTaskbarComp />
    //             </DisplayAreaContainerTop>
    //             <FilepathComp rootpath='tech-portfolio' filename={filename} filename_icon={fileIcon} icon_name='ChevronRight'  icon_size='15' />
    //                  <PageContainer>{children}</PageContainer>    
    //         </>
    //     )
    // };

