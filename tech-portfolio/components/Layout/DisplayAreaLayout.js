import styled from 'styled-components';
import TabsTaskbarComp from '../Tabs/TabTaskbar';
// import CodeLinesComp from '../codelines/CodeLinesComp';


const DisplayAreaLayoutComp = ({children}) => {
    return (
        <>
           {/* <DisplayAreaContainer> */}

                <DisplayAreaContainerTop>
                        <TabsTaskbarComp />
                        <FilePathLabel>File path</FilePathLabel>
                </DisplayAreaContainerTop>
                     <PageContainer>{children}</PageContainer>    

            {/* </DisplayAreaContainer>  */}
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

const FilePathLabel = styled.div`
    background-color: #616161;
    /* box-shadow: 0px 2px 1px #9e9e9e; */
    
`

const PageContainer = styled.main`
    display: flex;
    /* width: 80vw; */
    height: 85vh;
    overflow-y: auto;

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

