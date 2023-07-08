import React, { ReactElement } from 'react';

export interface IMegaOption{
    icon: ReactElement,
    title: string;
    description: string;
    link: string;
}

export interface IMega{
    layout : 'single' | 'double' | 'triple';
    options: IMegaOption[];
}


export default function MegaMenu({layout, options}: IMega) {
  return (
    <div className={`mega-menu ${layout}`}>
        {
            options.map((item, i) => <MegaMenuItem key={i} {...item}/>)
        }
    </div>
  );
}

function MegaMenuItem({icon, title, description, link}: IMegaOption) {
    return (
        <div className="mega-menu__item flex">
            <div className='mega__icon'>
              {icon}
            </div>
            <div className='bxp'>
                <h4 className="mega__title">{title}</h4>
                <p className='mega__description'>{description}</p>
            </div>
            <div className='mega__arrow'>
                <svg xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24">
                    <defs>
                        <symbol viewBox="0 0 24 24" id="arrow-right-f">
                        <path fillRule="evenodd" clipRule="evenodd" d="M21 11.9988L13.9289 4.92773L12.1612 6.6955L16.2157 10.75L2.99902 10.75L2.99902 13.25L16.2145 13.25L12.1612 17.3033L13.9289 19.0711L21 12L20.9994 11.9994L21 11.9988Z" fill="currentColor"></path>
                        </symbol>
                    </defs>
                    <use xlinkHref="#arrow-right-f" fill="#FCD535"></use>
                </svg>
            </div>
        </div>
    );
}
