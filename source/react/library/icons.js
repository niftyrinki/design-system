import React from 'react';

const icons = {
  checkmark: (
    <path d="M9.85,19.146c-1.13,0-2.229-0.46-3.02-1.26l-6.106-6.189C-0.25,10.708-0.24,9.116,0.748,8.142,C1.737,7.167,3.33,7.177,4.303,8.165l5.541,5.617L22.697,0.749c0.976-0.989,2.567-1,3.557-0.024,c0.987,0.975,0.998,2.567,0.024,3.556L12.861,17.885C12.074,18.684,10.976,19.145,9.85,19.146z" />
  ),
  delete: (
    <path d="M15,0C6.716,0,0,6.716,0,15s6.716,15,15,15s15-6.716,15-15S23.284,0,15,0z M20.51,17.975,c0.469,0.47,0.732,1.104,0.732,1.769s-0.264,1.299-0.732,1.768c-0.469,0.47-1.104,0.732-1.768,0.732s-1.299-0.265-1.768-0.732,l-2.476-2.475l-2.476,2.475c-0.469,0.469-1.104,0.732-1.768,0.732s-1.299-0.263-1.768-0.732c-0.471-0.469-0.732-1.104-0.732-1.768,s0.264-1.299,0.732-1.769l2.475-2.475l-2.475-2.475c-0.469-0.47-0.732-1.104-0.732-1.769S8.02,9.958,8.488,9.489,c0.469-0.47,1.104-0.732,1.768-0.732s1.299,0.265,1.768,0.732l2.476,2.475l2.476-2.475c0.469-0.469,1.104-0.732,1.768-0.732,s1.299,0.263,1.768,0.732c0.471,0.469,0.732,1.104,0.732,1.768s-0.264,1.299-0.732,1.769L18.035,15.5L20.51,17.975z" />
  ),
  loader: (
    <g>
      <path opacity="0.2" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946, s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634,c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z" />
      <path d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0,C22.32,8.481,24.301,9.057,26.013,10.047z">
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="rotate"
          from="0 20 20"
          to="360 20 20"
          dur="0.5s"
          repeatCount="indefinite"
        />
      </path>
    </g>
  ),
};

export default icons;
