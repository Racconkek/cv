import React from 'react';
import './Project.css';

function Project(props) {
    let app;
    if (props.app) {
        app = <a href={props.app} className={'link project__link'}>app</a>
    }
  return (
    <section className={'project'}>
        <h3 className={'project__number project__headline'}>{props.number}</h3>
        <h3 className={'project__name project__headline'}>{props.name}</h3>
        <div className={'project__links'}>
            <a href={props.github} className={'link project__link'}>github</a>
            {app}      
        </div>
        <div className={'project__description'}>
            {props.description}
        </div>
        <div className={'project__photos'}>
            <img src={props.photo} alt='project' className={'project__photo'}/>
        </div>
    </section>
  );
}

export default Project;