import React from 'react';
import {Link} from 'react-scroll'
import './Header.css';

function Header(props) {
    return (
        <header className={'header header_' + props.loaded}>
                <Link 
                    to='about'
                    activeClass={'header__item_active'}
                    spy={true}
                    smooth={true}
                    duration= {500}
                    offset={10}
                    className={'header__item'}>О себе</Link>
                <Link 
                    to='technology'
                    activeClass={'header__item_active'}
                    spy={true} 
                    smooth={true}
                    duration= {500} 
                    offset={10}
                    className={'header__item'}>Языки и фреймворки</Link>
                <Link 
                    to='projects'
                    activeClass={'header__item_active'}
                    spy={true} 
                    smooth={true}
                    duration={500} 
                    offset={20}
                    className={'header__item'}>Проекты</Link>
        </header>
    )
}

export default Header;