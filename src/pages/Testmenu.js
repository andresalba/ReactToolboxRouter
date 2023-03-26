import './Testmenu.css'
import { Link } from 'react-router-dom';

function Testmenu() {
    return ( 
        <div className='testmenu_cont'>
            <br/>
            <Link to="testadd" className='testbutton'>Add Test</Link>
            <br/>
            <Link to="testlist" className='testbutton'>Test List</Link>
        </div>

     );
}

export default Testmenu;