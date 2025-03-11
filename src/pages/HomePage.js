// import face from './face.svg';
import face from '../ani-face.gif';

const Year = new Date().getFullYear() +"";

export const HomePage = () => {
  return (
    <div className="HomePage">
        <p>
          welcome.
        </p>
        <p>
          <a href='/thoughts'>
            thoughts.
          </a>
        </p>
    </div>
  );
}
