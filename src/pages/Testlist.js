import './Testmenu.css'
import { Link } from 'react-router-dom';

function Testlist() {
    return ( 
        <div className='testmenu_cont'>
            <h2>Test 2</h2>
            <h2>Test 3</h2>
            <Link to="/" className='testbutton'>Test Menu</Link>
        </div>

     );
}

export default Testlist;