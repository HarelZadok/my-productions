import {useState} from "react";

export default function TextButton(props) {
    const [opacity, setOpacity] = useState(1);
    const [scale, setScale] = useState(1);
    const sets = {setOpacity, setScale};
    let style = {cursor: 'pointer', opacity: opacity, transform: [{scale: scale}], ...props.style};
    return <small
        onMouseOver={() => {if (shouldInteract(props)) interact(true, sets)}}
        onMouseOut={() => {if (shouldInteract(props)) interact(false, sets)}}
        className={props.className} style={style}
        onClick={props.onClick}>
        {props.children}
    </small>
}

function shouldInteract(props) {
    if (props.interact === undefined)
        return true;
    return props.interact;
}

function interact(mouseOver, sets) {
    if (mouseOver) {
        sets.setOpacity(0.5);
        sets.setScale(1.2);
    }
    else {
        sets.setOpacity(1);
        sets.setScale(1);
    }
}