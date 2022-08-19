

export const LogoScale = {
  main: {
    getWidth: (height) => {
      let result = 448 * height / 386;
      return result;
    },
    getHeight: (width) => {
      return 386 * width / 448;
    },
  },
  corner: {
    getWidth: (height) => {
      return 607 * height / 227;
    },
    getHeight: (width) => {
      return 227 * width / 607;
    },
  },
}