import Accordion from "./Accordion"

const Work = () => {
  return (
    <section className="">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-4xl mb-10">Work<sup className="text-sm opacity-40 relative -top-5">01</sup></h1>
        <p className="opacity-40 relative -top-3">─── click card to know more</p>
      </div>

      <div className="w-full">
          <Accordion />
      </div>
    </section>
  )
}

export default Work