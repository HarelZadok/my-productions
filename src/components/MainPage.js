import './MainPage.css'
import React from "react";
import Extra from "./Extra";
import {Animator, batch, Fade, Move, MoveIn, MoveOut, ScrollContainer, ScrollPage, Sticky} from "react-scroll-motion";
import arrowsDown from '../resources/arrows-down.svg';
import TopBar from "./TopBar";

const FadeUp = batch(Fade(), Move(), Sticky());

function TopPart() {
    return <ScrollPage>
        <Animator style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}} animation={FadeUp}>
            <div className={'body_main'}>
                <small className={'bodyText_main'} style={{fontFamily: 'Segoe Print'}}>MY - Productions</small>
                <small className={'bodyText_main'}>"חלומות שהופכים מציאות"</small>
                <small className={'bodyText_main'}>הפקות אירועים | השכרת ציוד לאירועים | ניהול אירועים</small>
                <button className={'eventButton_main'}>בואו ונגשים פנטזיות</button>
            </div>
            <button onClick={scrollToBottom} style={{backgroundColor: '#FFFFFF00', borderWidth: 0, cursor: 'pointer', position: 'absolute', bottom: 20}}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <small className={'contactUs_main'}>צור קשר</small>
                    <img className={'arrowsDown_main'} src={arrowsDown} alt={'contact'}/>
                </div>
            </button>
        </Animator>
    </ScrollPage>
}

function BottomPart() {
    return <ScrollPage>
        <div className={'footer_main'}>
            <Animator animation={batch(MoveIn(900, 100), MoveOut(900, 100))}>
                <div className={'extras_main'}>
                    <div className={'extraList_main'}>
                        <Extra img={require('../resources/extra5.png')} text={'הפקות ברמה עולמית'}/>
                        <Extra img={require('../resources/extra7.png')} text={'זמינות'}/>
                        <Extra img={require('../resources/extra4.png')} text={'חשיבה מחוץ לקופסא'}/>
                        <Extra img={require('../resources/extra6.png')} text={'יצירת קשר עם ספקים'}/>
                    </div>
                    <div className={'extraList_main'}>
                        <Extra img={require('../resources/extra1.png')} text={'בכל מקום'}/>
                        <Extra img={require('../resources/extra2.png')} text={'פתרון בעיות'}/>
                        <Extra img={require('../resources/extra3.png')} text={'יעילות'}/>
                        <Extra img={require('../resources/extra9.png')} text={'סדר ואירגון'}/>
                        <Extra img={require('../resources/extra8.png')} text={'שירותיות'}/>
                    </div>
                </div>
            </Animator>
            <Animator animation={MoveIn(-900, 100)}>
                <div className={'contact_main'}>
                    <button className={'contactButton_main'}><img className={'contactImage_main'} alt={'facebook'} src={require('../resources/facebook.png')}/></button>
                    <button className={'contactButton_main'}><img className={'contactImage_main'} alt={'instagram'} src={require('../resources/instagram.png')}/></button>
                    <button className={'contactButton_main'}><img className={'contactImage_main'} alt={'email'} src={require('../resources/email.png')}/></button>
                    <button className={'contactButton_main'}><img className={'contactImage_main'} alt={'phone'} src={require('../resources/phone.png')}/></button>
                    <button className={'contactButton_main'}><img className={'contactImage_main'} alt={'whatsapp'} src={require('../resources/whatsapp.png')}/></button>
                </div>
            </Animator>
        </div>
    </ScrollPage>
}

export default function MainPage()
{
    return <div className={'container_main'}>
        <ScrollContainer>
            <TopPart/>
            <BottomPart/>
        </ScrollContainer>
        <TopBar/>
    </div>
}

function scrollToBottom() {
    window.scrollTo({top: document.documentElement.scrollHeight, behavior: 'smooth'})
}