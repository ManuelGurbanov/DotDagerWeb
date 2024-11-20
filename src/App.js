import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import profileImage from './profileimg.png';
import { useEffect, useState, useRef } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

import Navbar from './Navbar';

const images = [
  { src: 'https://cdn.fanaticguitars.com/blueridge/220002688013/blueridge-bg-2500-historic-series-super-jumbo-guitarra-acustica-19080024-1663077368951.jpg', alt: 'Guitar', tittle: 'Guitars', text: 'I have enjoyed music since I was a kid.' },
  { src: 'https://t4.ftcdn.net/jpg/06/32/03/09/360_F_632030974_RAsaqwiom8kfRNjHq9lnRfwCkfDz1lcG.jpg', alt: 'Second Image', tittle: 'Cats', text: 'I love cats because they are cute and beautiful.' },
  { src: 'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/85530/ny-sour-pickles-1-gallon.ffc0f44a0be85000ee4399f282cd751c.jpg?ixlib=react-9.9.0&ar=1%3A1&fit=crop&w=3840&auto=format', alt: 'Third Image', tittle: 'Pickles', text: 'I love pickles because LMAO LFGGGOOOO' },
];

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gradient-to-r from-white to-purple-200 flex flex-col items-center">
      <div className="min-h-screen flex items-center justify-center p-4" id="home">
        <div className="rounded-xl shadow-xl w-6xl flex items-center bg-gradient-to-r from-purple-200 to-purple-100 flex-col sm:flex-row" data-aos="fade-up" data-aos-delay="120" data-aos-duration="600">
          <img
            src={profileImage}
            alt="Perfil"
            className="sm:h-1/2 object-cover sm:mr-6"
          />

          <div className="flex flex-col justify-center p-6">
            <h1 className="text-4xl font-bold text-gray-800">Mariano Luis Villa</h1>
            <p className="text-gray-600 mt-2">
              I'm a Full-stack/Lead Dev with a passion for solid code and amazing products.
            </p>
            <p className="text-gray-600 mt-2">
              Right now working at <span className="font-bold text-gray-800 italic">University of Nebraska-Lincoln</span>.
            </p>
            <p className="text-gray-600 mt-2">
              +85,000 subscribers on YouTube.
            </p>

            <div className="flex justify-start mt-4 space-x-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-500 hover:text-purple-600 transition"
              >
                <FaGithub className="w-8 h-8" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-500 hover:text-purple-600 transition"
              >
                <FaLinkedin className="w-8 h-8" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-600 transition"
              >
                <FaTwitter className="w-8 h-8" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-500 hover:text-purple-600 transition"
              >
                <FaYoutube className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[30vh] flex flex-col items-center justify-center px-4 mb-64 bg-gradient-to-r from-purple-100 to-purple-300 w-1/2 rounded-2xl ring ring-purple-200 mt-16" data-aos="fade-up" data-aos-delay="120" data-aos-duration="600" id="about">
        <h2 className="text-4xl font-bold text-black mb-8">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800">High School in Psychology 📚</h3>
            <p className="text-gray-600 mt-2">
              <span className="font-bold text-gray-800 italic block">2016-2024</span>
              Studied at the University of Buenos Aires.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800">Systems Analyst 💻</h3>
            <p className="text-gray-600 mt-2">
              <span className="font-bold text-gray-800 italic block">2018-2022</span>
              Studied at Raúl Scalabrini Ortiz Institute.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800">Pickles Investigator 🥒</h3>
            <p className="text-gray-600 mt-2">
              <span className="font-bold text-gray-800 italic block">Birth - Present</span>
              Lover of pickles and related items, it's my main passion.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center px-4 mb-64 bg-gradient-to-r from-purple-100 to-purple-300 w-1/2 rounded-2xl ring ring-purple-200 mt-16" data-aos="fade-up" data-aos-delay="120" data-aos-duration="600" id="hobbies">
        <h2 className="text-4xl font-bold text-gray-800 mt-16 mb-8">My Hobbies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
          {images.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-96 object-cover transition-all duration-500 filter hover:blur-md hover:scale-105"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex flex-col justify-center items-center p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-2xl font-bold">{image.tittle}</p>
                <p className="text-white text-xl text-center">{image.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="h-96 mb-12 mt-8 flex justify-center items-center w-full" data-aos="fade-up" data-aos-delay="120" data-aos-duration="600">
        <div
          className="relative overflow-hidden rounded-xl shadow-lg w-full max-w-6xl"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src="thumbnail.jpg"
            alt="Video Thumbnail"
            className="w-full h-96 object-cover transition-all duration-500 filter hover:blur-md hover:scale-105"
          />

          <video
            ref={videoRef}
            src="./dager.mp4"
            className="absolute top-0 left-0 w-full h-full object-cover"
            muted
            loop
            preload="auto"
            style={{ display: isHovered ? 'block' : 'none' }}
          />

          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-2xl font-bold">YouTube</p>
            <p className="text-white text-xl text-center">I make videos about programming and humor, as you probably guessed, related to pickles.</p>
          </div>
        </div>
      </div>
      </div>



      <div className="h-1/2 flex items-center justify-center px-4 mb-12 w-full gap-4">

      <form className="bg-gray-800 text-white p-8 rounded-xl shadow-lg w-3xl" action="#" method="POST">
  <h2 className="text-4xl font-bold text-zinc-200 mb-8">Contact Me</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-white font-semibold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="border border-gray-300 rounded-md p-3"
              placeholder="Your name"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-white font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-gray-300 rounded-md p-3"
              placeholder="Your email"
              required
            />
          </div>
        </div>

        <div className="flex flex-col mb-6">
          <label htmlFor="message" className="text-white font-semibold mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            className="border border-gray-300 rounded-md p-3 h-32"
            placeholder="Write your message here"
            required
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-purple-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-purple-600 transition"
          >
            Send Message
          </button>
        </div>
      </form>
      
    </div>

    </div>
    </>
  );
}

export default App;
