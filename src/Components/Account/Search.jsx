import HomePageHeader from '../../Header/Header';
import './eroor.css';
import HomePageFooter from '../../Footer/Footer';
import { useNavigate } from 'react-router-dom';



const Search = () => {

    const navigate = useNavigate();

    return(
        <section>
        <div className='Header container'>
            < HomePageHeader />
        </div>
        <div className='notfound-container'>
                <h1>PAGE NOT FOUND</h1>
                <p>We're sorry — something has gone wrong on our end.</p>
        </div>
        <div className='erroe-image'>
            <img src='search.webp' alt='error'/>
        </div>
        

            <div className="button-group">
                <button className="btn-dark"  onClick={() => navigate('/homepage')}>Back To Homepage</button>
                <button className="btn-dark" onClick={() => navigate('/shopping')}>Continue Shopping</button>
            </div>
      
        <div>
            < HomePageFooter/>
        </div>
        </section>
    );

}

export default Search;