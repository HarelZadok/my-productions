import './ContactPage.css'
import TopBar from "./TopBar";
import React, {useState} from "react";
import {isMobile} from "react-device-detect";

export default function ContactPage() {
    const [values, setValues] = useState({});
    const handleChange = e => {
        const { id, value } = e.target;
        setValues({ ...values, [id]: value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(values);
    };

    return <div className={'container_contact'}>
        <div className={'body_contact'}>
            <div className={'platformsContainer_contact'}>
                <button className={'contactButton_contact'}><img className={'contactImage_contact'} alt={'facebook'}
                                                                 src={require('../resources/facebook.png')}/></button>
                <button className={'contactButton_contact'}><img className={'contactImage_contact'} alt={'instagram'}
                                                                 src={require('../resources/instagram.png')}/></button>
                <button onClick={() => {window.location.href = 'mailto:my-productions@outlook.com'}} className={'contactButton_contact'}><img className={'contactImage_contact'} alt={'email'}
                                                                 src={require('../resources/email.png')}/></button>
                <button onClick={() => {alert('משה מורנו:\n+972 58-623-8000')}} className={'contactButton_contact'}><img className={'contactImage_contact'} alt={'phone'}
                                                                 src={require('../resources/phone.png')}/></button>
                <button onClick={() => {window.location.href = 'https://wa.me/+972586238000'}} className={'contactButton_contact'}><img className={'contactImage_contact'} alt={'whatsapp'}
                                                                 src={require('../resources/whatsapp.png')}/></button>
            </div>
            <div className={'contactUs_contact'}>
                <form style={{height: '100%', width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}} onSubmit={handleSubmit}>
                    <div className={'contactColumn_contact'}>
                        <CustomInput handleChange={handleChange} id={'name'} rtl title={'שם מלא:'} height={'6.3vh'}/>
                        <CustomInput handleChange={handleChange} id={'phone'} type={'tel'} title={'מספר טלפון:'} height={'6.3vh'}/>
                        <CustomInput handleChange={handleChange} id={'email'} type={'email'} title={'דוא"ל:'} height={'6.3vh'}/>
                        <button style={{alignSelf: 'center'}} className={'eventButton_main'}>שלח</button>

                    </div>
                    <img src={require('../resources/logo1.png')} alt={'contact us'} className={'contactUsImage_contact'}/>
                    <div className={'contactColumn_contact'}>
                        <CustomInput handleChange={handleChange} id={'type'} rtl title={'סוג אירוע:'} height={'6.3vh'}/>
                        <CustomInput handleChange={handleChange} id={'description'} rtl multiline title={'תיאור האירוע:'} height={'100%'}/>
                    </div>
                </form>
            </div>
        </div>
        <TopBar/>
    </div>
}

function CustomInput(props) {
    if (isMobile) {
        window.location.href = '/mobile';
        return <div></div>;
    }
    else {
        return <div style={
            {
                backgroundColor: '#FFFFFF',
                borderStyle: "solid",
                borderWidth: '0.24vw',
                borderColor: '#c4a81a',
                borderRadius: '1vw',
                paddingInline: '1vw',
                paddingBlock: '1vh',
                boxSizing: 'border-box',
                width: '16vw',
                height: props.height,
                display: 'flex',
                flexDirection: !props.multiline ? 'row-reverse' : 'column',
                alignItems: !props.multiline ? 'center' : 'flex-end',
            }}>
            <label htmlFor={props.id} style={{
                letterSpacing: '.001vw',
                color: '#c4a81a',
                fontWeight: 'bold',
                direction: 'rtl',
                fontSize: '1.2vw',
                marginLeft: '.5vw',
                whiteSpace: 'nowrap'
            }}>{props.title}</label>
            {
                props.multiline ?
                    <textarea onChange={props.handleChange} id={props.id} style={{direction: props.rtl ? 'rtl' : 'ltr'}}
                              className={'input_contact'}/> :
                    <input onChange={props.handleChange} id={props.id} style={{direction: props.rtl ? 'rtl' : 'ltr'}}
                           className={'input_contact'} type={props.type ? props.type : 'text'}/>
            }
        </div>
    }
}
