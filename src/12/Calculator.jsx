import { useState } from "react";
import TemparatureInput from "./TemparatureInput";
import BoilingVerdict from "./BoilingVerdict";

function toCelius(props) {
    return (props - 32) * 5 /9;
}

function toFahrenheit(props) {
    return (props *9/5) +32;
}

function tryConvert(temparature,convert) {
    const input = parseFloat(temparature);
    if(Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function Calculator(props) {
    const [temparature,setTemparature] = useState('');
    const [scale,setScale] = useState('c');

    const handleCelsiusChange=(temparature) => {
        setTemparature(temparature);
        setScale('c');
    }

    const handleFahrenheitChange = (temparature) => {
        setTemparature(temparature);
        setScale('f');
    }
    const celsius = scale === 'f' ? tryConvert(temparature, toCelius) : temparature;
    const fahrenheit = scale ==='c' ?tryConvert(temparature, toFahrenheit) : temparature;
    return (
        <div>
        <TemparatureInput
        scale="c"
        temparature={celsius}
        onTemparatureChange={handleCelsiusChange} />
        <TemparatureInput
        scale="f"
        temparature={fahrenheit}
        onTemparatureChange = {handleFahrenheitChange} />
        <BoilingVerdict 
        celsius={parseFloat(celsius)} />
        </div>
    )
}
export default Calculator;