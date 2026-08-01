import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.onscroll = onScroll;
    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <button id="backToTop" className={show ? 'show' : ''} onClick={() => window.scrollTo(0, 0)}>
      <i className="fa-solid fa-arrow-up fs-5"></i>
    </button>
  );
}
