import React from 'react';

const defaultViewBox = '0 0 30 30';

const icons = {
  edit: {
    viewBox: '0 0 25.979 25.979',
    svg: (
      <g id="pencil">
        <path d="M25.301,3.399l-2.724-2.722c-0.738-0.738-1.794-0.892-2.396-0.369l5.489,5.489C26.191,5.196,26.039,4.14,25.301,3.399z" />
        <rect x="15.956" y="2.696" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 18.1079 35.9976)" width="1.106" height="23.105" />
        <polygon points="23.439,4.863 21.143,2.568 4.778,18.822 7.147,21.156" />
        <rect x="11.188" y="-2.011" transform="matrix(0.7067 0.7075 -0.7075 0.7067 10.2121 -5.5517)" width="1.228" height="23.105" />
        <polygon points="0,25.979 2.479,25.186 0.779,23.487" />
        <polygon points="1.207,22.358 3.467,24.801 7.928,23.438 2.483,18.049" />
      </g>
    ),
  },

  // group: editing, filename: delete.svg
  minus: {
    viewBox: '0 0 25 5',
    svg: (
      <g>
        <path d="M22.5,5C23.881,5,25,3.881,25,2.5S23.881,0,22.5,0h-20C1.119,0,0,1.119,0,2.5S1.119,5,2.5,5H22.5z" />
      </g>
    ),
  },

  // group: editing, filename: add.svg
  plus: {
    viewBox: '0 0 25 25',
    svg: (
      <g>
        <path d="M25,12.5c0-1.381-1.119-2.5-2.5-2.5H15V2.5C15,1.119,13.881,0,12.5,0S10,1.119,10,2.5V10H2.5C1.119,10,0,11.119,0,12.5S1.119,15,2.5,15H10v7.5c0,1.381,1.119,2.5,2.5,2.5s2.5-1.119,2.5-2.5V15h7.5C23.881,15,25,13.881,25,12.5z" />
      </g>
    ),
  },

  // group: editing, filename: correct.svg
  checkmark: {
    viewBox: '0 0 27.002 19.146',
    svg: (
      <g>
        <path d="M9.85,19.146c-1.13,0-2.229-0.46-3.02-1.26l-6.106-6.189C-0.25,10.708-0.24,9.116,0.748,8.142C1.737,7.167,3.33,7.177,4.303,8.165l5.541,5.617L22.697,0.749c0.976-0.989,2.567-1,3.557-0.024c0.987,0.975,0.998,2.567,0.024,3.556L12.861,17.885C12.074,18.684,10.976,19.145,9.85,19.146z" />
      </g>
    ),
  },

  // Half of the code icon. group: web, filename: code.svg
  'chevron-down': {
    viewBox: '0 0 30 19',
    svg: (
      <g>
        <path d="M23.2304376,6.76849532 L11.6544829,-4.81114304 C10.3889502,-6.07509243 8.04225512,-6.07867302 6.76956239,-4.80756244 C6.118001,-4.15589448 5.76000023,-3.28760064 5.76000023,-2.36738819 C5.76000023,-1.44180485 6.119791,-0.575301297 6.76956239,0.0745763657 L15.903952,9.21045988 L6.76956239,18.3463434 C6.118001,18.9980114 5.76000023,19.8663052 5.76000023,20.7865177 C5.76000023,21.7067301 6.118001,22.575024 6.7731424,23.2320628 C7.4264938,23.8819405 8.29464565,24.2399998 9.21291762,24.2399998 C10.1311896,24.2399998 10.9975514,23.8819405 11.6526929,23.2302725 L23.2286476,11.6524245 C23.871259,11.009708 24.2399998,10.1199306 24.2399998,9.21045988 C24.2399998,8.30098921 23.873049,7.4112118 23.2304376,6.76849532 Z" transform="translate(15.000000, 9.240000) rotate(90.000000) translate(-15.000000, -9.240000) " />
      </g>
    ),
  },

  // Half of the code icon. group: web, filename: code.svg
  'chevron-up': {
    viewBox: '0 0 30 19',
    svg: (
      <g transform="translate(15.000000, 9.500000) rotate(-270.000000) translate(-15.000000, -9.500000) translate(5.500000, -5.500000)">
        <path d="M1.0095621,17.4715045 L12.5855169,29.0511428 C13.8510496,30.3150922 16.1977446,30.3186728 17.4704374,29.0475622 C18.1219988,28.3958943 18.4799995,27.5276004 18.4799995,26.607388 C18.4799995,25.6818046 18.1202088,24.8153011 17.4704374,24.1654234 L8.33604782,15.0295399 L17.4704374,5.8936564 C18.1219988,5.2419884 18.4799995,4.3736946 18.4799995,3.4534821 C18.4799995,2.5332697 18.1219988,1.6649758 17.4668574,1.007937 C16.813506,0.3580593 15.9453541,2.49986698e-10 15.0270821,2.49986698e-10 C14.1088102,2.49986698e-10 13.2424484,0.3580593 12.5873069,1.0097273 L1.0113521,12.5875753 C0.368740701,13.2302918 -7.97258327e-16,14.1200692 -7.97258327e-16,15.0295399 C2.75545536e-15,15.9390106 0.366950701,16.828788 1.0095621,17.4715045 Z" />
      </g>
    ),
  },

  // Half of the code icon. group: web, filename: code.svg
  'chevron-right': {
    viewBox: '0 0 30 19',
    svg: (
      <g transform="translate(15.000000, 9.500000) rotate(-180.000000) translate(-15.000000, -9.500000) translate(5.500000, -5.500000)">
        <path d="M1.0095621,17.4715045 L12.5855169,29.0511428 C13.8510496,30.3150922 16.1977446,30.3186728 17.4704374,29.0475622 C18.1219988,28.3958943 18.4799995,27.5276004 18.4799995,26.607388 C18.4799995,25.6818046 18.1202088,24.8153011 17.4704374,24.1654234 L8.33604782,15.0295399 L17.4704374,5.8936564 C18.1219988,5.2419884 18.4799995,4.3736946 18.4799995,3.4534821 C18.4799995,2.5332697 18.1219988,1.6649758 17.4668574,1.007937 C16.813506,0.3580593 15.9453541,2.49986698e-10 15.0270821,2.49986698e-10 C14.1088102,2.49986698e-10 13.2424484,0.3580593 12.5873069,1.0097273 L1.0113521,12.5875753 C0.368740701,13.2302918 -7.97258327e-16,14.1200692 -7.97258327e-16,15.0295399 C2.75545536e-15,15.9390106 0.366950701,16.828788 1.0095621,17.4715045 Z" />
      </g>
    ),
  },

  // group: web, filename: delete.svg
  delete: {
    viewBox: defaultViewBox,
    svg: (
      <g>
        <path d="M15,0C6.716,0,0,6.716,0,15s6.716,15,15,15s15-6.716,15-15S23.284,0,15,0z M20.51,17.975c0.469,0.47,0.732,1.104,0.732,1.769s-0.264,1.299-0.732,1.768c-0.469,0.47-1.104,0.732-1.768,0.732s-1.299-0.265-1.768-0.732l-2.476-2.475l-2.476,2.475c-0.469,0.469-1.104,0.732-1.768,0.732s-1.299-0.263-1.768-0.732c-0.471-0.469-0.732-1.104-0.732-1.768s0.264-1.299,0.732-1.769l2.475-2.475l-2.475-2.475c-0.469-0.47-0.732-1.104-0.732-1.769S8.02,9.958,8.488,9.489c0.469-0.47,1.104-0.732,1.768-0.732s1.299,0.265,1.768,0.732l2.476,2.475l2.476-2.475c0.469-0.469,1.104-0.732,1.768-0.732s1.299,0.263,1.768,0.732c0.471,0.469,0.732,1.104,0.732,1.768s-0.264,1.299-0.732,1.769L18.035,15.5L20.51,17.975z" />
      </g>
    ),
  },

  // group: editing, filename: delete-2.svg
  close: {
    viewBox: '0 0 19.143 19.144',
    svg: (
      <g id="delete-2">
        <path d="M13.106,9.571l5.304-5.303c0.47-0.469,0.732-1.104,0.732-1.768S18.88,1.202,18.41,0.732c-0.977-0.977-2.559-0.977-3.535,0L9.571,6.036L4.269,0.732C3.8,0.264,3.164,0.001,2.501,0.001S1.202,0.264,0.732,0.733C0.264,1.202,0,1.838,0,2.501S0.264,3.8,0.732,4.269l5.304,5.303l-5.304,5.304c-0.977,0.977-0.977,2.559,0.001,3.536c0.469,0.469,1.104,0.732,1.768,0.732S3.8,18.88,4.269,18.411l5.303-5.304l5.304,5.304c0.977,0.977,2.559,0.977,3.535,0c0.47-0.47,0.733-1.105,0.732-1.769c0-0.663-0.263-1.299-0.731-1.768L13.106,9.571z" />
      </g>
    ),
  },

  loader: {
    viewBox: '4 4 32 32',
    svg: (
      <g>
        <path opacity="0.2" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z" />
        <path d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0C22.32,8.481,24.301,9.057,26.013,10.047z">
          <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 20 20" to="360 20 20" dur="0.5s" repeatCount="indefinite" />
        </path>
      </g>
    ),
  },

  filter: {
    viewBox: '0 7 17.54 26',
    svg: (
      <g>
        <path
          d="M17.306,29.699L11.77,21v-9c0.553,0,1-0.447,1-1v-1c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v1c0,0.553,0.447,1,1,1v9
          l-5.536,8.699c-0.293,0.461-0.312,1.045-0.049,1.524C0.448,31.702,0.951,32,1.498,32h14.544c0.547,0,1.05-0.298,1.313-0.776
          C17.617,30.744,17.599,30.16,17.306,29.699z"
        />
      </g>
    ),
  },

  search: {
    viewBox: '0 0 29.433 29.489',
    svg: (
      <g>
        <path
          d="M17.074,2.929C13.168-0.977,6.836-0.977,2.93,2.93s-3.906,10.239-0.001,14.146c3.412,3.412,8.675,3.842,12.556,1.294
            l3.584,3.585c-0.375,0.375-0.586,0.884-0.586,1.414s0.211,1.039,0.586,1.414l3.537,3.536c0.75,0.75,1.768,1.171,2.828,1.171
            s2.078-0.421,2.828-1.172c1.562-1.562,1.562-4.095,0-5.656l-3.537-3.536c-0.78-0.78-2.046-0.78-2.828,0.001l-3.574-3.574
            C20.92,11.664,20.506,6.361,17.074,2.929z M5.05,14.954c-2.73-2.73-2.729-7.173,0.001-9.903s7.172-2.731,9.902-0.001
            s2.73,7.174,0,9.904S7.78,17.685,5.05,14.954z"
        />
      </g>
    ),
  },

  gear: {
    viewBox: defaultViewBox,
    svg: (
      <g id="gear">
        <path
          d="M29.021,17C29.562,17,30,16.562,30,16.021v-2.041C30,13.438,29.562,13,29.021,13h-2.265
          c-0.309-1.802-1.015-3.464-2.033-4.895L26.328,6.5c0.382-0.382,0.382-1.002,0-1.385l-1.443-1.443c-0.382-0.382-1.003-0.382-1.385,0
          l-1.607,1.607C20.462,4.264,18.801,3.56,17,3.254V0.979C17,0.438,16.562,0,16.021,0h-2.041C13.438,0,13,0.438,13,0.979V3.25
          c-1.804,0.303-3.47,1.004-4.903,2.019L6.5,3.672c-0.382-0.382-1.002-0.382-1.385,0L3.672,5.115C3.29,5.498,3.29,6.118,3.672,6.5
          l1.592,1.592C4.24,9.525,3.529,11.192,3.22,13h-2.24C0.438,13,0,13.438,0,13.979v2.041C0,16.562,0.438,17,0.979,17h2.233
          c0.303,1.814,1.009,3.488,2.031,4.928L3.672,23.5c-0.382,0.382-0.382,1.003,0,1.385l1.443,1.443c0.382,0.382,1.002,0.382,1.385,0
          l1.57-1.57c1.44,1.024,3.114,1.733,4.93,2.038v2.225C13,29.562,13.438,30,13.979,30h2.041C16.562,30,17,29.562,17,29.021v-2.229
          c1.812-0.308,3.482-1.02,4.919-2.045l1.581,1.581c0.382,0.382,1.003,0.382,1.385,0l1.443-1.443c0.382-0.382,0.382-1.003,0-1.385
          l-1.586-1.586c1.017-1.437,1.719-3.105,2.021-4.914H29.021z M14.987,20.975c-3.281,0-5.951-2.67-5.951-5.952
          c0-3.281,2.67-5.951,5.951-5.951c3.282,0,5.952,2.67,5.952,5.951C20.939,18.305,18.27,20.975,14.987,20.975z"
        />
      </g>
    ),
  },

  // group: editing, filename: code-2.svg
  code: {
    viewBox: '0 0 30.407 25.079',
    svg: (
      <g>
        <path d="M10.325,6.072c0-0.515-0.2-0.999-0.566-1.366C9.051,4.002,7.738,4,7.031,4.708l-6.466,6.467 C0.206,11.534,0,12.031,0,12.539s0.206,1.005,0.565,1.364l6.468,6.469c0.365,0.362,0.849,0.563,1.362,0.563s0.997-0.2,1.366-0.566 c0.363-0.364,0.563-0.849,0.563-1.363s-0.2-0.999-0.565-1.364l-5.102-5.102L9.76,7.438C10.124,7.073,10.325,6.589,10.325,6.072z" />
        <path d="M29.842,11.175l-6.467-6.467c-0.705-0.707-2.018-0.708-2.729,0c-0.364,0.364-0.564,0.849-0.564,1.364 c0,0.518,0.201,1.003,0.564,1.364l5.103,5.103l-5.103,5.102c-0.364,0.364-0.564,0.849-0.564,1.364s0.2,1,0.566,1.366 c0.365,0.363,0.85,0.563,1.363,0.563s0.998-0.2,1.363-0.564l6.467-6.467c0.359-0.359,0.565-0.856,0.565-1.364 S30.201,11.534,29.842,11.175z" />
        <path d="M18.425,0.068c-1.11-0.301-2.339,0.43-2.624,1.535L10.41,22.395c-0.297,1.143,0.393,2.316,1.537,2.616 c0.175,0.045,0.355,0.068,0.539,0.068c0.979,0,1.832-0.661,2.076-1.607L19.953,2.68c0.145-0.555,0.063-1.132-0.227-1.624 C19.436,0.561,18.971,0.21,18.425,0.068z" />
      </g>
    ),
  },

  monitor: {
    viewBox: '0 0 30 28',
    svg: (
      <path
        d="M28.076,0H1.924C0.861,0,0,0.861,0,1.924v20.152C0,23.139,0.861,24,1.924,24H11c0,1.656-1.344,3-3,3
        c-0.276,0-0.5,0.224-0.5,0.5S7.724,28,8,28h14c0.276,0,0.5-0.224,0.5-0.5S22.276,27,22,27c-1.656,0-3-1.344-3-3h9.076
        C29.139,24,30,23.139,30,22.076V1.924C30,0.861,29.139,0,28.076,0z M15,21c-0.553,0-1-0.447-1-1s0.447-1,1-1s1,0.447,1,1
        S15.553,21,15,21z M27,17H3V3h24V17z"
      />
    ),
  },

  exclamation: {
    viewBox: '0 0 29.61 28.53',
    svg: (
      <g>
        <path
          d="M14.8,0A14.54,14.54,0,0,0,0,14.26,14.54,14.54,0,0,0,14.8,28.53a14.54,14.54,0,0,0,14.8-14.26A14.54,14.54,0,0,0,14.8,0Zm0,2.36c1.19,0,2.11,1.3,2.05,2.92L16.47,15c-.06,1.61-.82,2.92-1.69,2.92S13.16,16.58,13.09,15l-.35-9.7C12.68,3.66,13.6,2.36,14.79,2.36Zm0,22.85a2.43,2.43,0,0,1-2.5-2.6A2.48,2.48,0,0,1,14.79,20a2.45,2.45,0,0,1,2.54,2.6,2.42,2.42,0,0,1-2.54,2.6Z"
        />
      </g>
    ),
  },

  visible: {
    viewBox: '0 0 29.893 15.941',
    svg: (
      <g>
        <circle cx="14.946" cy="7.947" r="3.047" />
        <path d="M0,7.908c0,0,13.425,18.075,29.893,0C13.425-9.886,0,7.908,0,7.908z M15.409,13.913c-0.202,0.024-0.407,0.04-0.615,0.04c-0.771,0-1.505-0.174-2.171-0.483c-2.154-0.907-3.667-3.038-3.667-5.522c0-3.309,2.681-5.99,5.989-5.99s5.99,2.682,5.99,5.99C20.936,11.099,18.501,13.676,15.409,13.913z" />
      </g>
    ),
  },

  views: {
    viewBox: '0 0 29.875 23.795',
    svg: (
      <g>
        <path d="M29.438,15.166l-4.102-2.146l-2.148,1.124l3.352,1.754l-10.99,5.746c-0.188,0.098-0.398,0.15-0.609,0.15s-0.423-0.053-0.61-0.15L3.336,15.897l3.353-1.753L4.54,13.021l-4.102,2.146C0.17,15.307,0,15.59,0,15.898s0.17,0.591,0.438,0.731l12.998,6.795c0.472,0.246,0.987,0.37,1.503,0.37c0.515,0,1.03-0.124,1.502-0.37l12.996-6.795c0.269-0.141,0.438-0.423,0.438-0.731S29.706,15.307,29.438,15.166z" />
        <path d="M0.438,8.63l12.998,6.795c0.472,0.246,0.987,0.37,1.503,0.37c0.515,0,1.03-0.124,1.502-0.37L29.438,8.63c0.269-0.141,0.438-0.423,0.438-0.731s-0.169-0.592-0.438-0.732L16.442,0.37C15.97,0.123,15.454,0,14.938,0s-1.031,0.123-1.502,0.369L0.438,7.166C0.17,7.307,0,7.59,0,7.898S0.17,8.489,0.438,8.63z" />
      </g>
    ),
  },

  chart: {
    viewBox: '0 0 29.94 29.936',
    svg: (
      <g>
        <path d="M14,15.936V2.032c0,0-0.029-0.004-0.056-0.004c-7.715,0-13.957,6.254-13.957,13.969c0,7.717,6.261,13.921,13.976,13.921c7.703,0,13.955-5.982,13.975-13.982H14z"/>
        <path d="M29.938,13.936c0,0-0.024,0.025-0.024,0.012C29.914,6.26,24,0.076,16,0.032v13.903H29.938z"/>
      </g>
    ),
  },

  activity: {
    viewBox: '0 0 17.94 29.695',
    svg: (
      <g>
        <path d="M17.813,14.627c0.181-0.344,0.169-0.91-0.032-1.243c-0.201-0.334-0.563-0.689-0.951-0.689h-5.581l3.055-11.454c0.087-0.333,0.016-0.765-0.195-1.037c-0.21-0.272-0.535-0.509-0.879-0.509H5.526c-0.505,0-0.946,0.492-1.074,0.98L0.037,17.529c-0.088,0.334-0.017,0.574,0.194,0.848c0.21,0.271,0.535,0.318,0.88,0.318H9v10.244c0,0.348,0.072,0.651,0.41,0.734c0.338,0.083,0.606-0.074,0.768-0.382L17.813,14.627z" />
      </g>
    ),
  },

  settings: {
    viewBox: '0 0 22.235 31',
    svg: (
      <g>
        <path d="M6,17v-1h1v-1H5V6h1V0H2v6h1v9H1v1h1v1c-1.104,0-2,0.896-2,2v10c0,1.104,0.896,2,2,2h4c1.104,0,2-0.896,2-2V19C8,17.896,7.104,17,6,17z" />
        <path d="M21.83,4.754l-3.053,3.053c-0.563,0.563-1.325,0.879-2.121,0.879s-1.559-0.315-2.122-0.879c-0.563-0.563-0.878-1.325-0.878-2.121s0.315-1.559,0.878-2.121l3.054-3.053c-2.467-0.877-5.322-0.335-7.296,1.639c-2.733,2.733-2.733,7.166,0,9.899c0.517,0.517,1.094,0.935,1.708,1.256V28c0,1.657,1.343,3,3,3s3-1.343,3-3V13.529c0.795-0.341,1.542-0.83,2.191-1.479C22.165,10.076,22.706,7.22,21.83,4.754z M15,29c-0.553,0-1-0.447-1-1s0.447-1,1-1s1,0.447,1,1S15.553,29,15,29z" />
      </g>
    ),
  },

  fields: {
    viewBox: '0 0 27 27',
    svg: (
      <g>
        <path d="M12,2.162C12,0.968,11.032,0,9.838,0H2.162C0.968,0,0,0.968,0,2.162v7.676C0,11.032,0.968,12,2.162,12h7.676C11.032,12,12,11.032,12,9.838V2.162z" />
        <path d="M27,2.162C27,0.968,26.032,0,24.838,0h-7.676C15.968,0,15,0.968,15,2.162v7.676C15,11.032,15.968,12,17.162,12h7.676C26.032,12,27,11.032,27,9.838V2.162z" />
        <path d="M12,17.162C12,15.968,11.032,15,9.838,15H2.162C0.968,15,0,15.968,0,17.162v7.676C0,26.032,0.968,27,2.162,27h7.676C11.032,27,12,26.032,12,24.838V17.162z" />
        <path d="M27,17.162C27,15.968,26.032,15,24.838,15h-7.676C15.968,15,15,15.968,15,17.162v7.676C15,26.032,15.968,27,17.162,27h7.676C26.032,27,27,26.032,27,24.838V17.162z" />
      </g>
    ),
  },

  invisible:  {
    viewBox: '0 0 29.893 20.991',
    svg: (
      <g>
        <path d="M17.855,11.315c0.081-0.273,0.138-0.558,0.138-0.857c0-1.683-1.364-3.048-3.048-3.048c-0.292,0-0.569,0.055-0.837,0.131L7.062,0.443C6.478-0.146,5.528-0.147,4.94,0.436C4.353,1.02,4.35,1.969,4.933,2.557l7.077,7.128c-0.065,0.249-0.111,0.505-0.111,0.773c0,1.682,1.364,3.047,3.047,3.047c0.262,0,0.511-0.043,0.753-0.104l7.097,7.147c0.294,0.296,0.68,0.443,1.064,0.443c0.383,0,0.765-0.146,1.057-0.436c0.588-0.584,0.592-1.533,0.008-2.121L17.855,11.315z"/>
        <path d="M15.409,16.424c-0.202,0.024-0.407,0.04-0.615,0.04c-0.771,0-1.505-0.174-2.171-0.483c-2.154-0.907-3.667-3.038-3.667-5.522c0-0.525,0.074-1.032,0.201-1.518L5.635,5.393C2.094,7.653,0,10.419,0,10.419s7.521,10.122,18.209,7.638l-1.79-1.803C16.092,16.337,15.756,16.397,15.409,16.424z"/>
        <path d="M11.588,2.873l1.795,1.808c0.498-0.135,1.021-0.213,1.563-0.213c3.309,0,5.99,2.682,5.99,5.99c0,0.558-0.08,1.095-0.223,1.606l3.376,3.4c1.879-1.224,3.818-2.867,5.804-5.046C23.004,2.975,16.651,1.769,11.588,2.873z"/>
      </g>
    ),
  },

  expand: {
    viewBox: '0 0 28.03 28.03',
    svg: (
      <g>
        <path d="M20.092,10.502l2.767-2.767l1.978,1.975c0.596,0.595,1.228,0.408,1.402-0.417l1.722-8.091c0.174-0.823-0.354-1.349-1.177-1.167L18.747,1.81c-0.822,0.183-1.007,0.817-0.411,1.413l2.041,2.035l-2.732,2.732C18.658,8.607,19.503,9.47,20.092,10.502z"/>
        <path d="M3.223,9.697l1.952-1.958l2.778,2.778C8.541,9.483,9.383,8.618,10.396,8L7.653,5.256l2.057-2.061c0.596-0.596,0.407-1.227-0.416-1.402L1.203,0.071C0.379-0.101-0.146,0.425,0.036,1.247l1.775,8.036C1.993,10.107,2.627,10.292,3.223,9.697z"/>
        <path d="M27.995,26.782l-1.774-8.036c-0.183-0.822-0.817-1.007-1.413-0.411l-2.035,2.041l-2.787-2.787c-0.619,1.012-1.483,1.855-2.518,2.441l2.827,2.827l-1.975,1.978c-0.595,0.596-0.408,1.228,0.417,1.402l8.091,1.722C27.651,28.133,28.177,27.605,27.995,26.782z"/>
        <path d="M8.06,17.573l-2.804,2.804L3.196,18.32c-0.596-0.596-1.227-0.407-1.402,0.416l-1.723,8.091c-0.172,0.823,0.354,1.349,1.176,1.167l8.036-1.775c0.824-0.182,1.01-0.816,0.414-1.412l-1.958-1.952l2.833-2.833C9.54,19.433,8.676,18.588,8.06,17.573z"/>
        <circle cx="14.027" cy="13.957" r="3.02"/>
      </g>
    ),
  },

  user: {
    viewBox: '0 0 24 30',
    svg: (
      <g>
        <path d="M20.899,20.362l-4.682-1.769C15.485,18.317,15,17.615,15,16.832v-0.884c1.207-0.916,2.144-2.344,2.783-3.948c0.715,0,1.339-0.487,1.512-1.181l0.398-1.594c0.074-0.294,0.008-0.606-0.18-0.846C19.327,8.14,19.04,8,18.736,8C18.773,7.593,18.8,7.189,18.8,6.8C18.8,2.418,16.382,0,12,0S5.2,2.418,5.2,6.8c0,0.39,0.026,0.793,0.063,1.2C4.96,8,4.673,8.14,4.486,8.379c-0.187,0.24-0.253,0.552-0.179,0.846l0.398,1.594C4.878,11.513,5.501,12,6.217,12c0.64,1.604,1.576,3.032,2.783,3.948v0.884c0,0.783-0.485,1.485-1.218,1.762l-4.681,1.769C1.234,21.066,0,22.854,0,24.848V28c0,1.104,0.896,2,2,2h20c1.104,0,2-0.896,2-2v-3.152C24,22.854,22.766,21.066,20.899,20.362z" />
      </g>
    ),
  },

  users: {
    viewBox: '0 0 31.998 30',
    svg: (
      <g id="users">
        <path d="M24.898,20.362l-4.681-1.769C19.485,18.317,19,17.615,19,16.832v-0.884c1-0.916,2.143-2.344,2.783-3.948c0.715,0,1.338-0.487,1.511-1.181l0.398-1.594c0.074-0.294,0.008-0.606-0.18-0.846C23.326,8.14,23.039,8,22.735,8c0.037-0.407,0.063-0.811,0.063-1.2c0-4.382-2.418-6.8-6.8-6.8s-6.8,2.418-6.8,6.8c0,0.39,0.026,0.793,0.063,1.2C8.959,8,8.672,8.14,8.485,8.379c-0.187,0.24-0.253,0.552-0.179,0.846l0.398,1.594C8.877,11.513,9.501,12,10.216,12C10.856,13.604,12,15.032,13,15.948v0.884c0,0.783-0.485,1.485-1.219,1.762l-4.681,1.769C5.234,21.066,4,22.854,4,24.848V28c0,1.104,0.895,2,1.999,2h20C27.104,30,28,29.104,28,28v-3.152C28,22.854,26.766,21.066,24.898,20.362z" />
        <path d="M9.688,15.271l-1.801-0.66v-1.503c-0.533-0.466-0.943-1.077-1.124-1.804L6.366,9.714c-0.227-0.9-0.028-1.837,0.539-2.561c0.091-0.117,0.189-0.226,0.294-0.326c0-0.01,0-0.019,0-0.027c0-1.607,0.288-3.019,0.821-4.222C7.32,2.207,6.467,2,5.443,2C2.431,2,0.769,3.663,0.769,6.675C0.769,6.78,0.779,6.892,0.783,7C0.351,7,0,7.351,0,7.783v0.842C0,9.384,0.616,10,1.375,10c0.375,1.025,0.918,1.968,1.624,2.642v1.929L1.581,15.1C0.631,15.454,0,16.362,0,17.377V22c0,1.104,0.896,2,1.999,2h0.066c0.314-2.465,1.967-4.618,4.327-5.509l4.528-1.71C10.478,16.338,10.067,15.83,9.688,15.271z" />
        <path d="M22.31,15.271l1.801-0.66v-1.503c0.533-0.466,0.943-1.077,1.124-1.804l0.397-1.591c0.227-0.9,0.028-1.837-0.539-2.561c-0.091-0.117-0.189-0.226-0.294-0.326c0-0.01,0-0.019,0-0.027c0-1.607-0.288-3.019-0.821-4.222C24.678,2.207,25.531,2,26.555,2c3.013,0,4.675,1.663,4.675,4.675c0,0.105-0.011,0.217-0.015,0.325c0.433,0,0.783,0.351,0.783,0.783v0.842c0,0.76-0.615,1.375-1.375,1.375c-0.375,1.025-0.918,1.968-1.624,2.642v1.929l1.418,0.529c0.95,0.354,1.581,1.263,1.581,2.277V22c0,1.104-0.896,2-1.999,2h-0.066c-0.314-2.465-1.967-4.618-4.327-5.509l-4.528-1.71C21.521,16.338,21.931,15.83,22.31,15.271z" />
      </g>
    ),
  },

  key: {
    viewBox: '0 0 19 32',
    svg: (
      <g id="key">
        <path d="M19,9.5C19,4.253,14.747,0,9.5,0S0,4.253,0,9.5c0,3.195,1.582,6.015,4,7.736V18c0,0.553,0.448,1,1,1h1v11l3.999,2l3.022-2.975l-1.006-0.527c-0.193-0.102-0.313-0.303-0.31-0.521c0.003-0.218,0.13-0.414,0.326-0.51L13,27v-1l-0.968-0.483c-0.195-0.099-0.319-0.298-0.319-0.517s0.124-0.418,0.319-0.517L13,24l-1.434-1.434c-0.131-0.132-0.191-0.317-0.162-0.501s0.146-0.342,0.312-0.425L13,21v-2h1c0.552,0,1-0.447,1-1v-0.764C17.418,15.515,19,12.695,19,9.5z M9.5,3C10.88,3,12,4.12,12,5.5S10.88,8,9.5,8S7,6.88,7,5.5S8.12,3,9.5,3z" />
      </g>
    ),
  },

  card: {
    viewBox: '0 0 30.985 30.986',
    svg: (
      <g id="card">
        <path d="M20.205,0.631c-0.84-0.841-2.202-0.841-3.042,0L0.631,17.164c-0.842,0.84-0.842,2.202,0,3.042l5.713,5.714L25.919,6.345L20.205,0.631z" />
        <path d="M30.354,10.78l-1.456-1.457L9.322,28.897l1.457,1.458c0.841,0.841,2.201,0.841,3.042,0l16.532-16.533c0.403-0.404,0.632-0.951,0.632-1.521C30.985,11.731,30.757,11.185,30.354,10.78z" />
      </g>
    ),
  },

  left: {
    viewBox: '0 0 26.944 19.884',
    svg: (
      <g id="left">
        <path
          d="M0,9.923c0,0.432,0.217,0.832,0.585,1.057l14.268,8.686c0.381,0.232,0.993,0.241,1.384,0.021
          C16.625,19.468,17,19.056,17,18.608v-2.695c0-0.539,0.25-1.047,0.686-1.365s0.993-0.409,1.507-0.246
          c2.636,0.841,4.78,2.773,5.903,5.269c0.085,0.19,0.273,0.313,0.481,0.313c0.209,0.002,0.397-0.119,0.484-0.309
          c0.564-1.228,0.884-2.59,0.884-4.029c0-4.822-3.759-8.821-8.418-9.579C17.642,5.823,17,5.062,17,4.165V1.237
          c0-0.447-0.377-0.859-0.768-1.079c-0.389-0.219-0.935-0.21-1.316,0.021L0.611,8.866C0.243,9.091,0,9.491,0,9.923z M17,5.848V5.842
          C17,5.844,17,5.846,17,5.848z"
        />
      </g>
    ),
  },

  connections: {
    viewBox: '0 0 28.001 30',
    svg: (
      <g>
        <path
          d="M0.001,18.5c0,2.481,6.28,4.5,14,4.5c7.713,0,13.988-2.016,13.999-4.494v-0.011c-0.001-0.168,0-3.583,0-3.583C25.123,17.021,19.549,18,14.001,18C8.452,18,2.876,17.021,0,14.91C0,14.91,0.001,18.331,0.001,18.5z"
        />
        <path
          d="M28,21.912C25.123,24.021,19.549,25,14.001,25C8.452,25,2.876,24.021,0,21.91V26l0,0c0.775,2.25,6.795,4,14.001,4s13.225-1.75,14-4l0,0L28,21.912z"
        />
        <path
          d="M0.001,11.5c0,2.481,6.28,4.5,14,4.5c7.713,0,13.988-2.016,13.999-4.494v-0.011c-0.001-0.168,0-3.583,0-3.583C25.123,10.021,19.549,11,14.001,11C8.452,11,2.876,10.021,0,7.91C0,7.91,0.001,11.331,0.001,11.5z"
        />
        <ellipse cx="14.001" cy="4.5" rx="14" ry="4.5" />
      </g>
    ),
  },

  projects: {
    viewBox: '0 0 32 27',
    svg: (
      <g>
        <path d="M30.083,11L2,11.015c-1,0-2,0.902-2,2.005v12.031C0,26.154,0.904,27,2.008,27h28.075C31.188,27,32,26.154,32,25.051V13.02C32,11.917,31.188,11,30.083,11z" />
        <path d="M30.083,3H16.154L15,1.016C14.684,0.564,14.063,0,13.045,0H3.012C2.461,0,2,0.459,2,1.009v2.006c-1,0-2,0.902-2,2.005V10h0.172c0.379-1,1.136-0.969,1.771-0.969l28.083-0.023c0.709,0,1.488-0.008,1.817,0.992H32V5.02C32,3.917,31.188,3,30.083,3z" />
      </g>
    ),
  },

  pan: {
    viewBox: '0 0 30.969 31.999',
    svg: (
      <g>
        <path d="M11.796,7.105L14,7.103v2.896h3V7.101l2.322-0.003c0.682,0,0.916-0.469,0.543-1.043l-3.662-5.628c-0.372-0.571-0.978-0.57-1.347,0.006L11.27,6.06C10.902,6.636,11.112,7.106,11.796,7.105z"/>
        <path d="M19.26,24.895L17,24.896v-2.897h-3v2.899L11.735,24.9c-0.682,0-0.887,0.469-0.514,1.043l3.676,5.629c0.372,0.57,0.986,0.57,1.355-0.006l3.606-5.627C20.226,25.363,19.943,24.893,19.26,24.895z"/>
        <path d="M30.535,14.823l-5.627-3.595c-0.576-0.368-1.045-0.132-1.045,0.551l0.002,2.22H21v3h2.867l0.004,2.306c0,0.682,0.469,0.908,1.043,0.535l5.627-3.667C31.113,15.8,31.111,15.192,30.535,14.823z"/>
        <path d="M7.101,13.999l-0.003-2.247c0-0.682-0.469-0.879-1.043-0.506l-5.628,3.68c-0.571,0.372-0.57,0.988,0.006,1.357l5.627,3.598c0.576,0.369,1.046,0.078,1.045-0.605l-0.002-2.276H10v-3H7.101z"/>
        <path d="M19,12.972c0-0.537-0.436-0.973-0.973-0.973h-5.055c-0.537,0-0.973,0.436-0.973,0.973v6.055c0,0.537,0.436,0.973,0.973,0.973h5.055c0.537,0,0.973-0.436,0.973-0.973V12.972z"/>
      </g>
    ),
  },
};

export default icons;
