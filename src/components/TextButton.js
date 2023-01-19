import {useState, useRef, useEffect} from "react";

export default function TextButton(props) {
    const textRef = useRef(null);
    const defaultFontSize = props.fontSize !== undefined ? props.style.fontSize : '1vw';
    const [fontSize, setFontSize] = useState(defaultFontSize);
    const [userStyle, setUserStyle] = useState({...props.style, fontSize: fontSize});
    useEffect(() => {
        setUserStyle({...props.style, fontSize: fontSize});
    }, [fontSize, props.style]);
    const [opacity, setOpacity] = useState(1);
    const sets = {setOpacity, setFontSize};
    const args = {defaultFontSize};
    const style = {cursor: 'pointer', opacity: opacity, ...userStyle};

    return <small
            onMouseOver={() => {if (shouldInteract(props)) interact(true, sets, args)}}
            onMouseOut={() => {if (shouldInteract(props)) interact(false, sets, args)}}
            className={`${props.className}`}
            style={style}
            ref={textRef}
            onClick={props.onClick}>
            {props.children}
        </small>
}

function shouldInteract(props) {
    if (props.interact === undefined)
        return true;
    return props.interact;
}

function interact(mouseOver, sets, args) {
    if (mouseOver) {
        sets.setOpacity(0.7);
        sets.setFontSize(args.defaultFontSize.substring(0, args.defaultFontSize.length - 2) * 1.3 + args.defaultFontSize.substring(args.defaultFontSize.length - 2, args.defaultFontSize.length));
    }
    else {
        sets.setOpacity(1);
        sets.setFontSize(args.defaultFontSize);
    }
}
