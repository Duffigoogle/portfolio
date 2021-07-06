import styled from 'styled-components';
import WelcomeTaskbarComp from '../../components/Tabs/WelcomeTaskbar';


const HomePageLayout = ({children}) => {
    return (
        <>
            <DisplayAreaContainerTop>
                <WelcomeTaskbarComp />
            </DisplayAreaContainerTop>
                     <PageContainer>{children}</PageContainer>   
        </>
    )
}

export default HomePageLayout;



const DisplayAreaContainerTop = styled.div`
    /* border: 1px solid red; */
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


