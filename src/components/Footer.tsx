import React from 'react'
interface IGroup{
  title: string;
  isVisible: boolean;
  content: string[];
  isCommunity: boolean
}
const groups: IGroup[] = [
  {
    title: "About",
    isVisible: false,
    content: new Array<string>(16).fill('About us'),
    isCommunity: false,
  },
  {
    title: "Products",
    isVisible: false,
    content: new Array<string>(13).fill('product us'),
    isCommunity: false,
  },
  {
    title: "Service",
    isVisible: false,
    content: new Array<string>(14).fill('service us'),
    isCommunity: false,
  },
  {
    title: "Support",
    isVisible: false,
    content: new Array<string>(12).fill('support us'),
    isCommunity: false,
  },
  {
    title: "Learn",
    isVisible: false,
    content: new Array<string>(12).fill('learn us'),
    isCommunity: false,
  },
  {
    title: "Community",
    isVisible: false,
    content: [
      'bxl-discord-alt',
      'bxl-telegram',
      'bxl-tiktok',
      'bxl-facebook-circle',
      'bxl-twitter',
      'bxl-reddit',
      'bxl-instagram',
      'bxl-bitcoin',
      'bx-envelope',
      'bxl-youtube'
    ],
    isCommunity: true,
  }
];

export default function Footer() {

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__group">

          {groups.map( (grp, index) => <FooterItem key={grp.title} index={index} {...grp} />)}
          
        </div>
      </div>
    </footer>
  )
}

function FooterItem({content, title, isCommunity, index}: IGroup & {index: number}) {

  const [ isToggled, setToggle] = React.useState(false);

  // const updateUi(){

  // }
  return (
   <div className={`${isCommunity ? 'cms' : index === 4 ? 'learn':''}`}>
     <div className='flex head'>
        <h3>{title}</h3>
          {
            !isCommunity && <span  onClick={() => setToggle(!isToggled)} >
            <i className={`bx ${isToggled ? 'bx-minus' : 'bx-plus'} ich`}></i>
          </span>
          }
      </div>

      {
        <ul className={isCommunity ? 'grid community': isToggled ? 'show-accord': 'hide-accord'}>
        {
          content.map((item, i) =>{
            const defaultList =  <li><a href="/">{item}</a></li>
            return <>
              {
                isCommunity ? <li key={i}><i className={`bx ${item}`}></i></li> :  defaultList
              }
            </>
          })
        }
        </ul>
      }
      
   </div>
    
  )
}

