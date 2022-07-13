import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("bgLight", "bgDark")(props),
    },
  }),
};

export default styles;
