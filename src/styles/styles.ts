import useWindow from "@/helper/useWindow";


//variablesFontsSize   Desktop - Tablet
export const PARRAGRAH_FONT_SIZE = "3vmin";
export const FOOTER_FONT_SIZE = "1em";
export const MENU_FONT_SIZE = "1em";
export const LOGO_FONT_SIZE = "2em";
export const TITLE_FONT_SIZE = "7vmin";
export const SUBTITLE_FONT_SIZE = "6vmin";
export const BUYMEACOFFEE_FONT_SIZE = "6vmin";

//variableFontsSize Mobile
export const MOBILE_TITLE_FONT_SIZE = "12vmin";
export const MOBILE_SUBTITLE_FONT_SIZE = "10vmin";
export const MOBILE_PARRAGRAH_FONT_SIZE = "3vmin"
//COLORS
export const BACKGROUND_COLOR="#060958";
export const COLOR_TOP_FONT = "#fff";
export const COLOR_PRIMARY = "#26ABFF";
export const COLOR_SECONDARY = "#7200F5";
export const COLOR_ICON = "#FF7D26";
export const COLOR_ICON_2 = "#7881F9"
export const COLOR_INPUT_TEXT = "#09F7FF";



export const Styles  = {
  image: {
    left: "0%",
    position:"absolute",
    objectFit: "contain",
  },
  imageMobile: {
    left: "0%",
    position:"absolute",
    objectFit: "contain",
  },
  imageContact:{
    position:"absolute",
    objectFit:"cover",
    objectPosition:"center center"
  },
  vowel: [{ color: `${COLOR_PRIMARY}` }, { color: `${COLOR_SECONDARY}` }],
  icons: [
    {
      color: `${COLOR_ICON}`,
      width: "40%",
      height: "40%",
      
    },
    {
      color: `${COLOR_ICON}`,
      width: "50%",
      height: "50%",
    },
  
    {
      color: `${COLOR_ICON_2}`,
      width: "40%",
      height: "40%",
      position:"absolute",
      left:"70%",
      top: "70%",
      transform: "rotate(-0.1turn)"
    },
    {
      color: `${COLOR_ICON_2}`,
      width: "60%",
      height: "50%",
      position:"absolute",
      left:"-20%",
      top: "70%",
      transform: "rotate(0.1turn)"
    },
  ],
  modal:{
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.75)'
    },
    content:{
      top: '50%',
      left: '50%',
      right:'auto',
      width:"30%",
      height:"40%",
      bottom: 'auto',
      overflow:"hidden",
      marginRight: '-50%',
      border:".5px solid #f33",
      boxShadow: "-4px 0px 15px -7px rgba(43, 34, 100, .6)",
      backgroundColor: `${BACKGROUND_COLOR}`,
      transform: 'translate(-50%, -50%)',
    },
   
    
   

  },
  ModalMobile :{
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.75)'
    },
    content:{
      top: '50%',
      left: '50%',
      right:'auto',
      width:"50%",
      height:"30%",
      bottom: 'auto',
      overflow:"hidden",
      marginRight: '-50%',
      border:".5px solid #f33",
      boxShadow: "-4px 0px 15px -7px rgba(43, 34, 100, .6)",
      backgroundColor: `${BACKGROUND_COLOR}`,
      transform: 'translate(-50%, -50%)',
    },

  }
 
  
} as const;
