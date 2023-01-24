import './TopBarM.css'

export default function TopBarM() {
    return <div className={'topBar_main_m'}>
        <button className={'drawerButton_main_m'}>
            <img src={require('../resources/drawer.png')} alt={'drawer'} className={'drawer_main_m'}/>
        </button>
        <div className={'logoContainer_main_m'}>
            <img src={require('../resources/logo1.png')} alt={'logo'} className={'logo_main_m'}/>
        </div>
    </div>
}
