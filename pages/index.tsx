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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % pngs.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-4 md:py-10 px-4 md:px-10 bg-gray-900 text-white">      <div>
      <h1 className="text-4xl md:text-8xl lg:text-8xl font-bold my-10 text-center px-20 bg-indigo-800 rounded p-3 mx-auto shadow-2xl">
        Experiência UX/UI
      </h1>
    </div>

      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        interval={10000000}
        selectedItem={currentIndex}
        swipeScrollTolerance={30}
      >
        {pngs.map((png, index) => (
          <div key={index} className="h-full w-full flex justify-center items-start">
            <div className="shadow-lg  mb-16 pl-5 pr-5 ">
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

      <h2 className="mt-10 text-4xl md:text-6xl lg:text-6xl font-bold text-center px-3 bg-indigo-800 rounded p-3 mx-auto shadow-lg">
        Foco na Experiência e Interface do Usuário
      </h2>

      <p className="mt-6 text-lg md:text-xl lg:text-xl text-center px-3 bg-gray-800 rounded p-3 mx-auto shadow-lg">
        Nossa abordagem de design centrada no usuário garante uma navegação engajadora e imersiva, além de uma interface intuitiva, agradável e totalmente voltada às necessidades dos usuários de dispositivos móveis.
      </p>

      <p className="mt-6 text-lg md:text-xl lg:text-xl text-center px-3 bg-gray-800 rounded p-3 mx-auto shadow-lg">
        A Desenrola IFSC não é apenas mais um aplicativo. É uma experiência envolvente, útil, inovadora e feita para simplificar e organizar a vida acadêmica dos estudantes. Informações essenciais da rotina acadêmica estão agora em um único lugar – tornando a experiência acadêmica mais leve, inclusiva e eficiente.
      </p>
      <div className="mt-10 mb-5 w-full px-8 bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl mb-3">Pré-Salve o App</h3>
        <p className="mb-3">Garanta o acesso antecipado ao nosso app! Clique no botão abaixo para registrar o seu interesse.</p>
        <a
          href="https://forms.gle/ZxRnB9WiTAWvr9638"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-red-600 hover:bg-red-700 px-5 py-3 rounded-lg shadow-lg text-lg lg:text-2xl font-bold transition-colors duration-200 block w-full text-center"
        >
          Pre-Save
        </a>
      </div>

      <div className="mb-10 w-full px-8 bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl mb-3">Envie sua Sugestão</h3>
        <p className="mb-3">Sua opinião é muito importante para nós. Clique no botão abaixo para enviar suas sugestões para a nossa equipe.</p>
        <a
          href="https://forms.gle/ZTAc3Kh8wFeWjjH66"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-red-600 hover:bg-red-700 px-5 py-3 rounded-lg shadow-lg text-lg lg:text-2xl font-bold transition-colors duration-200 block w-full text-center"
        >
          Sugestão
        </a>
      </div>
    </div>
  );
}
export default Home;