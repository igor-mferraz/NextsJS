import styles from './NavBar.module.css'
import { navigationLinks } from '../../utils/data'
import Link from 'next/link'
import { useRouter } from 'next/router'
export const NavBar = () =>{
    const router = useRouter();
    return(
        <ul className={styles.container}>
            {navigationLinks.map((link, index)=>(
                <li>
                    <Link href={link.path} className={styles.linkItem} key={index}>{link.label}</Link>
                </li>
                
            ))}
            
            
        </ul>
    )
}