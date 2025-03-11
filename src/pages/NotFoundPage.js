import face404 from '../face404.gif';

export const NotFoundPage = () => {
  return (
    <div className="NotFoundPage">
      <header className="App-header">
        <img src={face404} className="face404" alt="Page not found!"/>
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