import { useState } from 'react';
import a from '../src/animations/apple.gif';
import b from '../src/animations/bear.gif';
import c from '../src/animations/coin.gif';
import d from '../src/animations/duck.gif';
import e from '../src/animations/eye.gif';
import f from '../src/animations/food-truck.gif';
import g from '../src/animations/gift.gif';
import h from '../src/animations/horse.gif';
// import sound from '../src/assets/bgSong.mp3';
import apple from '../src/assets/Apple.mp3';
import bear from '../src/assets/Bear.mp3';
import coin from '../src/assets/coins.mp3';
import duck from '../src/assets/duck.mp3';
import eye from '../src/assets/eye.mp3';
import food from '../src/assets/food-truck.mp3';
import gift from '../src/assets/gift.mp3';
import horse from '../src/assets/horse.mp3';


function App() {

  const [animation, setAnimation] = useState(a);

  const data = [
    { name: 'A', animationLink: a, audio: new Audio(apple) },
    { name: 'B', animationLink: b, audio: new Audio(bear) },
    { name: 'C', animationLink: c, audio: new Audio(coin) },
    { name: 'D', animationLink: d, audio: new Audio(duck) },
    { name: 'E', animationLink: e, audio: new Audio(eye) },
    { name: 'F', animationLink: f, audio: new Audio(food) },
    { name: 'G', animationLink: g, audio: new Audio(gift) },
    { name: 'H', animationLink: h, audio: new Audio(horse) },
  ];

  const handleAnimationClick = (animationLink, audioFile) => {
    setAnimation(animationLink);
    audioFile.play(); // Play the new audio
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      {/* <audio loop autoPlay ref={(audio) => backgroundAudio}>
        
        <source  src={sound} type="audio/mp3" />
      </audio> */}
      <div className='m-2 p-3 transition-all'>
        <img src={animation} alt='Animation' className='mx-auto w-[600px] h-[600px]' />
      </div>
      <div className='flex flex-wrap'>
        {data.map(function (alphabet) {
          return (
            <div
              key={alphabet.name}
              onClick={() => handleAnimationClick(alphabet.animationLink, alphabet.audio)}
              className='h-[103px] w-[95px] rounded-lg text-green-800 font-extrabold bg-green-200 m-3 p-4 text-6xl cursor-pointer transition-transform hover:scale-110 flex justify-center items-center'
              style={{ transitionDuration: '0.3s' }}
            >
              {alphabet.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
