import './MainPage.css'
import React, {useEffect, useState} from "react";
import Extra from "./Extra";
import {Animator, batch, Fade, Move, MoveIn, MoveOut, ScrollContainer, ScrollPage, Sticky} from "react-scroll-motion";
import arrowsDown from '../resources/arrows-down.svg';
import TopBar from "./TopBar";
import useScrollPercentage from "../ScrollPercentage";
import {isMobile} from "react-device-detect";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAaMCY0yZdokziRokpqwJGi5o7z8MgyfLU",
    authDomain: "my-productions-43588.firebaseapp.com",
    projectId: "my-productions-43588",
    storageBucket: "my-productions-43588.appspot.com",
    messagingSenderId: "637715081214",
    appId: "1:637715081214:web:fc3a306576090ff0d782af",
    measurementId: "G-PEHWK5CW27"
};

const app = initializeApp(firebaseConfig);

const FadeUp = batch(Fade(), Move(), Sticky());

function TopPart({scroll}) {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return <ScrollPage>
        <div className={'body_main'}>
            <small className={'bodyTitle_main'} style={{fontFamily: 'Segoe Print', fontSize: (scrollPosition / 1000 + 1.6) + 'vw', top: 35.5 - scrollPosition / 50 + 'vh'}}>MY - Productions</small>
            <small className={'bodyTitle_main'} style={{fontSize: (scrollPosition / 1000 + 1.3) + 'vw', top: 40.6 - scrollPosition / 55 + 'vh'}}>"חלומות שהופכים מציאות"</small>
            <Animator style={{height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}} animation={FadeUp}>
                <small className={'bodyText_main'}>הפקות אירועים | השכרת ציוד לאירועים | ניהול אירועים</small>
                <button className={'eventButton_main'}>בואו ונגשים פנטזיות</button>
                <button onClick={scrollToBottom} style={{backgroundColor: '#FFFFFF00', borderWidth: 0, cursor: 'pointer', position: 'absolute', bottom: '2vh', width: '100%', justifyContent: 'center', display: 'flex'}}>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <small className={'contactUs_main'}>צור קשר</small>
                        <img className={'arrowsDown_main'} src={arrowsDown} alt={'contact'}/>
                    </div>
                </button>
            </Animator>
        </div>
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
    const [divRef, scrollPercentage] = useScrollPercentage();

    if (isMobile) {
        return <h1>Mobile version TBD</h1>
    }

    console.log(scrollPercentage);
    return <div className={'container_main'} ref={divRef}>
        <ScrollContainer>
            <TopPart scroll={scrollPercentage}/>
            <BottomPart/>
        </ScrollContainer>
        <TopBar/>
    </div>
}

function scrollToBottom() {
    window.scrollTo({top: document.documentElement.scrollHeight, behavior: 'smooth'})
}
