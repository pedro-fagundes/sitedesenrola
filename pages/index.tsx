import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const pngs = [
  '/carrossel/Onboard 1.png',
  '/carrossel/Onboard 2.png',
  '/carrossel/Onboard 3.png',
  '/carrossel/DashBoard.png',
  '/carrossel/ID.png',
  '/carrossel/Center.png',
  '/carrossel/CenterDesenrolar.png',
  '/carrossel/ItemDesenrolar.png',
];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [scrolling, setScrolling] = useState(false);

  const [showArrows, setShowArrows] = useState(false);

  useEffect(() => {
    const checkArrowsVisibility = () => {
      const desktopView = window.innerWidth >= 1024;
      setShowArrows(desktopView)
    };

    window.addEventListener('resize', checkArrowsVisibility);
    checkArrowsVisibility();
    return () => window.removeEventListener('resize', checkArrowsVisibility);
  }, []);


  useEffect(() => {
    const handleScroll = () => setScrolling(true);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!scrolling) {
        setCurrentIndex(prevIndex => (prevIndex + 1) % pngs.length);
      }
    }, 10000);
    return () => clearInterval(timer);
  }, [scrolling]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-4 xl:py-8 px-4 xl:px-20 bg-gray-900 text-white">
      <div>
        <h1 className="text-4xl xl:text-7xl font-bold my-2.5 text-center px-4 xl:px-20 bg-indigo-800 rounded p-2 xl:p-4 mx-auto shadow-2xl mb-8">
          Experiência UX/UI
        </h1>
      </div>

      <div className="mb-10 mr-10 ml-10">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showArrows={showArrows}
          interval={10000}
          selectedItem={currentIndex}
          swipeScrollTolerance={30}
          dynamicHeight={true}
          showIndicators={false}
        >
          {pngs.map((png, index) => (
            <div key={index} className="h-full w-full flex justify-center items-start">
              <div className="shadow-lg  pl-5 pr-5 pb-16 ">
                <Image
                  src={png}
                  alt={`Carrossel Item ${index + 1}`}
                  width={800}
                  height={800}
                  objectFit="contain"
                  className='rounded-lg'
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="">
        <h2 className="mt-10 text-4xl xl:text-8xl font-bold text-center px-3 xl:px-6 py-3 xl:py-6 bg-indigo-800 rounded mx-auto shadow-2xl">
          Foco na Experiência e Interface do Usuário
        </h2>

        <p className="mt-6 text-lg xl:text-3xl text-center px-3 xl:px-6 py-3 xl:py-6 bg-gray-800 rounded mx-auto shadow-lg">
          Nossa abordagem de design centrada no usuário garante uma navegação engajadora e imersiva, além de uma interface intuitiva, agradável e totalmente voltada às necessidades dos usuários de dispositivos móveis.
        </p>

        <p className="mt-6 text-lg xl:text-3xl text-center px-3 xl:px-6 py-3 xl:py-6 bg-gray-800 rounded mx-auto shadow-lg">
          A Desenrola IFSC não é apenas mais um aplicativo. É uma experiência envolvente, útil, inovadora e feita para simplificar e organizar a vida acadêmica dos estudantes. Informações essenciais da rotina acadêmica estão agora em um único lugar – tornando a experiência acadêmica mais leve, inclusiva e eficiente.
        </p>


        <div className="mt-10 xl:mt-20 mb-5 xl:mb-10 w-full xl:w-auto bg-gray-800 p-6 xl:p-12 rounded-lg shadow-lg">
          <h3 className="text-2xl xl:text-4xl mb-3 xl:mb-6">Pré-Salve o App</h3>
          <p className="mb-3 xl:mb-6 text-lg xl:text-2xl">Garanta o acesso antecipado ao nosso app! Clique no botão abaixo para registrar o seu interesse.</p>
          <a
            href="https://forms.gle/ZxRnB9WiTAWvr9638"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-red-600 hover:bg-red-700 px-5 xl:px-10 py-3 xl:py-6 rounded-lg shadow-lg text-lg xl:text-2xl font-bold transition-colors duration-200 block w-full text-center"
          >
            Pre-Save
          </a>
        </div>

        <div className="mb-10 w-full xl:w-auto bg-gray-800 p-6 xl:p-12 rounded-lg shadow-lg">
          <h3 className="text-2xl xl:text-4xl mb-3 xl:mb-6">Envie sua Sugestão</h3>
          <p className="mb-3 xl:mb-6 text-lg xl:text-2xl">Sua opinião é muito importante para nós. Clique no botão abaixo para enviar suas sugestões para a nossa equipe.</p>
          <a
            href="https://forms.gle/ZTAc3Kh8wFeWjjH66"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-red-600 hover:bg-red-700 px-5 xl:px-10 py-3 xl:py-6 rounded-lg shadow-lg text-lg xl:text-2xl font-bold transition-colors duration-200 block w-full text-center"
          >
            Sugestão
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;