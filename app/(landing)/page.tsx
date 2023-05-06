import LandingPageImage from "../../assets/images/landing.png"

export default function Page() {
  return (
    <div className="grid grid-cols-2 min-h-[100vh] px-20 pt-[calc(1rem+56px)] pb-4 gap-x-16 max-md:px-12 max-md:pt-[calc(0.5rem+56px)] max-md:pb-2 max-sm:grid-cols-1">
      <div className="flex flex-col gap-8 items-start justify-center">
        <h1 className="text-6xl font-bold max-md:text-4xl max-sm:text-2xl">
          Lorem ipsum dolor sit amet consectetur
        </h1>
        <p className="leading-relaxed">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
          asperiores, beatae voluptas aliquam quibusdam dolorum error laborum a
          unde quidem! Dolorem adipisci, animi iste quas fuga facere quidem
          doloremque explicabo!
        </p>
        <button className="bg-[#418efd] px-8 py-2 text-white rounded-sm active:translate-y-[1px]">
          Contribute
        </button>
      </div>
      <div className="flex flex-col gap-8 items-center justify-center max-sm:hidden">
        <img src={LandingPageImage.src}/>
      </div>
    </div>
  );
}
