import Accordion from "./Accordion"

const Work = () => {
  return (
    <section className="">
      <div className="w-full flex justify-between items-center">
        <h2 className="md:text-4xl text-3xl mb-10">Work<sup className="text-sm opacity-40 relative -top-5">01</sup></h2>
        <p className="opacity-40 max-sm:text-sm relative md:-top-3 -top-4">─── click card to know more</p>
      </div>

      <div className="w-full">
          <Accordion />
      </div>
      <div className="w-full border-b border-gray-900 mt-10"></div>
    </section>
  )
}

export default Work