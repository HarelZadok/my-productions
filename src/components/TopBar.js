import TextButton from "./TextButton";
import './TopBar.css'
import React from 'react';

export default function TopBar() {
    return <div className={'header_topBar'}>
        <div className={'logoContainer_topBar'}>
            <img onClick={() => window.location.href = '/'} className={'logo_topBar'} alt={'logo'} src={require('../resources/logo1.png')}/>
        </div>
        <div className={'headerOptions_topBar'}>
            <div style={{width: '10vw', height: '10vh', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                <TextButton onClick={() => window.location.href = '/contact'} style={{fontSize: '1vw', color: '#FFFFFF', fontWeight: 500, textAlign: 'center'}}>צור קשר</TextButton>
            </div>
            <div style={{width: '10vw', height: '10vh', justifyContent: 'center', alignItems: 'center',display: 'flex'}}>
                <TextButton onClick={() => window.location.href = '/about'} style={{fontSize: '1vw', color: '#FFFFFF', fontWeight: 500, textAlign: 'center'}}>אודות</TextButton>
            </div>
            <div style={{width: '10vw', height: '10vh', justifyContent: 'center', alignItems: 'center',display: 'flex'}}>
                <TextButton onClick={() => window.location.href = '/events'} style={{fontSize: '1vw', color: '#FFFFFF', fontWeight: 500, textAlign: 'center'}}>האירועים שלנו</TextButton>
            </div>
            <div style={{width: '10vw', height: '10vh', justifyContent: 'center', alignItems: 'center',display: 'flex'}}>
                <TextButton onClick={() => window.location.href = '/recommendations'} style={{fontSize: '1vw', color: '#FFFFFF', fontWeight: 500, textAlign: 'center'}}>המלצות</TextButton>
            </div>
        </div>
    </div>
}
