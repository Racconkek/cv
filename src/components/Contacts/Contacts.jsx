import React from 'react';

import './Contacts.css'

function Contacts() {
    return (
        <section id='contacts' className={'info-section'}>
            <h2 className={'headline'}>Контакты</h2>
            <div className={'contacts__list'}>
                <a href='https://vk.com/black_walnut_dragon' className={'contacts__list-item contacts__link link'}>VK</a>
                <a href='https://teleg.run/Raccoon_kek' className={'contacts__list-item contacts__link link'}>Telegram</a>
                <a href='https://github.com/Racconkek' className={'contacts__list-item contacts__link link'}>Github</a>
                <p className={'contacts__list-item'}>+7 924 614 74 76</p>
                <p className={'contacts__list-item'}>Lyuda-mirosh@mail.ru</p>
                <p className={'contacts__list-item'}>Екатеринбург</p>
            </div>
        </section>
    );
}

export default Contacts;