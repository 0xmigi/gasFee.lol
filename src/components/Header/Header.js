import './header.css';
import { Link } from 'react-router-dom';



export default function Header(props) {

    const returnHome = () => (
            <Link to="/home"
                  className="icon-button-home">
              <span
                className="header"
                >
                    <div className="header-icon" >
                        {props.icon}
                    </div>
                    { props.domain }
                    <div className="open-beta">open beta</div>
              </span>
            </Link>
    );
        


    return (

        <li className="nav-item-header">
            {returnHome()}
        </li>
            
    );
}


