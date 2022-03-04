import React, {useRef, ChangeEvent, useState} from "react";

type NewColorProps = {
  onAddColor: (colorText:string) => void;
}

const FormAdd: React.FC<NewColorProps> = props => {
  const textInputRef = useRef<HTMLInputElement>(null);

  // const hexSubmitHandler = (event:React.FormEvent) => {
  //   event.preventDefault();
  //   // if(textInputRef.contact)
  //   const enteredText = textInputRef.current!.value;
  //   console.log(enteredText);

  //   props.onAddColor(enteredText);
  // };

  
  const [color, setColor] = useState<string>("");
  // interface IColor { colorHex: string;};
  // const [newColorList, setNewColorList] = useState<IColor>([]);
  const [newColorList, setNewColorList] = useState<string[]>([]);
  const handleChange = (event:ChangeEvent<HTMLInputElement>):void => {
    setColor(event.target.value);
  };


  // const addColor = ():void => {
  const addColor = (event:React.FormEvent):void => {
    event.preventDefault();
    // const newColor:string = textInputRef.current!.value; // bisa
    const newColor:string = color;
    setNewColorList([...newColorList, newColor]);
    console.log(newColorList);
    setColor("");
  };

  // const sendData = (input:string):void => {
  //   this.props.parentCallback("Hey Popsie, How’s it going?");
  // };

  return (
    // <form onSubmit={hexSubmitHandler}>
    <form onSubmit={addColor} >
        <div>
            <label htmlFor="color">Add new Color: </label>
            <input type="text" name="color" onChange={handleChange} ref={textInputRef} value={color} />
            <button type="submit">Add</button>
        </div>
        <hr />
        <div>
          <label><input type="checkbox" id="r50" /> Red &gt; 50%</label>
          <label><input type="checkbox" id="g50" /> Green &gt; 50%</label>
          <label><input type="checkbox" id="b50" /> Blue &gt; 50%</label>
          <label><input type="checkbox" id="sat50" /> Saturation &gt; 50%</label>

        </div>
        <hr />
    </form>
  );
};

export default FormAdd;