import face404 from '../face404.gif';

export const NotFoundPage = () => {
  return (
    <div className="NotFoundPage">
      <header className="NotFound-header">
        <a href="https://www.linkedin.com/in/kailindsay/" target="_blank" rel="noreferrer">
            <img src={face404} className="face404" alt="Page not found!"/>
        </a> 
        <p>
            nothing here. &#59;&#40;
        </p>
        <a href='/'>
            let's go home.  
        </a>
      </header>    
    </div>
  );
}