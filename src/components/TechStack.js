// TechStack.js
import React, { useState } from "react";

const techStack = {
  "Web Development": [
    {
      name: "React",
      icon: "https://dhruv-portfolio-mu.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fcolor%2F144%2Fnull%2Freact-native.png&w=256&q=75",
    },
    {
      name: "NodeJs",
      icon: "https://dhruv-portfolio-mu.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fcolor%2F144%2Fnull%2Fnodejs.png&w=256&q=75",
    },
    {
      name: "MongoDB",
      icon: "https://dhruv-portfolio-mu.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fcolor%2F144%2Fnull%2Fmongodb.png&w=256&q=75",
    },
    {
      name: "Mongoose",
      icon: "https://dhruv-portfolio-mu.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fcolor%2F144%2Fnull%2Fmongoose.png&w=256&q=75",
    },
    {
      name: "ExpressJs",
      icon: "data:image/png;base64,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",
    },
    {
      name: "HTML",
      icon: "https://dhruv-portfolio-mu.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fcolor%2F144%2Fnull%2Fhtml-5--v1.png&w=256&q=75",
    },
    {
      name: "CSS",
      icon: "https://dhruv-portfolio-mu.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Ffluency%2F144%2Fnull%2Fcss3.png&w=256&q=75",
    },
    {
      name: "JavaScript",
      icon: "https://dhruv-portfolio-mu.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fcolor%2F144%2Fnull%2Fjavascript--v1.png&w=256&q=75",
    },
    {
      name: "Rest API",
      icon: "https://dhruv-portfolio-mu.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Farcade%2F144%2Fnull%2Fapi-settings.png&w=256&q=75",
    },
    {
      name: "SQL",
      icon: "https://dhruv-portfolio-mu.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fexternal-flaticons-lineal-color-flat-icons%2F144%2Fnull%2Fexternal-sql-computer-programming-flaticons-lineal-color-flat-icons.png&w=256&q=75",
    },
    {
      name:"Redux",
      icon:"https://dhruv-portfolio-mu.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fios-filled%2F144%2Fnull%2Fredux.png&w=256&q=75"
    },
    {
      name:"Tailwind CSS",
      icon:"data:image/png;base64,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"
    }
  ],
  Others: [
    {
      name: "Git",
      icon: "https://dhruv-portfolio-mu.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fcolor%2F144%2Fnull%2Fgit.png&w=256&q=75",
    },

    {
      name: "GitHub",
      icon: "https://dhruv-portfolio-mu.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fios-glyphs%2F144%2Fnull%2Fgithub.png&w=256&q=75",
    },
    {
      name: "VS Code",
      icon: "https://dhruv-portfolio-mu.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Ffluency%2F144%2Fnull%2Fvisual-studio-code-2019.png&w=256&q=75",
    },
    {
      name: "Postman",
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAjVBMVEXzcDb////zbjLzbTHyZR7yZyPzaSjzbC7zairyZyTyZBryZiDyYxj+9/T70MH97Ob839X95t76x7X2m3n+8ez5wa3zdT383NH0eEL4tp70e0j++Pb7zr/4rZL71cj5vaj1h1v3pYf4spn1kGn1hln1jWT2mHX0gFH3qIv3ooP1jmf0fk32lXDyXQD5uaWu/zZ2AAAPZ0lEQVR4nO2d6XLrqBZGJSRAkyd5nhMnjuPEnfd/vAuSLAGaZRDqW/396KpOnTqHlY3YAxswzP93GboHoFz/EUrSYrY+hee/7eV4PF4u23M4Xs8W/fzTigkX0/AyfzMCz/ahi5CTCCHo215gvM0v4XSkdgjqCCeH4xuAtutgCxjFAhZ2XBsaH9uTOoOqIZydH0bgOqVoIqgDg808nCgZi3zCxWGObYSbwTGYGNngPt5LH49kwsX5zXZxSziGErqPUPJ3KZNwsd0FyOqKlwi7wfUg05LyCA9XH7WdmsWyXPS1ljYuSYSTow9ftR4rbBtbScurFMLx1XYk4kUCyP+ayhicBMLDzpZpvkzYux0GQBgaUM7XVyTgr0LNhOFKIV/ECI2lRsKxar6YcTXWRLi+2er5Ikb7c6aBcPEI+uGjsoJ550inK+EZdo7NOslBXT/HboSzHeyVjwr+dpuqnQi/vf4maCbgffdEOF0hDXxUaNXBjO0JL1oMGAt4W+WEi09XGx+Vf227qLYkPPlqQtDmwk7LxKod4THQzGe0n6mtCK/9+4gi+T+KCBcb6UlgRzm7Ftlxc8K11CT+NVlu84+xMeFSo5PIC3iN88amhENYYzgFf3IJ775uopzsd5mEX3rdfLH8uzzCD12BaLXgXBbhQAENw22C2IDwZ6iAzRDrCb+GC0gmav23WEs4H+Iik8mvzYrrCI/DcxO87Dq/WEO4HJqjzyuoqfxXE46HD0isWL2BU0k4sXWPvomAW5lpVBHuDc3BNnBc24Oe7TqVA7F2XQk/+y36isLe6niYLUaL2fjd8KrG4jy6Eb5rdYTAnrPf1/RRtUniX7oQhl5/OHmhnVgane0qMvCgPCMuJZxoXUa9Y9FYy60InNIiYylh1W9MubxzwYjmVWUi/NaW8FvnR2gX1QtpjuqUrzewrMZYQrjWOUedryILEkBv+1WO6JXsaZQQ6vSEwCpoiaKAwdbcl/fLgRKvWExYOeVVCxaU0SJAukd6KC9Ko6LVqYTwpNNRgIIhzQlXEIOvymeXXdi+WUioNVpz8qaIAJOGjLB8CbR+mxJetCa9fm7FuEMS4ZyS/xlVzC+/aK+/gFBzRoGKAGEWwd0qJhgq8PsFhB9aA25LdN0UEMV2XdJk971ieE5BZSpPqNUVkkG+C4C+YYF4CZn+8w8h3Vat80HeKeYJd3qTQmGhefcNvEoy3JGDSA6xrIq2rM96wlBz6YknpICb9OO6onvlYkqUrkjlhK2b7CXLYcuDFPA3i3De0HuNDQ2wqiP8013/tT6ywZwCAzALzwLRcOdYHW/lIiKRULcJDQCywczIooczP/FwILHntTqtyxlRIDzrNiEfe42JEbMIAP9DPXpdyCwaUSDUbkLitdnsN0J8WnFEl5xT3UooGpEnXA5gk4LPgjhEqooMMZHPtxTzhBWBe3/iF3yKaGd1pkl92gNu5YRjjb4QuxDGlV9hmvGI1wYhpccV3jjCN23VJ2TPw/Ep/LZ8woj4HbMDQXwOetkkK8BcgZglnOlKKpBzebr10y9Ik13GioYXTd1psxFyqTBLWONLVQl7F6Ywc6A/8vjFgljRCAji1G+2TnCRH0uoxRcCj2nD3x+DeBBCP1CMeGh8OsAvJqz1NCqEVowrWKyQARxE1xt45bbMDjZt12/8t0Jm15Qh1JD5guCdwVgAy3B3x79v2kiO7SP7NZ1bfUGYCW4zwkX/JsQO6/oWABh+HNAc6Yri+G/LKGLbz8ImToIVHBUQ9h+SQq5nm1oweBJvo+DKQrYHViiwW5+9Zc6fZISfPcczQjfzgoTETDSTVRo6DYuJa1LCUc/lGQtywdmETNGA+UllNaaBgkWOsDp1li6hkXniAD4era5V1CubpilhTWIpWfDD5AAFC75ea7CuIuGo15VU2OIlFmTzB6qXVwV/JBCOezxoAIS4k1hQBHw9y0md/pPwvb+YFCCehlrQ4/uaJIRX+C4Q9rfdhA1+E2yCAfB5ZhltIGlFKyHsbzfG+d3nAIXOtAtxXK+ve88UKiF8dXFuLHQ1eUAyRSEPOCdT1H28jOiGHOG9p6jbFzaH8hbcv5H8wp5+vzwgPOcIe9qOsYWO3olLLMhtFy1WONpren1OgQ1LWLWxKlGB0H4WLTKcBWfYMpzNSIrzCkYM4akXbxgIm9ATKFpwTLL46Ev9lBBh+SeG8NU4t5EEPx9Z0OUAz17ypU5lzClnyxA+elhoAuF2iwkCgO9K+PaeE1mGCZ+JfkyovtYNxK3LGXETiAN8kE/FiybySYp3TirLEeFIuTcUFhQCiIQpur856a9B0i887syICJWXggVrxYAOG71NSDRn4fhPbSXtD9mzlPCgeMuJh0kAEfuzKQTES8RJ8URWIuceUkLFSynAIqAN+J+F1Es897NvsnLxeDGNCNXGbBYQzkPkLLglobb/bCrdSvPNcQIVESqtYFiG0IqVs+DcZrL+qbyKmPWTEm4UOgu8EgGRAEjPN2bhTsP7Mpso3k2OCBUupUy/TwLoE0Bm2o52xEv4qbN8yFwS4JNwoa5UmgcksShgLDgDlmE5qS/ZSi2IRbG3Yap0h3gjtGwTC1qsBU8+IH8o/cFJ7u86SvMp4VRVJbEQ0GAAQ0KEPtM/NJHsl6PcmhKqyp3ArwgIAec6jjSXyDbd97LD46jARQlDVSEN4GO1WcBb8Mvna8PSz8q544RQzb4aQAYfW08FC75RL8E0QM2lDyPavFBGiHehT5KFDHHqAdb504IM8JiUSsGZ6qiBjBJuFRBSN0F7fdKkYsovMrQgYyEmpTorKBVlhPID73gVHXtpa6FgQVqQSbubqUIVPhltE8KLdMKno0+tSCzIOn9qMMZLSHeEiZyLKsLMDyYNohSQiU9pQQayrVlrNdVMZYSsox/bJD0MIWdBWpDhasMzRRehqiLkY1G6I4IMK/sZLchwXoJW3aQOIJXz/A7lrjSMBWfh+y7y4kx0QwsywGYrixNljcnpSiO1Pz8BXJwuV+BlVwWkTsMFQuGNNgopUuotZLZhgJu5ny7nIIDM2w/UajFUKHqJqFFIlVBoyo9LrfmnI779AOfP02e0IOPc2Hh8IWEvtFRRsU16bpGvQgShuSWu35tGBRnOS6gFNKKmJEq4VtppEm3IUERwReItayqnKJH/zA+VlryTHaezG+3N852xE3WLTCTvmeOrbGlL2lpGkw9qLcTtP02qL2V5XcE+ITTV7QDj43p5fNxAED+f4Cz7BMxqbSqbaTBETryyAroGMbN0pvxOfqZeqvacBQAYQTsAjxuJb7y/3gCTg34R4VzRvgXAjut7xuf9bxzFNJ9OdPUD1bSHVweYfQv5CaJBN0X91eMYrtkw/M1JrLju41kF9JcSqii24VvRHQ5vsRX7uSWN2T9seNimjbBYK2UQaRTXh5g94JF0G+Jd2aNUFLGnFjO0Twmlu4tywB7brdleDPNH7r+a269gNFO5WcmP4oshlLuY5rbUGIX9vd2SHChW0Ndmibu+jO493u2TNB7HhDL3SHP79plGtz4PdXhsb6LEti9ud0n4BHGfp+NAcuNQQigtbrNAqQWXPT6fZGTXwCSEsg7iA7F3JtNXz6eM3QNHKCnN57osOE2Nvg8Z2wuOUM51Ebn2rlR//c5QgznV/ySU8SHmGvSeGl37P5+a3nPzJKy4y66pSgFPFRc6KlN6vFHe2TWhKT3Td+8zlCp3du3lgBi4xRbU9MJXdlWRrDOkZRY8anq8BYU5wtcCN7bpgtFso+vOomCUIzR/X/hl5xrVEwP29MhlwYCye9sywhemqXi8LtZJ2xt7JKApOo/f/U6FQguO5jqfTyq8U6HzvRjAK7hMO0Q6r7Etvhej63kx8ZAy1eSz4U0yiuSfCgnNboT569D3757eB8wANosJO90xlJ+iS/nPkLeUcykh7HLc2RPvmlxreGZWVOk9UR3WmkAAnHxoCUJ5ld/11b69TLixanS39T6JEavivra2B575Q5P7o/YPMBLgL73mCQ+tvD5vwS0cBF/NvYmtqoqcBZdY/72gsarvvmxTc/OyG8P2Z+zqX2AS1dxfajbucEEZ4NgZDl/tHbRm2NSbZUn0aAAOIlPtPcINv0RiNPR8lXc9pHev8i8r5H4wbjJe7/CLDZRYUeHRt/ayx7WETY7h0lDt5qSIg7i5NlaTO9kbHFONQzWKGIdHqtpxOqjRvfq1T7A8Hf0NG26EOIT7lWM1exuh7oaFzNHTb5HulWu7uzanhu9bmOcqj8GGasSK0UQdyiyFDd8oqQzA+WB7RybqV9/39ZWq+D2kQsLyaYeEfPA3QtT+3ECs4qp08XtPx5Ihg7fl8rCezhZpv8wNGO69t5vCKoWKnwgsebOrbJ4ChFzftr3Aw5vPx/x7uyUTdBhpRbs3u6J3F+r+RoCx4wwkJzRav7sm+eh/D/KLHhSsImx0gf2AhK9lIKWEI+Wd9DLV5Q1LVec61aho66SW0Lz8ez5FWPwwYB2h+TGchbJaTulHWENoboYRjdXJ2lRBVBIuVB3QlSoAO7/LraSJX75eeVs9flhi4AoO1Qg1hEquq5CqwseR2xDGDzEMV3bFm+MNCc13/Tue5YLfteOvJ4ze4h2oYEHlqQPhcBHhvX7wjQjNxzARxauzXyCkz50OT179N9ic0Hwf3orqlT0X340wuu9hUBKvzn6ZUM1FTp0F/Nwe08uE0RWHQxFzl6REQnOyGkrpRniGRxqhuX8bhtcQnuGRSKivL50VCCpKFi8Tko9R90zFMPcutVRCLQd8WMHP8gOqcgjpZTr6ZirwapMlCYTmbKdrJwZtmjuJVwjprYA6zAgaBqIyCIkZ+0+L3U11xUkuId3r73dRxXbDQFsaobl49NjOBoJHiyhGEqFprn97ilSBfes2QV8lpK8T99B2CVyjpiKqkNA0l4bi656Ai5smgmoISd5oKJyrABov8kkgJHP111Ozrlr2RmyH1UNI1pwPBecQHPujZYxdLCmEJDs+QqkO0oLoWHZ7QUtJIiQaP6ArZ0cVIP+ncRmmVvIISWYVfgboVUtaKNidO7v3AskkNCnkhws796kADOHPUiaeKZ2QaH96X9lu65tEAEY2uI/b5rf1kk9ItQjnO89HDTGB5cBgMw8lLS2C1BBS7dfn+caxXQeXPnAELOy4NjQ+tifJU5OROsJI+9lhe//Z+YFt+y4ichz6Xxf6thc4u5/7JZzKn5icFBM+NZpM14fl+bwl+jsvw9N6qs5qvHoi1Kj/CP/9+h9A+tp/BwZ4xAAAAABJRU5ErkJggg==",
    },
    {
      name: "Excel",
      icon: "https://dhruv-portfolio-mu.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Ffluency%2F144%2Fnull%2Fmicrosoft-excel-2019.png&w=256&q=75",
    },
    {
        name:"ChatGPT",
        icon:"data:image/png;base64,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"
    }
  ],
};

const TechStack = () => {
  const [selectedCategory, setSelectedCategory] = useState("Web Development");

  return (
    <section className="py-16 px-6 lg:px-24">
      <div className="text-center mb-8">
        <h2 className="text-5xl font-medium mb-10">Tech Stack</h2>
        <div className="flex justify-center gap-4 mt-4">
          {Object.keys(techStack).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-7 py-3 rounded-xl ${
                selectedCategory === category
                  ? "bg-purple-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="lg:w-3/4 2xl:w-3/5 my-8 mx-auto md:px-12 grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 place-items-center gap-8">
        {techStack[selectedCategory].map((tech) => (
          <div key={tech.name} className="flex flex-col items-center space-y-4">
            {/* Icon container */}
            <div className="bg-slate-50  rounded-full p-7">
              <img src={tech.icon} alt={tech.name} className="w-12 h-12" />
            </div>

            {/* Tech name */}
            <p className="text-center text-base font-medium">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
