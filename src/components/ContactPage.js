import './ContactPage.css'
import TopBar from "./TopBar";
import {useState} from "react";

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
                <button className={'contactButton_contact'}><img className={'contactImage_contact'} alt={'email'}
                                                                 src={require('../resources/email.png')}/></button>
                <button className={'contactButton_contact'}><img className={'contactImage_contact'} alt={'phone'}
                                                                 src={require('../resources/phone.png')}/></button>
                <button className={'contactButton_contact'}><img className={'contactImage_contact'} alt={'whatsapp'}
                                                                 src={require('../resources/whatsapp.png')}/></button>
            </div>
            <div className={'contactUs_contact'}>
                <form style={{height: '100%', width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}} onSubmit={handleSubmit}>
                    <div className={'contactColumn_contact'}>
                        <CustomInput handleChange={handleChange} id={'type'} rtl title={'סוג אירוע:'} height={'60px'}/>
                        <CustomInput handleChange={handleChange} id={'description'} rtl multiline title={'תיאור האירוע:'} height={'100%'}/>
                    </div>
                    <img src={require('../resources/logo1.png')} alt={'contact us'} className={'contactUsImage_contact'}/>
                    <div className={'contactColumn_contact'}>
                        <CustomInput handleChange={handleChange} id={'name'} rtl title={'שם מלא:'} height={'60px'}/>
                        <CustomInput handleChange={handleChange} id={'phone'} type={'tel'} title={'מספר טלפון:'} height={'60px'}/>
                        <CustomInput handleChange={handleChange} id={'email'} type={'email'} title={'דוא"ל:'} height={'60px'}/>
                    </div>
                </form>
            </div>
        </div>
        <TopBar/>
    </div>
}

function CustomInput(props) {
    return <div style={
        {
            backgroundColor: '#FFFFFF',
            borderStyle: "solid",
            borderWidth: 5,
            borderColor: '#c4a81a',
            borderRadius: 20,
            minHeight: 60,
            paddingInline: 20,
            paddingBlock: 10,
            boxSizing: 'border-box',
            width: 305,
            height: props.height,
            display: 'flex',
            flexDirection: !props.multiline ? 'row-reverse' : 'column',
        }}>
        <label htmlFor={props.id} style={{letterSpacing: -.5, color: '#c4a81a', fontWeight: 'bold', direction: 'rtl', fontSize: 20, marginLeft: 5, whiteSpace: 'nowrap'}}>{props.title}</label>
        {
            props.multiline ?
                <textarea onChange={props.handleChange} id={props.id} style={{direction: props.rtl ? 'rtl' : 'ltr'}} className={'input_contact'}/> :
                <input onChange={props.handleChange} id={props.id} style={{direction: props.rtl ? 'rtl' : 'ltr'}} className={'input_contact'} type={props.type ? props.type : 'text'}/>
        }
    </div>
}