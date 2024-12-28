import {Poppins} from "next/font/google";

export const poppins = Poppins({
    subsets: ['latin', 'cyrillic'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-poppins',
    display: 'swap'
});