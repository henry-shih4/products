import { useMediaQuery } from "react-responsive";

export default function About() {
  const isMobile = useMediaQuery({
    query: "(max-width: 620px)",
  });

  return (
    <>
      <div
        className={
          isMobile
            ? "flex justify-center align-center w-full text-white h-max"
            : "flex justify-center align-center w-full text-white h-max"
        }
      >
        <div className="w-1/2 pl-4 flex flex-col justify-start items-center">
          <div
            className={isMobile ? `text-2xl pb-4` : "text-4xl text-center mb-5"}
          >
            Our Mission
          </div>
          <div className="flex justify-center mr-3">
            <img
              alt="proleon-logo"
              className="max-h-[350px]"
              src="/images/logo.png"
            ></img>
          </div>
          <div className="text-center w-3/4">
            <div className="text-2xl">To provide the best</div>
            <div className={isMobile ? `text-md` : "text-lg"}>
              We grew tired of basic looking credit cards and wanted to add some
              flare to our everyday purchases! We specialize in turning digital
              graphics and photography into high quality, custom, stickable
              things.
            </div>
          </div>
        </div>
        <div className="w-1/2 text-center pr-4 flex flex-col justify-start items-center">
          <div
            className={isMobile ? `text-2xl pb-4` : `text-center mb-5 text-4xl`}
          >
            Our CEO
          </div>
          <div className="flex justify-center items-center rounded-full w-[full] ml-3">
            <img
              alt="ceo"
              className="max-h-[350px] rounded-full"
              src="/images/ceo.png"
            ></img>
          </div>
          <div className="text-2xl">Akash Panchal</div>
          <div className={isMobile ? `text-md` : "text-lg w-3/4"}>
            Akash is an IT Business Analyst who works in Cloud and Custom
            Applications. In his free time, he likes to play music, play video
            games, and work on cars. Learn more about his story...{" "}
            <a
              href="https://www.yourethecure.org/akash_stroke_story"
              target="_blank"
              rel="noreferrer"
            >
              <button id="article-btn">Here</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
