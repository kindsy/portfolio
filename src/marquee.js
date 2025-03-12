import { useEffect } from 'react';

const MarqueeComponent = () => {
  useEffect(() => {
    const wrap = document.getElementById("wrap");
    const frame = document.getElementById("marquee");
    const thePath = document.getElementById("thePath");
    const tp = document.getElementById("tp");

    if (!wrap || !frame || !thePath || !tp) {
      console.error('One or more elements are not found in the DOM.');
      return;
    }

    const Init = () => {
      let w = wrap.clientWidth;
      let h = wrap.clientHeight;
      frame.setAttributeNS(null, "viewBox", `0 0 ${w} ${h}`);
      let d = `M${w / 10},${h / 2}A${4 * w / 10},${4 * h / 10} 0 0 0 ${9 * w / 10} ${5 * h / 10} A${4 * w / 10},${4 * h / 10} 0 0 0 ${w / 10} ${5 * h / 10} A${4 * w / 10},${4 * h / 10} 0 0 0 ${9 * w / 10} ${5 * h / 10} A${4 * w / 10},${4 * h / 10} 0 0 0 ${w / 10} ${5 * h / 10}`;

      thePath.setAttributeNS(null, "d", d);
      let path_length = thePath.getTotalLength();

      // Begin at a bigger size than needed
      let font_size = 100;
      frame.style.fontSize = font_size + "px";

      // While the text length is bigger than half path length
      while (tp.getComputedTextLength() > path_length / 2) {
        // Reduce the font size
        font_size -= 0.25;
        // Reset the font size
        frame.style.fontSize = font_size + "px";
      }
    };

    const handleResize = () => {
      Init();
    };

    Init();
    window.addEventListener("resize", handleResize);

    let so = 0;

    const MarqueeRun = () => {
      if (tp) {
        tp.setAttributeNS(null, "startOffset", so + "%");
        if (so >= 50) {
          so = 0;
        }
        so += 0.02;
      }
      requestAnimationFrame(MarqueeRun);
    };

    MarqueeRun();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return null;
};

export default MarqueeComponent;