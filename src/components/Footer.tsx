import React from 'react'
interface IGroup{
  title: string;
  isVisible: boolean;
  content: string[]
}
const groups: IGroup[] = [
  {
    title: "About",
    isVisible: false,
    content: new Array<string>(16).fill('Home')
  },
  {
    title: "About",
    isVisible: false,
    content: new Array<string>(16).fill('Home')
  },
  {
    title: "About",
    isVisible: false,
    content: new Array<string>(16).fill('Home')
  },
  {
    title: "About",
    isVisible: false,
    content: new Array<string>(16).fill('Home')
  }
];

export default function Footer() {

  return (
    <footer className="footer">
      <div className="container">
        <div className="grid">
          <div className="footer__group">

            {groups.map( grp => <FooterItem key={grp.title} {...grp} />)}
            
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterItem({content, title}: IGroup) {

  const [ isToggled, setToggle] = React.useState(false);

  // const updateUi(){

  // }
  return (
   <>
     <div className='flex head'>
        <h3>{title}</h3>
          <span onClick={() => setToggle(!isToggled)} >
            <i className={`bx ${isToggled ? 'bx-minus' : 'bx-plus'}`}></i>
          </span>
      </div>
    <div className="gp">
      {
        isToggled && <ul >
        {
          content.map((item, i) => <li key={i}><a href="/">{item}</a></li>)
        }
      </ul>
      }
    </div>
      
   </>
    
  )
}

