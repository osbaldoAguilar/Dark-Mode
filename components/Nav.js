import Link from "next/link";
import style from "../styles/Nav.module.css"


export default function Nav() {
  return (
      <div className={style.nav}>
        {/* <Link href='/'>Home</Link> */}
    
        <Link href='/create'>Create Your Resume</Link> 
      </div>
  )
}

