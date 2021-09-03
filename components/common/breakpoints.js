// export const size = {
//   mobileS: "320px",
//   mobileM: "375px",
//   mobileL: "425px",
//   tablet: "768px",
//   laptop: "1024px",
//   laptopL: "1440px",
//   desktop: "2560px",
// };

// export const device = {
//   mobileS: `(min-width: ${size.mobileS})`,
//   mobileM: `(min-width: ${size.mobileM})`,
//   mobileL: `(min-width: ${size.mobileL})`,
//   tablet: `(min-width: ${size.tablet})`,
//   laptop: `(min-width: ${size.laptop})`,
//   laptopL: `(min-width: ${size.laptopL})`,
//   desktop: `(min-width: ${size.desktop})`,
//   desktopL: `(min-width: ${size.desktop})`,
// };

export const breakpoints = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
};

export const mediaQueries = (key) => {
  return (style) => `@media(max-width: ${breakpoints[key]}px) {${style}}`;
};
// import breakpoint from 'Commons/breakpoints';

// const Div = styled.div`
//     @media only screen and ${breakpoint.device.xs}{
//         display: none;
//     }
//     @media only screen and ${breakpoint.device.sm}{
//         display: flex;
//     }
//     @media only screen and ${breakpoint.device.lg}{
//         display: flex;
//     }
// `;

// 320px — 480px: Mobile devices
// 481px — 768px: iPads, Tablets
// 769px — 1024px: Small screens, laptops
// 1025px — 1200px: Desktops, large screens
// 1201px and more —  Extra large screens, TV.
