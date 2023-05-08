import Image from "next/image";

import VideoHeader from "./video-header";

export default function Home() {
  return (
    <>
      <header className="flex flex-col justify-center items-center w-full h-[100vh] relative">
        <div className="flex flex-col justify-center items-center w-[940px] h-[100vh] relative">
          <div className="flex flex-col justify-center items-evenly w-full h-[100vh]">
            <div className="flex flex-col justify-center items-center w-full">
              <h1 className=" p-2 font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-indigo-100 to-indigo-600">
                Wirgiliusz Ładziński
              </h1>
              <h2 className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-100">
                JavaScript Developer
              </h2>
            </div>
            <div className="w-[90%] flex flex-row justify-end">
              <button className=" hover:first-letter:text-blue-600 hover:bg-black/70 bg-black/20 rounded-md shadow-blue-600 shadow-md h-20 w-40 text-3xl font-bold text-blue-200 ">
                Contact
              </button>
            </div>
          </div>
          <VideoHeader />
          <div className="bg-black/60 h-[100vh] w-full -z-10 absolute"></div>
        </div>
      </header>
      <main className="flex flex-col justify-start items-center w-full h-[400vh] relative">
        <div className="flex flex-row justify-center items-start w-[940px] relative">
          <div className="flex flex-col justify-center items-center w-[50%] h-[100%]">
            <div className="flex flex-col h-[60%]">
              <h1>Who I am ?</h1>
              <p className="p-2">
                My name is Wirgiliusz Ładziński. I am 28 years old and I am a
                clinical nutritionist by education. I have never worked in the
                profession because detailing was my passion and work in the last
                year of my studies. And I grew up there too. In detailing I
                reached the very top in Poland. I worked with all the best
                detailers in Poland. I created the best car cosmetics in the
                world. Within 3 months I learned chemistry and created my first
                product. I have worked on countless vehicles. It was the moment
                when I understood that nothing is impossible and I am able to do
                whatever I want.
              </p>
            </div>
            <div className="flex ">
              <Image
                src="/greenTop.jpg"
                width={350}
                height={350}
                alt="Picture of the author"
              />
            </div>
          </div>
          <div className="flex flex-col justify-start items-center w-[50%]">
            <div className="flex flex-col h-[40%]">
              <Image
                src="/blueTop.jpg"
                width={350}
                height={350}
                alt="Picture of the author"
              />
            </div>
            <div>
              <h1>What makes me different?</h1>
              <p className="p-2">
                I am workhorse but lazy at the same time. It seems unlikely, but
                it works wonders for me. I prefer to make things easier for
                myself, not to do them in an ill-considered way. I don't know
                the word impossible. Everything is possible but some things take
                more time. I don't give up and I like challenges. If something
                doesn't work out for me, it motivates me even more to develop. I
                love learning new things and gaining new skills. And all only
                because if we do not develop, from the perspective of the world,
                we go backwards. I have a very open mind and can think outside
                the box. I think analytically and like to break everything down
                to the smallest atoms. Life's too short to be good. I always try
                to be the best and conquer the next peaks. Being a
                perfectionist, I believe that you can always improve something
                and you can't do something 100% perfect, but you can always
                strive for it. And it is this pursuit of perfection that makes
                me an above average person.
              </p>
            </div>
          </div>
        </div>
        <div className="projects flex flex-col justify-center items-start w-[940px] relative ">
          <h1>
            Projects - on hover powiększ i wyświetl opis ( tak samo po
            kliknieciu ){" "}
          </h1>
          <div className="flex flex-row justify-between items-start w-[940px]">
            <div className="h-[450px] overflow-y-scroll hover:scale-150 hover:cursor-pointer ">
              <Image
                src="/Jakub.png"
                width={270}
                height={600}
                alt="Picture of the author"
              />
            </div>
            <div className="h-[450px]  hover:scale-150 hover:cursor-pointer ">
              <Image
                src="/DROWENT.png"
                width={270}
                height={600}
                alt="Picture of the author"
              />
            </div>
            <div className="h-[450px] overflow-y-scroll  hover:scale-150 hover:cursor-pointer ">
              <Image
                src="/Catering-Manager-1.png"
                width={270}
                height={600}
                alt="Picture of the author"
              />
              <Image
                src="/Catering-Manager-2.png"
                width={270}
                height={600}
                alt="Picture of the author"
              />
              <Image
                src="/Catering-Manager-3.png"
                width={270}
                height={600}
                alt="Picture of the author"
              />
              <Image
                src="/Catering-Manager-4.png"
                width={270}
                height={600}
                alt="Picture of the author"
              />
              <Image
                src="/Catering-Manager-5.png"
                width={270}
                height={600}
                alt="Picture of the author"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start w-[940px] relative bg-gray-800 "></div>
      </main>
      <footer>
        framer motion kiedy przewijam przycisk kontakt i Wirgiliusz Ładziński ma
        pojsc do gory wolniej niż cała strona aby trafić na koniec w miejsca na
        navbarze
      </footer>
    </>
  );
}
