import face from '../ani-face.gif';
// import SvgComponent from '../svgfacejs';
import MarqueeComponent from '../marquee';

export const HomePage = () => {
  return (
    <div className="HomePage">
      <header className="App-header">

        {/* <a href='/'>
          <img src={face} className="App-face" alt="face"/>
        </a> */}
        
        <div id="wrap" href='/' style={{ backgroundImage: `url(${face})`, backgroundSize: '50%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
          
          <svg id="marquee" version="1.1" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            
            <path id="thePath" fill="transparent" d="M100,500A400,400 0 0 0 900 500 A400,400 0 0 0 100 500"  />

            <text stroke="black">
              <textPath xlinkHref="#thePath" dy="5" id="tp" lengthAdjust="spacingAndGlyphs">Coming Soon • Coming Soon • Coming Soon • Coming Soon • Coming Soon • Coming Soon • Coming Soon •</textPath>
            </text>

          </svg>

        </div>

        {/* <SvgComponent className="svgFace" version="1.1" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" /> */}

        <MarqueeComponent />

        <a href="https://www.linkedin.com/in/kailindsay/" target="_blank" rel="noreferrer">
          Kai Lindsay.
        </a>
        
        <p>
          a narrative portfolio.
        </p>
      </header>

      <main className="App-main">
        <p>
          welcome.
        </p>
        <p>
          <a href='/thoughts'>
            thoughts.
          </a>
        </p>
      </main>
    </div>
  );
}
