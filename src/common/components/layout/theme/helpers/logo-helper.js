const getParsedAndEnd = (value) => {
  let altered = `${value}`;
  let end = null;
  if (altered.length > 2) {
    let ending = altered.substring(altered.length - 2).toLowerCase();
    if (ending === 'vh' || ending === 'ch' || ending === 'px') {
      altered = altered.substring(0, altered.length - 1);
      end = ending;
    }
  }
  let parsed = parseFloat(altered);
  return {
    parsed,
    end,
  };
  // let result = 448 * parsed / 386;
  // if (end !== null) {
  //   result = `${result}${end}`;
  // }
}

export const LogoScale = {
  main: {
    getWidth: (height) => {
      let {parsed, end} = getParsedAndEnd(height);

      let result = 448 * parsed / 386;
      if (end !== null) {
        result = `${result}${end}`;
      }
      
      return result;
    },
    getHeight: (width) => {
      let {parsed, end} = getParsedAndEnd(width);

      let result = 386 * parsed / 448;
      if (end !== null) {
        result = `${result}${end}`;
      }
      
      return result;
    },
  },
  corner: {
    getWidth: (height) => {
      let {parsed, end} = getParsedAndEnd(height);

      let result = 607 * parsed / 227;
      if (end !== null) {
        result = `${result}${end}`;
      }
      
      return result;
    },
    getHeight: (width) => {
      let {parsed, end} = getParsedAndEnd(width);

      let result = 227 * parsed / 607;
      if (end !== null) {
        result = `${result}${end}`;
      }
      
      return result;
    },
  },
}