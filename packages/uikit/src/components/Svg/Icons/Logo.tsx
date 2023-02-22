import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    //   <Svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   width={36.355}
    //   height={51}
    //   viewBox="8855.158 6671.504 36.355 51"
    //   {...props}
    // >
    //   <g data-name="Group 1102">
    //     <g data-name="Path 14773">
    //       <path
    //         d="M8875.05 6718.604h-3.428l.184 3.4-5.905-3.492-.12-.542c-1.922-8.63-9.163-11.127-9.237-11.15l-.798-.265-.076-.836c-.023-.252-.17-2.853 1.688-16.354 1.992-14.487 15.597-17.287 15.734-17.314l.244-.047.244.047c.137.027 13.741 2.827 15.734 17.314 1.857 13.5 1.71 16.102 1.688 16.354l-.076.836-.799.265c-.294.1-7.327 2.576-9.236 11.15l-.12.542-5.905 3.492.185-3.4Z"
    //         fill="#002d56"
    //         fillRule="evenodd"
    //       />
    //       <path
    //         d="M2461.707 533.665h-3.429l.184 3.4-5.904-3.492-.12-.542c-1.922-8.63-9.164-11.127-9.237-11.15l-.798-.265-.076-.836c-.023-.252-.17-2.853 1.688-16.354 1.992-14.487 15.597-17.287 15.734-17.314l.243-.047.245.047c.137.027 13.741 2.827 15.734 17.314 1.857 13.5 1.71 16.103 1.687 16.354l-.075.836-.799.266c-.294.1-7.327 2.575-9.236 11.149l-.121.542-5.904 3.492.184-3.4Z"
    //         strokeLinejoin="round"
    //         strokeLinecap="round"
    //         stroke="#fff"
    //         fill="transparent"
    //         transform="matrix(1.02828 0 0 1.02 6343.765 6174.698)"
    //       />
    //     </g>
    //     <path
    //       d="M8870.164 6717.322h6.757l3.62-18.994s4.611-5.457 4.49-10.371l-8.821 2.714-1.924 7.336-.558 2.728-.726-8.663-2.585-1.4-8.45-3.235s-.417 9.905 6.544 11.213l1.653 18.672Z"
    //       fill="#002d56"
    //       fillRule="evenodd"
    //       data-name="Path 14774"
    //     />
    //     <path
    //       d="M8888.042 6689.539c-1.89-13.745-14.707-16.229-14.707-16.229s-12.815 2.484-14.706 16.229c-1.89 13.745-1.68 16.063-1.68 16.063s7.984 2.65 10.084 12.09l3.36 1.986-1.26-23.184s-6.723-.993-5.673-7.12l7.354 2.816.84 8.611 1.681.497 1.681-.497.84-8.611 7.354-2.816c1.05 6.128-5.672 7.12-5.672 7.12l-1.261 23.184 3.361-1.987c2.101-9.44 10.085-12.089 10.085-12.089s.21-2.318-1.681-16.063Z"
    //       fill="#78848a"
    //       fillRule="evenodd"
    //       data-name="Path 14775"
    //     />
    //     <path
    //       d="m8869.243 6696.495 1.247 22.93-.01.24-.61-.36-2.132-21.779-2.46-1.497c-3.85-2.566-1.708-6.655-1.708-6.655-1.049 6.127 5.673 7.121 5.673 7.121Z"
    //       fill="#b0bfc6"
    //       fillRule="evenodd"
    //       data-name="Path 14776"
    //     />
    //     <path
    //       d="m8858.565 6697.123-.32 7.62s4.972 2.004 6.896 7.538l-1.443-7.298s-2.406.72-3.77-.882c-1.363-1.603-1.363-6.978-1.363-6.978Z"
    //       fill="#b0bfc6"
    //       fillRule="evenodd"
    //       data-name="Path 14777"
    //     />
    //     <path
    //       d="m8867.388 6718.697-4.385-17.538s1.204 10.24 1.417 11.523c-.001.002 1.791 5.588 2.968 6.015Z"
    //       fill="#002d56"
    //       fillRule="evenodd"
    //       data-name="Path 14778"
    //     />
    //     <path
    //       d="m8877.539 6696.495-1.247 22.93.011.24.609-.36 2.133-21.779 2.46-1.497c3.849-2.566 1.706-6.655 1.706-6.655 1.05 6.127-5.672 7.121-5.672 7.121Z"
    //       fill="#acbac3"
    //       fillRule="evenodd"
    //       data-name="Path 14779"
    //     />
    //     <path
    //       d="m8888.239 6697.123.32 7.62s-4.972 2.004-6.897 7.538l1.444-7.298s2.405.72 3.77-.882c1.364-1.603 1.363-6.978 1.363-6.978Z"
    //       fill="#919ea5"
    //       fillRule="evenodd"
    //       data-name="Path 14780"
    //     />
    //     <path
    //       d="M8869.632 6676.512a13.375 13.375 0 0 0-8.1 9.865c.72-.562 2.565-3.77 6.496-3.93 3.93-.16 5.534-2.326 4.812-4.25-.722-1.926-2.404-2.006-3.208-1.685Z"
    //       fill="#b0bfc6"
    //       fillRule="evenodd"
    //       data-name="Path 14781"
    //     />
    //     <path
    //       d="M8863.777 6685.575s1.122-1.444 2.486-1.524c1.363-.08-1.604 3.368-2.486 1.524Z"
    //       fill="#b0bfc6"
    //       fillRule="evenodd"
    //       data-name="Path 14782"
    //     />
    //   </g>
    // </Svg>
    <Svg width="40" height="54" viewBox="0 0 40 54" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M24.051 27.24L24.22 27.215C24.8805 27.0975 25.5265 26.9098 26.147 26.655C27.4167 26.177 28.5301 25.3584 29.365 24.289C29.8043 23.6559 30.1139 22.9422 30.2761 22.1889C30.4383 21.4357 30.4498 20.6577 30.31 19.9L22.6 22.845L21.677 32.307L19.638 32.907L17.599 32.307L16.676 22.845L8.97 19.894C8.82882 20.6535 8.83974 21.4335 9.00213 22.1888C9.16451 22.9441 9.47513 23.6596 9.916 24.294C11.2334 25.8428 13.0543 26.8781 15.059 27.218L15.228 27.243L16.642 53.243L12.542 50.817L12.522 50.727C11.6572 46.6478 9.43105 42.9839 6.209 40.337C4.82903 39.1822 3.26854 38.2623 1.59 37.614L1.46 37.571L1.448 37.435C1.438 37.335 1.239 34.695 3.293 19.759C3.55496 17.7877 4.07335 15.859 4.835 14.022L4.826 14.014C4.79467 13.99 4.764 13.9647 4.734 13.938C4.704 13.9113 4.677 13.889 4.653 13.871C4.623 13.847 4.59333 13.822 4.564 13.796C4.53467 13.77 4.50733 13.7467 4.482 13.726C4.454 13.703 4.426 13.679 4.399 13.654C4.372 13.629 4.34 13.604 4.311 13.577C4.282 13.55 4.252 13.526 4.223 13.499C4.194 13.472 4.167 13.45 4.139 13.423C4.111 13.396 4.086 13.376 4.06 13.351C4.034 13.326 4 13.3 3.97 13.268C3.94 13.236 3.914 13.217 3.887 13.19C3.86 13.163 3.831 13.139 3.804 13.111C3.777 13.083 3.747 13.058 3.719 13.029C3.691 13 3.664 12.977 3.637 12.949C3.61 12.921 3.581 12.895 3.554 12.867C3.527 12.839 3.497 12.812 3.47 12.782C3.443 12.752 3.416 12.729 3.39 12.7C3.364 12.671 3.333 12.643 3.305 12.612C3.277 12.581 3.253 12.559 3.228 12.531C3.203 12.503 3.168 12.469 3.139 12.431C3.11 12.393 3.089 12.378 3.065 12.35C3.041 12.322 3.011 12.293 2.986 12.262C2.961 12.231 2.931 12.202 2.904 12.17C2.877 12.138 2.851 12.111 2.825 12.08C2.799 12.049 2.773 12.021 2.748 11.99C2.723 11.959 2.693 11.926 2.666 11.89C2.639 11.854 2.616 11.832 2.593 11.801C2.57 11.77 2.541 11.74 2.517 11.708C2.493 11.676 2.463 11.643 2.438 11.608C2.413 11.573 2.387 11.545 2.363 11.508C2.339 11.471 2.313 11.445 2.289 11.408C2.265 11.371 2.239 11.345 2.216 11.308C2.193 11.271 2.164 11.241 2.14 11.208C2.116 11.175 2.092 11.144 2.069 11.108C2.046 11.072 2.019 11.041 1.996 11.008C1.973 10.975 1.949 10.943 1.927 10.908C1.905 10.873 1.878 10.839 1.856 10.808C1.834 10.777 1.809 10.741 1.787 10.708C1.765 10.675 1.739 10.638 1.717 10.601C1.695 10.564 1.671 10.532 1.65 10.495C1.629 10.458 1.607 10.428 1.586 10.395C1.565 10.362 1.539 10.32 1.517 10.281C1.495 10.242 1.474 10.212 1.454 10.175C1.434 10.138 1.41 10.102 1.389 10.063C1.368 10.024 1.346 10 1.327 9.96C1.308 9.92 1.285 9.886 1.265 9.847C1.245 9.808 1.224 9.772 1.204 9.733C1.184 9.694 1.164 9.658 1.145 9.619C1.126 9.58 1.105 9.544 1.087 9.504C1.069 9.464 1.049 9.43 1.031 9.391C1.013 9.352 0.993 9.314 0.975 9.273C0.957 9.232 0.938 9.195 0.921 9.154C0.904 9.113 0.885 9.077 0.868 9.037C0.851 8.997 0.832 8.957 0.815 8.915C0.798 8.873 0.782 8.838 0.767 8.8C0.752 8.762 0.732 8.718 0.717 8.676C0.702 8.634 0.683 8.593 0.669 8.551C0.655 8.509 0.636 8.469 0.622 8.426C0.608 8.383 0.592 8.347 0.579 8.3C0.566 8.253 0.549 8.219 0.536 8.176C0.523 8.133 0.506 8.1 0.493 8.052C0.48 8.004 0.466 7.971 0.454 7.929C0.442 7.887 0.426 7.844 0.415 7.8C0.404 7.756 0.389 7.716 0.378 7.673C0.367 7.63 0.352 7.585 0.342 7.54C0.332 7.495 0.318 7.457 0.309 7.413C0.3 7.369 0.286 7.327 0.277 7.282C0.268 7.237 0.255 7.2 0.247 7.155C0.239 7.11 0.226 7.069 0.218 7.024C0.21 6.979 0.2 6.933 0.19 6.886C0.18 6.839 0.173 6.8 0.166 6.76C0.159 6.72 0.148 6.671 0.142 6.626C0.136 6.581 0.126 6.536 0.12 6.49C0.114 6.444 0.105 6.4 0.1 6.356C0.095 6.312 0.087 6.268 0.082 6.223C0.077 6.178 0.07 6.135 0.066 6.089C0.062 6.043 0.054 6 0.051 5.952C0.048 5.904 0.041 5.862 0.038 5.816C0.035 5.77 0.03 5.727 0.028 5.682C0.026 5.637 0.02 5.591 0.019 5.544C0.018 5.497 0.012 5.452 0.012 5.4C0.012 5.348 0.007 5.323 0.007 5.282V5.272C0.007 5.23667 0.007 5.201 0.007 5.165C0.007 5.156 0.007 5.147 0.007 5.139C0.007 5.109 0.007 5.079 0.007 5.048C0.007 5.017 0.007 5.009 0.007 4.989C0.007 4.969 0 4.95 0 4.93C0 4.91 0 4.89 0 4.87C0 4.85 0 4.831 0 4.811C0 4.77567 0 4.74233 0 4.711C0 4.7 0 4.7 0 4.69C0 4.654 0 4.61867 0 4.584C0 4.579 0 4.574 0 4.569C0 4.52633 0.002 4.48467 0.006 4.444C0.00856248 4.39573 0.0139047 4.34765 0.022 4.3C0.0227003 4.25989 0.0253702 4.21984 0.03 4.18C0.0308156 4.12441 0.0354935 4.06894 0.044 4.014C0.0461111 3.97246 0.0504507 3.93107 0.057 3.89C0.0592262 3.8444 0.0642355 3.79899 0.072 3.754C0.0745376 3.70634 0.0802166 3.65891 0.089 3.612C0.092251 3.56563 0.0985985 3.51953 0.108 3.474C0.111756 3.4269 0.118772 3.38013 0.129 3.334C0.133233 3.28888 0.140583 3.24411 0.151 3.2C0.155779 3.15277 0.164136 3.10597 0.176 3.06C0.180126 3.01143 0.188152 2.96328 0.2 2.916C0.206251 2.86894 0.216284 2.82245 0.23 2.777C0.236026 2.72957 0.246062 2.68274 0.26 2.637C0.266673 2.59049 0.27738 2.54465 0.292 2.5C0.299007 2.45239 0.310388 2.40552 0.326 2.36C0.333274 2.31159 0.345333 2.26403 0.362 2.218C0.369874 2.17016 0.382607 2.12325 0.4 2.078C0.407663 2.02698 0.421082 1.977 0.44 1.929C0.448515 1.88162 0.462266 1.83534 0.481 1.791C0.48956 1.74211 0.503998 1.69443 0.524 1.649C0.532773 1.59959 0.547898 1.55153 0.569 1.506C0.578175 1.45676 0.593986 1.40899 0.616 1.364C0.625572 1.31382 0.642417 1.26531 0.666 1.22C0.675514 1.16999 0.692718 1.12175 0.717 1.077C0.726587 1.02672 0.7445 0.978386 0.77 0.934C0.779225 0.882059 0.797865 0.83224 0.825 0.787C0.834608 0.735794 0.853959 0.686909 0.882 0.643C0.891874 0.59169 0.912306 0.542994 0.942 0.5C0.94983 0.446899 0.969666 0.396282 1 0.352C1.00879 0.296385 1.03188 0.244007 1.067 0.2C1.087 0.082 1.161 0 1.248 0C1.348 0 1.434 0.12 1.434 0.269C1.43558 0.324603 1.42393 0.379786 1.4 0.43C1.39987 0.483824 1.38828 0.537004 1.366 0.586C1.36545 0.639249 1.35458 0.691887 1.334 0.741C1.33189 0.793621 1.32038 0.845439 1.3 0.894C1.299 0.946593 1.2892 0.998646 1.271 1.048C1.27004 1.09903 1.26127 1.14962 1.245 1.198C1.24387 1.24438 1.23681 1.29042 1.224 1.335C1.22386 1.38743 1.21645 1.4396 1.202 1.49C1.20142 1.53793 1.19504 1.58561 1.183 1.632C1.18264 1.68087 1.17659 1.72953 1.165 1.777C1.16463 1.82102 1.15994 1.8649 1.151 1.908V1.914C1.15111 1.95965 1.14676 2.0052 1.138 2.05V2.057C1.13805 2.10127 1.13403 2.14546 1.126 2.189C1.126 2.189 1.126 2.196 1.126 2.199C1.12595 2.23751 1.12294 2.27595 1.117 2.314C1.117 2.322 1.117 2.331 1.117 2.339C1.11715 2.37545 1.11481 2.41187 1.11 2.448C1.11 2.458 1.11 2.468 1.11 2.478C1.11003 2.51142 1.10803 2.54482 1.104 2.578C1.104 2.591 1.104 2.603 1.104 2.616C1.104 2.646 1.104 2.675 1.104 2.703C1.104 2.731 1.104 2.736 1.104 2.753C1.104 2.77 1.104 2.804 1.104 2.829C1.104 2.854 1.104 2.869 1.104 2.89C1.104 2.911 1.104 2.932 1.104 2.953C1.104 2.974 1.104 3.001 1.104 3.026C1.104 3.051 1.104 3.053 1.104 3.067C1.104 3.09767 1.104 3.12867 1.104 3.16C1.104 3.174 1.104 3.188 1.104 3.202C1.104 3.232 1.104 3.26233 1.104 3.293C1.104 3.299 1.104 3.304 1.104 3.309C1.1082 3.34752 1.11021 3.38625 1.11 3.425C1.11 3.425 1.11 3.433 1.11 3.436C1.11 3.465 1.115 3.495 1.116 3.526C1.12181 3.5651 1.12549 3.6045 1.127 3.644C1.13315 3.68342 1.13715 3.72315 1.139 3.763C1.144 3.797 1.148 3.831 1.151 3.863C1.154 3.895 1.162 3.939 1.165 3.978C1.168 4.017 1.174 4.032 1.177 4.06C1.18678 4.09957 1.19446 4.13962 1.2 4.18C1.20733 4.212 1.213 4.24533 1.217 4.28C1.221 4.31467 1.22733 4.348 1.236 4.38C1.24533 4.416 1.253 4.453 1.259 4.491C1.265 4.515 1.271 4.54 1.276 4.566C1.281 4.592 1.293 4.63 1.3 4.666C1.307 4.702 1.318 4.731 1.325 4.766C1.332 4.801 1.341 4.821 1.348 4.85C1.355 4.879 1.367 4.91 1.375 4.941C1.383 4.972 1.394 5 1.403 5.03C1.412 5.06 1.422 5.085 1.43 5.113C1.438 5.141 1.45 5.168 1.459 5.196C1.468 5.224 1.48 5.251 1.489 5.279C1.498 5.307 1.51 5.333 1.52 5.36C1.53 5.387 1.542 5.412 1.552 5.439C1.562 5.466 1.575 5.492 1.585 5.519C1.595 5.546 1.609 5.571 1.619 5.598C1.629 5.625 1.642 5.646 1.652 5.671C1.662 5.696 1.676 5.72 1.688 5.746C1.7 5.772 1.714 5.797 1.727 5.824C1.74 5.851 1.752 5.871 1.764 5.896C1.776 5.921 1.789 5.942 1.801 5.965C1.813 5.988 1.829 6.013 1.842 6.038C1.855 6.063 1.869 6.084 1.882 6.108C1.895 6.132 1.909 6.152 1.922 6.175C1.935 6.198 1.952 6.221 1.966 6.245C1.98 6.269 1.995 6.289 2.009 6.312C2.023 6.335 2.038 6.354 2.052 6.376C2.066 6.398 2.083 6.42 2.098 6.444C2.113 6.468 2.128 6.485 2.142 6.506C2.156 6.527 2.175 6.55 2.191 6.573C2.207 6.596 2.222 6.613 2.237 6.635C2.252 6.657 2.269 6.675 2.285 6.697C2.301 6.719 2.318 6.737 2.333 6.757C2.348 6.777 2.367 6.797 2.384 6.818C2.401 6.839 2.418 6.857 2.435 6.878C2.452 6.899 2.469 6.916 2.485 6.936C2.501 6.956 2.521 6.975 2.538 6.996C2.555 7.017 2.573 7.033 2.59 7.052C2.607 7.071 2.628 7.091 2.646 7.111C2.664 7.131 2.682 7.147 2.7 7.166C2.718 7.185 2.738 7.202 2.756 7.222C2.774 7.242 2.794 7.258 2.812 7.277C2.83 7.296 2.852 7.314 2.871 7.333L2.924 7.382C2.94467 7.39933 2.965 7.41767 2.985 7.437C3.005 7.45633 3.02467 7.47367 3.044 7.489C3.06467 7.50567 3.085 7.523 3.105 7.541C3.125 7.559 3.145 7.57567 3.165 7.591C3.18567 7.60633 3.206 7.62267 3.226 7.64C3.246 7.65733 3.26733 7.674 3.29 7.69C3.31133 7.70533 3.332 7.72133 3.352 7.738C3.372 7.75467 3.394 7.77133 3.418 7.788L3.478 7.832C3.50133 7.84733 3.52433 7.86367 3.547 7.881C3.568 7.895 3.589 7.91 3.61 7.925C3.631 7.94 3.656 7.955 3.679 7.972C3.702 7.989 3.724 8.001 3.746 8.016L3.811 8.058C3.835 8.072 3.85867 8.087 3.882 8.103L3.949 8.144C3.97367 8.158 3.998 8.17267 4.022 8.188L4.087 8.226C4.112 8.239 4.137 8.254 4.162 8.269L4.227 8.306C4.252 8.319 4.277 8.332 4.301 8.346C4.325 8.36 4.352 8.372 4.378 8.387L4.443 8.421C4.468 8.433 4.493 8.445 4.517 8.459C4.541 8.473 4.568 8.483 4.593 8.497L4.667 8.533L4.739 8.567L4.81 8.6C4.836 8.61067 4.86167 8.62233 4.887 8.635L4.962 8.668C4.989 8.678 5.015 8.69 5.041 8.702L5.112 8.732L5.187 8.763L5.263 8.793L5.34 8.823L5.418 8.853L5.494 8.881L5.57 8.908L5.645 8.934L5.725 8.961L5.798 8.985L5.877 9L5.951 9.023L6.031 9.047L6.109 9.07L6.188 9.093L6.258 9.113L6.34 9.136L6.419 9.157L6.493 9.176L6.566 9.194L6.646 9.213L6.722 9.231L6.806 9.25L6.872 9.265L6.955 9.283L7.027 9.298L7.103 9.313L7.179 9.328L7.251 9.341L7.324 9.354L7.406 9.368L7.474 9.379L7.547 9.39C8.87465 7.71074 10.4536 6.2465 12.228 5.049C13.8178 3.97357 15.5332 3.09672 17.336 2.438C18.0738 2.16247 18.8304 1.94023 19.6 1.773L19.64 1.766L19.68 1.773C20.4491 1.94226 21.205 2.1665 21.942 2.444C23.7448 3.1023 25.4602 3.97882 27.05 5.054C28.811 6.24442 30.3792 7.69761 31.7 9.363L31.736 9.357L31.809 9.344L31.88 9.331L31.956 9.316L32.033 9.301L32.105 9.286L32.188 9.268L32.254 9.253L32.336 9.234L32.414 9.216L32.5 9.2L32.572 9.182L32.646 9.163L32.724 9.142L32.807 9.119L32.877 9.099L32.956 9.076L33.035 9.052L33.112 9.028L33.188 9L33.265 8.975L33.341 8.95L33.418 8.924L33.494 8.897L33.572 8.869L33.648 8.841L33.725 8.811L33.802 8.781L33.876 8.752C33.902 8.74067 33.928 8.73 33.954 8.72L34.024 8.691C34.0493 8.679 34.075 8.668 34.101 8.658C34.126 8.646 34.152 8.635 34.177 8.624C34.202 8.613 34.228 8.6 34.254 8.589L34.326 8.556L34.395 8.523C34.4203 8.50967 34.4457 8.49733 34.471 8.486L34.544 8.449C34.5687 8.43567 34.5937 8.423 34.619 8.411L34.685 8.376C34.71 8.362 34.735 8.348 34.76 8.336C34.785 8.324 34.809 8.308 34.834 8.296L34.899 8.259C34.9237 8.24367 34.9487 8.22933 34.974 8.216L35.038 8.179C35.0627 8.163 35.088 8.14767 35.114 8.133L35.179 8.093L35.248 8.05C35.2707 8.034 35.2937 8.019 35.317 8.005L35.382 7.962C35.405 7.946 35.428 7.93 35.451 7.915L35.514 7.871C35.536 7.854 35.558 7.838 35.581 7.823C35.604 7.808 35.624 7.791 35.646 7.776C35.668 7.761 35.687 7.744 35.708 7.729C35.729 7.714 35.75 7.696 35.772 7.68C35.794 7.664 35.816 7.644 35.838 7.628L35.895 7.582C35.9157 7.56333 35.937 7.54567 35.959 7.529C35.981 7.51233 36.0003 7.496 36.017 7.48C36.037 7.46133 36.0573 7.44367 36.078 7.427C36.0987 7.41033 36.119 7.392 36.139 7.372C36.157 7.354 36.1753 7.337 36.194 7.321C36.2127 7.305 36.232 7.28667 36.252 7.266C36.27 7.247 36.289 7.229 36.308 7.212C36.327 7.195 36.345 7.174 36.364 7.156C36.383 7.138 36.399 7.119 36.418 7.101C36.437 7.083 36.455 7.061 36.474 7.042C36.493 7.023 36.508 7.004 36.526 6.986C36.544 6.968 36.56 6.947 36.577 6.929C36.594 6.911 36.613 6.887 36.632 6.867C36.651 6.847 36.663 6.83 36.679 6.812C36.695 6.794 36.713 6.769 36.731 6.748C36.749 6.727 36.763 6.707 36.78 6.687C36.797 6.667 36.812 6.644 36.829 6.623C36.846 6.602 36.858 6.583 36.874 6.563C36.89 6.543 36.906 6.517 36.923 6.496C36.94 6.475 36.952 6.454 36.967 6.434C36.982 6.414 36.997 6.389 37.013 6.367C37.029 6.345 37.041 6.323 37.056 6.302C37.071 6.281 37.083 6.259 37.097 6.238C37.111 6.217 37.127 6.188 37.142 6.165C37.157 6.142 37.169 6.118 37.183 6.096C37.197 6.074 37.208 6.051 37.221 6.029C37.234 6.007 37.248 5.979 37.262 5.955C37.276 5.931 37.285 5.91 37.297 5.889C37.309 5.868 37.323 5.837 37.337 5.812C37.351 5.787 37.36 5.764 37.372 5.741C37.384 5.718 37.396 5.687 37.41 5.662C37.424 5.637 37.431 5.614 37.443 5.59C37.455 5.566 37.466 5.534 37.479 5.507C37.492 5.48 37.5 5.455 37.511 5.431C37.522 5.407 37.531 5.379 37.541 5.355C37.551 5.331 37.561 5.299 37.573 5.272C37.585 5.245 37.592 5.215 37.603 5.188C37.614 5.161 37.621 5.131 37.632 5.104C37.643 5.077 37.65 5.047 37.66 5.019C37.67 4.991 37.677 4.96 37.687 4.931C37.697 4.902 37.703 4.873 37.712 4.845C37.721 4.817 37.728 4.782 37.738 4.751C37.748 4.72 37.753 4.69 37.762 4.66C37.771 4.63 37.775 4.601 37.783 4.572C37.791 4.543 37.796 4.506 37.805 4.472C37.814 4.438 37.817 4.409 37.824 4.378C37.831 4.347 37.836 4.307 37.844 4.273C37.852 4.239 37.854 4.207 37.862 4.173C37.87 4.139 37.871 4.106 37.878 4.073C37.885 4.04 37.886 4.003 37.893 3.973C37.9 3.943 37.901 3.9 37.907 3.864C37.9097 3.82579 37.9144 3.78774 37.921 3.75C37.921 3.71867 37.924 3.68767 37.93 3.657C37.9311 3.60909 37.9354 3.56132 37.943 3.514C37.943 3.491 37.943 3.468 37.943 3.446C37.943 3.439 37.943 3.432 37.943 3.425C37.9428 3.38658 37.9449 3.34819 37.949 3.31C37.949 3.304 37.949 3.299 37.949 3.293C37.949 3.25967 37.949 3.22633 37.949 3.193C37.949 3.182 37.949 3.17 37.949 3.159C37.949 3.12967 37.949 3.10067 37.949 3.072C37.949 3.056 37.949 3.041 37.949 3.025C37.949 3.009 37.949 2.977 37.949 2.953C37.949 2.929 37.949 2.911 37.949 2.89C37.949 2.869 37.949 2.849 37.949 2.829C37.949 2.809 37.949 2.779 37.949 2.753C37.949 2.727 37.949 2.72 37.949 2.704C37.9475 2.67435 37.9475 2.64465 37.949 2.615C37.949 2.602 37.949 2.588 37.949 2.575C37.945 2.54182 37.9429 2.50842 37.943 2.475C37.943 2.465 37.943 2.456 37.943 2.446C37.9378 2.40957 37.9351 2.37281 37.935 2.336C37.935 2.329 37.935 2.321 37.935 2.314C37.9289 2.27463 37.9259 2.23484 37.926 2.195C37.926 2.188 37.926 2.181 37.926 2.173C37.9193 2.13335 37.916 2.09321 37.916 2.053C37.9061 2.00597 37.9011 1.95806 37.901 1.91C37.891 1.86367 37.886 1.8164 37.886 1.769C37.8754 1.72409 37.8697 1.67815 37.869 1.632C37.8559 1.5824 37.8491 1.53131 37.849 1.48C37.8365 1.43402 37.8297 1.38665 37.829 1.339C37.814 1.29071 37.8059 1.24055 37.805 1.19C37.7891 1.14155 37.7807 1.09098 37.78 1.04C37.7677 0.994394 37.7623 0.947204 37.764 0.9C37.7441 0.850008 37.7336 0.796791 37.733 0.743C37.7116 0.692714 37.7003 0.638664 37.7 0.584C37.6785 0.535507 37.6672 0.483065 37.667 0.43C37.6421 0.380015 37.6294 0.324838 37.63 0.269C37.63 0.12 37.713 0 37.816 0C37.904 0 37.977 0.087 37.997 0.2C38.0299 0.243009 38.0515 0.293529 38.06 0.347C38.0924 0.392419 38.1136 0.444837 38.122 0.5C38.1506 0.54226 38.1703 0.589889 38.18 0.64C38.21 0.685776 38.2304 0.737138 38.24 0.791C38.2663 0.835115 38.2846 0.883525 38.294 0.934C38.3195 0.978386 38.3374 1.02672 38.347 1.077C38.3719 1.12262 38.3895 1.1719 38.399 1.223C38.4215 1.26684 38.4376 1.31364 38.447 1.362C38.4701 1.40813 38.4866 1.45728 38.496 1.508C38.5169 1.55291 38.532 1.60028 38.541 1.649C38.5606 1.69283 38.5751 1.73881 38.584 1.786C38.6054 1.83557 38.6206 1.88765 38.629 1.941C38.6459 1.98428 38.6583 2.02918 38.666 2.075C38.6835 2.12057 38.6962 2.16782 38.704 2.216C38.7205 2.26139 38.7326 2.30828 38.74 2.356C38.7556 2.40152 38.767 2.44839 38.774 2.496C38.7888 2.54163 38.7995 2.58848 38.806 2.636C38.8199 2.68174 38.83 2.72857 38.836 2.776C38.8491 2.8215 38.8584 2.86799 38.864 2.915C38.8767 2.96122 38.8857 3.00836 38.891 3.056C38.9024 3.10135 38.9104 3.14747 38.915 3.194C38.926 3.23972 38.9337 3.28618 38.938 3.333C38.9482 3.3788 38.9552 3.42524 38.959 3.472C38.9676 3.51393 38.9736 3.55634 38.977 3.599C38.9878 3.65275 38.9945 3.70724 38.997 3.762C39.0038 3.80405 39.0081 3.84645 39.01 3.889C39.0171 3.9347 39.0214 3.98078 39.023 4.027C39.0292 4.07209 39.0329 4.1175 39.034 4.163C39.0401 4.21043 39.0434 4.25818 39.044 4.306C39.0492 4.35215 39.0519 4.39856 39.052 4.445C39.052 4.485 39.058 4.525 39.058 4.567V4.575C39.058 4.61233 39.058 4.65 39.058 4.688C39.058 4.698 39.058 4.708 39.058 4.717C39.058 4.747 39.058 4.77767 39.058 4.809C39.058 4.825 39.058 4.84 39.058 4.855C39.058 4.87 39.058 4.904 39.058 4.928C39.058 4.952 39.058 4.972 39.058 4.993C39.058 5.014 39.058 5.028 39.058 5.045C39.058 5.062 39.058 5.104 39.058 5.133C39.058 5.143 39.058 5.152 39.058 5.162C39.058 5.19667 39.058 5.23 39.058 5.262C39.058 5.262 39.058 5.271 39.058 5.275C39.058 5.31767 39.0563 5.35967 39.053 5.401C39.0497 5.44233 39.0473 5.488 39.046 5.538C39.046 5.584 39.043 5.62933 39.037 5.674C39.031 5.71867 39.0273 5.76433 39.026 5.811C39.026 5.857 39.0217 5.902 39.013 5.946C39.013 5.991 39.005 6.034 38.999 6.077C38.993 6.12 38.99 6.172 38.982 6.217C38.974 6.262 38.971 6.308 38.964 6.352C38.957 6.396 38.953 6.44 38.945 6.483C38.937 6.526 38.932 6.575 38.923 6.62C38.914 6.665 38.909 6.707 38.9 6.748C38.891 6.789 38.885 6.839 38.874 6.884C38.863 6.929 38.858 6.971 38.848 7.013C38.838 7.055 38.83 7.104 38.818 7.149C38.806 7.194 38.8 7.235 38.788 7.276C38.776 7.317 38.767 7.367 38.755 7.411C38.743 7.455 38.735 7.494 38.723 7.534C38.711 7.574 38.701 7.621 38.688 7.663C38.675 7.705 38.664 7.751 38.65 7.793C38.636 7.835 38.625 7.88 38.611 7.922C38.597 7.964 38.586 8.006 38.572 8.046C38.558 8.086 38.545 8.132 38.53 8.173C38.515 8.214 38.502 8.258 38.486 8.299C38.47 8.34 38.458 8.383 38.441 8.423C38.424 8.463 38.412 8.505 38.396 8.544C38.38 8.583 38.365 8.628 38.348 8.668C38.331 8.708 38.317 8.748 38.3 8.786C38.283 8.824 38.266 8.872 38.247 8.913C38.228 8.954 38.216 8.989 38.198 9.025C38.18 9.061 38.163 9.107 38.144 9.146C38.125 9.185 38.109 9.226 38.089 9.265C38.069 9.304 38.052 9.346 38.032 9.384C38.012 9.422 37.996 9.461 37.976 9.497C37.956 9.533 37.939 9.575 37.918 9.612C37.897 9.649 37.88 9.689 37.859 9.726C37.838 9.763 37.818 9.806 37.796 9.844C37.774 9.882 37.757 9.918 37.736 9.953C37.715 9.988 37.696 10.027 37.675 10.062C37.654 10.097 37.634 10.135 37.613 10.17C37.592 10.205 37.57 10.246 37.547 10.282C37.524 10.318 37.505 10.355 37.482 10.389C37.459 10.423 37.437 10.464 37.413 10.5C37.389 10.536 37.371 10.569 37.348 10.6C37.325 10.631 37.304 10.67 37.281 10.7C37.258 10.73 37.233 10.775 37.207 10.811C37.181 10.847 37.163 10.878 37.14 10.911C37.117 10.944 37.094 10.981 37.069 11.011C37.044 11.041 37.021 11.081 36.996 11.111C36.971 11.141 36.95 11.178 36.925 11.211C36.9 11.244 36.874 11.283 36.847 11.317C36.82 11.351 36.802 11.379 36.778 11.408C36.754 11.437 36.728 11.476 36.702 11.508C36.676 11.54 36.651 11.575 36.625 11.608C36.599 11.641 36.576 11.671 36.55 11.701C36.524 11.731 36.498 11.767 36.471 11.801C36.444 11.835 36.422 11.862 36.397 11.89C36.372 11.918 36.343 11.956 36.315 11.99C36.287 12.024 36.264 12.051 36.237 12.08C36.21 12.109 36.184 12.143 36.156 12.172C36.128 12.201 36.104 12.233 36.077 12.261C36.05 12.289 36.026 12.319 36 12.346C35.974 12.373 35.948 12.405 35.921 12.433C35.894 12.461 35.866 12.494 35.838 12.523C35.81 12.552 35.783 12.582 35.755 12.61C35.727 12.638 35.701 12.668 35.673 12.695C35.645 12.722 35.62 12.751 35.592 12.777C35.564 12.803 35.539 12.833 35.511 12.859C35.483 12.885 35.454 12.917 35.425 12.944C35.396 12.971 35.369 13.001 35.34 13.027C35.311 13.053 35.288 13.079 35.261 13.103C35.234 13.127 35.205 13.158 35.175 13.184C35.145 13.21 35.12 13.237 35.092 13.262C35.064 13.287 35.033 13.318 35.003 13.344C34.973 13.37 34.949 13.394 34.921 13.418C34.893 13.442 34.867 13.468 34.839 13.492C34.811 13.516 34.783 13.544 34.754 13.568C34.725 13.592 34.692 13.624 34.661 13.65C34.63 13.676 34.61 13.695 34.584 13.717C34.558 13.739 34.526 13.768 34.496 13.792C34.466 13.816 34.441 13.84 34.412 13.863L34.387 13.885C35.1805 15.7613 35.7186 17.7356 35.987 19.755C38.042 34.691 37.842 37.325 37.832 37.431L37.82 37.568L37.69 37.611C36.0126 38.2603 34.4532 39.1805 33.074 40.335C29.8521 42.9821 27.626 46.6459 26.761 50.725L26.741 50.815L22.641 53.241L24.051 27.24ZM24.809 24.654C24.5545 24.5683 24.3198 24.4323 24.119 24.254C25.0992 24.0203 26.0418 23.65 26.919 23.154C26.8154 23.5514 26.6275 23.9218 26.368 24.24L26.575 24.482C26.241 24.6693 25.8639 24.7661 25.481 24.763H25.47C25.2457 24.7614 25.0219 24.7246 24.809 24.654ZM13.579 24.723C13.1961 24.7261 12.819 24.6293 12.485 24.442L12.692 24.2C12.4324 23.8818 12.2445 23.5114 12.141 23.114C13.0182 23.61 13.9607 23.9803 14.941 24.214C14.7406 24.3923 14.5062 24.5284 14.252 24.614C14.0385 24.6815 13.8159 24.7152 13.592 24.714L13.579 24.723Z"
        fill="#F0DE93"
      />
    </Svg>
  );
};

export default Icon;
