import Icon from '../common/icons/icons';
import styled from 'styled-components';


const FilepathComp = ({rootpath, pagepath, stylepath, filename_icon, filename, icon_name, icon_size}) => {


    return (
        <StyledDiv>

                {/* <StyledFileDiv>

                </StyledFileDiv> */}
                <StyledSpan>
                    <span>{rootpath}</span> 
                    <Icon name={icon_name} size={icon_size} className='icon' />
                </StyledSpan>
                <StyledSpan>
                    <span>{pagepath}</span>
                    <span>{stylepath}</span>
                    <Icon name={icon_name} size={icon_size} className='icon' />
                </StyledSpan>
                <StyledSpan>
                    <Icon name={filename_icon} size={icon_size} className='file_ext_icon'/>
                    <span>{filename}</span>
                    <Icon name={icon_name} size={icon_size} className='icon' />
                </StyledSpan>
                <StyledSpan>
                    <span>...</span>
                </StyledSpan>
        </StyledDiv>
    )
}

export default FilepathComp


const StyledDiv = styled.div`
    background-color: #616161;
    border-bottom: 0.5px solid #757575;
    display: flex;
    height: 3vh;
    padding-left: 15px;
`

const StyledSpan = styled.span`
        display: flex;
        align-items: center;
        font-size: 0.8rem;
        color: #ebe9ec;
        /* padding-bottom: 0; */

        span {
            padding-bottom: 3px;
        }

        .icon {
            padding: 0;
            margin: 0;

        }

        &:hover {
                color: orange;
                cursor: pointer;

        }
        .file_ext_icon {
            margin-right: 5px;
        }
`

// const filepaths = [
//     {
//         parentpath : 'tech-portfolio',
//         pagepath: 'pages',
//         stylepath: 'styles',
//         nopath: '',
//         filetype : 
//             {
//                 js: 'contact.js',
//                 css: 'bio.css',
//                 scss: 'articles.scss',
//                 jsx: 'projects.jsx',
//                 json: 'github.json',
//                 md: 'gists.md',
//                 html: 'about.html'
//             }
        
//     }
// ];

