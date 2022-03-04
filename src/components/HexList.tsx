import React, {useState, useEffect} from "react";
// import  from './declaration.d.ts';
// import boxStyle from './boxColor.scss';
import styles from './BoxColor/Boxcolor.module.scss';

interface HexProps {
  items: string[];
}; 
// items: {id:number, hex: string}[];

const HexList: React.FC<HexProps> = props => {
  // document.getElementsByClassName('rect')[0].style.backgroundColor="red";
  console.log(document.getElementsByClassName('rect'));
  // console.log(document.getElementsByClassName('rect')[0].;
  // document.getElementsByClassName("gallery")[0].style.backgroundColor="blue";
  // document.body.style.backgroundColor = "red"

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    // document.title = `You clicked ${count} times`;
    // document.getElementsByClassName('rect')[0].style.backgroundColor="red";
    console.log(document.getElementsByClassName('rect'));
  });

  // const divStyle = {
  //   color: 'blue',
  //   background: 'yellow',
  //   // backgroundImage: 'url(' + imgUrl + ')',
  // };

  // divStyle = () => "Hello World!";
  const divStyle = (color:string) => { return {background:color,} };

  return (
    <div className="containerRect">
      {props.items.map(rec => (
        // <div className={boxStyle.rect} key={rec} style={divStyle(rec)}>{rec}</div>
        // <div className="rect" key={rec} style={divStyle(rec)}>{rec}</div>
        <div className={styles.Boxcolor} key={rec} style={divStyle(rec)}>{rec}</div>
        // boxStyle.bColor = rec;
        // <div className={boxStyle.bColor} key={rec}>{rec}</div>
        // <div className={boxStyle.rect} key={rec}>{rec}</div>
      ))}
    </div>
        
  );


  // <ul>
  //     {props.items.map(rec => (
  //        <li key={rec}>{rec}</li>
  //     ))}
  //   </ul>
};

export default HexList;