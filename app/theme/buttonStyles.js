export const buttonStyles = {
    baseStyle: {
      borderRadius: "base",
      _hover: {
        transform: `translateY(-2px)`,
      },
      _disabled: {
        transform: "none",
      },
    },
    sizes: {
      lg: {
        py: 7,
      },
    },
    variants: {
      icon: {
        p: 0,
        borderRadius: "full",
        _hover: {
          borderRadius: "full",
          bg: "bg.gray",
        },
      },
      primary: {
        bg: "primary.500",
        color: "black",
        px: "6",
        _hover: {
          bg: "primary.800",
          _disabled: {
            transform: "none",
            bg: "primary.500",
          },
        },
        _loading: {
          _hover: {
            bg: "primary.800",
          },
        },
      },
      profit: {
        bg: "profit",
        color: "black",
        px: "6",
        _hover: {
          bg: "profit.dark",
          _disabled: {
            transform: "none",
            bg: "profit",
          },
        },
        _loading: {
          _hover: {
            bg: "profit.dark",
          },
        },
      },
      secondary: {
        border: "1px solid",
        borderColor: "primary.500",
        color: "primary.500",
        _hover: {},
      },
    },
    defaultProps: {},
  };
  