import './Testmenu.css'
import { Link } from 'react-router-dom';

function Testadd() {
    return ( 
        <div className='testmenu_cont'>
            <br/>
            <button className='testbutton'>Add Test1</button>
            <br/>
            <button className='testbutton'>Add Test2</button>
            <br/>
            <button className='testbutton'>Add Test3</button>
            <br/>
            <button className='testbutton'>Add Test4</button>
            <br/>
            <button className='testbutton'>Add Test5</button>
            <br/>
            <Link to="/" className='testbutton'>Test Menu</Link>
        </div>

     );
}

export default Testadd;