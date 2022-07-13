import { extendTheme } from "@chakra-ui/react";

import styles from "./styles";
import components from "./components";
import fonts from "./fonts";
import colors from "./colors";
import config from "./config";

const theme = extendTheme({ styles, components, fonts, colors, config });
export default theme;
