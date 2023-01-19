import React from "react";

export default function Extra(props) {
    return <div style={extra}>
        <small style={extraText}>{props.text}</small>
        {props.img !== undefined &&
            <img style={extraImage} alt={'extra'} src={props.img}/>
        }
    </div>
}

const extra = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '20vw',
}

const extraText = {
    color: '#A79737',
    fontSize: '1vw',
    textAlign: 'center',
    width: '20vw'
}

const extraImage = {
    width: '6vw',
    height: '6vw',
}
