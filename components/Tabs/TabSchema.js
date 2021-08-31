import Link from "next/link";
import styled from "styled-components";
import Icon from "../common/icons/icons";
import { useRouter } from "next/router";

const TabSchema = ({ filepath, Icon_name, file_name }) => {
  const router = useRouter();

  const isCurrentPath =
    router.pathname === filepath || router.asPath === filepath;

  return (
    <Link href={filepath} passHref>
      <TabBox isCurrentPath={isCurrentPath}>
        <Icon name={Icon_name} size={15} />
        <TabFileName isCurrentPath={isCurrentPath}>{file_name}</TabFileName>
      </TabBox>
    </Link>
  );
};

export default TabSchema;

// styled components for TabsSchema

const TabBox = styled.div`
  display: flex;
  align-items: center;
  border-right: 1px solid transparent;
  padding: 0.33rem 1.55rem;
  background-color: ${({ isCurrentPath }) => (isCurrentPath ? "#1d1d1d" : "")};
  border-bottom: ${({ isCurrentPath }) =>
    isCurrentPath ? "2px solid orange" : ""};

  /* :hover {
        background-color: #5d5d5d;
        color: #fff;
    } */
`;

const TabFileName = styled.p`
  font-size: 1rem;
  padding-left: 5px;
  color: ${({ isCurrentPath }) => (isCurrentPath ? "orange" : "#000")};
`;

// <ul>
//       <li className={router.pathname == "/" ? "active" : ""}>
//         <Link href="/">home</Link>
//       </li>
//       <li className={router.pathname == "/about" ? "active" : ""}>
//         <Link href="/about">about</Link>
//       </li>
// </ul>
