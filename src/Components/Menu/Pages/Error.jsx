import HomePageHeader from '../../Header/Header';
import './eroor.css';
import HomePageFooter from '../../Footer/Footer';
import { useNavigate } from 'react-router-dom';



const Error = () => {

    const navigate = useNavigate();

    return(
        <section>
        <div className='Header container'>
            < HomePageHeader />
        </div>
        <div className='erroe-image'>
            <img src='error.webp' alt='error'/>
        </div>
        <div className='notfound-container'>
                <h1>PAGE NOT FOUND</h1>
                <p>We're sorry — something has gone wrong on our end.</p>

            <div className="button-group">
                <button className="btn-dark"  onClick={() => navigate('/homepage')}>Back To Homepage</button>
                <button className="btn-dark" onClick={() => navigate('/shopping')}>Continue Shopping</button>
            </div>

            <div className="newsletter">
                <small>NEWSLETTER</small>
                <h2>Your Monthly Emillia Update!</h2>
        </div>

        <div className="newsletter-form">
          <input type="email" placeholder="Enter Your Email" />
          <button className="btn-dark">Send Now →</button>
        </div>
      </div>
        <div>
            < HomePageFooter/>
        </div>
        </section>
    );

}

export default Error;