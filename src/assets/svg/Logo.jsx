// import * as React from "react";

// function SvgComponent(props) {
//   return (
//     <svg xmlns="http://www.w3.org/2000/svg" width={27} height={40} viewBox="0 0 27 40" {...props}>
//       <g data-name="Group 101" transform="translate(-375 -21)">
//         <rect data-name="Rectangle 16" width={13} height={8} rx={4} transform="translate(375 53)" fill="#f40051" />
//         <rect data-name="Rectangle 11" width={20} height={8} rx={4} transform="translate(382 21)" fill="#f2b300" />
//         <rect data-name="Rectangle 15" width={20} height={8} rx={4} transform="translate(382 37)" fill="#7620ff" />
//         <rect data-name="Rectangle 12" width={8} height={8} rx={4} transform="translate(375 29)" fill="#4cd5c5" />
//       </g>
//     </svg>
//   );
// }

// export default SvgComponent;

import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={40}
    viewBox="0 0 450 446"
    {...props}
  >
    <g fill="#49c15d">
      <path d="m6.1 10.2.2 10.3-3.4.4-3.4.4 3.3.6 3.3.6v52l-3.3.6c-3.1.6-2.7.9 1.5 1.3 1.6.1 1.8 2.1 2 26.4l.2 26.2H3.3c-1.8 0-3.3.4-3.3.9 0 .6 1.4.9 3.1.8l3-.2.2 26.2.2 26.3H3.3c-1.8 0-3.3.5-3.3 1.1 0 .6 1.4.9 3.1.7l3-.3v107l-3.1-.3c-1.7-.2-3 .1-3 .7s1.5 1.1 3.3 1.1h3.2l-.2 26.2-.3 26.3-2.5.1c-3.9.2-4.3 1.4-.4 1.4h3.4l-.2 26.2-.2 26.3-3.3.6-3.3.6 3.3.4 3.4.4-.1 22.2C6 437.9 6.4 446 7 446c.6 0 1-8.2 1-22.5V401h53l.3 22.7.2 22.8.3-22.8.2-22.7h53v22.7c0 15.5.3 22.3 1 21.3.6-.9 1-10 .9-22.5l-.1-21 26.1-.3 26.1-.2v22.5c0 14.8.4 22.5 1 22.5.7 0 1-7.5 1-22.3l-.1-22.2 26-.3 26.1-.2v22.5c0 14.3.4 22.5 1 22.5s1-8.2 1-22.5V401l26.1.2 26 .3-.1 22.2c0 14.8.3 22.3 1 22.3.6 0 1-7.7 1-22.5V401h53l.3 22.7.2 22.8.3-22.8.2-22.7h53l.2 22.7.2 22.8.6-22.5.5-22.5 26.3-.3 26.2-.2v22.5c0 14.8.4 22.5 1 22.5.7 0 1-7.5 1-22.3l-.2-22.2 4.4-.6 4.3-.5-4.3-.5-4.3-.4v-52l4.1-.3c2.2-.2 4-.8 4-1.3 0-.6-1.8-.9-4-.7l-4 .3-.1-26v-26l4.1-.3c2.2-.2 4-.8 4-1.3 0-.6-1.7-.9-4-.7l-4.1.3v-161l4.1.3c2.3.2 4-.1 4-.7 0-.5-1.8-1.1-4-1.3l-4.1-.3v-26l.1-26 4 .3c2.2.2 4-.1 4-.7 0-.5-1.8-1.1-4-1.3l-4.1-.3v-52l4.3-.6 4.3-.5-4.4-.5-4.4-.4.2-10.3c.1-6.6-.2-10.2-.8-10.2-.7 0-1.1 3.8-1.1 10.5V21l-26.2-.3-26.3-.2-.6-10.5-.5-10.5-.2 10.7-.2 10.6-26.3-.1-26.2-.2L333 10l-.6-10.5L332 10l-.5 10.5-26.2.2-26.3.2V10.5c0-6.7-.4-10.5-1.1-10.5-.6 0-.9 3.6-.8 10.2l.2 10.3-26.2.1H225V10.3c0-6.2-.4-10.3-1-10.3s-1 4.1-1 10.4v10.4l-26.1-.1-26.2-.2.2-10.3c.1-6.6-.2-10.2-.8-10.2-.7 0-1.1 3.8-1.1 10.5V21l-26.2-.2-26.2-.3.3-10.3c.2-6.8-.1-10.2-.8-10.2-.7 0-1.1 3.7-1.1 10.5V21H62l-.2-10.8-.2-10.7-.5 10.5-.6 10.5-26.2.2-26.3.1V10.4C8 3.8 7.6 0 6.9 0c-.6 0-.9 3.6-.8 10.2zM61 48.5V75H8V22h53v26.5zm54 0V75H62V22h53v26.5zm54-1c0 14 .4 25.5.8 25.5.5 0 .9-11.4 1-25.3l.2-25.2 26-.3 26-.2v15.5c0 10.1.4 15.5 1 15.5.7 0 1-5.2.9-15.3l-.1-15.2h52.4l-.1 19.5c-.1 11.4.3 20.1.9 21 .6 1 1-5.4 1-19.8V22h53v53l-14.7.1c-11 .1-13.8.4-10.8 1 2.2.5 8.7.8 14.5.7l10.5-.2.5 23.5.5 23.4.5-23.3.5-23.3h26l26 .1.3 26 .2 26h-12.5c-8.6 0-12.4.3-12 1.1.4.6 5.1.9 12.3.8l11.7-.1.3 26.1.2 26.1h-22.2c-15.2 0-21.8.3-20.8 1 .9.6 9.8 1 22 .9l20.5-.2.6 4.4c.6 4.4.9 4 1.2-1.4l.2-2.8h52l.3 26.1.2 26h-53.2l.5-2.8c.3-1.5.2-3.4-.4-4.2-.6-1.1-.9-.2-.9 2.7 0 4-.2 4.3-2.7 4.4-1.6 0-10.4 0-19.6-.1-12.2-.1-16.7.2-16.2 1 .4.7 4.5 1.1 11.3 1 5.9-.1 14.4-.1 19-.1l8.2.1-.2 26.1-.3 26.1-14.2.2c-7.7 0-13.9.4-13.6.8.2.5 6.7.8 14.4.8H386v52.5h-53l-.1-2.5c-.2-2.3-.2-2.3-.6.3-.4 2.6-.8 2.8-4.3 2.6-2.2-.2-4.2 0-4.6.4-.4.4 1.4.7 3.9.7h4.7v53h-53v-8.6c0-5.7-.3-8.3-1.1-7.9-.6.4-.9 3.8-.8 8.3l.2 7.7-26.1.3-26.2.2v-3c0-1.6-.4-3-1-3-.5 0-1 1.4-1 3v3l-26.2-.2-26.1-.3v-14.2c0-7.8-.4-14-.9-13.7-.4.3-.8 6.8-.8 14.5V400h-52.5l.2-19.2c.1-11-.2-19.9-.7-20.8-.6-1-1 5.7-1 19.2V400H62v-53l19.3-.1c13.4-.1 18-.4 15.2-1-2.2-.5-10.7-.8-19-.7l-15 .1-.3-26.2L62 293h3.7c2.1 0 4.5-.4 5.3-1 1-.6-.1-.8-3.4-.5-4.3.3-4.9.1-5.4-1.7-.5-1.9-.6-2-1.1-.5-.6 1.6-2.9 1.8-26.6 1.8h-26L8.2 265 8 239h24.9c15.6 0 25.2-.4 25.6-1 .4-.7-8.2-1-25-1H8l.2-26.1.3-26 25.3.1c16.7 0 25.2-.3 25.2-1s-8.7-1-25.5-1H8v-52.5l26.2.2 26.3.3.5 12.2.4 12.3.6-12.4.5-12.3 12.3.1c8 .1 12.2-.2 12.2-.8 0-.7-4.4-1.1-12.5-1.1H62l.2-26 .3-26.1 26.3-.2 26.2-.2v5.9c0 7.3.8 7 1.3-.5l.4-5.4 13.9-.1c7.6 0 14.4-.2 14.9-.4.6-.2-5.7-.7-13.8-1l-14.8-.5-.2-26.3-.2-26.2H169v25.5zm217 1V75h-53V22h53v26.5zm54 0V75l-26.2-.2-26.3-.3-.3-26.3L387 22h53v26.5zM60.8 102.9 61 129H8V76.5l26.3.2 26.2.1.3 26.1zm379.2-.2V129h-52.9v-25.6c0-14.1.1-25.9.3-26.3.2-.3 12.2-.6 26.5-.6H440v26.2zm0 54V183h-52.9l-.1-25.8c0-14.2.1-26 .4-26.3.2-.2 12.2-.4 26.5-.4H440v26.2zm0 108.5v26.3l-26.2-.2-26.3-.2-.1-26.1v-26H440v26.2zM60.8 319.1l-.3 26-26.3.2-26.2.2V293h53l-.2 26.1zm379.2.1v26.3l-26.3-.1-26.2-.2-.3-26.1-.2-26.1h53v26.2zM61 373.5V400H8v-53h53v26.5zm325 0V400h-53v-53h53v26.5zm54 0V400h-53v-53h53v26.5z" />
      <path d="M207.3 54.8c-6.2.3-8.3 1.8-6.6 4.5.9 1.5 1 1.7 1.1 10.2l.2 7.1 6.8-.4c3.7-.2 6.8-.5 7-.7.1-.1-.1-1-.4-1.9-.5-1.4-1.6-1.7-4.5-1.4-3.7.3-3.9.2-3.9-2.5 0-2.6.3-2.9 2.5-2.5 2.1.4 2.5.1 2.5-1.9 0-2.2-.3-2.4-3-1.8-2.7.6-3 .4-3-1.9s.4-2.6 3.5-2.6c3.3 0 5.3-1.7 4.3-3.7-.1-.4-3.1-.7-6.5-.5zM223.9 54.9c0 .3-.2 4.2-.5 8.6-.2 4.4-.6 9-.9 10.2-.5 2-.1 2.3 2.5 2.3 2.7 0 3-.3 3-3 0-4 1.3-3.8 3.3.5 1.3 2.6 2.3 3.5 4.2 3.5 3 0 3.1-.7.6-4-1.9-2.4-1.9-2.4.5-4.7 3-2.8 3.3-8.2.5-10.7-1.8-1.7-13-3.9-13.2-2.7zm9.6 7.7c0 2.5-.4 3-2.9 3.2-2.3.3-2.8 0-2.2-1.3.3-.9.6-2.7.6-4 0-2.1.3-2.3 2.3-1.6 1.6.6 2.2 1.6 2.2 3.7zM188.3 56.8c-2.4.4-3.1 2.6-3.5 11.7l-.3 5-3.6-6.5c-2.8-5.2-4.1-6.6-6.2-6.8-1.9-.2-2.7.1-2.7 1.2 0 2.3.4 3.1 1.2 2.9.4-.2 2.8 3.3 5.4 7.7 2.5 4.4 4.9 8 5.2 7.9 4.2-.4 4.7-1.5 5.8-12.5.6-6 1-10.9 1-10.9-.1-.1-1.1.1-2.3.3zM249 59c-.5 1-.7 2-.4 2.3.3.2-.4 4-1.5 8.3-1.1 4.3-1.7 8.1-1.3 8.5.4.3 3.1 1.1 6.1 1.8 4.4.9 5.6.9 6.3-.1 1.3-2.2.9-2.6-3.2-3.3-2.2-.4-4-1-4-1.3 0-.8 2.9-13.1 3.6-15.3.7-2.4-4.4-3.2-5.6-.9zM275.7 65.6c-.4.4-.7 1.4-.7 2.2 0 .7-2.6 4.3-5.7 7.9-4.5 5.1-5.4 6.6-4.2 7.4 2.1 1.3 3.9 1.1 4.5-.5.8-2.2 6.7.6 7.4 3.5.3 1.2 1.5 2.6 2.8 3 2.1.8 2.2.7 2.2-6 0-3.7.3-8.8.6-11.3.5-3.8.4-4.6-1.2-5-1.1-.3-2.6-.9-3.5-1.2-.8-.4-1.8-.3-2.2 0zm2.3 10.9c0 3.5-1.2 4.3-3.9 2.6-1-.7-.8-1.4 1-3.5 1.2-1.4 2.4-2.6 2.6-2.6.2 0 .3 1.6.3 3.5zM152.7 67.1c-2.7 1.6-4.9 7.4-4.1 10.7 1.5 6 6.5 10.2 11.4 9.4 8.3-1.4 10.5-11.8 4-18.4-3-3-7.8-3.7-11.3-1.7zm6.2 3.9c2.5 1.3 4.5 6.4 3.7 9.5-.7 2.8-4.5 3.5-6.5 1.1s-3.1-7.7-2-9.7c1.1-2.1 2.2-2.3 4.8-.9z" />
      <path d="M156.8 75.7c.6.2 1.8.2 2.5 0 .6-.3.1-.5-1.3-.5-1.4 0-1.9.2-1.2.5zM169.4 75.8c.5.9 7.4.7 8.3-.2.4-.3-1.5-.6-4.1-.6-2.6 0-4.5.3-4.2.8zM191.3 75.6c1.2 1.2 8.7 1.6 8.7.4 0-.5-2.1-1-4.7-1-2.5 0-4.3.3-4 .6zM217 75.4c0 .9 3 1.4 3.5.6.4-.6-.3-1-1.4-1-1.2 0-2.1.2-2.1.4zM240.8 75.7c.6.2 1.8.2 2.5 0 .6-.3.1-.5-1.3-.5-1.4 0-1.9.2-1.2.5zM260.8 75.7c1.2.2 3.2.2 4.5 0 1.2-.2.2-.4-2.3-.4s-3.5.2-2.2.4zM285.3 76.1c.9.6 3.1.8 4.8.5 5.2-.8 4.5-1.6-1.2-1.6-4.2.1-5 .3-3.6 1.1zM295.8 75.7c0 .5-.2 1.2-.2 1.8-.2 1.4-5.6 10.6-7.5 12.8-1.4 1.7-1.4 2 .4 3.3 1 .8 2.1 1.4 2.4 1.4.3 0 1.9-2.3 3.4-5.1 1.6-2.8 3-4.9 3.2-4.7.2.2 0 3.1-.4 6.6-.7 6.1-.5 6.8 2.6 8.5.7.4 3.3-2.8 6.7-8.4 3.1-5.1 5.5-9.3 5.4-9.4-.2-.1-1.2-.7-2.4-1.3-1.9-1-2.3-.7-4.5 3.8-1.3 2.7-2.7 4.9-3.1 5-.4 0-.5-2.7-.1-6 .4-4.1.2-6.4-.7-7.5-1.3-1.5-4.9-2.1-5.2-.8zm2.9 8c-1.1 1-2.6-.8-2-2.3.5-1.5.7-1.4 1.5.1.6.9.7 1.9.5 2.2zm2.6 9.3c.3 1.1.1 1.8-.4 1.4-.5-.3-.9-1.2-.9-2 0-2 .7-1.7 1.3.6zM223 84.9c0 3.9.5 7.3 1 7.6.6.4 1-2.2 1-6.9 0-4.4-.4-7.6-1-7.6s-1 3-1 6.9zM128.3 79.7c-2.1.8-1.5 2.7 3 9.6 2.3 3.6 4.7 7.3 5.2 8.2.9 1.6 1.6 1.4 6.7-1.7 4.6-2.8 5.4-3.7 4.7-5.1-.9-1.5-1.2-1.5-4.2.3-1.8 1.1-3.5 2-3.8 2-.3 0-2.3-3.1-4.5-7-3.8-6.8-4.5-7.4-7.1-6.3zM169.8 81.6c-.5.4-.8 5.3-.7 10.8 0 7.6.3 9.5 1 7.7 1.1-2.8.8-19.7-.3-18.5zM112.1 91.5c-3.8 3.2-4.5 5.6-3.1 9.9 2.8 8.6 11.3 11.4 17.1 5.7 2.7-2.8 4.1-8.1 2-8.1-2.2 0-4.1 1.4-4.1 3 0 2.9-2.7 4.5-5.5 3.2-5.2-2.4-7.3-10.2-3-11.1 1.9-.3 4.4-2.8 4.5-4.4 0-1.7-5.1-.5-7.9 1.8zM316.9 92.4c-1.3 1.9-4.1 5.5-6.3 8l-3.8 4.6 2.3 2c7.1 6.1 12 6.1 16.9.2 4.3-5.3 4.1-9.1-1-14.2-2.2-2.2-4.4-4-4.9-4-.4 0-1.9 1.5-3.2 3.4zm6.9 6.2c.2 2.1-.5 3.8-2.2 5.7-2.5 2.7-6.9 3.6-8.1 1.7-.8-1.2 7.6-11 9-10.6.6.1 1.1 1.6 1.3 3.2zM277.7 91.7c-1.1 1-.8 13.6.3 15.3.7 1 1-1.2 1-7.3 0-8.7-.1-9.3-1.3-8zM207 94.6c-31.3 2.9-62.7 17.9-82.4 39.3-2.3 2.4-4.6 4.9-5.2 5.5-3.5 3.6-12.6 17.3-16.2 24.2-10.5 20.6-14.4 36.9-14.3 59.2.1 15.7 1.1 23.2 5.2 37.2 11.1 38 39.5 68.7 77.6 83.6 15.1 6 26.4 7.9 45.8 7.9 16.4 0 18.8-.3 34.1-4.1 19.8-4.8 42-18.1 58.1-34.5 6.7-6.9 17.3-20 17.3-21.5 0-.3 1.3-2.5 2.8-4.8 6.9-10.2 14-32.7 16.1-51.3 1.7-14.3-1.2-39.4-6-52.8-2.5-6.7-7.3-18.1-8.4-19.5-.6-.8-1.7-2.8-2.5-4.4-2.5-5-9.2-14.1-16-21.8-25.2-28.6-68.2-45.7-106-42.2zm22 2.9c12.4.8 12 .7 12 1.7 0 .4 1 .7 2.3.7 2.5-.1 5 .4 9.2 2.1 1.7.6 3.2 1.1 3.5 1.1 1.6-.1 8 2.4 8 3.1 0 .5.4.6 1 .3 1.1-.7 4.5.9 7.3 3.3.9.8 2.9 1.7 4.4 1.8 1.5.2 3.3 1.1 4 2 .7 1 1.3 1.4 1.3 1 0-.4.7 0 1.6.8.8.9 2.1 1.6 2.8 1.6.7 0 2.7 1.6 4.6 3.5 1.9 1.9 3.9 3.5 4.4 3.5 1.5 0 8.6 6.6 8.6 8 0 .6.5.8 1 .5.6-.3 1-.1 1 .5s.4.8 1 .5c.5-.3.7 0 .5.8-.3.7.5 1.9 2 2.7 1.4.7 2.5 1.6 2.5 2 0 .4 2 2.8 4.5 5.5 2.4 2.7 4.2 5.2 4 5.6-.3.4.2.9 1 1.3.8.3 1.5 1.2 1.5 2.1 0 .8.8 2.3 1.8 3.3 2.1 2.3 5.2 7.6 5.2 9.2 0 .6.7 1.8 1.6 2.7.8.9 1.3 2.1 1 2.9-.3.7.2 1.8 1 2.4.8.7 1.4 2.6 1.4 4.2 0 1.7.4 2.7 1 2.3.6-.3 1-.4 1 0 0 .3.9 3.8 1.9 7.8 1.1 3.9 2.2 9.9 2.6 13.2.3 3.2.9 6.3 1.2 6.8.3.5.5 4 .5 7.8s.3 6.9.8 6.9c.4 0 .5 1.5.1 3.2-.3 1.8-.6 4.5-.5 6 .1 1.6-.4 2.8-1 2.8-.7 0-.6.3.1.8 1 .6 1 1.7.2 4.3-.5 1.8-1.2 5.4-1.4 7.8-.4 4.2-2.6 12.1-4.5 16.6-.5 1.1-1.2 3.1-1.6 4.5-.4 1.4-1.1 2.8-1.6 3.1-.5.3-1.1 1.2-1.2 2-1 4.8-7.2 16.7-10.2 19.7-1.3 1.3-2.4 2.6-2.4 3.1 0 .4-.8 1.6-1.8 2.7-.9 1-3.9 4.7-6.7 8.1-2.7 3.4-5.2 5.7-5.6 5.2-.3-.6-1.1.3-1.7 2.1-.7 1.8-1.7 3-2.4 2.7-.7-.2-2.1.8-3 2.2-1 1.4-2.1 2.6-2.6 2.6s-2.3 1.1-4.1 2.5c-1.8 1.4-4.5 3.4-5.9 4.5-1.5 1.1-4.5 2.9-6.7 3.9-2.2 1.1-4.7 2.3-5.5 2.8-2.7 1.5-7.5 3.2-8.4 3-.5-.2-1.3.2-1.7.9-.7 1.2-2.6 1.9-5.6 2.1-.7.1-1.3.5-1.3 1 0 .4-1.1.8-2.4.8-1.4 0-2.7.4-3.1.9-.3.6-1.3 1-2.3 1-2.3.1-5.9.7-10.3 1.5-11.4 2.3-38 2.3-43.9-.1-1.4-.5-7.5-1.8-13.3-2.8-1.5-.3-5.1-1.5-8-2.9-2.9-1.3-6.7-2.7-8.4-3-1.8-.4-3.3-1.1-3.3-1.5 0-.3-1.2-1.2-2.7-1.9-4.9-2.1-10.7-5.6-13.2-7.9-1.4-1.2-2.8-2-3.3-1.7-.4.3-.8-.2-.8-1 0-.9-.7-1.6-1.5-1.6s-1.5-.5-1.5-1.2c0-.6-.3-.9-.6-.5-.8.8-4.4-2.5-3.8-3.5.3-.4-.2-.5-1-.2-1.2.4-1.6 0-1.6-1.7 0-1.2-.3-1.9-.6-1.6-1 .9-4.6-1.2-3.9-2.4.4-.5.1-.9-.4-.9-1.6 0-5.3-3.9-5.6-5.9-.1-.9-.8-1.5-1.4-1.3-.7.1-1.7-1.1-2.2-2.8-.6-1.6-1.6-3-2.3-3-.6 0-1.7-1.5-2.5-3.3-.8-1.7-2.2-4-3.2-5-1.1-1-2.2-3-2.5-4.5-.4-1.5-1.5-3.5-2.6-4.6-1.1-1-1.7-2.4-1.4-3.2.3-.8.1-1.4-.5-1.4s-.8-.4-.4-.9c.3-.5 0-1.5-.7-2.3-1.5-1.6-3.8-7.2-4.5-11.1-.3-1.5-1-2.7-1.5-2.7-.6 0-.4-.8.3-1.7.8-.9.9-1.4.3-1-.8.4-1.4-.5-1.7-2.6-.3-1.7-1-5.5-1.6-8.2-1.4-6.8-2.5-30-1.6-32.2.4-1 .9-4.3 1-7.3.4-7.8 2.5-17 3.8-17 .7 0 .5-.5-.3-1-1-.6-1.1-1-.2-1 .6 0 1.2-1 1.2-2.3 0-1.2.7-3.5 1.5-5.1.8-1.5 1.5-3.5 1.5-4.2 0-.8.5-1.4 1.1-1.4.5 0 .8-.4.5-.9-.4-.5-.2-1.1.4-1.3.6-.2 1.2-1.3 1.5-2.6.2-1.2 1.1-2.9 1.9-3.8 1.8-1.7 2.1-2.8.6-1.9-.6.3-.7-.1-.4-.9.3-.9 1-1.6 1.5-1.6s.9-.6.9-1.3c0-.8 1.1-2.4 2.5-3.7 1.3-1.2 2.2-2.7 1.9-3.1-.3-.5 0-.9.5-.9.6 0 1.1-.7 1.1-1.5s1.3-2.4 3-3.7c1.6-1.2 3.2-3 3.6-4 .3-1 1-1.6 1.5-1.3.5.3.6 0 .3-.8-.3-.9.7-2.4 2.3-3.7 1.5-1.2 2.8-2.7 2.8-3.3 0-.7.6-1.3 1.3-1.3.6-.1 1.6-.2 2.1-.3.5 0 1.3-1 1.6-2.1.3-1.1 1.2-2 2-2 .7 0 1.5-.7 1.8-1.5.7-1.5 6.4-5.7 13-9.3 2.3-1.2 3.7-2.2 3.2-2.2-.6-.1.9-1 3.2-2 2.3-1.1 4.5-2.5 4.8-3 .4-.6 1.1-.8 1.6-.4.6.3 1.8-.1 2.7-.9 1.9-1.6 5.3-3.1 6.5-2.9.4.1.7-.2.7-.8 0-.5.6-.7 1.4-.4.8.3 3.2-.4 5.4-1.5 2.3-1.2 4.8-1.8 6.2-1.4 1.6.4 2.1.3 1.6-.5-.4-.8-.2-1 .7-.6.8.3 1.8.1 2.1-.5.4-.6 1.3-.8 2.1-.5.7.3 2.3.1 3.4-.6 1.2-.6 6.3-1.3 11.4-1.7 5-.3 9.3-.7 9.5-.8.2-.2 1.1-.1 2 .1.9.2 6 .6 11.2.9z" />
      <path d="M204.6 107.1c.3.5-2 .9-5.1.9-3.1 0-6.8.6-8.3 1.4-1.5.7-5.3 1.9-8.4 2.6-3.2.7-5.8 1.7-5.8 2.2 0 .5-.6.8-1.2.6-.7-.1-2.4.4-3.6 1.1-1.3.7-2.6 1-2.9.7-.3-.3-2.5.8-4.8 2.4-2.3 1.6-4.5 2.6-4.9 2.3-.3-.4-.6-.2-.6.3s-1.6 1.8-3.5 2.8c-1.9 1.1-3.5 2.3-3.5 2.8 0 .4-.7.8-1.5.8-.9 0-3 1.5-4.8 3.2-8.4 8.3-15.7 14.8-16.6 14.8-.6 0-.8.7-.5 1.5.4 1 0 1.5-1.2 1.5-.9 0-1.4.3-1.1.7.4.3-.6 1.8-2.1 3.3-1.5 1.5-2.8 3.3-3 4.1-.2.8-.8 1.5-1.3 1.7-.5.2-.9.8-.9 1.4 0 .5-1.3 2.8-2.9 5.1-1.5 2.3-2.6 4.8-2.4 5.4.3.7 0 1.3-.5 1.3-.6 0-1.5 1.3-2.1 3-.5 1.6-1.5 3-2 3-.6 0-1.1 1-1 2.2 0 3.6-3.3 14.8-4.2 14.2-.5-.3-.6.1-.3.9s-.1 3-.9 4.8c-1.5 3.7-2.1 39.9-.7 39.9.5 0 .6 1 .2 2.2-.3 1.4-.1 1.9.6 1.4.7-.4 1 .4 1 2.2-.1 3.5 1.9 9.7 3.6 11.1 1.7 1.4 6.8-3.5 9.7-9.5 1.2-2.4 2.6-4.1 3.1-3.8.4.3.8-.2.8-1.1 0-1.5 1.2-3.3 6-9.2.6-.7 1-1.7 1-2.2 0-.6.6-1.4 1.4-1.8.8-.4 2.4-2.7 3.6-5.1 1.2-2.3 2.6-4.2 3.1-4.2 1.5 0 1-5.7-.6-7-1.7-1.4-2.1-4.5-.5-3.5.7.4.7-.3 0-1.9-1.1-3 .5-7.6 2.7-7.6.8 0 1.2-.4.9-.9-.6-1 4.9-6.1 6.5-6.1.6 0 .8-.4.4-1-.5-.8 1.6-3.3 15.3-17.8 2.4-2.5 4.8-5.4 5.3-6.4.6-1 1.4-1.6 1.9-1.3.5.3 1.1-.3 1.5-1.4.3-1 3.3-4.6 6.6-8 4.8-4.8 6.4-5.9 7.5-5 1.1.9.9 1.6-.8 4-1.2 1.6-2.8 2.9-3.5 2.9-.7 0-1.3.7-1.3 1.6 0 .8-.4 1.2-1 .9-.6-.4-.7.1-.3 1.1.4 1.1.2 1.5-.4 1.1-.5-.3-1.6.4-2.3 1.7-.7 1.4-2.1 2.7-3.2 2.9-1 .3-1.7.9-1.6 1.4.4 1.3-16.4 18.3-17.4 17.7-.4-.3-.8 0-.8.5 0 2.3-1.9 5.2-3 4.6-.3-.2-.6.5-.6 1.6 0 2.2 2.9-.4 17-15.1 4.4-4.7 11.7-12.2 16-16.7 6.3-6.6 7.7-8.5 6.7-9.6-.9-1.2.7-3.1 8.5-10.3 5.3-4.9 10.2-9.2 10.9-9.7 2.7-1.5 2.6 1.6-.1 9-2.9 7.5-3.2 7.9-12.1 13.9-1.2.8-1.3 1.5-.5 3.1 1.1 1.9 0 3-11.6 11.9-12.6 9.8-15.4 12-17.6 13.9-.6.6-3.1 2.6-5.6 4.5-2.5 1.9-6.1 5-8 6.9-3.1 3-3.2 3.2-.7 1.7 1.5-.9 3.3-1.4 3.9-1 .7.4.8.3.4-.4s-.3-1.2.2-1.2 2.2-1.3 3.8-3c1.6-1.6 3.7-3 4.6-3 1 0 1.5-.6 1.3-1.3-.3-.7.9-1.8 2.7-2.6 1.8-.8 4.7-3 6.5-5 1.8-1.9 3.5-3.2 3.9-2.8.4.4 1.3-.2 2.1-1.3s1.8-2 2.3-2c.5 0 1.9-1 3.2-2.3 1.3-1.2 4.2-3.8 6.5-5.7 2.5-2.1 4.3-4.5 4.5-6 .4-3.2 1.7-5.2 2.9-4.5.5.4 1.2-.1 1.5-.9.3-.9 1.2-1.6 2-1.6s3.3-4 5.6-8.9c3.2-6.8 4.4-8.6 5.4-7.7.6.6 1 1.4.7 1.9-.2.4 1.2 1.4 3.3 2.3 3 1.2 3.4 1.8 2.3 2.6s-1.1.9.2.5c3.8-1.2 7.1 4.5 8.5 14.8 0 .5.4 1.8.9 2.8.4 1 .2 2.4-.6 3.4-1 1.2-1 1.5-.1.9.6-.4 1.2-.2 1.2.3 0 .6-.4 1.1-.9 1.1s-.7.9-.4 2c.3 1.1 1 2 1.5 2s.5.6 0 1.7c-.7 1.2-.4 2.1 1.1 3.3 1.1.9 2.1 2.3 2.3 3.1.4 2.5 2.5 14.3 3.4 18.9.5 2.5 1.2 6 1.5 7.7.8 3.9 3.3 4.4 7.2 1.3 5.6-4.3 13.7-1.1 17.9 7 1.3 2.5 4.9 12.8 8 23 3.8 12.4 6.8 20.2 9.1 23.7 3.2 5 6.3 6.9 6.3 4 0-2.2-3.2-10.9-3.8-10.3-.3.3-1.2 0-2.1-.6-1.3-1-1.4-1-.3.2 1.3 1.5 1.7 5.9.5 4.6-.5-.4-.8-1.1-.9-1.4 0-.4-.6-2-1.3-3.6-1.3-3.3-.8-5.6 1.2-5.6.8 0 2.2-1 3.1-2.3.9-1.2 1.4-1.7 1.1-1-.4.9.1 1 2.5.2 1.6-.6 3.3-1.5 3.6-2 .3-.5 1.6-.9 3-.9 1.3 0 2.4-.4 2.4-1 0-.5 1.2-1.3 2.8-1.6 1.5-.4 3.3-1.1 4-1.7.8-.7 1.2-.5 1.2.7 0 .9.3 1.6.8 1.6.4 0 .6 2 .4 4.4-.4 5 2.3 11.5 4 9.8.8-.8.6-2.3-.5-5-.9-2.2-1.4-4.8-1.1-5.9.3-1-1.3-6.1-3.6-11.4-2.3-5.2-5.5-13.2-7.1-17.9-3.7-11.2-6.3-13.6-15.6-14.6-4.1-.4-10.6-.2-16.3.5-13.5 1.8-13.4 1.8-13.8 0-.2-1.2.7-1.8 3.3-2.3 2.9-.6 3.5-1.1 3-2.4-.8-1.8-12-36.2-15.6-47.7-2.2-7-2.2-7-10-12-4.3-2.7-7.5-5.3-7.3-5.7.3-.4-.3-.8-1.3-.8-1.1 0-2.4-.5-3.1-1.2-.8-.8-2-.5-4.6 1.5-4 3.1-6.3 3.4-6.8 1-.3-1.5-2.1-1.7-19.5-1.4l-19.3.3.6-3c.4-1.7.1-3.2-.5-3.6-.7-.5-1.1.5-1.1 2.8v3.6h-7.1c-4.5 0-6.8.4-6.4 1 .4.6 3.3.8 7.1.6l6.4-.5v14.2c0 9.8.3 13.7 1 12.7.6-.8 1-7 .9-13.8l-.1-12.2 15.8-.1h16.5c.3.1-3.7 4.4-9 9.6-8.7 8.5-9.7 9.3-10.9 7.7-.9-1.2-1.5-1.3-2-.5-.4.6-4.3 5.1-8.8 10-4.4 4.8-13.4 14.6-19.9 21.8-6.5 7.1-14 15.4-16.7 18.3-4.9 5.4-5.4 6.6-3.9 9.1.6.9-2.2 5.5-9.7 15.5-5.8 7.7-10.9 14.3-11.2 14.6-.4.3-1.9 2.3-3.3 4.5-2.1 3.1-2.7 3.5-2.8 2-.1-1.1-.4-3.8-.7-6-1.1-8.1-.4-29 1.2-36.5 6-27.9 20.6-51 43.6-69.1 17.6-13.9 45.9-23.3 68.5-22.8 10.2.2 24.8 2.2 31.6 4.3 5.9 1.8 19.7 7.5 22.9 9.5 32.3 19.6 51.1 45.5 57.6 79.4 1.6 8.4 2.3 29 1.1 36.2-1.9 12.2-4.9 22.1-10.1 33.7l-2.5 5.7-5.6-.6c-5.2-.5-5.9-.3-10.8 3-3.6 2.4-7.3 3.9-11.7 4.7-7.6 1.4-11.9 4-18.5 10.9-2.8 2.9-5.7 5.1-6.9 5.1-2.5 0-11.7-4.6-14.5-7.1-1.1-1.1-2.5-1.9-3.2-1.9-.6 0-2.8-.9-4.8-2-3.4-2-4.9-3.9-9.2-12.1-3.4-6.4-6.1-8.1-16.1-10-5.1-1-13.6-2.1-18.9-2.5-8.8-.6-9.7-.5-11 1.3-2.3 3.2-4.1 3.8-13.5 4.3l-9.1.6-7 7.2c-4.3 4.4-8.8 8-11.7 9.3-4.7 2-4.9 2-11.1.4-3.5-1-7.4-1.6-8.8-1.3-1.8.4-2.8-.3-4.5-2.7-1.7-2.8-1.9-3.5-.8-5.1.8-1.1 7.3-13.8 14.6-28.4l13.3-26.5 31.9-31.4c31.1-30.7 42.8-43.2 31-33.1-2.9 2.5-7.7 6.8-10.7 9.7-2.9 2.8-5.6 4.9-5.9 4.5-.3-.3-.6 0-.6.6 0 1.7-8.3 9.8-9.5 9.4-.5-.2-.7-.1-.3.3.7.7-17.9 19.5-19.3 19.5-.5 0-.9.7-.9 1.5s-.4 1.5-.9 1.5c-.4 0-4.7 3.8-9.4 8.5s-8.3 8.5-8 8.5c.3 0-.2 1.1-1.1 2.5-.9 1.4-1.3 2.5-.9 2.5.3 0-.3 1-1.5 2.2-1.1 1.3-2.1 2.7-2 3.1.1 1.3-3.6 7.7-4.4 7.7-.4 0-.5.6-.2 1.3.3.8-.2 2-1.1 2.7-.8.7-1.5 1.8-1.5 2.5 0 1.2-13.5 28.1-15 30-1.1 1.3-.9 5.6.2 4.9.4-.3.8.4.8 1.6 0 1.2 1 2.5 2.5 3.2 1.3.6 2.2 1.5 1.8 2-.3.6.4.5 1.7-.2 1.2-.6 2.9-.9 3.8-.5 3.6 1.4 6.9 1.9 12 1.8 6.8-.1 8.2-.4 7.6-1.5-.3-.5.8-1.4 2.5-2.1 1.7-.6 3.1-1.7 3.1-2.4s.4-1.3 1-1.3c1.1 0 8.6-7.2 9.1-8.9.3-.8 3.3-1.4 8.4-1.6 9.9-.6 12.6-1.2 14-3.2.7-.9 2.1-1.8 3.1-2 3.4-.7 12.8-.2 17.2.9 2.3.6 4.5.8 4.8.6.2-.3 3 .1 6.1.8 3.2.7 5.9 1.1 6.1.9.8-.7 7.2 6.9 7.8 9.2.3 1.3 1 2.3 1.6 2.3.5 0 .7.4.4.8-.3.5.6 2.1 2 3.7 2.8 3.3 2.9 3.5 1 3.5-.8 0-2.8-1.2-4.3-2.6-1.5-1.4-2.3-2.3-1.7-2 1.8.9.5-4-1.7-6.3-1-1.1-1.9-2.6-1.9-3.2 0-.7-.3-.9-.7-.6-.3.4-1.2-.1-1.9-1-.9-1.3-3.4-2-9.1-2.5-4.3-.4-10.8-1-14.5-1.4l-6.8-.7v4.2c0 2.2.5 4.1 1 4.1.6 0 1 .5 1 1 0 .6 1.2 2.2 2.6 3.5 1.5 1.4 2.3 2.5 1.8 2.5-.5 0-.2.6.6 1.3 2.3 1.8 2.4 10.5.2 13-.9 1.1-1.1 1.7-.4 1.3.6-.4.3.8-.7 2.6-2.7 4.6-3.3 8.5-1.5 10.3.9.8 1.3 1.8 1.1 2.2-.6.9.9 1.1 10.3 1.3 3.6.1 8.2.6 10.3 1 2.6.5 3.7.4 3.7-.4 0-.7.3-.8.8 0 1 1.5 10 1.8 11.8.4 1.6-1.4 1.9-6 .3-6-.5 0-.8-.4-.4-.9.3-.6-2.4-2.4-6-4.1-3.6-1.7-6.3-3.5-6-4.1.4-.5.1-.9-.5-.9s-.8-.5-.4-1.2c.5-.8 1.1-.6 2 .6.7 1 1.7 1.5 2.3 1.2.5-.4 1.2-.2 1.6.4.3.5 1.5 1 2.6 1 1 0 1.9.5 1.9 1 0 .6.3.9.8.9 2.1-.4 4.2.2 3.8 1-.4.5.2.7 1.2.4 1.2-.3 2.2.4 3 2.1.6 1.4 1.6 2.6 2.2 2.6.5 0 .9.5.8 1.2-.3 1.2 6.1 3.6 10 3.7 2.3.1 5.4-2.7 5.8-5.4.1-.8-.2-1.5-.8-1.5-.6 0-1.8-.8-2.7-1.8-.9-.9-2.3-1.7-3.1-1.7-.8 0-1.5-.7-1.5-1.5-.1-.8-.6-1.4-1.3-1.2-.7.1-1.2-.5-1.2-1.3 0-.9-.7-1.8-1.5-2.1-.9-.4-1.3-1.3-1-2.3.4-1.2-.4-2.2-2.7-3.4l-3.3-1.6 2.9.2c1.5.1 3.1.7 3.3 1.4.3.7 1.1 1.3 1.8 1.3s1.9.7 2.6 1.6c1.1 1.3 3.8 2.8 6.9 3.9.3.1 1.2.5 2.2.9 2.3 1 6.4-1.4 12.4-7.3 2.9-2.7 5.4-4.7 5.8-4.4.3.4.6-.2.6-1.2s.3-1.5.7-1.2c.3.4 1.2.2 2-.4.8-.7 1.3-.8 1.3-.1 0 .5-1.2 1.7-2.6 2.7-4.3 2.8-6.6 5.6-6 7.2.5 1.2 1.6.5 4.9-3.1 4-4.2 4.7-4.6 9.1-4.6 3.6 0 6.3-.8 10.1-3 3.4-2 6.8-3 9.8-3.1 2.6-.1 4.7-.6 4.7-1.1 0-.5-.4-.6-1-.3-.5.3-1 .1-1-.5 0-.8-.9-1-2.6-.6-7.4 1.9-8.5 1.9-7.8.2.3-.9 1.4-1.6 2.4-1.6 1.1 0 2.2-.5 2.5-1 .8-1.3 4.2-1.3 4.7 0 .5 1.6 7.8-.9 8.4-2.8 1.2-3.6 2.7-6.1 3.5-5.6.4.2.8-.4.7-1.3 0-2.3 3.7-11.5 4.4-10.8.3.3.5-.7.5-2.2-.1-3.1.5-5.5 2.7-12.7.8-2.7 1.3-6.3 1.1-8.2-.3-1.8-.1-3.5.3-3.8.9-.5.7-11.9-.2-14.1-.2-.6 0-1.8.4-2.5.5-.8.6-1.8.3-2.4-.3-.5-.7-2.5-.9-4.5-.4-4.5-3.3-18.1-4.3-20.1-.4-.8-1.4-3.6-2.2-6.3-.7-2.6-1.7-4.7-2.2-4.7-.5 0-.7-.6-.4-1.4.3-.8 0-1.6-.7-1.9-.7-.3-1.8-2.4-2.6-4.7-.8-2.4-1.9-4.8-2.5-5.4-.6-.6-2.3-3.1-3.7-5.6-3.4-5.6-6.3-9.4-10.5-13.5-1.8-1.7-3.3-3.7-3.3-4.3 0-.7-.5-1.2-1.1-1.2-.5 0-3-1.9-5.5-4.2-2.5-2.3-5.6-5-7-5.8-1.3-.9-2.2-2-1.9-2.3.3-.4.2-.5-.1-.2-1.1.7-6.5-2.5-5.9-3.5.4-.6-.1-.7-1.1-.3-1.1.4-1.5.3-1.1-.4.4-.6-.6-1.6-2.3-2.2-1.7-.5-4.4-1.9-5.9-3-1.6-1.1-3.1-1.8-3.4-1.5-.3.3-2.5-.3-4.9-1.4-2.3-1.1-6.1-2.5-8.3-3.2-2.2-.7-5.3-1.8-7-2.5-3.1-1.4-13.1-2.8-17.5-2.5-1.4.1-2.9.1-3.5 0-4.7-.7-20.4-.6-19.9.1zm17.5 24.6c1.6 1 2.9 2.1 2.9 2.5 0 .4 1.5 1.4 3.3 2.1 3.1 1.4 11.8 8.7 10.2 8.7-.4 0-.2.7.5 1.5.6.8.9 1.9.6 2.4-.4.5-.2 1.2.3 1.5.7.5 2.1 5.4 2.5 8.8.1.3.4 1 .9 1.4.4.4.7 1.4.7 2.3 0 .9.7 2.9 1.5 4.5.8 1.5 1.5 3.7 1.5 4.7s.4 2 .9 2.3c.8.5 3.4 8.5 3.6 11.1 0 .5.4 1.6.8 2.2.5.7.5 1.7.2 2.3-.3.5-.2 1 .3 1s1.2.9 1.5 2c.3 1.2 0 2-.7 2-1.7 0-4.2 3.2-5 6.5-.8 3.1-2.3 2.4-3-1.5-.2-1.4-.6-2.7-.7-3-.1-.3-.3-1-.4-1.5-1.2-7.5-1.9-10.2-2.9-11.4-.8-1.1-.8-1.3.2-.7 1.5.9 1.5.7-.3-4.4-.8-2.3-1.5-5.9-1.5-7.8 0-3.1-.7-6.1-2.8-12.2-.3-.8-.4-1.9-.3-2.4.3-1.4-3.1-11.8-4.6-14.3-.8-1.2-3-2.9-4.9-3.8-1.9-.9-3.4-1.9-3.4-2.3 0-.4-1.4-1.5-3-2.4-1.7-.9-3-2.2-3-2.8 0-1.4.7-1.3 4.1.7zm2.1 7.1 7.3 5.4 3.3 14.6c1.8 8.1 4.6 21.9 6.2 30.7 2.5 13.7 2.7 16.2 1.5 17.4-1.2 1.2-1.4.8-2-2.5-2.1-13-2.8-17.2-3.6-19.8-.5-1.6-.9-4.4-.9-6.2 0-2.7-.4-3.4-2-3.4-1.1 0-2-.7-2-1.5s.7-1.5 1.6-1.5c1.9 0 1.3-2.5-.7-2.6-3.1-.2-3.3-.5-1.5-1.9 1.8-1.3 1.8-1.7-.5-11.2-2.4-10.5-3.5-12.1-12.8-18.6-4.1-2.8-5.4-5.1-2.6-4.5.8.2 4.7 2.7 8.7 5.6zm47.1 63.4c5.6 2.9 12.5 17 9.4 19-2.2 1.4-3.7.8-3.7-1.5 0-3.5-4.9-12.6-8.1-14.9-2.1-1.6-2.6-2.4-1.7-3 1.7-1 1.6-1 4.1.4zm8.1-.1c3.1 1.4 7 6.9 9 12.6 1.3 3.7 1.3 4.2-.1 4.7-2.6 1-2.9.7-4.7-5-1.2-3.8-3-6.8-5.8-9.5-4.1-4-3.5-5.1 1.6-2.8zm8.2.8c3.4 2.1 9.1 12.2 7.9 14-1.4 2.3-3.1.9-4.3-3.5-.8-2.8-2.6-6-4.7-8.1-4.9-4.9-4.5-5.8 1.1-2.4zm-21.9 1.5c5.3 4.4 10.2 17.8 7.2 19.6-1.8 1.2-2.9.3-2.9-2.3 0-3.9-4.7-12.4-8.4-15.3-2-1.6-3.6-3.2-3.6-3.7 0-1.6 5-.5 7.7 1.7zm-142.2 29.4c-6.7 9.7-12.7 18.7-13.4 20-1.6 2.9-2.7 2.1-3.4-2.4-.5-3.2-.1-4.2 3.5-8.4 2.4-2.8 4.7-4.6 5.5-4.3.9.3 1.1 0 .7-1-.3-1 2.6-5.4 8-12.2 4.7-5.9 8.6-11.2 8.6-11.8 0-.7.7-.4 1.4.6 1.3 1.6.1 3.7-10.9 19.5zm169.8-14.1c.9 1.4-1.9 3.2-3.4 2.2-1.1-.7-1-.9.4-.9 1 0 1.5-.5 1.2-1-.3-.6-.2-1 .4-1 .5 0 1.2.3 1.4.7zm-7.8 3.4c-.4.5-1.6.9-2.8.9-2.1-.1-2.1-.1-.3-1.5 2-1.5 4.1-1.1 3.1.6zm14.1 5.4c2.9 7.1 3 8.5.7 8.5-1.3 0-2.6-2-4.4-7-1.5-3.8-2.4-7.2-2.1-7.5 1.6-1.5 3.5.6 5.8 6zM280 225c0 .5-.9 1.1-2 1.5-2.3.7-4.8-.4-3.1-1.4 1.6-1 5.1-1.1 5.1-.1zm13.6 6.7c2.6 7.2 2.6 8.5-.2 8.4-.5 0-7.4-14.8-7.4-15.8 0-.2 1.1-.3 2.4-.3 2.1 0 2.8 1 5.2 7.7zm-9.2-3.1c.4 1.4 1.8 4.9 3.1 7.6 2.6 5.4 2.5 6.8-.4 6.8-1.3 0-2.4-1.5-3.6-4.8-1-2.6-2.4-5.7-3.2-7-1.1-1.8-1.2-2.6-.2-3.8 1.8-2.2 3.6-1.7 4.3 1.2zm-6.5 4.5c1 3.4 1 4.3-.1 5.1-1 .6-.8.8.6.6 2.8-.4 4.4 4.8 2.2 7-.8.9-1.7 1.4-1.9 1.1-.3-.2-1.6-3.6-3-7.4-1.3-3.9-2.8-7.8-3.2-8.8-.6-1.3-.2-1.7 1.7-1.7 2 0 2.7.8 3.7 4.1zM204.5 274c3.8 1.1 9.5 2 12.6 2 6.7 0 8.8 1.8 11.4 9.8 1.6 5.1 1.9 5.3 9 8.6 5.4 2.5 7.8 4.2 8.9 6.4 2.1 4.2 7.3 9.1 11.5 10.9 4.2 1.8 2.7 3.3-3.4 3.3-4.4-.1-6-1-9.2-5.6-1.7-2.4-4.2-3.8-11.2-6.3-4.9-1.8-9.5-3.9-10.1-4.6-1.8-2.1-3-.9-3 2.9 0 4.5 2 6.8 7.6 8.6 3.6 1.1 5.3 2.4 6.8 4.9l2 3.4-5-.7c-2.7-.4-10.7-1.1-17.8-1.5-16.5-.9-16.9-1.2-12-11.5 3.3-6.9 3.4-7.4 2.3-13.1-.7-4.3-1.9-6.9-3.9-9-4.7-4.9-6.9-10.5-4.2-10.5.4 0 3.9.9 7.7 2zm93.5 12.5c-.7.9-1.5 1.3-1.7 1.1-.7-.7.7-2.6 1.9-2.6.6 0 .6.6-.2 1.5zm-4 1.5c0 .5-.9 1-2.1 1-1.1 0-1.7-.5-1.4-1 .3-.6 1.3-1 2.1-1s1.4.4 1.4 1z" />
      <path d="M223 285.5v6l-6.4-.3c-3.6-.2-7.3.1-8.3.7-1.4.8.2 1 6.3 1.1 7.6 0 8.2.2 8.9 2.2l.8 2.3.4-2.2c.3-1.4 1.3-2.3 3.1-2.6l2.7-.4-2.7-.2c-2.6-.1-2.8-.4-2.8-4.9 0-2.6-.5-5.4-1-6.2-.7-1.1-1 .3-1 4.5zM223 312.5c0 1.4.5 2.5 1 2.5.6 0 1-1.1 1-2.5s-.4-2.5-1-2.5c-.5 0-1 1.1-1 2.5zM223 118.9c0 4.4.5 8.3 1 8.6.6.4 1-2.5 1-7.9 0-5.1-.4-8.6-1-8.6s-1 3.3-1 7.9zM228.5 130.1c1.7.5 13.2.9 25.8.8H277l.3 26 .2 26.1h-11.3c-7.7 0-11.1.3-10.7 1.1.4.6 4.8.9 11.3.8l10.7-.2-.3 5.4c-.1 3 .2 6.1.8 6.9.7 1.1 1-.4 1-5.3V185h21.5c13.7 0 21.5-.4 21.5-1s-7.8-1-21.5-1H279v-54l-26.7.1c-18 0-25.8.4-23.8 1zM212.4 163.6l-3.8 4.6 7.5 15.1c4 8.4 7.8 15.9 8.4 16.7.6.8 2.4 4.3 4 7.8 2.9 6.2 3 6.3 6.2 5.7 3.6-.6 4.1 0 1.9 2.4-1.8 2.1-6.7 15.7-6.2 17.3.3.7.7 2.5 1 4 .8 3.5 6.1 7.4 8 5.8 2.3-1.8 11.4-.1 18.7 3.6 6.1 3 6.5 3.5 6.2 6.1-.4 2.5 0 3.1 3.2 4.6 3.8 1.8 8 1.4 7.2-.6-1.2-3.3-8.8-27.1-10.6-33.2-2.4-8.2-6.2-14.2-9.8-15.6-3.2-1.2-9-.2-7.5 1.3s.3 3.8-2 3.8c-1.4 0-1.8.5-1.4 1.6.3.9.6 1.8.6 2.1 0 .2 1.4-.7 3.1-2.1 3.6-3.1 6-3.3 8.3-.7 1.8 2 5 12.2 4.8 15.6-.1 1.5.1 1.6.7.6.5-.7 1.4-1 2-.7.6.4.9 1.1.6 1.6-.3.5-.1 1.1.5 1.5.5.3 1 1.9 1 3.5s.5 3.2 1 3.5c.6.3 1 1.4 1 2.3 0 .9.6 2.9 1.4 4.4.8 1.5 1.7 4.1 2.1 5.8.6 2.7.4 3.1-1.1 2.8-.9-.1-2.2-1.7-2.7-3.3-1.4-4.1-5.3-7.4-10.2-8.5-.5-.1-1.7-.6-2.5-1-.9-.5-3.6-1.1-6-1.5-2.5-.3-5.8-.8-7.4-1.1-1.9-.4-2.6-.3-2.2.5.8 1.2-.4 1.4-2 .3-3.1-2.2-4.2-14.2-1.2-14.2.5 0 .6-.5.3-1.1-.4-.5.1-1.9 1-2.9 3.7-4.1 2.7-11-1.7-11-1 0-2.2-.8-2.5-1.8-.4-.9-.9-1.9-1.2-2.2-1.2-1-3.4-6.5-3.2-8 .1-1.2 0-1.2-.7-.2s-1.2.5-2.2-2c-2.8-7.4-3.5-8.8-4.3-8.8-.5 0-.5-.9-.2-2s.2-2-.3-2-1.7-1.5-2.6-3.3c-.9-1.7-2-3.9-2.5-4.7-2.9-5.3-3-5.8-1.9-9.4.8-2.6 1.4-3.3 2.1-2.4.6 1 .7.9.4-.2-.2-.8 0-2.3.5-3.3 1.5-3 .1-1.9-3.8 2.9zM114.9 179.8c-.8 7.4.6 49.9 1.4 45.2.4-2.5.6-12.5.5-22.4l-.2-17.8 13.5.1c7.4.1 14.1-.3 14.9-.9 1-.7-3.3-1-13.8-1h-15.3l.5-3c.2-1.6.1-3.2-.4-3.5-.4-.3-1 1.2-1.1 3.3z" />
      <path d="M193 184c0 .6 4.4 1 11.1 1 7.1 0 10.8-.4 10.4-1-.3-.6-5.2-1-11.1-1-6.3 0-10.4.4-10.4 1zM223 219.9c.1 9.4-.1 17.1-.4 17.1h-52.1l.2-15.5c.1-9.1-.2-15.5-.8-15.5-.5 0-.9 6.6-.9 15.5V237h-11.9c-7.4 0-12.2.4-12.6 1.1-.5.7 3.2.9 11.9.7l12.6-.3v15.3c0 10.6.3 15.1 1.1 14.7.7-.5 1-5.7.8-14.8-.1-7.8.1-14.3.5-14.5.3-.1 12.2-.2 26.4-.2h25.7l-.3 13.6c-.2 8.7.1 14.1.7 14.7.8.8 1.1-3.3 1.1-13.6V239h2.5c1.4 0 2.5-.5 2.5-1 0-.6-1.1-1-2.5-1H225v-16.4c0-10.4-.4-16.7-1-17.1-.8-.5-1 4.8-1 16.4zM247.8 216.1c-2.8 1.6-2.1 2.9 1.2 2.2 2-.4 3-.2 3 .7 0 .7 1.1 2.5 2.5 4.2 1.4 1.6 2.5 3.7 2.5 4.5 0 .9.3 1.4.6 1.1.9-1-1.5-8.4-3.7-11.2-2.2-2.8-3.4-3.1-6.1-1.5zM243 220c0 .5.5 1 1 1 .6 0 1-.5 1-1 0-.6-.4-1-1-1-.5 0-1 .4-1 1zM95.2 228c0 1.9.2 2.7.5 1.7.2-.9.2-2.5 0-3.5-.3-.9-.5-.1-.5 1.8zM308.5 238c.3.6 5 1 10.6 1 5.9 0 9.9-.4 9.9-1s-4.2-1-10.6-1c-6.7 0-10.3.4-9.9 1zM302 249.4c0 1.5-.3 1.6-1.5.6-1.9-1.6-1.9-.1.1 3.8 2.1 4.4 4.6 4.3 3.7-.1-.8-4.2-2.2-7-2.3-4.3zM292.3 252.4c.8.8 2 2.8 2.7 4.5 2 4.8 4.2 4.1 3.4-1.2-.8-5.1-1-5.3-2.8-3.8-1 .8-1.6.9-2.1.1-.3-.5-1.1-1-1.6-1-.6 0-.4.6.4 1.4zM287.6 257.2c3.2 6.4 3 6.2 4.8 5.5 2.5-1-.1-7.4-3.7-9.2-1.7-.8-3.2-1.5-3.4-1.5-.2 0 .9 2.4 2.3 5.2zM277.6 262.6c-.9 2.3-.6 20.6.4 22.9.5 1.3.9-2.9.9-11.3.1-7.2-.1-13.2-.3-13.2-.2 0-.7.7-1 1.6zM306.8 294.2c-5.5 7.1-6.3 7.9-6.7 5.7-.1-1.3-.8-2.7-1.5-3.1-2.3-1.5-7.3-.7-10.6 1.7-1.9 1.4-4.8 2.5-6.4 2.5-4.7 0-6.4 1.6-2.6 2.4 3.4.6 13.4-2.9 12.5-4.5-1.1-1.7 4.7-.1 6.9 2l2.5 2.3 4-3.3c2.3-1.8 4.1-3.6 4.1-4.1 0-.4 1.4-2.2 3-4 2.9-3 3.9-5.8 2.1-5.8-.6 0-3.8 3.7-7.3 8.2zM159.4 290.5c-.4.8-1.5 1.5-2.5 1.5s-1.9.4-1.9 1c0 1.8-7.4 4.7-11 4.3-1.9-.3-4.5-.5-5.7-.6-1.1-.1-1.9-.6-1.6-1.1.4-.5-.6-.6-2.3-.2-3.8 1-5.6 3.7-3.4 5.1.6.4.7 1.1.4 1.7-.4.6-.2.8.4.4.6-.3 1.3.3 1.7 1.4.4 1.1 1.9 2.7 3.5 3.5 1.5.8 3 1.8 3.2 2.2.4 1.1 6.5 5.3 7.5 5.3.4 0 .1-.5-.7-1.1-1.1-.8-.6-.9 2.1-.5 2.6.5 4 .2 4.9-1 .8-.8 3.5-2.6 6.1-3.9 2.5-1.3 4.9-3.1 5.3-4 .8-2.1.8-10.8 0-12.9-1.2-3.1-2.1-.6-1.6 4.4.5 5.6-1.5 10-4.6 10-1 0-2.9 1.1-4.2 2.5-1.8 1.9-3.4 2.5-6.4 2.5-3.7 0-4.8-.7-10.9-6.4-3.7-3.6-6.4-6.7-6-6.9.5-.3 2.6.1 4.8.9 4.6 1.6 11.3 1.8 14.7.5 3.7-1.4 12.7-10 10.5-10.1-1 0-2 .7-2.3 1.5zM250.6 292.1c.8 1.3 21.4 1.1 21.4-.1 0-.7-3.9-1-11-.9-6.1.1-10.7.5-10.4 1z" />
      <path d="M297.5 292c-2.5.6-2 .8 2.8.9 3.7.1 5.6-.3 5.2-.9-.7-1.1-3.6-1.1-8 0zM115 120.4v8.6l-5.7.1c-3.2.1-6.1.1-6.5 0-.5 0-.8.3-.8.9 0 .5 2.9.8 6.5.7l6.5-.2v5.9c0 7.2 1.1 6.9 1.3-.4l.2-5.2 4.8-.3c6.8-.4 7.1-1.5.5-1.5h-5.5l.5-7.9c.3-5.2.1-8.1-.7-8.5-.8-.5-1.1 1.8-1.1 7.8zM344.3 115.3c-.4.7-3.8 3.7-7.5 6.7l-6.7 5.3 4.1 4.8c2.3 2.7 4.5 4.9 4.9 4.9 2 0 1.9-2.4-.4-5.3l-2.4-3.1 6.6-5c3.6-2.7 6.8-5.1 7-5.3.6-.4-3-4.3-4-4.3-.4 0-1.2.6-1.6 1.3z" />
      <path d="M84.8 118.5c-2.3 3-2.3 4.2 0 5.4 1 .5 3.8 4.1 6.3 8 2.4 3.9 4.6 7 4.9 7.1.3 0 1.1-.9 1.8-2.1 1-1.5 1-2.4.2-3.4-1.7-2 2.8-7.9 4.7-6.3 1.1.9 1.9.7 3.5-1 1.7-1.7 1.9-2.2.7-2.6-.8-.3-5.6-2.1-10.7-4.1-5.2-1.9-9.4-3.5-9.5-3.5-.1 0-1 1.1-1.9 2.5zm5.2 2.4c0 .5 1.5 1.4 3.3 2.2 4.2 1.6 4 1.4 2.7 3.9-1.2 2.2-1.2 2.1-3.6-1.4-1.4-2-3.2-3.6-4-3.6-.8 0-1.2-.5-.9-1 .8-1.2 2.5-1.3 2.5-.1zM310.5 129.9c3 1.2 18.2 1.3 19 .1.4-.7-3.1-1-10.2-.9-6.6 0-10 .3-8.8.8zM340.5 130c.8 1.3 12.5 1.3 14.5 0 1-.7-1.1-1-6.8-1-5.3 0-8.1.4-7.7 1zM356.7 130.9c-1.7.6-1.7.8-.3 2 .9.7 1.6 1.7 1.6 2.1 0 .5-3.4 2.8-7.5 5.2-4.1 2.3-7.5 4.5-7.5 4.8.1.3.7 1.3 1.5 2.3 1.3 1.8 1.7 1.6 8.6-2.8 5.5-3.6 7.4-4.3 8-3.3.5.7.9 1.6.9 2 0 .8 5 1.1 5 .4 0-.5-8.1-13.6-8.4-13.5 0 0-.9.4-1.9.8zM331.8 133.7c-.2.5-.1 6.9.2 14.3l.6 13.5.2-14.3c.2-12.8 0-15.8-1-13.5zM73.7 137.1c-1 .6-2.9 2.8-4.3 5-2 3.2-2.3 4.3-1.3 5.5.6.8 1.6 1.4 2.2 1.4.5 0 4.1 1.8 7.9 4 3.9 2.2 7.1 4 7.2 4 .1 0 1.3-2.2 2.6-5 1.9-4 2.1-5.6 1.4-8.2-1.7-5.9-10.5-9.7-15.7-6.7zm9.7 6.4c2.7 2.5 3.1 4.1 1.7 6.3-.7 1.2-4.2-.4-12-5.5-.2-.1-.1-.9.2-1.8 1-2.4 7-1.9 10.1 1zM368.5 153.3c-1.1.8-5.3 2.7-9.2 4.2-4 1.5-7.3 2.9-7.3 3 0 1.1 3.5 8.4 4.7 9.7 2.6 2.9 6.9 3.2 11.7.8 5.7-2.7 7.4-6.4 5.6-12.1-2.1-6.2-3.1-7.2-5.5-5.6zm2.1 9.5c-.6 1.8-6.5 5.2-9 5.2-1.3 0-5.3-3.8-4.5-4.3.2-.2 3.1-1.4 6.4-2.8 4.8-2.1 6.2-2.3 6.8-1.2.5.7.6 2.2.3 3.1zM60 162.1c-2.3 6.4-1.9 7.8 2 7.9.8 0 4.6 1.4 8.4 3 3.8 1.6 7 2.9 7.1 2.7.1-.1 1.2-2.9 2.4-6.1 1.7-4.7 1.9-6.1.9-6.7-2.1-1.4-2.4-1.1-3.7 3.1-1 3.5-1.4 3.8-3.4 3.1-1.2-.5-2-1.5-1.8-2.3.8-3 .5-4.2-1-4.6-1-.2-1.9.5-2.2 1.8-.5 2.1-2.3 2.5-4.5 1.1-1.2-.7-1.1-1.3.2-3.8 1.1-2.3 1.2-3.3.3-4.2-1.9-1.9-2.3-1.3-4.7 5zM61 178c-.3 3.6-.4 7.4-.1 8.4.4 1.9.5 1.9 1.1.2.5-1.6 2-1.8 15.2-1.7 9.3.1 14.9-.2 15.3-.9.4-.7-4.4-1-14.9-1H62.1l-.3-5.8-.3-5.7-.5 6.5zM375.6 187.8c-.3.3-.6 1.4-.6 2.4 0 2.2-1.3 2.3-3 .3-1.1-1.4-1.5-1.3-2.7.5-.8 1.2-1.3 2.2-1.2 2.4.2.1 1.7.7 3.3 1.4l2.8 1.3-2.6 2c-2.5 2-2.6 2.2-.9 3.5 2.4 1.8 3.1 1.7 3.8-.6.9-2.7 1.9-2.5 3.1.6.8 2.3 1.1 2.4 2.9 1.1 1.9-1.5 1.9-1.6.1-3.6-1.9-2.1-1.9-2.1.7-2.1 3 0 4-1.1 3.1-3.5-.5-1.2-1.4-1.5-3.2-1-2.2.5-2.4.4-1.8-1.8.4-1.9.1-2.6-1.4-3-1-.3-2.1-.2-2.4.1zm2.4 7.7c0 .8-.4 1.5-1 1.5-.5 0-1-.7-1-1.5s.5-1.5 1-1.5c.6 0 1 .7 1 1.5zM55 189.6c0 .3.5 1.4 1.1 2.6 1.4 2.6.8 3.1-2.4 1.9-2.2-.9-2.5-.7-3 1.5-.4 2.1-.1 2.4 2.5 2.4 2.8 0 2.8.1 1.3 2.4-1.5 2.3-1.5 2.5.5 3.6 1.8 1 2.2.9 2.7-.9.7-2.6 1.7-2.7 3.4-.1 1.3 1.8 1.6 1.8 3.4.4 2-1.6 2-1.6-.2-3.1-2.9-2-2.9-2.7.2-4.1 2.2-1 2.4-1.5 1.5-3.2-1-1.9-1.2-1.9-3.5-.4-2.4 1.6-2.5 1.6-2.5-1 0-2.1-.5-2.6-2.5-2.6-1.4 0-2.5.3-2.5.6zm4 7.9c-.7.9-1.5 1.3-1.8 1-.3-.2.1-1.1.8-2 .7-.9 1.5-1.3 1.8-1 .3.2-.1 1.1-.8 2zM386 211c0 8.4.3 15.1.6 14.7.8-.7.7-28.7-.1-29.5-.3-.3-.5 6.4-.5 14.8z" />
      <path d="M60.9 210.3c-.2 2.4-.1 5.7.2 7.3.4 1.9.7.3.8-4.4.1-7.9-.5-9.7-1-2.9zM57.8 221.7c-6 .3-6.8.6-6.8 2.3 0 1.5.7 2 2.5 2 1.9 0 2.5.5 2.5 2.1 0 3.9 1.9 5.9 5.4 5.9 4.3 0 5.7-1.8 5.9-7.7.2-5.4.8-5.1-9.5-4.6zm6.6 5.1c-.2 2.9-.5 3.2-2.8 3.2-2.2 0-4.1-2.3-3.2-3.9.7-1.1 6.1-.5 6 .7zM369.3 223.2c-2.2 2.7-2.5 5.9-.8 8.4 2.3 3.6 5.5 2.8 8-1.8 2.3-4.3 4.5-5 4.5-1.3 0 1.4-.4 2.5-1 2.5-.5 0-1 .9-1 2 0 2.4 1.3 2.6 3.4.4 2-1.9 2.1-8.8.2-10.4-2.5-2-6-.8-7.8 2.8-2 4.2-2.4 4.6-3.7 3.7-.8-.4-.8-1.2-.1-2.6 1.4-2.5-.1-5.7-1.7-3.7zM60.5 238c.4.6 1.1.8 1.6.5 1.4-.9 1.1-1.5-.7-1.5-.8 0-1.2.5-.9 1zM68 238c2 1.3 19 1.3 19 0 0-.6-4.1-1-10.2-1-7 0-9.8.3-8.8 1zM60.5 240.2c-2.7.5-5.9 1.1-7 1.4-1.9.3-2 .9-1.5 5.1.4 3.6 1 4.9 2.3 5.1 1.6.3 1.7-.1 1.1-3.2-.5-3.2-.4-3.6 1.5-3.6 1.4 0 2.1.6 2.1 2 0 1.1.7 2 1.5 2 .9 0 1.5-.9 1.5-2.5 0-1.8.5-2.5 2-2.5 1.6 0 2 .7 2 3 0 2 .5 3 1.5 3 .9 0 1.5-.9 1.5-2.4 0-4.2-1.2-8.6-2.4-8.5-.6.1-3.3.6-6.1 1.1zM367.6 242.1c-2.9 4.3-1.3 9.9 2.9 9.9 1.6 0 3-1.1 4.5-3.5 2.4-3.8 3.7-4.4 4.7-1.9.4 1-.1 2.2-1 2.9-2.1 1.5-2.2 4.5-.3 4.5 2.1 0 4.6-3.9 4.6-7.1 0-3.1-3.1-6.2-5.7-5.7-1 .2-2.7 1.8-3.8 3.5-2 3.3-4.5 4.4-4.5 2 0-.7.5-1.8 1.1-2.4.7-.7.8-1.7.1-2.8-.8-1.6-1.1-1.5-2.6.6zM61.2 253c0 1.4.2 1.9.5 1.2.2-.6.2-1.8 0-2.5-.3-.6-.5-.1-.5 1.3zM67 255.7c0 .5-2.9 1.5-6.5 2.2-3.6.7-6.5 1.6-6.5 2 .1 1.9 2 3.3 3.9 2.6 2.6-.8 2.7.2.1 3-1.2 1.3-1.7 2.8-1.4 4.3l.6 2.2 2-2.6c1.5-1.8 2.4-2.2 3.1-1.5 1.8 1.8 6.3 1.3 8.2-.9 1.5-1.7 1.7-2.8.9-6.8-.6-3.2-1.4-4.8-2.6-5-1-.2-1.8.1-1.8.5zm1.8 6.5c-.2 1.7-1 2.3-2.8 2.3-3 0-4-3.1-1.3-3.8 3.7-1 4.4-.7 4.1 1.5zM363.1 262.1c-1.3 5.1-.8 7.4 1.5 6.5.8-.3 4.1.3 7.3 1.3l5.9 1.8 1.4-5.3c1.5-5.1 1.4-5.4-.3-5.4-1.1 0-1.9.7-1.9 1.7s-.4 2.4-.9 3.2c-1.1 1.8-3.6.2-3.6-2.3 0-1.1-.6-2.1-1.2-2.4-.8-.2-1.3.5-1.3 1.7 0 1.5-.6 2.1-2.1 2.1-1.9 0-2-.4-1.5-3.4.5-2.4.2-3.5-.7-3.9-1-.4-1.8 1-2.6 4.4z" />
      <path d="M61.2 273c0 1.9.2 2.7.5 1.7.2-.9.2-2.5 0-3.5-.3-.9-.5-.1-.5 1.8zM70.1 274.9c-.7.5-1.6 2.9-1.8 5.5-.4 3-1 4.6-2 4.6-1.9 0-2.8-2.7-1.4-4.4.8-1 .8-1.6-.3-2.6-4-3.2-5.2 5.2-1.3 8.8 4.2 4 7.3 2.4 8.1-4.2.3-2.1.8-4.1 1.1-4.4.8-.8 2.5 2 1.8 3-.7 1.2 1.7 3.9 2.8 3.2 1.6-.9 1-5.1-1.2-7.8-2.1-2.7-3.5-3.1-5.8-1.7zM359.1 276.6c-4.6 5.8-.7 12.4 7.3 12.4 3.5 0 4.8-.5 6-2.2 1.9-2.7 2-5.8.3-8.2-1.2-1.6-1.4-1.6-2.6-.2-1.1 1.3-1.1 1.9 0 3.2 1.1 1.4 1 1.8-.6 3-2.2 1.6-5.2 1-7.9-1.7-1.9-1.7-1.9-1.9-.3-3.7 1.8-2 2.3-5.2.8-5.2-.5 0-1.9 1.2-3 2.6zM332.1 287.7c0 1.9-.8 3.6-1.8 4.2-1.7 1-1.7 1-.1 1.1 1.6 0 1.8 1.6 2.1 14.7l.3 14.8.2-14.8.2-14.7h7.9c4.6 0 8.3-.5 8.6-1.1.5-.7-1.9-1-7.7-.8l-8.3.2-.6-3.4-.6-3.4-.2 3.2zM79.5 290c-.4.6-3.3 2.4-6.6 4l-5.9 3 2.2 4.5c1.2 2.5 2.8 4.5 3.5 4.5 1.7 0 1.6-2.1-.2-4.7-1.4-2-1.4-2.3.6-3.3 1.7-1 2.1-.8 2.6 1 .8 2.9 2.9 1.9 2.5-1.2-.4-3.6 2.5-4.5 4-1.3.6 1.4 1.9 2.5 3 2.5 1.6 0 1.5-.5-1-5-2.8-5.1-3.6-5.8-4.7-4zM86 292c0 .6 4.2 1 10.8 1 7.3 0 10.2-.3 9.2-1-2-1.3-20-1.3-20 0zM351.2 294.3c-2.9 3.1-2.8 7.2.2 10.2 4.7 4.7 11.1 4.2 13.5-1.2 1.1-2.5.5-7.3-.9-7.3s-2.5 2.3-2.5 5c0 3.3-3.2 3.8-6.8 1-3-2.4-3.3-3.3-1.4-5.2.7-.7 1.6-2.1 2-3.1.9-2.5-1.5-2.2-4.1.6zM86.6 305.3c.3.8-1.4 3.8-3.7 6.7-3.3 4.2-4 5.7-3.2 6.9 1.3 1.9 1.8 1.9 10.8-.5 8.4-2.2 8.3-2.1 6.3-4-1.3-1.4-2.1-1.3-7.1.4-3.2 1-5.7 1.7-5.7 1.5 0-.3 1.6-2.3 3.5-4.6 3.9-4.6 4.2-7 .7-7.5-1.5-.2-2 .1-1.6 1.1zM115 318.3c0 9.2.4 13.7 1.1 13.7 1.2 0 .8-25.5-.4-26.7-.4-.3-.7 5.5-.7 13zM342.3 308.5c-.3.9-.4 1.7-.2 1.9.2.1 2.5 1.7 5.2 3.5 4.9 3.3 5.9 5.4 3.1 6.5-1 .4-3.6-.8-6.6-3-4-2.8-5.3-3.3-5.9-2.2-1.2 1.8-1.1 3.8.2 3.8.5 0 2.7 1.1 4.7 2.5 4.3 3 8.3 3.2 10.5.7 3.2-3.5 2.1-6.8-3.4-11.2-5.6-4.4-6.7-4.8-7.6-2.5zM95.4 325.8l-6.1 5.8 3.3 3.9c2.6 3.2 3.6 3.7 4.5 2.8 1-1 .8-1.8-.9-3.6-2.1-2.2-2.1-2.5-.6-3.8 1.4-1.1 1.7-1.1 2.5.4.5.9 1.6 1.4 2.5 1 1.3-.5 1.3-.8-.3-2.5-1.5-1.7-1.5-2.1-.3-2.8 2.1-1.4 2.7-1.2 4.2.9 1 1.4 1.8 1.7 2.8 1.1 1.2-.7.9-1.5-1.5-4.2-1.6-1.8-3.2-3.6-3.5-4-.3-.4-3.3 1.8-6.6 5zM329.6 325.1c-1.7 1.4-2.6 3-2.6 4.9 0 4.1 2.5 5.2 7.3 3.3 2.1-.9 4-1.3 4.4-1 1.1 1.2-.7 3.7-2.6 3.7-1.6 0-3.1 1.8-3.1 3.6 0 1.5 5.5 0 7.5-2.1 5.7-5.6.2-12.8-6.1-8-1 .8-2.5 1.5-3.1 1.5-1.9 0-1.5-3 .5-3.7 1.7-.7 3.2-2.2 3.2-3.6s-2.7-.7-5.4 1.4zM111.2 332.8c-.7.2-1.2.9-1.2 1.5s-2.1 3.3-4.7 6c-3.9 3.9-4.5 4.9-3.3 5.7 2.1 1.4 3 1.2 3.6-.5 1.2-2.9 2.7-1.5 2.1 1.9-.5 3.1.6 5.6 2.5 5.6.4 0 .8-1.4.8-3 0-2.5.4-3 2.4-3 2.7 0 5.6-3.3 5.6-6.3 0-2.2-6.1-8.5-7.8-7.9zm3.8 7.1c0 2.8-2 4.2-4.2 3-1.9-1-1.9-1.1.3-3.5 2.4-2.5 3.9-2.4 3.9.5zM278 340c-.2.8-.3 2.4-.4 3.5-.1 1.6-.8 2-4.1 2.1-12.4.4-13.8.8-5.1 1.3l9 .6-.2 6c-.1 3.3.2 6.7.8 7.5.7 1.1 1-.7 1-6.3V347h13.2c9.7 0 12.9-.3 12.1-1.1-.7-.7-5.2-1-13.2-.8l-12 .4-.4-3.5c-.2-1.9-.5-2.8-.7-2zM310.2 343c-2.7 1.1-4.4 5.2-3.6 8.6.8 3.1 5.9 7.4 8.8 7.4 6.5 0 8.9-8.9 3.7-14.1-3-3-5-3.4-8.9-1.9zm6.8 5.7c2.4 3.1 2.3 5.6-.4 6.1-2.1.5-6.6-3.5-6.6-5.8 0-3.9 4-4.1 7-.3zM120.5 346c-1.6.7-1.1.9 2 .9 2.9.1 3.6-.2 2.5-.9-1.7-1.1-1.9-1.1-4.5 0zM133 346.2c0 .5 8.1.8 18 .8h18v10c0 6.4.4 10 1.1 10 .6 0 .9-3.4.8-9.7-.2-8.7 0-9.8 1.7-10.4 1.6-.7 1.6-.8-.6-.9-8.6-.6-39-.4-39 .2zM127 348c-.5 1-3.4 3.6-6.4 5.8-4.8 3.4-5.2 4-3.6 4.9 1.1.8 2.1.8 2.7.2 1.5-1.5 6.5 1.1 5.8 2.9-.6 1.5 1.1 4.2 2.6 4.2.5 0 .9-.8.9-1.8s.9-4.6 2.1-8.1c2-5.9 2-6.3.4-8.2-2.3-2.4-3.2-2.4-4.5.1zm2 4.7c-.1.5-.6 1.8-1.3 3-.9 1.6-1.6 2-2.7 1.3-1.2-.7-1.1-1.2.4-2.9 1.9-2.1 3.6-2.7 3.6-1.4zM115.2 352c0 1.9.2 2.7.5 1.7.2-.9.2-2.5 0-3.5-.3-.9-.5-.1-.5 1.8zM295.8 353.2c-2.7 1.6-4.8 3.6-4.8 4.4 0 1.7 1.2 1.8 2.7.3.7-.7 1.9.4 4.2 4 1.7 2.8 3.1 5.6 3.1 6.2 0 .6.7.8 1.6.5.9-.3 1.8-.6 2-.6 1.1 0 .1-2.5-3.1-7.4-3-4.8-3.3-5.6-1.9-6.4.9-.5 1.4-1.6 1.3-2.4-.3-1.2-1.3-.9-5.1 1.4zM223.7 353.7c-1.1 1.1-.8 19.3.3 19.3.6 0 1-4 1-10 0-10-.1-10.6-1.3-9.3zM140.4 356.7c-.3 1-1.9 4.4-3.5 7.5-2.8 5.3-2.8 5.7-1.2 6.7 1.5.8 2.2.3 4-3.2l2.2-4.2.1 5.2c0 4 .4 5.5 1.8 6.2 1.6.8 2.3 0 5.6-6.6 2.9-5.9 3.4-7.8 2.4-8.4-2-1.3-2.5-1.1-3.1 1.3-.4 1.3-1.3 3.2-2.2 4.3-1.4 1.9-1.5 1.7-1.3-3.3.1-3.8-.2-5.6-1.3-6.3-2.1-1.3-2.9-1.1-3.5.8zM271 366c-3.8 3.8-2 6.6 4.5 7.2 3 .2 4.1.8 4.3 2.2.4 1.7 0 1.8-3.1 1.3-4.8-.8-7.3 1.8-3.2 3.3 3.9 1.5 5.3 1.2 8-1.5 4.5-4.4 2.2-8.5-4.7-8.5-4.8 0-4.8-2 0-3.2 4.3-1.1 4.1-2.8-.3-2.8-2.2 0-4.3.8-5.5 2zM158.2 365.7c-1.9.7-4.2 5.8-4.2 9.2 0 2 .8 3.6 2.6 5 3.1 2.5 5.3 2.6 8 .7 2.4-1.8 1.4-2.9-2.8-3-2.8-.1-3.3-.5-3.6-2.7-.2-1.4.6-3.6 1.7-5 1.9-2.4 2-2.4 4.9-.7 3.6 2.2 4.2 2.2 4.2.4 0-3.2-6.6-5.6-10.8-3.9zM175.6 369.8c-.4.3-.6 1.7-.6 3.1 0 1.4-.7 4.8-1.5 7.5s-1.4 5-1.3 5.1c.8.4 8.7 2.5 9.7 2.5 2.4 0 .9-2.9-1.9-3.5-2.1-.5-3-1.2-3-2.7 0-1.7.4-1.9 2.5-1.4 1.8.5 2.5.2 2.5-.8 0-.7-.9-1.6-1.9-1.9-1.4-.3-1.8-1.1-1.4-2.5.4-1.8.9-1.9 3.1-1.1 2.4.9 5.4-.2 4.1-1.6-1-.9-9.8-3.3-10.3-2.7zM253 371.1c-1.3.6-2.6 1.1-2.8 1.3-.3.4 3.5 14.6 4.1 15.2 1 1 8-2.1 9.3-4.1 2.2-3.4 1.1-8.8-2.3-11.5-2.8-2.2-4.5-2.4-8.3-.9zm6.4 4.1c2.1 3 2.1 7.4 0 8.2-.9.4-1.8.5-1.9.4-.9-1.2-3.2-9.8-2.7-10.2 1.2-1.2 3.1-.5 4.6 1.6zM198.7 374.7c-.2.5-.4 3.5-.6 6.8-.1 3.3-.4 6.8-.7 7.7-.4 1.5.1 1.8 2.8 1.8 1.8 0 4.3.3 5.6.6 1.8.5 2.2.2 2.2-1.5 0-1.1-.3-2-.7-2-.5.1-1.9.1-3.2 0-2.3-.1-2.4-.2-1.7-7.1.6-6.5.5-7-1.3-7-1.1 0-2.1.3-2.4.7zM234.4 376.2c.3 1.3-.1 5.2-1 8.7-.8 3.5-1.3 6.6-1.1 6.8.8.7 3.7-1 3.7-2.2 0-1.9 5.3-2.7 6.6-.9 1 1.2 4.4 2 4.4 1 0-.2-1.6-3.8-3.6-8-3.3-7-3.9-7.6-6.6-7.6-2.6 0-3 .3-2.4 2.2zm6.6 8c0 .5-.9.8-2 .8-2.2 0-2.3-.3-1.3-3.9l.6-2.3 1.3 2.3c.7 1.3 1.3 2.7 1.4 3.1zM214.8 375.7c-.2.5-.2 4.3 0 8.5l.4 7.8h5.4c4.1 0 5.4-.4 5.4-1.5 0-1-1.1-1.5-3.5-1.5-2.8 0-3.5-.4-3.5-2 0-1.3.7-2 2-2 1.1 0 2-.7 2-1.5s-.9-1.5-2-1.5c-1.3 0-2-.7-2-2 0-1.6.7-2 3-2 2 0 3-.5 3-1.5 0-1.1-1.2-1.5-4.9-1.5-2.8 0-5.1.3-5.3.7zM443 184c0 .5 1.6 1 3.5 1s3.5-.5 3.5-1c0-.6-1.6-1-3.5-1s-3.5.4-3.5 1zM0 238c0 .5 1.1 1 2.5 1s2.5-.5 2.5-1c0-.6-1.1-1-2.5-1s-2.5.4-2.5 1zM443 238c0 .5 1.6 1 3.5 1s3.5-.5 3.5-1c0-.6-1.6-1-3.5-1s-3.5.4-3.5 1z" />
    </g>
  </svg>
)
export default SvgComponent



