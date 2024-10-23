import {Link} from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
        <footer className="relative bg-white rounded-lg shadow m-4 dark:bg-gray-800 justify-items-end">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
              <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {year} <Link to="/" className="hover:underline">Codebook</Link>. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="https://github.com/Danielmobatsionhabte/codebook"  className="hover:underline me-4 md:me-6"> <GitHubIcon/> GitHub</a>
                </li>
                <li>
                    <a href="https://www.instagram.com/" className="hover:underline me-4 md:me-6"><InstagramIcon/> Instagram</a>
                </li>
                <li>
                    <a href="https://x.com/" className="hover:underline me-4 md:me-6"><XIcon/> Twitter Page</a>
                </li>
             </ul>
             
        </div>
      </footer>    
  )
}
