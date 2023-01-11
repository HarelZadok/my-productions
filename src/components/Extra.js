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
    maxWidth: '350px',
}

const extraText = {
    color: '#A79737',
    fontSize: '35px',
    textAlign: 'center',
    width: '300px',
}

const extraImage = {
    width: '130px',
    height: '130px'
}