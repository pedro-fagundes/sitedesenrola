import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const pngs = [
  '/carrossel/Onboard 1.png',
  '/carrossel/Onboard 2.png',
  '/carrossel/Onboard 3.png',
  '/carrossel/Dashboard.png',
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
    <div className="flex flex-col items-center justify-center min-h-screen py-4 md:py-10 px-4 md:px-10 bg-gray-900 text-white">
      <div>
        <h1 className="text-4xl md:text-8xl lg:text-8xl font-bold my-10 text-center px-3 bg-gray-800 rounded p-3 mx-auto">
          Experiência de UX/UI no Desenrola IFSC
        </h1>
      </div>

      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={10000}
        selectedItem={currentIndex}
      >
        {pngs.map((png, index) => (
          <div key={index} className="h-full w-full flex justify-center items-center">
            <div>
              <Image src={png} alt={`Carrossel Item ${index + 1}`} width={800} height={800} className="object-contain" />
            </div>
          </div>
        ))}
      </Carousel>

      <h2 className="mt-10 text-4xl md:text-6xl lg:text-6xl font-bold text-center px-3 bg-gray-800 rounded p-3 mx-auto">
        Foco na Experiência e Interface do Usuário
      </h2>

      <p className="mt-6 text-lg md:text-xl lg:text-xl text-center px-3 bg-gray-800 rounded p-3 mx-auto">
        Nossa abordagem de design centrada no usuário garante uma navegação engajadora e imersiva, além de uma interface intuitiva, agradável e totalmente voltada às necessidades dos usuários de dispositivos móveis.
      </p>

      <p className="mt-6 text-lg md:text-xl lg:text-xl text-center px-3 bg-gray-800 rounded p-3 mx-auto">
        A Desenrola IFSC não é apenas mais um aplicativo. É uma experiência envolvente, útil, inovadora e feita para simplificar e organizar a vida acadêmica dos estudantes. Informações essenciais da rotina acadêmica estão agora em um único lugar – tornando a experiência acadêmica mais leve, inclusiva e eficiente.
      </p>

      <p className="mt-6 text-lg md:text-xl lg:text-xl text-center px-3 bg-gray-800 rounded p-3 mx-auto">
        Temos uma solução segura para a identificação do usuário. A funcionalidade ID transforma o smartphone de cada aluno em uma carteirinha digital, a qual contém seus dados de identificação. Ela permite ser usada para acesso não só ao campus, como também para recursos e eventos.
      </p>

      <div className="mt-10 mb-5 w-full px-8">
        <a
          href="https://forms.gle/ZxRnB9WiTAWvr9638"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-red-600 hover:bg-red-700 px-5 py-3 rounded-lg shadow-lg text-lg lg:text-2xl font-bold transition-colors duration-200 block w-full text-center"
        >
          Acessar Formulário
        </a>
      </div>
      <div className="mb-10 w-full px-8">
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