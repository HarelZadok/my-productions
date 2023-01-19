import TextButton from "./TextButton";
import './TopBar.css'
import React from 'react';

export default function TopBar() {
    return <div className={'header_topBar'}>
        <div className={'logoContainer_topBar'}>
            <img onClick={() => window.location.href = '/'} className={'logo_topBar'} alt={'logo'} src={require('../resources/logo1.png')}/>
        </div>
        <div className={'headerOptions_topBar'}>
            <div style={{width: '200px', justifyContent: 'center', alignItems: 'center',display: 'flex'}}>
                <TextButton onClick={() => window.location.href = '/contact'} className={'headerOption_topBar'}>צור קשר</TextButton>
            </div>
            <div style={{width: '200px', justifyContent: 'center', alignItems: 'center',display: 'flex'}}>
                <TextButton onClick={() => window.location.href = '/about'} className={'headerOption_topBar'}>אודות</TextButton>
            </div>
            <div style={{width: '200px', justifyContent: 'center', alignItems: 'center',display: 'flex'}}>
                <TextButton onClick={() => window.location.href = '/events'} className={'headerOption_topBar'}>האירועים שלנו</TextButton>
            </div>
            <div style={{width: '200px', justifyContent: 'center', alignItems: 'center',display: 'flex'}}>
                <TextButton onClick={() => window.location.href = '/recommendations'} className={'headerOption_topBar'}>המלצות</TextButton>
            </div>
        </div>
    </div>
}