import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useSpring, animated } from 'react-spring';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const svgs = [
  '/carrossel/CenterDesenrolarPRO.svg',
  '/carrossel/CenterPRO.svg',
  '/carrossel/DashBoardPRO.svg',
  '/carrossel/IDPRO.svg',
  '/carrossel/ItemDesenrolarPRO.svg',
  '/carrossel/Onboard 1PRO.svg',
  '/carrossel/Onboard 2PRO.svg',
  '/carrossel/Onboard 3PRO.svg'
];

function Home() {
  const springProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 500,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % svgs.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900 text-white">
      <animated.div style={springProps}>
        <h1 className="text-6xl md:text-9xl lg:text-10xl font-bold my-10 text-center px-3">
          Desenrola IFSC
        </h1>
      </animated.div>

      <div className="mb-10">
        <animated.div style={springProps}>
          <Image src="/4logo.png" alt="Logo" width={300} height={300} className="block mx-auto lg:w-1/3" />
        </animated.div>
      </div>

      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={10000}
        selectedItem={currentIndex}
      >
        {svgs.map((svg, index) => (
          <div key={index}>
            <animated.div style={springProps}>
              <Image src={svg} alt={`Carrossel Item ${index + 1}`} width={300} height={300} />
            </animated.div>
          </div>
        ))}
      </Carousel>

      <animated.div style={springProps}>
        <a
          href="https://forms.gle/ZxRnB9WiTAWvr9638"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-red-500 hover:bg-red-600 px-5 py-3 rounded-lg shadow-lg text-lg lg:text-2xl font-bold transition-colors duration-200"
        >
          Acessar Formulário
        </a>
      </animated.div>
    </div>
  );
}

export default Home;