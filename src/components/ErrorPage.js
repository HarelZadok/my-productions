import {useEffect, useState} from "react";

export default function ErrorPage() {
    const [redirect, setRedirect] = useState('מעביר לדף הבית.');

    useEffect(() => {
         const interval = setInterval(() => {
            if (redirect.length < 'מעביר לדף הבית...'.length) {
                setRedirect(redirect => redirect + '.');
            } else {
                setRedirect('מעביר לדף הבית.');
            }
        }, 400);

        setTimeout(() => {
            clearInterval(interval);
            window.location.href = '/';
        }, 3000);

        return () => {
            clearInterval(interval);
        }
    }, [redirect]);

    return <div>
        <h1 style={{direction: 'rtl'}}>דף זה לא קיים או נוצר עוד.</h1>
        <h1 style={{direction: 'rtl'}}>{redirect}</h1>
    </div>
};