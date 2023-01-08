import './MainPage.css'
import React from "react";
import TextButton from "./TextButton.js";

export default function MainPage()
{
    return <div className={'container'}>
        <div className={'logoContainer'}>
            <img className={'logo'} alt={'logo'} src={require('../resources/logo1.png')}/>
        </div>
        <div className={'header'}>
            <TextButton className={'headerOption'}>צור קשר</TextButton>
            <TextButton className={'headerOption'}>אודות</TextButton>
            <TextButton className={'headerOption'}>האירועים שלנו</TextButton>
            <TextButton className={'headerOption'}>המלצות</TextButton>
        </div>
        <div className={'body'}>
            <small className={'bodyText'} style={{fontFamily: 'Segoe Print'}}>MY - Productions</small>
            <small className={'bodyText'}>"חלומות שהופכים מציאות"</small>
            <button className={'eventButton'}>בואו ונפיק אירוע</button>
        </div>
    </div>

}