import marvelBackground from '../assets/marvel-background.jpg';
import dcBackground from '../assets/dc-backgroun.jpg';
import homeBackground from '../assets/home-background.jpg';

export const marvelTheme = {
    bgImage: `url(${marvelBackground})`,
    bgRepeat: 'inherit',
    bgSize: '100%',
    bgColor: "#EC1D24",
    secondary: "rgba(39, 33, 46, 0.5)",
};

export const dcTheme = {
    bgImage: `url(${dcBackground})`,
    bgRepeat: 'inherit',
    bgSize: '100%',
    bgColor: "#27212E",
    text: "#09090a",
    warning: "#E06D06",
    danger: "#DA2C38",
    secondary: "rgba(39, 33, 46, 0.5)",
};

export const defaultTheme = {
    bgImage: `url(${homeBackground})`,
    bgRepeat: 'repeat',
    bgSize: '300px',
    bgColor: "black",
    secondary: "rgba(128, 128, 128, 0.95)",
};