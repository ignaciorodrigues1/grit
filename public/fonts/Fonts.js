import * as React from 'react'
import {Global} from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
    @font-face {
        font-family: 'Travels';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('/fonts/t-travels-next-trial-regular.ttf') format('truetype');
      }
      @font-face {
        font-family: 'Travels';
        font-style: bold;
        font-weight: 700;
        font-display: swap;
        src: url('/fonts/t-travels-next-trial-bold.ttf') format('truetype');
      }
      @font-face {
        font-family: 'Travels';
        font-style: extraBold;
        font-weight: 900;
        font-display: swap;
        src: url('/fonts/t-travels-next-trial-extraBold.ttf') format('truetype');
      }
      @font-face {
        font-family: 'Travels';
        font-style: extraBold;
        font-weight: 900;
        font-display: swap;
        src: url('/fonts/t-travels-next-trial-extraBold.ttf') format('truetype');
      }
      @font-face {
        font-family: 'Archivo';
        font-style: regular;
        font-weight: 400;
        font-display: swap;
        src: url('/fonts/archivo-regular.ttf') format('truetype');
      }
      @font-face {
        font-family: 'Archivo';
        font-style: bold;
        font-weight: 600;
        font-display: swap;
        src: url('/fonts/archivo-bold.ttf') format('truetype');
      }
      @font-face {
        font-family: 'Archivo';
        font-style: italic;
        font-weight: 400;
        font-display: swap;
        src: url('/fonts/archivo-regular-italic.ttf') format('truetype');
      }
    `}
  />
);

export default Fonts;