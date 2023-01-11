import {useState, useRef, useEffect} from "react";

export default function TextButton(props) {
    const textRef = useRef(null);

    const [defaultFontSize, setDefaultFontSize] = useState('28px');
    const [fontSize, setFontSize] = useState(defaultFontSize);
    const [opacity, setOpacity] = useState(1);
    const sets = {setOpacity, setFontSize};
    const args = {defaultFontSize};
    const style = {cursor: 'pointer', opacity: opacity, fontSize: fontSize, ...props.style};

    useEffect(() => {
        setDefaultFontSize(window.getComputedStyle(textRef.current).fontSize);
    }, []);

    return <div style={{width: "auto", height: "auto", justifyContent: "center", alignContent: "center"}}>
        <small
            onMouseOver={() => {if (shouldInteract(props)) interact(true, sets, args)}}
            onMouseOut={() => {if (shouldInteract(props)) interact(false, sets, args)}}
            className={`${props.className}`}
            style={style}
            ref={textRef}
            onClick={props.onClick}>
            {props.children}
        </small>
    </div>
}

function shouldInteract(props) {
    if (props.interact === undefined)
        return true;
    return props.interact;
}

function interact(mouseOver, sets, args) {
    if (mouseOver) {
        sets.setOpacity(0.7);
        sets.setFontSize(args.defaultFontSize.substring(0, args.defaultFontSize.length - 2) * 1.2 + 'px');
    }
    else {
        sets.setOpacity(1);
        sets.setFontSize(args.defaultFontSize);
    }
}