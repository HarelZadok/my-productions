import './MainPage.css'
import React, {useEffect, useState} from "react";
import Extra from "./Extra";
import {Animator, batch, Fade, Move, MoveIn, MoveOut, ScrollContainer, ScrollPage, Sticky} from "react-scroll-motion";
import arrowsDown from '../resources/arrows-down.svg';
import TopBar from "./TopBar";
import {isMobile} from "react-device-detect";
import TopBar_M from "./TopBar_M";

const FadeUp = batch(Fade(), Move(), Sticky());

function TopPart() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        setScrollPosition(getScrollPercent());
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return <ScrollPage>
        <div className={'body_main_d'}>
            <small className={'bodyTitle_main_d'} style={{fontFamily: 'Segoe Print Bold', fontSize: (scrollPosition / 100 + 1.6) + 'vw', top: 35.5 - scrollPosition / 5 + 'vh'}}>MY - Productions</small>
            <small className={'bodyTitle_main_d'} style={{fontSize: (scrollPosition / 100 + 1.3) + 'vw', top: (40.6 - scrollPosition / 5.5) + 'vh'}}>"חלומות שהופכים מציאות"</small>
            <Animator style={{height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}} animation={FadeUp}>
                <small className={'bodyText_main_d'}>הפקות אירועים | השכרת ציוד לאירועים | ניהול אירועים</small>
                <button className={'eventButton_main_d'}>בואו ונגשים פנטזיות</button>
                <button onClick={scrollToBottom} style={{backgroundColor: '#FFFFFF00', borderWidth: 0, cursor: 'pointer', position: 'absolute', bottom: '2vh', width: '100%', justifyContent: 'center', display: 'flex'}}>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <small className={'contactUs_main_d'}>פרטים</small>
                        <img className={'arrowsDown_main_d'} src={arrowsDown} alt={'contact'}/>
                    </div>
                </button>
            </Animator>
        </div>
    </ScrollPage>
}

function getScrollPercent() {
    const h = document.documentElement,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
}

function BottomPart() {
    return <ScrollPage>
        <div className={'footer_main_d'}>
            <Animator animation={batch(MoveIn(900, 100), MoveOut(900, 100))}>
                <div className={'extras_main_d'}>
                    <div className={'extraList_main_d'}>
                        <Extra img={require('../resources/extra5.png')} text={'הפקות ברמה עולמית'}/>
                        <Extra img={require('../resources/extra7.png')} text={'זמינות'}/>
                        <Extra img={require('../resources/extra4.png')} text={'חשיבה מחוץ לקופסא'}/>
                        <Extra img={require('../resources/extra6.png')} text={'יצירת קשר עם ספקים'}/>
                    </div>
                    <div className={'extraList_main_d'}>
                        <Extra img={require('../resources/extra1.png')} text={'בכל מקום'}/>
                        <Extra img={require('../resources/extra2.png')} text={'פתרון בעיות'}/>
                        <Extra img={require('../resources/extra3.png')} text={'יעילות'}/>
                        <Extra img={require('../resources/extra9.png')} text={'סדר ואירגון'}/>
                        <Extra img={require('../resources/extra8.png')} text={'שירותיות'}/>
                    </div>
                </div>
            </Animator>
            <Animator animation={MoveIn(-900, 100)}>
                <div className={'contact_main_d'}>
                    <button className={'contactButton_main_d'}><img className={'contactImage_main_d'} alt={'facebook'} src={require('../resources/facebook.png')}/></button>
                    <button className={'contactButton_main_d'}><img className={'contactImage_main_d'} alt={'instagram'} src={require('../resources/instagram.png')}/></button>
                    <button className={'contactButton_main_d'}><img className={'contactImage_main_d'} alt={'email'} src={require('../resources/email.png')}/></button>
                    <button className={'contactButton_main_d'}><img className={'contactImage_main_d'} alt={'phone'} src={require('../resources/phone.png')}/></button>
                    <button className={'contactButton_main_d'}><img className={'contactImage_main_d'} alt={'whatsapp'} src={require('../resources/whatsapp.png')}/></button>
                </div>
            </Animator>
        </div>
    </ScrollPage>
}

export default function MainPage()
{
    if (isMobile)
        return <div className={'container_main_m'}>
            <TopBar_M/>
            <div className={'body_main_m'}>
                <small className={'bodyTitle_main_m'} style={{fontFamily: 'Segoe Print Bold', top: '5vh'}}>MY - Productions</small>
                <small className={'bodyTitle_main_m'} style={{top: '5vh'}}>"חלומות שהופכים מציאות"</small>
                <button className={'eventButton_main_m'}>בואו ונגשים פנטזיות</button>
                <small className={'bodyText_main_m'}>| הפקות אירועים</small>
                <small className={'bodyText_main_m'}>| השכרת ציוד</small>
                <small className={'bodyText_main_m'}>| ניהול אירועים</small>
            </div>
        </div>
    else
        return <div className={'container_main_d'}>
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
