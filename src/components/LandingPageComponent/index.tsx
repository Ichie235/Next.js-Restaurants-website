import Image from 'next/image';
import FormInput from '../FormInput/FormInput';
import SubmitButton from '../submitButton';

const data = [
  {
    imageSrc: '/assets/stir-fry-pasta.png',
    title: 'Stir fry Pasta',
    description: 'Stir fry pasta yada yada yada because of Sesan',
  },
  {
    imageSrc: '/assets/meat-balls.png',
    title: 'Meat Balls',
    description: 'Meat balls yada yada yada because of Sesan',
  },
  {
    imageSrc: '/assets/burger-meal.png',
    title: 'Burger Meal',
    description: 'Burger meal yada yada yada because of Sesan',
  },
];
export default function LandingPage() {
  return (
    <div className="bg-res-green pt-28 lg:pt-12 md:px-5 lg:px-5 overflow-hidden">
      {/* Hero  */}
      <div className="flex flex-col items-center gap-9 p-8 md:h-[75vh] lg:flex-row-reverse lg:gap-16 xl:gap-[17rem] lg:h-screen">
        {/* Hero Image */}
        <div className="lg:flex-grow lg:w-3/5">
          <Image
            src="/assets/bon-vivant-meal.png"
            width={250}
            height={250}
            className="md:w-96 md:h-80 lg:w-[400px] lg:h-[400px] "
            alt="hero image"
          />
        </div>
        <div className="lg:flex-shrink">
          <h2 className="text-white text-4xl text-center lg:text-6xl  lg:w-[650px] lg:text-left lg:px-8 ">
            Order <span className="text-res-orange-lite">food</span> anytime,
            anywhere
          </h2>
          <p className="text-res-gray text-base text-center font-extralight mt-6 md:px-9 lg:w-[609px] lg:px-8 lg:text-lg lg:text-left">
            Browse from our list of specials to place your order and have food
            delivered to you in no time. Affordable, tasty and fast!
          </p>
          <div className="flex justify-center mt-3 gap-2 lg:justify-start lg:ml-9">
            <div>
              {' '}
              <Image
                src="/assets/google-logo.png"
                width={130}
                height={40}
                alt="google icon"
              />
            </div>
            <div>
              {' '}
              <Image
                src="/assets/App-Store-Badge.png"
                width={130}
                height={40}
                alt="Apple store icon"
              />
            </div>
          </div>
        </div>
      </div>

      {/* section 2  */}
      <div className="flex flex-col items-center mt-7 lg:mt-16 lg:h-[70vh]">
        <div>
          <h2 className="text-center text-res-gray text-xl font-semibold lg:text-4xl ">
            Special Meals of the day!
          </h2>
          <p className=" text-res-gray text-sm font-extralight mt-3 px-6 md:px-14 md:text-center lg:w-[609px] lg:text-lg lg:text-center">
            Check our sepecials of the day and get discounts on all our meals
            and swift delivery to what ever location within Ilorin.
          </p>
        </div>
        <div className="flex flex-col mt-14 gap-8 md:mt-10 md:grid md:grid-cols-3 lg:mt-16 lg:flex-row lg:gap-32 xl:gap-56">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={item.imageSrc}
                width={150}
                height={150}
                alt={`${item.title} icon`}
              />
              <div>
                <h3 className="text-res-orange-lite text-center my-2 font-semibold">
                  {item.title}
                </h3>
                <p className="text-res-gray text-center font-extralight px-14 md:px-10 lg:w-[288px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex flex-col items-center mt-14 md:mt-20 lg:flex-row lg:justify-center lg:px-2 lg:my-28 lg:gap-5 xl:gap-56">
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-res-orange-lite font-bold text-xl text-center lg:text-4xl lg:w-[549px]">
            {' '}
            Get notified when we update!
          </h3>
          <p className="text-res-gray text-center px-6 font-extralight md:px-14 lg:w-[513px] lg:text-lg lg:px-0">
            {' '}
            Get notified when we add new items to our specials menu, update our
            price list of have promos!
          </p>
        </div>
        <div className="flex justify-center md:gap-9 lg:gap-2 mt-6 mb-10">
          <FormInput
            type="email"
            name="email"
            title=""
            placeholder="gregphillips@gmail.com"
            value={''}
            className="border-2 border-gray-300 bg-white rounded-md py-2 px-4  focus:bg-white w-[85%] h-[40px] md:w-[220px] lg:w-[280px]"
          />
          <SubmitButton className="bg-res-orange-lite text-res-green normal-case w-fit h[20px] -ml-8 lg:ml-0">
            Get notified
          </SubmitButton>
        </div>
      </div>
    </div>
  );
}
