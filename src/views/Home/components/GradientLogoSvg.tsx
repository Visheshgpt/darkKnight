import { Svg, SvgProps } from '@pancakeswap/uikit'

const GradientLogo: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    // <Svg width="312" height="235" viewBox="0 0 112 145" {...props}>
    //   <svg width="83" height="118" viewBox="0 0 83 118" fill="none" xmlns="http://www.w3.org/2000/svg">
    //     <path
    //       fillRule="evenodd"
    //       clipRule="evenodd"
    //       d="M34.8862 116.999L31.5285 58.4582C31.5285 58.4582 14.696 55.8425 17.3954 40.5756L35.7878 47.8397L37.6299 69.0157L41.8007 70.4929L46.3365 69.1379L48.0513 47.7175L66.9361 40.4534C66.9361 40.4534 70.2495 55.3482 52.7089 58.5527L49.3623 116.649L57.8256 111.979C57.8256 111.979 62.2841 88.9143 82.9887 81.6113C80.1123 42.5693 80.9586 12.8852 42.116 0.00634766C42.116 0.00634766 16.7648 3.50513 6.47052 33.0115C6.47052 33.0115 0.717683 63.2955 0.999793 81.2836C0.999793 81.2836 22.2466 89.8695 26.1684 112.04L34.8751 117.005L34.8862 116.999Z"
    //       fill="#C7C7C7"
    //     />
    //     <path
    //       fillRule="evenodd"
    //       clipRule="evenodd"
    //       d="M20.4156 95.0622L17.6996 79.762C17.6996 79.762 9.68434 82.3333 6.52581 74.7804L4.49573 60.6409L4.00342 79.0067C4.00342 79.0067 15.5036 85.6877 20.4156 95.0622V95.0622Z"
    //       fill="#C7C7C7"
    //     />
    //     <path
    //       fillRule="evenodd"
    //       clipRule="evenodd"
    //       d="M66.0568 79.762L63.3408 95.0622C68.2529 85.6877 79.753 79.0067 79.753 79.0067L79.2607 60.6409L77.2306 74.7804C74.0721 82.3333 66.0568 79.762 66.0568 79.762V79.762Z"
    //       fill="#C7C7C7"
    //     />
    //     <path
    //       fillRule="evenodd"
    //       clipRule="evenodd"
    //       d="M56.3651 61.1129C56.3651 61.1129 60.3202 58.5582 65.4037 54.8762C70.4872 51.1886 66.9415 40.459 66.9415 40.459C66.9415 40.459 70.2549 55.3538 52.7143 58.5582L49.3677 116.655L50.8557 115.833L56.3651 61.1185V61.1129Z"
    //       fill="#C7C7C7"
    //     />
    //     <path
    //       fillRule="evenodd"
    //       clipRule="evenodd"
    //       d="M34.8863 116.999L31.5287 58.4584C31.5287 58.4584 14.6961 55.8426 17.3955 40.5757C17.3955 40.5757 13.7779 44.4854 17.8602 53.8044C17.8602 53.8044 21.4834 59.3969 27.7949 60.8908L33.3873 116.144L34.8808 116.999H34.8863Z"
    //       fill="#C7C7C7"
    //     />
    //     <path
    //       fillRule="evenodd"
    //       clipRule="evenodd"
    //       d="M12.1567 33.1392C12.1567 33.1392 17.3454 24.1257 28.7846 22.9983C40.2184 21.8709 41.4796 16.2396 41.2694 13.8404C41.0592 11.4468 38.3211 6.0209 31.8713 8.20348C25.4159 10.386 12.7652 21.2045 12.1567 33.1337V33.1392Z"
    //       fill="#C7C7C7"
    //     />
    //     <path
    //       fillRule="evenodd"
    //       clipRule="evenodd"
    //       d="M23.3475 27.2192C20.4987 27.5802 17.5283 30.8846 17.5283 30.8846C17.5283 30.8846 17.2074 30.8846 18.8946 31.9342C20.5817 32.9838 23.5079 30.1626 24.1108 29.635C24.7138 29.113 26.1962 26.8526 23.3475 27.2192Z"
    //       fill="#C7C7C7"
    //     />
    //   </svg>
    // </Svg>
    <svg width="84" height="114" viewBox="0 0 84 114" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M51.7252 58.3243L52.0887 58.2708C53.5091 58.0193 54.8984 57.6173 56.233 57.0717C58.9636 56.0482 61.3582 54.2954 63.1538 52.0058C64.0985 50.6504 64.7644 49.1222 65.1133 47.5093C65.4621 45.8965 65.4868 44.2308 65.1861 42.6084L48.6046 48.914L46.6196 69.1734L42.2344 70.4581L37.8493 69.1734L35.8642 48.914L19.2913 42.5956C18.9877 44.2218 19.0112 45.8919 19.3604 47.509C19.7096 49.1261 20.3777 50.6582 21.3258 52.0165C24.159 55.3328 28.0752 57.5494 32.3866 58.2772L32.7501 58.3307L35.7911 114L26.9734 108.806L26.9304 108.613C25.0706 99.8788 20.2829 92.034 13.3534 86.3666C10.3855 83.8942 7.02947 81.9244 3.41953 80.5363L3.13995 80.4443L3.11414 80.1531C3.09263 79.939 2.66465 74.2864 7.08208 42.3065C7.64547 38.0857 8.76034 33.9562 10.3984 30.0229L10.379 30.0057C10.3116 29.9544 10.2457 29.9001 10.1812 29.843C10.1166 29.7859 10.0586 29.7381 10.007 29.6996C9.94244 29.6482 9.87864 29.5947 9.81556 29.539C9.75247 29.4833 9.69369 29.4334 9.6392 29.3891C9.57899 29.3399 9.51877 29.2885 9.4607 29.2349C9.40263 29.1814 9.33381 29.1279 9.27144 29.0701C9.20907 29.0123 9.14455 28.9609 9.08219 28.9031C9.01982 28.8453 8.96175 28.7982 8.90153 28.7403C8.84131 28.6825 8.78755 28.6397 8.73163 28.5862C8.67571 28.5327 8.60259 28.477 8.53807 28.4085C8.47355 28.34 8.41764 28.2993 8.35957 28.2415C8.3015 28.1836 8.23913 28.1323 8.18106 28.0723C8.123 28.0124 8.05848 27.9588 7.99826 27.8967C7.93804 27.8346 7.87997 27.7854 7.82191 27.7254C7.76384 27.6655 7.70147 27.6098 7.6434 27.5499C7.58533 27.4899 7.52082 27.4321 7.46275 27.3679C7.40468 27.3036 7.34661 27.2544 7.2907 27.1923C7.23478 27.1302 7.16811 27.0703 7.10789 27.0039C7.04767 26.9375 6.99606 26.8904 6.94229 26.8305C6.88852 26.7705 6.81325 26.6977 6.75088 26.6163C6.68851 26.535 6.64335 26.5029 6.59174 26.4429C6.54012 26.383 6.4756 26.3209 6.42183 26.2545C6.36807 26.1881 6.30355 26.126 6.24548 26.0575C6.18741 25.989 6.1315 25.9312 6.07558 25.8648C6.01966 25.7984 5.96375 25.7385 5.90998 25.6721C5.85621 25.6057 5.79169 25.5351 5.73363 25.458C5.67556 25.3809 5.62609 25.3338 5.57663 25.2674C5.52716 25.2011 5.4648 25.1368 5.41318 25.0683C5.36157 24.9998 5.29705 24.9291 5.24328 24.8542C5.18951 24.7793 5.1336 24.7193 5.08198 24.6401C5.03037 24.5609 4.97445 24.5052 4.92283 24.426C4.87122 24.3468 4.8153 24.2911 4.76584 24.2119C4.71637 24.1326 4.654 24.0684 4.60239 23.9977C4.55077 23.9271 4.49916 23.8607 4.44969 23.7836C4.40023 23.7066 4.34216 23.6402 4.29269 23.5695C4.24323 23.4989 4.19161 23.4303 4.1443 23.3554C4.09698 23.2805 4.03892 23.2077 3.9916 23.1413C3.94429 23.0749 3.89052 22.9978 3.84321 22.9272C3.79589 22.8565 3.73998 22.7773 3.69266 22.6981C3.64535 22.6189 3.59373 22.5503 3.54857 22.4711C3.50341 22.3919 3.45609 22.3277 3.41093 22.257C3.36576 22.1864 3.30985 22.0964 3.26253 22.0129C3.21522 21.9294 3.17005 21.8652 3.12704 21.786C3.08403 21.7067 3.03241 21.6297 2.98725 21.5462C2.94209 21.4627 2.89477 21.4113 2.85391 21.3256C2.81305 21.24 2.76358 21.1672 2.72057 21.0837C2.67756 21.0002 2.63239 20.9231 2.58938 20.8396C2.54637 20.7561 2.50335 20.679 2.46249 20.5955C2.42163 20.512 2.37647 20.4349 2.33775 20.3493C2.29904 20.2636 2.25603 20.1908 2.21732 20.1073C2.17861 20.0238 2.13559 19.9425 2.09688 19.8547C2.05817 19.7669 2.01731 19.6877 1.98075 19.5999C1.94419 19.5121 1.90332 19.435 1.86676 19.3494C1.8302 19.2637 1.78934 19.1781 1.75278 19.0881C1.71622 18.9982 1.68181 18.9233 1.64955 18.8419C1.61729 18.7606 1.57427 18.6663 1.54201 18.5764C1.50975 18.4865 1.46889 18.3987 1.43878 18.3088C1.40867 18.2188 1.36781 18.1332 1.3377 18.0411C1.30759 17.9491 1.27318 17.872 1.24523 17.7714C1.21727 17.6707 1.18071 17.5979 1.15275 17.5059C1.12479 17.4138 1.08823 17.3431 1.06027 17.2404C1.03231 17.1376 1.0022 17.0669 0.976394 16.977C0.950586 16.8871 0.916176 16.795 0.892519 16.7008C0.868862 16.6066 0.836602 16.5209 0.812945 16.4289C0.789288 16.3368 0.757028 16.2404 0.735522 16.1441C0.714015 16.0477 0.683906 15.9664 0.66455 15.8722C0.645194 15.778 0.615085 15.688 0.595729 15.5917C0.576374 15.4953 0.548415 15.4161 0.53121 15.3198C0.514005 15.2234 0.486046 15.1356 0.468841 15.0393C0.451636 14.9429 0.43013 14.8444 0.408623 14.7438C0.387117 14.6432 0.372062 14.5597 0.357008 14.474C0.341953 14.3884 0.318296 14.2835 0.305392 14.1871C0.292488 14.0908 0.270982 13.9944 0.258078 13.8959C0.245174 13.7974 0.225818 13.7032 0.215065 13.609C0.204312 13.5148 0.187106 13.4206 0.176353 13.3242C0.1656 13.2279 0.150545 13.1358 0.141943 13.0373C0.13334 12.9388 0.116135 12.8468 0.109683 12.744C0.103231 12.6412 0.0881766 12.5513 0.0817246 12.4528C0.0752727 12.3543 0.0645194 12.2622 0.0602181 12.1659C0.0559168 12.0695 0.043013 11.971 0.0408623 11.8704C0.0387117 11.7698 0.0258078 11.6734 0.0258078 11.5621C0.0258078 11.4507 0.0150545 11.3972 0.0150545 11.3094V11.288C0.0150545 11.2124 0.0150545 11.136 0.0150545 11.0589C0.0150545 11.0396 0.0150545 11.0204 0.0150545 11.0032C0.0150545 10.939 0.0150545 10.8748 0.0150545 10.8084C0.0150545 10.742 0.0150545 10.7249 0.0150545 10.6821C0.0150545 10.6393 0 10.5986 0 10.5558C0 10.5129 0 10.4701 0 10.4273C0 10.3845 0 10.3438 0 10.301C0 10.2253 0 10.1539 0 10.0868C0 10.0633 0 10.0633 0 10.0419C0 9.9648 0 9.88915 0 9.81492C0 9.80422 0 9.79351 0 9.78281C0 9.69145 0.0043013 9.60224 0.0129039 9.51517C0.0184149 9.41182 0.0299041 9.30888 0.0473143 9.20684C0.0488204 9.12097 0.0545624 9.03522 0.0645194 8.94991C0.0662735 8.83088 0.0763341 8.71212 0.0946285 8.59448C0.0991688 8.50555 0.108502 8.41692 0.122587 8.32898C0.127375 8.23136 0.138148 8.13411 0.154847 8.03779C0.160304 7.93575 0.172518 7.83419 0.191408 7.73375C0.198399 7.63446 0.212051 7.53575 0.23227 7.43827C0.240347 7.33744 0.255438 7.23728 0.277434 7.13852C0.286536 7.04191 0.302345 6.94604 0.324748 6.85161C0.335025 6.75048 0.352999 6.65027 0.378514 6.55185C0.387388 6.44786 0.404649 6.34476 0.43013 6.24353C0.443574 6.14276 0.46515 6.04323 0.494649 5.94591C0.507609 5.84435 0.529192 5.74408 0.559168 5.64615C0.57352 5.54657 0.596547 5.44842 0.627989 5.35282C0.643058 5.25087 0.667536 5.15053 0.701111 5.05306C0.716755 4.94941 0.742689 4.84757 0.778535 4.74902C0.795469 4.64659 0.822852 4.54615 0.860259 4.44926C0.87674 4.34003 0.905599 4.233 0.946285 4.13023C0.964597 4.02879 0.994171 3.9297 1.03446 3.83476C1.05287 3.73007 1.08392 3.62799 1.12694 3.53072C1.14581 3.42493 1.17834 3.32202 1.22372 3.22454C1.24345 3.11911 1.27746 3.01683 1.3248 2.9205C1.34539 2.81306 1.38161 2.70919 1.43233 2.61217C1.45279 2.50509 1.48979 2.4018 1.54201 2.30599C1.56263 2.19833 1.60116 2.09485 1.656 1.99981C1.67584 1.8886 1.71593 1.78193 1.77428 1.68507C1.79495 1.57543 1.83656 1.47076 1.89687 1.37674C1.91811 1.26688 1.96205 1.16262 2.02591 1.07056C2.04275 0.956867 2.08541 0.84849 2.15065 0.753677C2.16955 0.634598 2.2192 0.522451 2.29474 0.428225C2.33775 0.175572 2.4969 0 2.68401 0C2.89907 0 3.08403 0.256935 3.08403 0.575963C3.08744 0.695015 3.06237 0.813169 3.01091 0.920684C3.01063 1.03593 2.98571 1.14979 2.93779 1.2547C2.9366 1.36871 2.91323 1.48142 2.86896 1.58657C2.86443 1.69924 2.83967 1.81019 2.79584 1.91417C2.79369 2.02677 2.77261 2.13823 2.73347 2.2439C2.73141 2.35317 2.71255 2.46148 2.67756 2.56507C2.67513 2.66436 2.65995 2.76294 2.63239 2.8584C2.63208 2.97067 2.61616 3.08236 2.58508 3.19028C2.58383 3.2929 2.57011 3.39498 2.54422 3.49432C2.54343 3.59895 2.53044 3.70314 2.5055 3.80478C2.50471 3.89903 2.49462 3.99298 2.4754 4.08527V4.09812C2.47564 4.19586 2.46627 4.29338 2.44744 4.38931V4.4043C2.44755 4.49909 2.43891 4.5937 2.42163 4.68693C2.42163 4.68693 2.42163 4.70191 2.42163 4.70834C2.42152 4.79079 2.41505 4.8731 2.40227 4.95457C2.40227 4.9717 2.40227 4.99097 2.40227 5.0081C2.4026 5.08614 2.39757 5.16412 2.38722 5.24148C2.38722 5.26289 2.38722 5.2843 2.38722 5.30571C2.38728 5.37728 2.38297 5.44878 2.37432 5.51982C2.37432 5.54766 2.37432 5.57335 2.37432 5.60119C2.37432 5.66542 2.37432 5.72751 2.37432 5.78747C2.37432 5.84742 2.37432 5.85812 2.37432 5.89452C2.37432 5.93092 2.37432 6.00372 2.37432 6.05725C2.37432 6.11078 2.37432 6.14289 2.37432 6.18786C2.37432 6.23282 2.37432 6.27778 2.37432 6.32275C2.37432 6.36771 2.37432 6.42552 2.37432 6.47905C2.37432 6.53258 2.37432 6.53686 2.37432 6.56684C2.37432 6.6325 2.37432 6.69887 2.37432 6.76596C2.37432 6.79594 2.37432 6.82591 2.37432 6.85589C2.37432 6.92012 2.37432 6.98507 2.37432 7.05073C2.37432 7.06358 2.37432 7.07428 2.37432 7.08499C2.38335 7.16747 2.38766 7.25039 2.38722 7.33336C2.38722 7.33336 2.38722 7.35049 2.38722 7.35691C2.38722 7.419 2.39797 7.48324 2.40012 7.54961C2.41263 7.63334 2.42052 7.71768 2.42378 7.80227C2.437 7.88667 2.44561 7.97173 2.44959 8.05706C2.46034 8.12986 2.46894 8.20266 2.4754 8.27117C2.48185 8.33969 2.49905 8.4339 2.5055 8.5174C2.51196 8.60091 2.52486 8.63302 2.53131 8.69297C2.55234 8.77769 2.56885 8.86346 2.58078 8.94991C2.59655 9.01843 2.60874 9.0898 2.61734 9.16402C2.62594 9.23825 2.63956 9.30962 2.6582 9.37813C2.67827 9.45522 2.69476 9.53444 2.70767 9.6158C2.72057 9.66719 2.73347 9.72071 2.74423 9.77638C2.75498 9.83205 2.78079 9.91342 2.79584 9.9905C2.8109 10.0676 2.83455 10.1297 2.84961 10.2046C2.86466 10.2795 2.88402 10.3224 2.89907 10.3845C2.91413 10.4466 2.93994 10.5129 2.95714 10.5793C2.97435 10.6457 2.998 10.7056 3.01736 10.7699C3.03671 10.8341 3.05822 10.8876 3.07543 10.9476C3.09263 11.0075 3.11844 11.0653 3.1378 11.1253C3.15715 11.1852 3.18296 11.2431 3.20231 11.303C3.22167 11.363 3.24748 11.4186 3.26898 11.4764C3.29049 11.5342 3.3163 11.5878 3.33781 11.6456C3.35931 11.7034 3.38727 11.7591 3.40878 11.8169C3.43028 11.8747 3.46039 11.9282 3.4819 11.986C3.50341 12.0438 3.53136 12.0888 3.55287 12.1423C3.57438 12.1959 3.60449 12.2472 3.63029 12.3029C3.6561 12.3586 3.68621 12.4121 3.71417 12.4699C3.74213 12.5277 3.76794 12.5706 3.79374 12.6241C3.81955 12.6776 3.84751 12.7226 3.87332 12.7718C3.89912 12.8211 3.93353 12.8746 3.96149 12.9281C3.98945 12.9817 4.01956 13.0266 4.04752 13.078C4.07548 13.1294 4.10559 13.1722 4.13355 13.2215C4.1615 13.2707 4.19806 13.3199 4.22817 13.3713C4.25828 13.4227 4.29054 13.4655 4.32065 13.5148C4.35076 13.564 4.38302 13.6047 4.41313 13.6518C4.44324 13.6989 4.4798 13.746 4.51206 13.7974C4.54432 13.8488 4.57658 13.8852 4.60669 13.9302C4.6368 13.9751 4.67766 14.0244 4.71207 14.0736C4.74648 14.1229 4.77874 14.1593 4.811 14.2064C4.84326 14.2535 4.87982 14.292 4.91423 14.3391C4.94864 14.3862 4.9852 14.4248 5.01746 14.4676C5.04972 14.5104 5.09058 14.5532 5.12714 14.5982C5.16371 14.6432 5.20027 14.6817 5.23683 14.7267C5.27339 14.7716 5.30995 14.808 5.34436 14.8509C5.37877 14.8937 5.42178 14.9344 5.45834 14.9793C5.49491 15.0243 5.53362 15.0585 5.57018 15.0992C5.60674 15.1399 5.6519 15.1827 5.69061 15.2256C5.72933 15.2684 5.76804 15.3026 5.80675 15.3433C5.84546 15.384 5.88847 15.4204 5.92719 15.4632C5.9659 15.506 6.00891 15.5403 6.04762 15.581C6.08633 15.6217 6.13365 15.6602 6.17451 15.7009L6.28849 15.8058C6.33294 15.8429 6.37667 15.8822 6.41968 15.9236C6.4627 15.965 6.50499 16.0021 6.54657 16.0349C6.59102 16.0706 6.63475 16.1077 6.67776 16.1462C6.72077 16.1848 6.76379 16.2205 6.8068 16.2533C6.85125 16.2861 6.89498 16.3211 6.93799 16.3582C6.981 16.3953 7.02688 16.431 7.07563 16.4653C7.12151 16.4981 7.16596 16.5324 7.20897 16.568C7.25198 16.6037 7.2993 16.6394 7.35091 16.6751L7.47995 16.7693C7.53013 16.8021 7.5796 16.8371 7.62835 16.8742C7.67351 16.9042 7.71868 16.9363 7.76384 16.9684C7.809 17.0005 7.86277 17.0327 7.91223 17.0691C7.9617 17.1055 8.00901 17.1312 8.05633 17.1633L8.19612 17.2532C8.24773 17.2832 8.29863 17.3153 8.34881 17.3495L8.49291 17.4373C8.54596 17.4673 8.59829 17.4987 8.64991 17.5315L8.7897 17.6129C8.84346 17.6407 8.89723 17.6729 8.951 17.705L9.09079 17.7842C9.14456 17.812 9.19832 17.8399 9.24994 17.8698C9.30155 17.8998 9.35962 17.9255 9.41554 17.9576L9.55533 18.0304C9.60909 18.0561 9.66286 18.0818 9.71448 18.1118C9.76609 18.1418 9.82416 18.1632 9.87793 18.1932L10.0371 18.2702L10.1919 18.343L10.3446 18.4137C10.4005 18.4365 10.4557 18.4615 10.5102 18.4886L10.6715 18.5593C10.7296 18.5807 10.7855 18.6064 10.8414 18.6321L10.9941 18.6963L11.1554 18.7627L11.3189 18.8269L11.4845 18.8912L11.6522 18.9554L11.8157 19.0153L11.9791 19.0732L12.1404 19.1288L12.3125 19.1866L12.4695 19.238L12.6394 19.2701L12.7985 19.3194L12.9706 19.3708L13.1383 19.42L13.3082 19.4693L13.4588 19.5121L13.6351 19.5613L13.805 19.6063L13.9642 19.647L14.1212 19.6855L14.2932 19.7262L14.4567 19.7647L14.6373 19.8054L14.7793 19.8375L14.9578 19.8761L15.1126 19.9082L15.2761 19.9403L15.4395 19.9724L15.5943 20.0003L15.7513 20.0281L15.9277 20.0581L16.0739 20.0816L16.2309 20.1052C19.0863 16.5097 22.482 13.3745 26.2981 10.8105C29.7172 8.50792 33.4065 6.63048 37.2836 5.22007C38.8704 4.63011 40.4976 4.15427 42.1527 3.79622L42.2387 3.78123L42.3248 3.79622C43.9788 4.15862 45.6045 4.63875 47.1895 5.23291C51.0667 6.64242 54.756 8.51915 58.175 10.8213C61.9622 13.3701 65.3349 16.4816 68.1755 20.0474L68.253 20.0345L68.41 20.0067L68.5627 19.9789L68.7261 19.9467L68.8917 19.9146L69.0465 19.8825L69.2251 19.844L69.367 19.8118L69.5433 19.7712L69.7111 19.7326L69.8961 19.6984L70.0509 19.6598L70.2101 19.6191L70.3778 19.5742L70.5563 19.5249L70.7068 19.4821L70.8768 19.4329L71.0467 19.3815L71.2123 19.3301L71.3757 19.2701L71.5413 19.2166L71.7048 19.1631L71.8703 19.1074L72.0338 19.0496L72.2015 18.9897L72.365 18.9297L72.5306 18.8655L72.6962 18.8012L72.8553 18.7391C72.9113 18.7149 72.9672 18.692 73.0231 18.6706L73.1736 18.6085C73.2281 18.5828 73.2833 18.5593 73.3392 18.5379C73.393 18.5122 73.4489 18.4886 73.5027 18.4651C73.5565 18.4415 73.6124 18.4137 73.6683 18.3901L73.8231 18.3195L73.9715 18.2488C74.026 18.2203 74.0805 18.1939 74.135 18.1696L74.292 18.0904C74.345 18.0618 74.3988 18.0347 74.4533 18.009L74.5952 17.9341C74.649 17.9041 74.7028 17.8741 74.7565 17.8484C74.8103 17.8227 74.8619 17.7885 74.9157 17.7628L75.0555 17.6836C75.1085 17.6507 75.1623 17.62 75.2168 17.5915L75.3544 17.5123C75.4074 17.478 75.4619 17.4452 75.5178 17.4138L75.6576 17.3281L75.806 17.2361C75.8548 17.2018 75.9043 17.1697 75.9544 17.1397L76.0942 17.0477C76.1437 17.0134 76.1932 16.9791 76.2426 16.947L76.3781 16.8528C76.4254 16.8164 76.4727 16.7822 76.5222 16.75C76.5717 16.7179 76.6147 16.6815 76.662 16.6494C76.7093 16.6173 76.7502 16.5809 76.7953 16.5488C76.8405 16.5167 76.8857 16.4781 76.933 16.4439C76.9803 16.4096 77.0276 16.3668 77.0749 16.3325L77.1975 16.234C77.242 16.1941 77.2878 16.1562 77.3351 16.1205C77.3825 16.0849 77.424 16.0499 77.4599 16.0156C77.5029 15.9757 77.5466 15.9378 77.5911 15.9021C77.6355 15.8665 77.6793 15.8272 77.7223 15.7844C77.761 15.7458 77.8004 15.7094 77.8405 15.6752C77.8807 15.6409 77.9223 15.6017 77.9653 15.5574C78.004 15.5167 78.0449 15.4782 78.0857 15.4418C78.1266 15.4054 78.1653 15.3604 78.2062 15.3219C78.247 15.2834 78.2814 15.2427 78.3223 15.2041C78.3632 15.1656 78.4019 15.1185 78.4427 15.0778C78.4836 15.0371 78.5159 14.9965 78.5546 14.9579C78.5933 14.9194 78.6277 14.8744 78.6642 14.8359C78.7008 14.7973 78.7417 14.7459 78.7825 14.7031C78.8234 14.6603 78.8492 14.6239 78.8836 14.5854C78.918 14.5468 78.9567 14.4933 78.9954 14.4483C79.0342 14.4034 79.0643 14.3605 79.1008 14.3177C79.1374 14.2749 79.1696 14.2256 79.2062 14.1807C79.2428 14.1357 79.2686 14.095 79.303 14.0522C79.3374 14.0094 79.3718 13.9537 79.4084 13.9088C79.4449 13.8638 79.4707 13.8188 79.503 13.776C79.5353 13.7332 79.5675 13.6797 79.6019 13.6326C79.6363 13.5854 79.6621 13.5383 79.6944 13.4934C79.7267 13.4484 79.7525 13.4013 79.7826 13.3563C79.8127 13.3114 79.8471 13.2493 79.8794 13.2C79.9116 13.1508 79.9374 13.0994 79.9675 13.0523C79.9976 13.0052 80.0213 12.956 80.0493 12.9089C80.0772 12.8617 80.1073 12.8018 80.1374 12.7504C80.1676 12.699 80.1869 12.6541 80.2127 12.6091C80.2385 12.5641 80.2686 12.4978 80.2987 12.4442C80.3289 12.3907 80.3482 12.3415 80.374 12.2922C80.3998 12.243 80.4256 12.1766 80.4557 12.1231C80.4858 12.0695 80.5009 12.0203 80.5267 11.9689C80.5525 11.9175 80.5762 11.849 80.6041 11.7912C80.6321 11.7334 80.6493 11.6798 80.673 11.6285C80.6966 11.5771 80.716 11.5171 80.7375 11.4657C80.759 11.4143 80.7805 11.3458 80.8063 11.288C80.8321 11.2302 80.8472 11.166 80.8708 11.1082C80.8945 11.0504 80.9095 10.9861 80.9332 10.9283C80.9568 10.8705 80.9719 10.8063 80.9934 10.7463C81.0149 10.6864 81.03 10.62 81.0515 10.5579C81.073 10.4958 81.0859 10.4337 81.1052 10.3738C81.1246 10.3138 81.1396 10.2389 81.1611 10.1725C81.1827 10.1061 81.1934 10.0419 81.2128 9.97765C81.2321 9.91342 81.2407 9.85132 81.2579 9.78923C81.2751 9.72714 81.2859 9.64792 81.3052 9.57512C81.3246 9.50232 81.3311 9.44023 81.3461 9.37385C81.3612 9.30748 81.3719 9.22183 81.3891 9.14903C81.4063 9.07624 81.4106 9.00772 81.4278 8.93492C81.445 8.86212 81.4472 8.79147 81.4622 8.72081C81.4773 8.65015 81.4794 8.57093 81.4945 8.5067C81.5096 8.44246 81.5117 8.35039 81.5246 8.27331C81.5305 8.19149 81.5405 8.11002 81.5547 8.02922C81.5547 7.96214 81.5612 7.89576 81.5741 7.8301C81.5764 7.72753 81.5858 7.62523 81.602 7.52392C81.602 7.47467 81.602 7.42543 81.602 7.37832C81.602 7.36333 81.602 7.34835 81.602 7.33336C81.6017 7.25111 81.606 7.1689 81.6149 7.08713C81.6149 7.07428 81.6149 7.06358 81.6149 7.05073C81.6149 6.97936 81.6149 6.90799 81.6149 6.83662C81.6149 6.81307 81.6149 6.78737 81.6149 6.76382C81.6149 6.70101 81.6149 6.63892 81.6149 6.57754C81.6149 6.54328 81.6149 6.51117 81.6149 6.47691C81.6149 6.44265 81.6149 6.37413 81.6149 6.32275C81.6149 6.27136 81.6149 6.23282 81.6149 6.18786C81.6149 6.14289 81.6149 6.10007 81.6149 6.05725C81.6149 6.01442 81.6149 5.95019 81.6149 5.89452C81.6149 5.83885 81.6149 5.82386 81.6149 5.78961C81.6116 5.72613 81.6116 5.66252 81.6149 5.59905C81.6149 5.57121 81.6149 5.54124 81.6149 5.5134C81.6062 5.44236 81.6019 5.37086 81.602 5.29929C81.602 5.27788 81.602 5.25861 81.602 5.2372C81.5908 5.15918 81.585 5.08048 81.5848 5.00167C81.5848 4.98668 81.5848 4.96955 81.5848 4.95457C81.5717 4.87027 81.5652 4.78508 81.5655 4.69977C81.5655 4.68478 81.5655 4.6698 81.5655 4.65267C81.5512 4.56776 81.544 4.48182 81.544 4.39573C81.5227 4.29505 81.5119 4.19244 81.5117 4.08955C81.4902 3.99034 81.4794 3.88914 81.4794 3.78765C81.4566 3.69149 81.4443 3.59313 81.4429 3.49432C81.4146 3.38811 81.4002 3.27874 81.3999 3.16887C81.3729 3.07042 81.3585 2.969 81.3569 2.86697C81.3246 2.76358 81.3072 2.65617 81.3052 2.54794C81.2711 2.4442 81.253 2.33592 81.2515 2.22677C81.225 2.12912 81.2134 2.02808 81.2171 1.92701C81.1743 1.81997 81.1517 1.70603 81.1504 1.59086C81.1043 1.48319 81.0802 1.36746 81.0794 1.25042C81.0331 1.14659 81.0089 1.0343 81.0085 0.920684C80.9549 0.813661 80.9276 0.695519 80.9289 0.575963C80.9289 0.256935 81.1074 0 81.3289 0C81.5182 0 81.6752 0.186278 81.7182 0.428225C81.7889 0.520313 81.8354 0.628483 81.8537 0.742971C81.9233 0.84022 81.969 0.952451 81.987 1.07056C82.0485 1.16105 82.091 1.26303 82.1117 1.37032C82.1762 1.46833 82.2201 1.57831 82.2408 1.69363C82.2973 1.78809 82.3366 1.89174 82.3569 1.99981C82.4117 2.09485 82.4503 2.19833 82.4709 2.30599C82.5245 2.40367 82.5622 2.50918 82.5827 2.6186C82.631 2.71247 82.6658 2.81266 82.686 2.91621C82.7356 3.01498 82.7711 3.12021 82.7913 3.22882C82.8363 3.32497 82.8688 3.42641 82.8881 3.53072C82.9304 3.62456 82.9614 3.72301 82.9806 3.82405C83.0267 3.93019 83.0592 4.04169 83.0774 4.15593C83.1137 4.24859 83.1404 4.34473 83.157 4.44284C83.1945 4.54041 83.2219 4.64157 83.2387 4.74474C83.2742 4.84192 83.3001 4.94231 83.3161 5.04449C83.3497 5.14196 83.3742 5.24231 83.3892 5.34425C83.421 5.44194 83.4441 5.54226 83.458 5.64401C83.488 5.74194 83.5096 5.84222 83.5226 5.94377C83.5507 6.04119 83.5708 6.14072 83.5828 6.24138C83.6101 6.34034 83.6295 6.44129 83.6408 6.54328C83.6653 6.64037 83.6826 6.73914 83.6925 6.83876C83.7161 6.93666 83.7326 7.03612 83.7419 7.13637C83.7638 7.23444 83.7789 7.33388 83.7871 7.43399C83.8055 7.52376 83.8185 7.61457 83.8258 7.70591C83.849 7.82099 83.8634 7.93767 83.8688 8.05492C83.8833 8.14495 83.8927 8.23574 83.8968 8.32684C83.912 8.42469 83.9214 8.52336 83.9247 8.62232C83.9382 8.71886 83.9461 8.81608 83.9484 8.91351C83.9615 9.01507 83.9687 9.1173 83.9699 9.21969C83.9811 9.31851 83.9868 9.41786 83.9871 9.51731C83.9871 9.60295 84 9.6886 84 9.77853V9.79565C84 9.87559 84 9.95624 84 10.0376C84 10.059 84 10.0804 84 10.0997C84 10.1639 84 10.2296 84 10.2967C84 10.3309 84 10.3631 84 10.3952C84 10.4273 84 10.5001 84 10.5515C84 10.6029 84 10.6457 84 10.6906C84 10.7356 84 10.7656 84 10.802C84 10.8384 84 10.9283 84 10.9904C84 11.0118 84 11.0311 84 11.0525C84 11.1267 84 11.1981 84 11.2666C84 11.2666 84 11.2859 84 11.2944C84 11.3858 83.9964 11.4757 83.9893 11.5642C83.9821 11.6527 83.9771 11.7505 83.9742 11.8576C83.9742 11.9561 83.9677 12.0531 83.9548 12.1488C83.9419 12.2444 83.9341 12.3422 83.9312 12.4421C83.9312 12.5406 83.9219 12.6369 83.9032 12.7311C83.9032 12.8275 83.886 12.9196 83.8731 13.0116C83.8602 13.1037 83.8538 13.215 83.8366 13.3114C83.8193 13.4077 83.8129 13.5062 83.7978 13.6004C83.7828 13.6946 83.7742 13.7889 83.757 13.8809C83.7398 13.973 83.729 14.0779 83.7097 14.1743C83.6903 14.2706 83.6796 14.3605 83.6602 14.4483C83.6408 14.5361 83.6279 14.6432 83.6043 14.7395C83.5806 14.8359 83.5699 14.9258 83.5484 15.0157C83.5269 15.1056 83.5097 15.2106 83.4839 15.3069C83.458 15.4033 83.4451 15.4911 83.4193 15.5788C83.3935 15.6666 83.3742 15.7737 83.3484 15.8679C83.3226 15.9621 83.3053 16.0456 83.2795 16.1312C83.2537 16.2169 83.2322 16.3175 83.2043 16.4075C83.1763 16.4974 83.1527 16.5959 83.1225 16.6858C83.0924 16.7757 83.0688 16.8721 83.0387 16.962C83.0086 17.0519 82.9849 17.1419 82.9548 17.2275C82.9247 17.3131 82.8967 17.4116 82.8645 17.4994C82.8322 17.5872 82.8042 17.6814 82.7698 17.7692C82.7354 17.857 82.7096 17.9491 82.6731 18.0347C82.6365 18.1204 82.6107 18.2103 82.5763 18.2938C82.5419 18.3773 82.5096 18.4736 82.473 18.5593C82.4365 18.6449 82.4064 18.7306 82.3698 18.8119C82.3333 18.8933 82.2967 18.9961 82.2558 19.0839C82.215 19.1716 82.1892 19.2466 82.1505 19.3237C82.1117 19.4007 82.0752 19.4992 82.0343 19.5827C81.9935 19.6662 81.959 19.754 81.916 19.8375C81.873 19.921 81.8365 20.011 81.7934 20.0923C81.7504 20.1737 81.716 20.2572 81.673 20.3343C81.63 20.4114 81.5934 20.5013 81.5483 20.5805C81.5031 20.6597 81.4665 20.7454 81.4214 20.8246C81.3762 20.9038 81.3332 20.9959 81.2859 21.0773C81.2386 21.1586 81.202 21.2357 81.1568 21.3106C81.1117 21.3856 81.0708 21.4691 81.0257 21.544C80.9805 21.619 80.9375 21.7003 80.8923 21.7753C80.8472 21.8502 80.7998 21.938 80.7504 22.0151C80.7009 22.0921 80.66 22.1714 80.6106 22.2442C80.5611 22.317 80.5138 22.4047 80.4622 22.4818C80.4106 22.5589 80.3719 22.6296 80.3224 22.6959C80.2729 22.7623 80.2278 22.8458 80.1783 22.9101C80.1288 22.9743 80.0751 23.0706 80.0192 23.1477C79.9632 23.2248 79.9245 23.2912 79.8751 23.3618C79.8256 23.4325 79.7761 23.5117 79.7224 23.5759C79.6686 23.6402 79.6191 23.7258 79.5654 23.7901C79.5116 23.8543 79.4664 23.9335 79.4127 24.0042C79.3589 24.0748 79.303 24.1583 79.2449 24.2311C79.1869 24.3039 79.1481 24.3639 79.0965 24.426C79.0449 24.4881 78.989 24.5716 78.9331 24.6401C78.8772 24.7086 78.8234 24.7835 78.7675 24.8542C78.7116 24.9249 78.6621 24.9891 78.6062 25.0533C78.5503 25.1176 78.4943 25.1946 78.4363 25.2674C78.3782 25.3402 78.3309 25.398 78.2771 25.458C78.2234 25.5179 78.161 25.5993 78.1008 25.6721C78.0406 25.7449 77.9911 25.8027 77.933 25.8648C77.875 25.9269 77.819 25.9997 77.7588 26.0618C77.6986 26.1239 77.647 26.1924 77.5889 26.2524C77.5309 26.3123 77.4792 26.3765 77.4233 26.4343C77.3674 26.4922 77.3115 26.5607 77.2534 26.6206C77.1954 26.6806 77.1351 26.7512 77.0749 26.8133C77.0147 26.8754 76.9566 26.9397 76.8964 26.9996C76.8362 27.0596 76.7803 27.1238 76.7201 27.1816C76.6598 27.2394 76.6061 27.3015 76.5459 27.3572C76.4856 27.4128 76.4319 27.4771 76.3717 27.5327C76.3114 27.5884 76.2491 27.6569 76.1867 27.7147C76.1243 27.7726 76.0663 27.8368 76.0039 27.8925C75.9415 27.9481 75.8921 28.0038 75.834 28.0552C75.7759 28.1066 75.7136 28.1729 75.649 28.2286C75.5845 28.2843 75.5308 28.3421 75.4705 28.3956C75.4103 28.4491 75.3436 28.5155 75.2791 28.5712C75.2146 28.6269 75.163 28.6783 75.1028 28.7296C75.0426 28.781 74.9866 28.8367 74.9264 28.8881C74.8662 28.9395 74.806 28.9994 74.7436 29.0508C74.6813 29.1022 74.6103 29.1707 74.5436 29.2264C74.4769 29.282 74.4339 29.3227 74.378 29.3698C74.3221 29.4169 74.2533 29.479 74.1887 29.5304C74.1242 29.5818 74.0705 29.6332 74.0081 29.6824L73.9543 29.7295C75.6609 33.7469 76.8182 37.9741 77.3954 42.298C81.8149 74.2778 81.3848 79.9176 81.3633 80.1445L81.3375 80.4378L81.0579 80.5299C77.4505 81.9201 74.0968 83.8904 71.1305 86.3623C64.2014 92.03 59.4137 99.8747 57.5535 108.609L57.5105 108.801L48.6928 113.996L51.7252 58.3243ZM53.3554 52.7873C52.808 52.6039 52.3034 52.3127 51.8715 51.9309C53.9796 51.4305 56.0067 50.6377 57.8933 49.5756C57.6705 50.4264 57.2664 51.2195 56.7083 51.9009L57.1535 52.4191C56.4352 52.82 55.6242 53.0274 54.8007 53.0207H54.777C54.2945 53.0173 53.8134 52.9385 53.3554 52.7873ZM29.2036 52.9351C28.3802 52.9418 27.5691 52.7344 26.8508 52.3334L27.296 51.8153C26.7378 51.1339 26.3336 50.3408 26.111 49.49C27.9976 50.552 30.0247 51.3449 32.1328 51.8452C31.7018 52.2271 31.1978 52.5184 30.651 52.7017C30.192 52.8462 29.7131 52.9184 29.2316 52.9158L29.2036 52.9351Z"
        fill="url(#paint0_linear_1_218)"
      />
      <defs>
        <linearGradient id="paint0_linear_1_218" x1="42" y1="0" x2="42" y2="298" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F0DE93" />
          <stop offset="1" stopColor="#A56A07" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default GradientLogo
