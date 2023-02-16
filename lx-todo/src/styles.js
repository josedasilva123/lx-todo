import { createGlobalStyle } from "styled-components";

export const DarkTheme = createGlobalStyle`
    :root{
        --color-primary: #000000;
        --color-secondary: #ffffff;
    }
`

export const LightTheme = createGlobalStyle`
    :root{
        --color-primary: #ffffff;
        --color-secondary: #000000;
    }
`