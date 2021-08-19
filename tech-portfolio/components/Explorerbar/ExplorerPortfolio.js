import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";

const PortfolioFilesSchema = ({
  link_path,
  img_path,
  img_alt,
  img_size,
  file_name,
}) => {
  const router = useRouter();

  const isCurrentPath =
    router.pathname === link_path || router.asPath === link_path;

  return (
    <Link href={link_path}>
      <ExplorerPortfolioItem isCurrentPath={isCurrentPath}>
        <ExplorerSpan />
        <Image
          src={img_path}
          alt={img_alt}
          height={img_size}
          width={img_size}
        />{" "}
        <ExplorerPortfolioP>{file_name}</ExplorerPortfolioP>
      </ExplorerPortfolioItem>
    </Link>
  );
};

const ExplorerPortfolioComp = () => {
  const router = useRouter();

  return (
    <>
      {portfolioItems.map((portfolioItem, index) => (
        <PortfolioFilesSchema key={index} {...portfolioItem} id={index} />
      ))}
    </>
  );
};

export default ExplorerPortfolioComp;

const ExplorerPortfolioItem = styled.div`
  display: flex;
  align-items: center;
  /* height: 3.5vh; */
  height: 1.6rem;
  /* width: 13.9vw; */
  width: 11.953rem;
  margin-top: 1px;
  padding-left: 25px;
  cursor: pointer;
  background-color: ${({ isCurrentPath }) => (isCurrentPath ? "#bfbfbf" : "")};
  &:hover {
    background-color: #bfbfbf;
  }
  &.active {
    background-color: red;
    /* background-color: ${router.pathname === "/"
      ? "#fff"
      : "rgb(106, 115, 125)"}; */
  }
`;

const ExplorerSpan = styled.span`
  width: 1px;
  height: 100%;
  background-color: gray;
  margin-right: 5px;
`;

const ExplorerPortfolioP = styled.p`
  font-size: 0.8rem;
  padding-left: 5px;
`;

const portfolioItems = [
  {
    link_path: "/about",
    img_path: "/html.svg",
    img_alt: "Html Icon",
    img_size: 18,
    file_name: "About.html",
  },
  {
    link_path: "/bio",
    img_path: "/css.svg",
    img_alt: "Css Icon",
    img_size: 18,
    file_name: "Bio.css",
  },
  {
    link_path: "/contact",
    img_path: "/javascript.svg",
    img_alt: "JavaScript Icon",
    img_size: 18,
    file_name: "Contact.js",
  },
  {
    link_path: "/articles",
    img_path: "/sass.svg",
    img_alt: "Scss Icon",
    img_size: 18,
    file_name: "Articles.scss",
  },
  {
    link_path: "/projects",
    img_path: "/react.svg",
    img_alt: "React Icon",
    img_size: 18,
    file_name: "Projects.jsx",
  },
  {
    link_path: "/github",
    img_path: "/json.svg",
    img_alt: "",
    img_size: 18,
    file_name: "Github.json",
  },
  {
    link_path: "/gists",
    img_path: "/markdown.svg",
    img_alt: "Markdown Icon",
    img_size: 18,
    file_name: "Gist.md",
  },
];
