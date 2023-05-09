import React, { ReactElement } from 'react';
export interface IHelp{
  icon: ReactElement;
  title: string;
  description: string;
  linkLabel: string;
  linkHref?: string
}



const helpOptions: IHelp[] = [
  {
    icon: <svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity=".2" d="M61.666 7.5l3.333 3.333L68.333 7.5l-3.334-3.333L61.666 7.5zm-57.5 26.667l2.5 2.5 2.5-2.5-2.5-2.5-2.5 2.5zm66.668 10h2.5v-2.5h-2.5v2.5z" fill="#76808F"/><circle cx="39.999" cy="39.167" r="3.333" fill="url(#paint0_linear_1288_32024)"/><path opacity=".2" d="M30 45l10 10 10-10v25H30V45z" fill="#76808F"/><path d="M30 45h-6.667C15.97 45 10 50.97 10 58.333V70h20V45z" fill="url(#paint1_linear_1288_32024)"/><path d="M50 45v25h20V58.333C70 50.97 64.03 45 56.667 45H50z" fill="url(#paint2_linear_1288_32024)"/><path d="M27.5 20c0-6.903 5.596-12.5 12.5-12.5 6.903 0 12.5 5.597 12.5 12.5v1.667h3.333V20c0-8.745-7.09-15.833-15.834-15.833S24.166 11.255 24.166 20v1.667h3.333V20z" fill="url(#paint3_linear_1288_32024)"/><path d="M59.167 29.881c0 2.367-1.99 4.286-4.445 4.286H52.5V21.25h2.222c2.455 0 4.445 1.919 4.445 4.286v4.345z" fill="url(#paint4_linear_1288_32024)"/><path d="M20.833 29.881c0 2.367 1.99 4.286 4.445 4.286H27.5V21.25h-2.222c-2.455 0-4.445 1.919-4.445 4.286v4.345z" fill="url(#paint5_linear_1288_32024)"/><defs><linearGradient id="paint0_linear_1288_32024" x1="39.999" y1="35.833" x2="39.999" y2="42.5" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"/><stop offset="1" stop-color="#F8D33A"/></linearGradient><linearGradient id="paint1_linear_1288_32024" x1="40" y1="70" x2="40" y2="45" gradientUnits="userSpaceOnUse"><stop stop-color="#76808F"/><stop offset="1" stop-color="#929AA5"/></linearGradient><linearGradient id="paint2_linear_1288_32024" x1="40" y1="70" x2="40" y2="45" gradientUnits="userSpaceOnUse"><stop stop-color="#76808F"/><stop offset="1" stop-color="#929AA5"/></linearGradient><linearGradient id="paint3_linear_1288_32024" x1="39.999" y1="4.167" x2="39.999" y2="21.667" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"/><stop offset="1" stop-color="#76808F"/></linearGradient><linearGradient id="paint4_linear_1288_32024" x1="55.833" y1="34.167" x2="55.833" y2="21.25" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"/><stop offset="1" stop-color="#F8D33A"/></linearGradient><linearGradient id="paint5_linear_1288_32024" x1="24.167" y1="34.167" x2="24.167" y2="21.25" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"/><stop offset="1" stop-color="#F8D33A"/></linearGradient></defs></svg>,
    title: "24/7 Chat Support",
    description:"Get 24/7 chat support with our friendly customer service agents at your service.",
    linkLabel: "Chat now",
    linkHref: "/",

  },
  {
    icon: <svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity=".2" d="M64.166 19.167l3.333 3.333 3.334-3.333-3.334-3.334-3.333 3.334zm-55 45l2.5 2.5 2.5-2.5-2.5-2.5-2.5 2.5zm27.5 12.5h2.5v-2.5h-2.5v2.5z" fill="#76808F"/><path fill-rule="evenodd" clip-rule="evenodd" d="M70 29.167H30v36.666h20l10.833 10.834V65.833H70V29.167zm-32.5 9.166h25v3.334h-25v-3.334zm0 7.5h25v3.334h-25v-3.334zm12.5 7.5H37.5v3.334H50v-3.334z" fill="url(#paint0_linear_1288_32038)"/><path d="M10 10h40v19.167H30v17.5L19.167 57.5V46.667H10V10z" fill="url(#paint1_linear_1288_32038)"/><defs><linearGradient id="paint0_linear_1288_32038" x1="50" y1="76.667" x2="50" y2="29.167" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"/><stop offset="1" stop-color="#F8D33A"/></linearGradient><linearGradient id="paint1_linear_1288_32038" x1="30" y1="10" x2="30" y2="57.5" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"/><stop offset="1" stop-color="#76808F"/></linearGradient></defs></svg>,
    title: "FAQs",
    description:"View FAQs for detailed instructions on specific features.",
    linkLabel: "Learn more"
  },
  {
    icon: <svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.6 70h51.567A5.833 5.833 0 0070 64.165V13.334H18.334v50.833a5.833 5.833 0 01-5.734 5.832zm49.067-36.666h-16.25v3.333h16.25v-3.333zm0 7.5h-16.25v3.333h16.25v-3.333zm0 7.5h-16.25v3.333h16.25v-3.333zm0 7.5h-35v3.333h35v-3.333z" fill="url(#paint0_linear_1288_34611)"/><path opacity=".2" d="M6.666 40.001v24.166a5.833 5.833 0 0011.666 0V40H6.666z" fill="#76808F"/><path d="M26.666 51.667h14.583V33.333H26.666v18.334z" fill="url(#paint1_linear_1288_34611)"/><path d="M55 25H33.335v-3.333h21.667V25z" fill="url(#paint2_linear_1288_34611)"/><path opacity=".2" d="M6.666 25l3.333 3.333L13.333 25l-3.334-3.333L6.666 25zM60 75.833l2.5 2.5 2.5-2.5-2.5-2.5-2.5 2.5zM73.334 40h2.5v-2.5h-2.5V40z" fill="#76808F"/><defs><linearGradient id="paint0_linear_1288_34611" x1="41.25" y1="13.334" x2="41.25" y2="69.999" gradientUnits="userSpaceOnUse"><stop stop-color="#76808F"/><stop offset="1" stop-color="#929AA5"/></linearGradient><linearGradient id="paint1_linear_1288_34611" x1="33.958" y1="51.667" x2="33.958" y2="33.333" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"/><stop offset="1" stop-color="#F8D33A"/></linearGradient><linearGradient id="paint2_linear_1288_34611" x1="33.334" y1="23.333" x2="55.001" y2="23.333" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"/><stop offset="1" stop-color="#F8D33A"/></linearGradient></defs></svg>,
    title: "Blog",
    description:"Stay up to date with the latest stories and commentary.",
    linkLabel: "Learn more"
  }
];

export default function help() {
  return (
    <div className="help">
      <div className="container">
          <h1>Need help?</h1>
          <div className="grid">
            {
              helpOptions.map(item => <HelpItem key={item.title} {...item} /> )
            }
          </div>
      </div>
    </div>
  )
}

function HelpItem({icon, title, description, linkLabel, linkHref}: IHelp) {
  return (
    <div  className="help__item hp flex gap-1">
      <div className='hp__icon'>
        {icon}
      </div>
      <div className="hp__description">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={linkHref}> {linkLabel}</a>
      </div>
    </div>
  )
}

