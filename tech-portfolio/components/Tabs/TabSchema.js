import Link from 'next/link';
import styled from 'styled-components';
import Icon from '../common/icons/icons';

const TabSchema = ({filepath, Icon_name, file_name}) => {
    return (
        <Link href={filepath}>
            <TabBox>
                <Icon name={Icon_name} size={15} />
                <TabFileName>{file_name}</TabFileName>
            </TabBox>
        </Link>
    )
}

export default TabSchema;


// styled components for TabsSchema

const TabBox = styled.div`
    display: flex;
    align-items: center;
    border-right: 1px solid purple;
    padding: 0.33rem 1.55rem; 
`

const TabFileName = styled.p`
    font-size: 1rem;
    padding-left: 5px;
`