"use client";

import React from "react";
import Image from "next/image";

interface ProjectProps {
  imageSrc: string;
  altText: string;
  title: string;
  heading: string;
  description: string;
}

const ProjectCard: React.FC<ProjectProps> = ({
  imageSrc,
  altText,
  title,
  heading,
  description,
}) => {
  return (
    <div className="flex flex-col space-y-2 items-start text-textnorm space-x-0 mx-5 lg:mx-0 lg:mt-3">
      <ul className="list-outside list-disc space-y-4">
        <li className="text-base text-start font-normal lg:grid grid-cols-5 lg:gap-12">
          <div className="lg:mx-2">
            <h1 className="hidden text-base text-start font-medium mb-4 text-textcolor lg:flex">
              {title}
            </h1>
            <p className="text-sm font-medium text-textcolor text-start my-3 hidden lg:flex">
              {heading}
            </p>
            <Image
              src={imageSrc}
              alt={altText}
              width={130}
              height={150}
              className="brightness-100 my-3 flex"
              quality={90}
              priority
            />
          </div>

          <div className="flex flex-col items-start lg:col-span-4">
            <h1 className="text-base text-start font-medium mb-4 text-textcolor lg:hidden">
              {title}
            </h1>
            <p className="text-sm font-medium text-textcolor text-center my-3 lg:hidden">
              {heading}
            </p>
            <p className="text-sm font-normal text-textnorm italic text-start pb-3 mx-2 whitespace-pre-line text-pretty lg:py-10 lg:text-base lg:pb-0 lg:mt-7">
              {description}
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default function AboutPage() {
  const journey = [
    {
      title: "From Curiosity to Creation",
      description:
        "It all began with a spark of curiosity. I came across a sleek, responsive web redesign built with React by TassyOmah (Omah) on Twitter, and I was captivated. The way she optimized performance and enhanced the user experience was mesmerizing, and I knew right then that I wanted to dive deeper into Front-End Engineering.",
    },
    {
      title: "The Early Days",
      description: `As I delved deeper into the world of Front-End, I realized that it wasn't just about making things look pretty – it was about creating experiences that improved people's lives. I was hooked.\n\n I enrolled in the Side-Hustle Internship program in 2021, where I met like-minded individuals who shared my passion for design. Together, we worked on a startup project called Japa-Buddy, and I learned the value of collaboration and creative problem-solving.`,
    },
    {
      title: "The Future Ahead",
      description: `As I continue to learn and grow, I'm excited to see where my front-end development skills take me. My short-term goal is to become a skilled Front-End Engineer, mastering modern frameworks and performance optimization. In the long term, I aspire to become a well-rounded Software Engineer, leveraging my UI expertise to build seamless user experiences.

To step out of my comfort zone and gain practical experience, I’ve taken a bold step by joining Workunlock, founded by the innovative Jayson Kile, a software engineer I greatly admire. This platform has given me the opportunity to collaborate with him, working on a live project and building production-ready applications.

My 10-month journey with him on Workunlock has been transformative, strengthening my confidence in my technical abilities. I'm proud to say that I'm not just a coder – I'm a problem-solver and a team player, ready to tackle real-world challenges. I’ll be showcasing the front-end projects I built during my time with him soon, so stay tuned!

This experience has not only refined my skills but also deepened my passion for front-end engineering. I'm excited to take the next step in my career, applying my expertise to build scalable, high-performance applications that make a meaningful impact.`,
    },
  ];

  const interestsInspirations = [
    {
      imageSrc:
        "https://res.cloudinary.com/dxvf9uqwe/image/upload/v1738602214/image/svmf0e4uejjniiypu9so.svg",
      altText: "Movie picture of Ayomide Kappo",
      title: "MOVIE",
      heading: "ENTERGALACTIC",
      description:
        "As a front-end engineer, I'm drawn to the seamless, interactive experience of EnterGalactic. The way the visuals fluidly integrate with motion and transitions is pure magic. But what truly resonates with me is its attention to storytelling through design, creating an immersive user experience. The way it blends animation, emotion, and technology to build connection and engagement is truly captivating. For me, EnterGalactic is more than just a film – it's a reminder of the transformative power of UI, animation, and interaction to bring people together and inspire creativity in digital experiences.",
    },
    {
      imageSrc:
        "https://res.cloudinary.com/dxvf9uqwe/image/upload/v1738602214/image/rmxhbj8agwaakfdkmmmn.svg",
      altText: "Movie picture of Ayomide Kappo",
      title: "MOVIE",
      heading: "3 IDIOTS",
      description:
        "This Bollywood masterpiece never fails to inspire me, challenge my thinking, and remind me of the power of perseverance. As a front-end engineer, I admire the film’s unconventional storytelling and its celebration of creativity, problem-solving, and innovation. But what resonates with me most is its emphasis on passion, continuous learning, and pushing boundaries to create something impactful. The iconic character of Rancho, with his ‘chase excellence, success will follow’ mantra, is a constant reminder to stay committed to writing clean, efficient code, optimizing user experience, and never compromising on quality and innovation.",
    },
    {
      imageSrc:
        "https://res.cloudinary.com/dxvf9uqwe/image/upload/v1738607666/image/thunpcphjr0hxkbntjvo.svg",
      altText: "Music picture of Ayomide Kappo",
      title: "MUSIC",
      heading: "BURNA BOY",
      description:
        "Burna Boy’s Grammy-winning album is more than just a musical masterpiece—it’s a testament to bold innovation and seamless fusion. As a front-end engineer, I find inspiration in how he blends different sounds and styles to create something fresh and groundbreaking. The album’s eclectic mix of rhythms, flows, and storytelling reminds me to embrace new technologies, experiment with UI/UX, and push the limits of web interactivity. Whenever I need a creativity boost, I put on Twice As Tall and let its energy, fluidity, and innovation inspire me to craft dynamic, engaging user experiences.",
    },
    {
      imageSrc:
        "https://res.cloudinary.com/dxvf9uqwe/image/upload/v1738602214/image/akwwhuzrudkouruefwhx.svg",
      altText: "Book picture of Ayomide Kappo",
      title: "BOOK",
      heading: "REFACTORING UI",
      description:
        "This book is my front-end bible. I return to it again and again for inspiration, guidance, and practical coding wisdom. Adam and Steve’s no-nonsense approach to UI development has been a game-changer for me, helping me streamline my workflow, optimize performance, and build interfaces that are both visually stunning and highly functional. Whether I’m working on a new project or refining an existing one, Refactoring UI is always within arm’s reach, reminding me to prioritize user experience, write clean code, and continuously iterate toward perfection.",
    },
    {
      imageSrc:
        "https://res.cloudinary.com/dxvf9uqwe/image/upload/v1738602214/image/kur1xq8pflzo8fld8jli.svg",
      altText: "Book picture of Ayomide Kappo",
      title: "BOOK",
      heading: "THE DESIGN OF EVERYDAY THINGS",
      description:
        "This classic front-end development book has been a revelation for me, offering a profound understanding of how UI and UX shape our interactions with digital experiences. Don Norman’s insightful exploration of human-centered design has taught me to see front-end engineering as a holistic process that balances performance, accessibility, and user engagement. As I navigate the complexities of web development, this book remains a trusted companion, reminding me to prioritize clarity, simplicity, and seamless interactivity in every project I build.",
    },
    {
      imageSrc:
        "https://res.cloudinary.com/dxvf9uqwe/image/upload/v1738602217/image/eibreykwxstr6yzg8nku.svg",
      altText: "Game picture of Ayomide Kappo",
      title: "GAME",
      heading: "CALL ON DUTY",
      description: `As an avid gamer, I've often found myself defending my love for Call of Duty to those who view gaming as a mere distraction. But the truth is, this fast-paced, action-packed game has been a valuable training ground for my brain. Research has shown that games like Call of Duty can improve cognitive skills such as multitasking, decision-making, and problem-solving.

For me, the game's intense, dynamic environment has honed my ability to stay focused under pressure, think on my feet, and adapt quickly to new situations. It's also heightened my spatial awareness, allowing me to better navigate complex environments and track multiple objects simultaneously.

But beyond the cognitive benefits, I believe gaming has also made me more aware of my surroundings. The game's emphasis on situational awareness, strategy, and teamwork has translated to real-life benefits, such as improved observation skills, enhanced risk assessment, and more effective communication with others.

So, the next time someone asks me why I spend time playing Call of Duty, I'll tell them it's not just about having fun – it's about sharpening my mind, staying focused, and developing skills that benefit me far beyond the gaming world`,
    },
  ];

  return (
    <section className="flex flex-col w-full justify-between space-y-4">
      <div className="flex flex-col w-fit h-fit px-4 my-6 items-center container bg-custom-gradient lg:w-full lg:h-fit lg:px-28">
        <div className="flex flex-col lg:gap-0">
          <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col items-center justify-center lg:justify-start lg:ml-4 lg:items-start lg:mt-10 lg:w-full">
              <h1 className="text-2xl font-medium text-textcolor text-center lg:items-start lg:text-4xl">
                ABOUT
              </h1>
              <Image
                src="https://res.cloudinary.com/dxvf9uqwe/image/upload/v1740140918/image/elkyeynh4j8esq3fuw7t.png"
                alt="Profile picture of Ayomide Kappo"
                width={205}
                height={287}
                className="brightness-100 mt-5 flex lg:hidden"
                quality={90}
                priority
              />
              <Image
                src="https://res.cloudinary.com/dxvf9uqwe/image/upload/v1740222578/image/lnogpypos2st2v0owc0u.png"
                alt="Profile picture of Ayomide Kappo"
                width={275}
                height={350}
                className="brightness-100 hidden lg:flex lg:mt-8 lg:justify-center lg:items-center lg:ml-3"
                quality={90}
                priority
              />
            </div>
            <div className="flex flex-col items-center justify-center mt-5 lg:ml-8 lg:pl-6">
              <div className="flex flex-col w-fit h-fit items-start justify-start mx-12 lg:mx-0 lg:mt-16 lg:w-fit">
                <div className="flex flex-row lg:mx-8">
                  <Image
                    src="https://res.cloudinary.com/dxvf9uqwe/image/upload/v1738602534/image/ggro01mlpmawssffr3lu.svg"
                    alt="comma"
                    width={17}
                    height={15}
                    className="mb-96 lg:mb-60 lg:mt-5"
                    quality={90}
                    priority
                  />
                  <div className="flex flex-col py-1 lg:pt-6">
                    <p className="text-sm font-normal text-textnorm italic text-center text-pretty lg:text-start lg:text-lg">
                      Hello, I&apos;m Ayomide Kappo. An experienced Web
                      developer who is passionate about creating attractive and
                      interactive websites that meet customer needs and exceed
                      expectations. Well-versed in implementing the latest web
                      technologies to drive user satisfaction.
                      <br />
                      Excels in HTML,CSS, JavaScript, next.js, and React.js
                      development. Detail-oriented, organized, and meticulous
                      employee.
                    </p>
                    <p className="text-center text-sm font-normal text-textnorm italic pt-2 text-pretty lg:text-start lg:text-lg">
                      I&apos;m excited to bring my skills and experience to the
                      table, and I&apos;m looking forward to connecting with
                      you!
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center lg:justify-start lg:items-start md:mt-6 lg:mx-12">
                <h1 className="text-xl font-medium text-textcolor text-center my-4 lg:text-3xl">
                  My Skills
                </h1>
                <div className="flex flex-col items-start space-x-0 gap-2 mx-6 lg:flex-row lg:space-x-4 lg:mx-0">
                  <p className="text-sm font-normal text-textnorm italic text-start pb-2 text-wrap">
                    A front-end engineer applies user experience (UX) principles
                    and ensures responsive design and accessibility for seamless
                    interaction across devices. They utilize component-based
                    architecture and implement state management and data
                    fetching to create scalable applications. Performance
                    optimization techniques and cross-browser compatibility are
                    essential to delivering fast and consistent experiences.
                    They employ testing and debugging strategies while
                    collaborating with designers and backend teams to ensure
                    smooth integration
                  </p>
                  <p className="text-sm font-normal text-textnorm italic text-start pb-2 text-wrap">
                    Proficiency in React, Next.js, and modern frameworks, along
                    with expertise in HTML, CSS, JavaScript, and TypeScript,
                    allows them to build dynamic interfaces. They work with API
                    integration and RESTful services, enhance UI with web
                    animations and micro-interactions, and develop Progressive
                    Web Apps (PWAs) with offline support. Additionally, they
                    focus on SEO, Core Web Vitals, and understand CI/CD
                    pipelines and deployment workflows to maintain efficient
                    development cycles.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center lg:justify-start lg:items-start pt-6 lg:mt-8 lg:mx-0">
            <h1 className="text-xl font-medium text-textcolor text-center my-4 lg:text-left lg:mt-0 lg:text-2xl">
              My Programming Journey:
            </h1>
            <div className="flex flex-col space-y-2 items-start text-textnorm space-x-0 mx-5">
              <ul className="list-outside list-disc space-y-4 lg:space-y-8 lg:mx-1 lg:relative lg:pl-5">
                <div className="hidden lg:block lg:absolute lg:left-0 lg:top-10 lg:bottom-0 lg:mb-6 lg:border lg:border-[#E7E7E7]"></div>
                {journey.map((step, index) => (
                  <li
                    key={index}
                    className="text-base text-start font-normal relative"
                  >
                    <div className="flex flex-col items-start lg:grid grid-cols-3 lg:space-x-0 lg:gap-12 lg:w-fit lg:px-0">
                      <h2 className="text-base font-medium text-textnorm mb-4 pb-1 px-4 lg:text-xl lg:px-0 lg:font-normal">
                        {step.title}
                      </h2>
                      <p className="text-sm font-normal text-textnorm italic text-start pb-3 mx-2 whitespace-pre-line text-pretty lg:col-span-2 lg:text-base lg:mx-5">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center lg:justify-start lg:items-start pt-6 lg:pt-0 lg:mt-4">
            <div>
              <h1 className="text-xl font-medium text-textcolor text-center my-4 lg:text-left lg:mt-0 lg:text-3xl">
                Interests & Inspirations
              </h1>
              <p className="text-xs font-normal text-textnorm italic text-center py-1 text-pretty mx-3 lg:text-start lg:mx-0">
                Beyond Coding, here are some of the things that brings about my
                Inspirations and help me escape into a world of wonder, where
                movies, music, books, and games ignite my imagination. in here i
                let you discover the things that bring me joy, balance, and
                inspirations
              </p>
            </div>
            <ul className="list-outside list-disc space-y-4 lg:mx-1">
              {interestsInspirations.map((item, index) => (
                <ProjectCard
                  key={index}
                  imageSrc={item.imageSrc}
                  altText={item.altText}
                  title={item.title}
                  heading={item.heading}
                  description={item.description}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
