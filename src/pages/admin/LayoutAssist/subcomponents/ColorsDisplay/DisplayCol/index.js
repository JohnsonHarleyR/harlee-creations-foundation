import { useEffect, useState } from "react"


const DisplayCol = ({colors, id}) => {

  const [divs, setDivs] = useState([]);

  useEffect(() => {
    if (colors && colors.length > 0) {
      let newDivs = [];
      colors.forEach((c, i) => {
        let div = <div className={`display-col-block block-${i + 1}`}
            style={{
              backgroundColor: c,
            }}
          ></div>
        newDivs.push(div);
      });
      setDivs(newDivs);
    }
  }, [colors]);

  return (
    <div className="display-col" id={id}>
      {divs}
    </div>
  )

}

export default DisplayCol;