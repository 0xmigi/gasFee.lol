import './header.css';
import Nav from '../Nav/Nav';
import { Link } from 'react-router-dom';



export default function Header(props) {

    const returnHome = () => (
            <Link to="/home"
                  className="icon-button-home">
              <span
                className="header"
                >
                    <a className="header-icon" >
                        {props.icon}
                    </a>
                    { props.domain }
              </span>
            </Link>
    );
        


    return (

        <li className="nav-item-header">
            {returnHome()}
        </li>
            
    );
}


