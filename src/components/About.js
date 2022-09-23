export default function About() {
  return (
    <>
      <div className="flex justify-center align-center h-[calc(100vh-64px)] w-full text-white">
        <div className="w-1/2 pl-4 flex flex-col justify-center items-center">
          <div className="text-4xl text-center mb-5">Our Mission</div>
          <div className="flex justify-center">
            <img className="max-h-[350px]" src="/images/logo.png"></img>
          </div>
          <div className="text-center w-3/4">
            <div className="text-2xl">To provide the best</div>
            <div className="text-lg">
              We grew tired of basic looking credit cards and wanted to add some
              flare to our everyday purchases! We specialize in turning digital
              graphics and photography into high quality, custom, stickable
              things.
            </div>
          </div>
        </div>
        <div className="w-1/2 text-center pr-4 flex flex-col justify-center items-center">
          <div className="text-4xl text-center mb-5">Our CEO</div>
          <div className="flex justify-center items-center rounded-full w-[full]">
            <img
              className="max-h-[350px] rounded-full"
              src="/images/ceo.png"
            ></img>
          </div>
          <div className="text-2xl">Akash Panchal</div>
          <div className="text-lg w-3/4">
            Akash is an IT Business Analyst who works in Cloud and Custom
            Applications. In his free time, he likes to play music, play video
            games, and work on cars. Learn more about his story...{" "}
            <a
              href="https://www.yourethecure.org/akash_stroke_story"
              target="_blank"
            >
              <button id="article-btn">Here</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
