import { h } from 'preact'
import { style } from 'glamor'
import Logo from 'components/Logo'
import Navbar from 'components/Navbar'

export default () => (
  <div {...styles.container}>
    <Navbar active='home' />
    <Logo />
    <nav {...styles.social}>
      {/* <a href='https://github.com/opennewslabs/guri-vr' {...styles.link}>
        <svg width='21px' height='24px' viewBox='0 0 21 24'><g stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' opacity='0.5'><g transform='translate(-918.000000, -81.000000)' fill='#FFFFFF'><g transform='translate(917.000000, 80.000000)'><g><path d='M21.864,9.991 C21.869,14.041 19.912,16.347 15.447,17.551 C15.692,18.14 15.898,18.912 15.898,19.891 C15.898,20.888 15.878,23.876 15.878,23.876 C15.875,24.423 15.431,24.864 14.885,24.864 L8.944,24.864 C8.395,24.864 7.951,24.419 7.951,23.869 L7.951,21.88 C4.906,21.88 3.713,20.281 2.841,19.112 C2.416,18.541 2.049,18.049 1.546,17.798 C1.055,17.552 0.857,16.954 1.102,16.463 C1.348,15.972 1.944,15.773 2.435,16.018 C3.358,16.48 3.93,17.247 4.433,17.922 C5.254,19.022 5.902,19.891 7.951,19.891 C7.951,18.912 8.156,18.14 8.402,17.551 C3.946,16.348 1.991,14.042 1.991,9.992 C1.991,8.179 2.463,6.628 3.395,5.373 C3.122,4.267 2.984,3.131 2.984,1.991 C2.984,1.726 3.09,1.471 3.278,1.284 C3.464,1.1 3.715,0.996 3.977,0.996 L3.985,0.996 C4.067,0.997 5.866,1.029 7.888,2.494 C9.091,2.16 10.447,1.991 11.927,1.991 C13.148,1.991 14.293,2.109 15.343,2.342 C17.552,0.852 19.837,0.991 19.939,0.998 C20.46,1.034 20.865,1.468 20.865,1.991 C20.865,3.131 20.727,4.265 20.454,5.369 C21.389,6.624 21.862,8.176 21.864,9.991 Z M18.619,6.258 C18.396,6.004 18.317,5.653 18.41,5.328 C18.567,4.78 18.746,3.995 18.829,3.06 C18.112,3.179 17.103,3.476 16.159,4.204 C15.914,4.393 15.598,4.458 15.3,4.378 C14.293,4.113 13.159,3.98 11.927,3.98 C10.444,3.98 9.122,4.167 7.997,4.538 C7.674,4.644 7.322,4.579 7.058,4.363 C6.304,3.747 5.587,3.406 5.034,3.216 C5.123,4.084 5.291,4.813 5.439,5.33 C5.532,5.656 5.455,6.005 5.232,6.26 C4.399,7.21 3.977,8.465 3.977,9.992 C3.977,12.899 5.007,14.906 10.133,15.933 C10.163,15.939 10.186,15.959 10.215,15.968 C10.28,15.986 10.339,16.012 10.399,16.044 C10.459,16.077 10.514,16.112 10.565,16.155 C10.589,16.175 10.618,16.183 10.64,16.205 C10.663,16.228 10.672,16.259 10.693,16.284 C10.736,16.336 10.771,16.39 10.803,16.449 C10.833,16.507 10.857,16.563 10.876,16.624 C10.893,16.682 10.904,16.739 10.911,16.801 C10.919,16.871 10.919,16.938 10.911,17.008 C10.908,17.04 10.918,17.07 10.912,17.103 C10.906,17.132 10.887,17.153 10.879,17.18 C10.86,17.246 10.834,17.306 10.801,17.367 C10.77,17.426 10.737,17.481 10.694,17.532 C10.677,17.554 10.67,17.581 10.65,17.601 C10.603,17.653 9.938,18.402 9.938,19.891 L9.94,23.06 L13.94,23.06 C13.946,22.099 13.911,20.513 13.911,19.891 C13.911,18.381 13.226,17.63 13.197,17.599 C13.179,17.58 13.172,17.554 13.156,17.533 C13.1,17.465 13.055,17.392 13.018,17.309 C13.005,17.28 12.993,17.252 12.983,17.221 C12.97,17.181 12.946,17.146 12.937,17.103 C12.927,17.052 12.94,17.003 12.937,16.952 C12.936,16.915 12.935,16.88 12.938,16.843 C12.944,16.747 12.963,16.658 12.995,16.571 C13.006,16.541 13.018,16.512 13.032,16.483 C13.074,16.395 13.128,16.317 13.195,16.245 C13.208,16.231 13.212,16.212 13.226,16.199 C13.238,16.188 13.253,16.184 13.265,16.174 C13.334,16.113 13.409,16.066 13.494,16.026 C13.533,16.007 13.571,15.99 13.613,15.976 C13.649,15.964 13.678,15.94 13.716,15.933 C18.852,14.904 19.881,12.898 19.877,9.993 C19.875,8.464 19.452,7.208 18.619,6.258 Z'></path></g></g></g></g></svg>
      </a> */}
      {/* <a href='https://twitter.com/guri_vr' {...styles.link}>
        <svg width='24px' height='20px' viewBox='0 0 24 20'><g stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' opacity='0.5'><g transform='translate(-970.000000, -83.000000)' fill='#FFFFFF'><g transform='translate(917.000000, 80.000000)'><g transform='translate(52.000000, 2.000000)'><path d='M16.711,3 C17.881,3 18.937,3.489 19.681,4.275 C20.607,4.092 21.479,3.759 22.263,3.297 C21.96,4.237 21.315,5.027 20.474,5.527 C21.296,5.428 22.083,5.212 22.812,4.891 C22.265,5.698 21.577,6.409 20.782,6.979 C20.789,7.151 20.793,7.326 20.793,7.5 C20.793,12.83 17.426,18.998 9.941,18.998 C6.957,18.998 4.778,18.305 2.979,17.161 C3.297,17.201 3.621,17.218 3.948,17.218 C5.855,17.218 7.61,16.574 9.003,15.491 C7.221,15.46 5.718,14.493 5.202,12.891 C5.45,12.939 5.706,12.964 5.968,12.964 C6.337,12.964 6.699,12.915 7.039,12.823 C5.178,12.453 3.942,10.837 3.942,8.882 L3.942,8.83 C4.491,9.132 5.118,9.314 5.786,9.335 C4.693,8.611 3.975,7.378 3.975,5.979 C3.975,5.24 4.177,4.546 4.526,3.952 C6.533,6.391 9.365,7.783 12.747,7.952 C12.677,7.658 12.641,7.348 12.641,7.034 C12.641,4.806 14.463,3 16.711,3 L16.711,3 Z M22.812,4.891 L22.817,4.891 L22.812,4.891 Z M16.711,0.999 C13.854,0.999 11.453,2.979 10.817,5.632 C8.98,5.127 7.36,4.258 6.058,2.677 C5.679,2.215 5.116,1.952 4.526,1.952 C4.474,1.952 4.422,1.954 4.37,1.958 C3.725,2.009 3.144,2.372 2.815,2.933 C2.273,3.854 1.986,4.907 1.986,5.979 C1.986,6.594 2.08,7.196 2.257,7.767 C2.062,8.08 1.953,8.447 1.953,8.83 L1.953,8.882 C1.953,10.321 2.421,11.64 3.225,12.673 C3.195,12.95 3.222,13.234 3.31,13.507 C3.536,14.211 3.884,14.65 4.326,15.206 C4.201,15.214 4.075,15.218 3.948,15.218 C3.691,15.218 3.446,15.203 3.22,15.175 C3.139,15.165 3.058,15.161 2.978,15.161 C2.146,15.16 1.391,15.685 1.106,16.489 C0.793,17.371 1.13,18.353 1.916,18.853 C4.187,20.297 6.812,20.999 9.941,20.999 C15.035,20.999 18.07,18.556 19.72,16.507 C21.58,14.196 22.682,11.094 22.776,7.937 C23.39,7.391 23.937,6.771 24.41,6.085 C24.657,5.752 24.804,5.339 24.804,4.891 C24.804,4.348 24.59,3.856 24.242,3.496 C24.308,2.832 24.04,2.168 23.509,1.738 C23.147,1.445 22.706,1.296 22.262,1.296 C21.917,1.296 21.57,1.387 21.258,1.57 C20.912,1.774 20.546,1.943 20.165,2.076 C19.158,1.383 17.95,0.999 16.711,0.999 L16.711,0.999 Z'></path></g></g></g></g></svg>
      </a> */}
    </nav>
  </div>
)

const styles = {
  container: style({
    maxWidth: 860,
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 50,
    paddingLeft: 20,
    '@media(max-width: 700px)': {
      paddingLeft: 0,
      paddingTop: 0,
      width: '100vw',
      flexDirection: 'column',
      alignItems: 'center',
      '& > svg': {
        margin: 20,
        marginTop: 30
      },
      '& > nav': {
        paddingTop: 30
      }
    }
  }),

  link: style({
    textTransform: 'uppercase',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    textDecoration: 'none',
    ':hover': {
      color: '#FFEB3B'
    }
  }),

  social: style({
    width: 100,
    justifyContent: 'space-around',
    alignItems: 'center',
    display: 'flex'
  })
}
