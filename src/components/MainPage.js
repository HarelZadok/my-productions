import './MainPage.css'
import React from "react";
import TextButton from "./TextButton.js";
import Extra from "./Extra";
import {Animator, batch, Fade, Move, MoveIn, ScrollContainer, ScrollPage, Sticky} from "react-scroll-motion";

const FadeUp = batch(Fade(), Move(), Sticky());

function TopPart() {
    return <ScrollPage>
        <div className={'header'}>
            <div className={'logoContainer'}>
                <img className={'logo'} alt={'logo'} src={require('../resources/logo1.png')}/>
            </div>
            <div className={'headerOptions'}>
                <div style={{width: '200px', justifyContent: 'center', alignItems: 'center',display: 'flex'}}>
                    <TextButton className={'headerOption'}>צור קשר</TextButton>
                </div>
                <div style={{width: '200px', justifyContent: 'center', alignItems: 'center',display: 'flex'}}>
                    <TextButton className={'headerOption'}>אודות</TextButton>
                </div>
                <div style={{width: '200px', justifyContent: 'center', alignItems: 'center',display: 'flex'}}>
                    <TextButton className={'headerOption'}>האירועים שלנו</TextButton>
                </div>
                <div style={{width: '200px', justifyContent: 'center', alignItems: 'center',display: 'flex'}}>
                    <TextButton className={'headerOption'}>המלצות</TextButton>
                </div>
            </div>
        </div>
        <Animator animation={FadeUp}>
            <div className={'body'}>
                <small className={'bodyText'} style={{fontFamily: 'Segoe Print'}}>MY - Productions</small>
                <small className={'bodyText'}>"חלומות שהופכים מציאות"</small>
                <small className={'bodyText'}>הפקות אירועים | השכרת ציוד לאירועים | ניהול אירועים</small>
                <button className={'eventButton'}>בואו ונגשים פנטזיות</button>
            </div>
        </Animator>
    </ScrollPage>
}

function BottomPart() {
    return <ScrollPage>
        <div className={'footer'}>
            <Animator animation={MoveIn(2000, 2000)}>
                <div className={'extras'}>
                    <div className={'extraList'}>
                        <Extra img={require('../resources/extra5.png')} text={'הפקות ברמה עולמית'}/>
                        <Extra img={require('../resources/extra7.png')} text={'זמינות'}/>
                        <Extra img={require('../resources/extra4.png')} text={'חשיבה מחוץ לקופסא'}/>
                        <Extra img={require('../resources/extra6.png')} text={'יצירת קשר עם ספקים'}/>
                    </div>
                    <div className={'extraList'}>
                        <Extra img={require('../resources/extra1.png')} text={'בכל מקום'}/>
                        <Extra img={require('../resources/extra2.png')} text={'פתרון בעיות'}/>
                        <Extra img={require('../resources/extra3.png')} text={'יעילות'}/>
                        <Extra img={require('../resources/extra9.png')} text={'סדר ואירגון'}/>
                        <Extra img={require('../resources/extra8.png')} text={'שירותיות'}/>
                    </div>
                </div>
            </Animator>
            <Animator animation={MoveIn(-2000, 2000)}>
                <div className={'contact'}>
                    <button className={'contactButton'}><img className={'contactImage'} alt={'facebook'} src={require('../resources/facebook.png')}/></button>
                    <button className={'contactButton'}><img className={'contactImage'} alt={'instagram'} src={require('../resources/instagram.png')}/></button>
                    <button className={'contactButton'}><img className={'contactImage'} alt={'email'} src={require('../resources/email.png')}/></button>
                    <button className={'contactButton'}><img className={'contactImage'} alt={'phone'} src={require('../resources/phone.png')}/></button>
                    <button className={'contactButton'}><img className={'contactImage'} alt={'whatsapp'} src={require('../resources/whatsapp.png')}/></button>
                </div>
            </Animator>
        </div>
    </ScrollPage>
}

export default function MainPage()
{
    return <div className={'container'}>
        <ScrollContainer>
            <TopPart/>
            <BottomPart/>
        </ScrollContainer>
    </div>
}