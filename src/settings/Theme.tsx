import {Theme, createTheme} from "@mui/material";
import {amber, blue, grey, lightGreen, purple, red} from '@mui/material/colors';

const secondary = {
    main: grey[500],
    contrastText: "#fff",
}

const info = {
    main: grey[900],
    contrastText: grey[900],
}

const themeOptions = {
    theme1: {
        palette: {
          primary: {
            main: lightGreen[500],
            contrastText: "#fff"
          },
          secondary: secondary,
          info: info
        },
      },
      theme2: {
        palette: {
          primary: {
            main: blue[500],
          },
          secondary: secondary,
          info: info
        }
      },
      theme3: {
        palette: {
          primary: {
            main: red[500],
          },
          secondary: secondary,
          info: info
        }
      },
      theme4: {
        palette: {
          primary: {
            main: amber[500],
            contrastText: "#fff"
          },
          secondary: secondary,
          info: info
        }
      },
      theme5: {
        palette: {
          primary: {
            main: purple[500],
          },
          secondary: secondary,
          info: info
        }
      },
      theme6: {
        palette: {
          primary: {
            main: grey[900],
          },
          secondary: secondary,
          info: info
        }
      },
}

type ThemeType = 'theme1' | 'theme2' | 'theme3' | 'theme4' | 'theme5' | 'theme6';

const MyTheme = (option: ThemeType): Theme => {
    return createTheme(themeOptions[option]);
}

export default MyTheme;