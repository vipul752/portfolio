import profile1 from "/Users/vipulkumar/Desktop/frontend/portfolio ✅/portfolio/src/photos/profile1.jpeg";

const data = {
  image: profile1,
};
export { data };

{
  /* Right side image */
}
<div className=" w-56 h-56 md:w-80 md:h-80 lg:-translate-x-20 lg:-translate-y-20  mt-2 ">
  <img
    src={data}
    alt="coding"
    width="1000"
    height="1000"
    className="rounded-full w-full h-full object-cover"
  />

  <div>
    <img
      src="https://dhruv-portfolio-mu.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fcolor%2F144%2Fnull%2Fjavascript--v1.png&w=256&q=75"
      alt="js"
      width="100"
      height="100"
      className="rounded-full w-full h-full object-cover"
    />

    {/* give me nodejs icon */}
    <img
      src="https://dhruv-portfolio-mu.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fcolor%2F144%2Fnull%2Fnodejs.png&w=256&q=75"
      alt="nodejs"
      width="1000"
      height="1000"
      className="rounded-full w-full h-full object-cover"
    />

    <img
      src="https://dhruv-portfolio-mu.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fcolor%2F144%2Fnull%2Freact-native.png&w=256&q=75"
      alt="react"
      width="1000"
      height="1000"
      className="rounded-full w-full h-full object-cover"
    />
  </div>
</div>;
