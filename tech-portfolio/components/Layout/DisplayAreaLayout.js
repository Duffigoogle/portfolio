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



const PageContainer = styled.main`
    display: flex;
    height: 84vh;
    overflow-y: auto;
    background-color: #616161;

    /* width */ //the scrollbar
    ::-webkit-scrollbar {
    width: 10px;
    }

    // the buttons on the scrollbar (arrows pointing upwards and downwards).
    ::-webkit-scrollbar-button {

    }

    /* Track */ // the track (progress bar) of the scrollbar NOT covered by the handle.
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
        box-shadow: inset 0 0 5px grey;
        border-radius: 15px;
    }

    /* Track */ // the track (progress bar) NOT covered by the handle.
    ::-webkit-scrollbar-track-piece {
    
    }

    // the bottom corner of the scrollbar, where both horizontal and vertical scrollbars meet.
    ::-webkit-scrollbar-corner {

    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 15px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    background: #555;
    }
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

