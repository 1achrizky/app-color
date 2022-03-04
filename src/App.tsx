import React, {ChangeEvent,useState} from 'react';
// import HexList from './components/HexList';
// import FormAdd from './components/FormAdd';

import ListBox from './components/ListBox/ListBox';
import ListNewBox from './components/ListBox/ListNewBox';
import styles from './App.module.scss';

// function App() {
const App: React.FC = () => {
  // const recs = [{id:1, hex:'#FFFFFF'}];
  const defaultColors: string[] = ['#1ABC9C','#2ECC71','#3498DB',
    '#9B59B6','#34495E','#16A085','#27AE60','#2980B9',
    '#8E44AD','#2C3E50','#F1C40F','#E67E22','#E74C3C',
    '#ECF0F1','#95A5A6','#F39C12','#D35400','#C0392B',
    '#BDC3C7','#7F8C8D'];  
      
    interface Ires { 
      status?:boolean; 
      message?:string;
    };
    

  const chkLength = (input:string, action?:string|undefined) :Ires|void=> { 
    // const status:boolean = (input.length!=7)? false:true;
    // action?:string; // onChange|onSubmit
    if(Number(input.length)===7){
      return {
        status: true,
        message: "ok",
      };
    }else if(Number(input.length)>7){
      alert("Too many characters. Just type 7 characters."); 
      const prevStr: string = input.substring(0, input.length - 1);
      setColor(prevStr);
      return;
    }

    // if()
    // else{
    //   alert("Must be type 7 characters (include # first). Type again."); return;
    //   // return {
    //   //   status: false,
    //   //   message: "Just type 7 characters (include # first). Type again.",
    //   // };
    // }
  };

  interface IfxStr {prevStr:string; lastChar:string; splitStr:string[];};
  const fxStr = (input:string):IfxStr|void => { 
    return {
      prevStr:input.substring(0, input.length - 1),
      lastChar:input.substring(input.length - 1), 
      splitStr:input.split(""),
    };
  }
  
  const chkHex = (input:string) => { 
    input = input.toUpperCase();
    const in_split:string[] = input.split("");
    // const in_split:string[] = input.toUpperCase().trim("");
    console.log(in_split, Number(in_split.length), '---');

    if(in_split[0]!== '#'){ 
      alert('Non valid character. Use # in first character.');
      setColor("");
      return; 
    }

    const hexStr:string[] = ['A','B','C','D','E','F','0','1','2','3','4','5','6','7','8','9'];
    
    console.log(fxStr(input));
    for (let i = 1; i < Number(in_split.length); i++) {
      // console.log( i, hexStr.indexOf(in_split[i]) ); // UNCOMMENT: check

      // const prevStr: string = this.fxStr(input).prevStr;
      const prevStr: string = input.substring(0, input.length - 1);
      const lastChar:string = input.substring(input.length - 1);
      console.log('prevStr, lastChar= ', prevStr, lastChar);

      if(Number(hexStr.indexOf(in_split[i])) !== -1){  
        // console.log('isTrue');
      //   console.log(i, in_split[i], Number(hexStr.indexOf(in_split[i])), );
      //   return true;
      }else{
        console.log('isFalse');
        alert("You type: ("+input+"). "+lastChar+" is Non valid character. Use A-F or 0-9 in each digit."); 
        // alert("You type: ("+input+"). "+fxStr(input).lastChar+" is Non valid character. Use A-F or 0-9 in each digit."); 
        setColor(prevStr);
        return;
      }
    }

    
  };


  interface tRGB {
    r?:number|undefined;
    g?:number|undefined;
    b?:number|undefined;
  };

  const hex2rgb = (input:string): tRGB|void => { 
    input = input.toUpperCase();
    const result:string[] = input.split("");
    
    let rgb : tRGB = { r:0, g:0, b:0 };

    console.log(result[1]+result[2] , result[3]+result[4] );  
    
    if(result){
      rgb.r = (Number(result.length)>=3)? parseInt(result[1]+result[2], 16):0;
      rgb.g = (Number(result.length)>=5)? parseInt(result[3]+result[4], 16):0;
      rgb.b = (Number(result.length)>=7)? parseInt(result[5]+result[6], 16):0;
    };

    // 127 = 7F(hexa)
    if(Number(rgb.r) >127) setRChecked(true); else setRChecked(false);
    if(Number(rgb.g) >127) setGChecked(true); else setGChecked(false);
    if(Number(rgb.b) >127) setBChecked(true); else setBChecked(false);

    return rgb;
  };

  // interface IregexHex {
  //   0:string; 1:string; 2:string; 3:string;
  //   groups?:string;
  //   index?:number;
  //   input:string;
  //   length:number;
  // };

  // // const regexHex = (input:string):IregexHex|void => {
  // const regexHex = (input:string):RegExpExecArray |void => {
  //   const expression:any = /^#?([a-fA-F\d]{2})([a-fA-F\d]{2})([a-fA-F\d]{2})$/;
  //   // const res:any  = .exec(input);
  //   // console.log(res);
    
  //   // let result = <RegExpExecArray>{};
  //   for (let result = expression.exec(input); result !== null; result = expression.exec(input)) {
  //     const matchIndex = result.index;
  //     const t = result[0].length;
  //     matchRanges.push(new RegRange(matchIndex, t));
  //   }
  // };

  


  const [color, setColor] = useState<string>("");
  const [newColorList, setNewColorList] = useState<string[]>([]);

  const [RChecked, setRChecked] = useState(false);
  const [GChecked, setGChecked] = useState(false);
  const [BChecked, setBChecked] = useState(false);
  // const handleChangeCbox = () => {
  //   setIsChecked(!isChecked);
  // };


  const handleChange = (event:ChangeEvent<HTMLInputElement>):void => {
    const str:string = event.target.value;
    setColor(str);
    console.log(str);
    // console.log(regexHex(str));
    console.log(chkLength(str, 'onChange'));
    console.log(chkHex(str));
    // console.log('run after error');
    // console.log(hex2rgb(str));

    let h2r:tRGB|void = hex2rgb(str);
    console.log(h2r);
    // console.log(h2r.r);

    // let fxStr = fxStr(str);
    console.log(fxStr(str));
    let fxS = fxStr(str);
    console.log(fxS);
    // console.log(fxS.l);

    // const hex2rgb:tRGB = hex2rgb(str);
    // console.log(hex2rgb);
    // console.log(checkState);
    
  };

  


  const addColor = (event:React.FormEvent):void => {
    event.preventDefault();
    // const newColor:string = textInputRef.current!.value; // bisa
    const newColor:string = color;
    setNewColorList([...newColorList, newColor]);
    console.log(newColorList);
    setColor("");
  };


  

  // const checkState = useRef<HTMLInputElement>(null);
  
  return (
    // <div className="App">
    <div className={styles.App}>
      <form onSubmit={addColor} >
        <div>
            <label htmlFor="color">Add new Color: </label>
            <input type="text" name="color" onChange={handleChange} value={color} />
            <button type="submit">Add</button>
        </div>
        <hr />
        <div>
          <label><input type="checkbox" name="r50" checked={RChecked} /> Red &gt; 50%</label>
          <label><input type="checkbox" name="g50" checked={GChecked} /> Green &gt; 50%</label>
          <label><input type="checkbox" name="b50" checked={BChecked} /> Blue &gt; 50%</label>
          <label><input type="checkbox" name="sat50" /> Saturation &gt; 50%</label>

        </div>
        <hr />
      </form>

      <ListBox items={defaultColors} />
      <hr />
      <ListNewBox items={newColorList} />

      <br /><br />
      <hr />
      <br /><br />
      {/* <Boxcolor>AAA</Boxcolor> */}
      {/* <Box>XXX</Box> */}
    </div>
  );
}

export default App;
