import React, { ReactNode } from "react";
import styles from "./Boxcolor.module.scss";

// interface HexProps { hex: string; }; 

const Boxcolor: React.FC<{children:ReactNode}> = ({children}) => {
  const divStyle = (color:string) => { return {background:color,} };
  // console.log(children);

  return (
    <div className={styles.packetBox}>
      <div className={styles.Boxcolor} style={divStyle(children!.toString())}></div>
      <div  className={styles.labelColor}>
        {children}
      </div>
    </div>
  );
};

export default Boxcolor;
