import Image from 'next/image';
import FormInput from '../FormInput/FormInput';
import SubmitButton from '../submitButton';
export default function LandingPage() {
  return (
    <div className="bg-res-green lg:px-5 overflow-hidden">
      {/* Hero  */}
      <div className="flex flex-col items-center gap-9 p-8 lg:flex-row-reverse lg:gap-16 xl:gap-[17rem]">
        {/* Hero Image */}
        <div className="lg:flex-grow lg:w-3/5">
          <Image
            src="/assets/bon-vivant-meal.png"
            width={250}
            height={250}
            className="md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] "
            alt="hero image"
          />
        </div>
        <div className='lg:flex-shrink'>
          <h2 className="text-white text-4xl text-center lg:text-6xl  lg:w-[650px]">
            Order <span className="text-res-orange-lite">food</span> anytime,
            anywhere
          </h2>
          <p className="text-res-gray text-base text-center font-extralight mt-6 lg:w-[609px] lg:px-8 lg:text-lg lg:text-left">
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
      <div className="flex flex-col items-center mt-7 lg:mt-16">
        <div>
          <h2 className="text-center text-res-gray text-xl font-semibold lg:text-4xl ">
            Special Meals of the day!
          </h2>
          <p className=" text-res-gray text-sm font-extralight mt-3 px-6 lg:w-[609px] lg:text-lg lg:text-center">
            Check our sepecials of the day and get discounts on all our meals
            and swift delivery to what ever location within Ilorin.
          </p>
        </div>
        <div className="flex flex-col gap-6 lg:mt-16 lg:flex-row lg:gap-32 xl:gap-56">
          <div className="flex flex-col items-center">
            {' '}
            <Image
              src="/assets/stir-fry-pasta.png"
              width={150}
              height={150}
              alt="google icon"
            />
            <div>
              <h3 className="text-res-orange-lite text-center my-2 font-semibold">
                Stir fry Pasta
              </h3>
              <p className="text-res-gray text-center font-extralight px-14 lg:w-[288px]">
                Stir fry pasta yada yada yada because of Sesan
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            {' '}
            <Image
              src="/assets/meat-balls.png"
              width={150}
              height={150}
              alt="google icon"
            />
            <div>
              <h3 className="text-res-orange-lite text-center my-2 font-semibold">
                Meat Balls
              </h3>
              <p className="text-res-gray text-center font-extralight px-14 lg:w-[288px]">
                Meat balls yada yada yada because of Sesan
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            {' '}
            <Image
              src="/assets/burger-meal.png"
              width={150}
              height={150}
              alt="google icon"
            />
            <div>
              <h3 className="text-res-orange-lite text-center my-2 font-semibold">
                Burger Meal
              </h3>
              <p className="text-res-gray text-center font-extralight px-14 lg:w-[288px]">
                Burger meal yada yada yada because of Sesan
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex flex-col items-center mt-12 lg:flex-row lg:justify-center lg:px-2 lg:my-28 lg:gap-14 xl:gap-56">
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-res-orange-lite font-bold text-xl text-center lg:text-4xl lg:w-[549px]">
            {' '}
            Get notified when we update!
          </h3>
          <p className="text-res-gray px-6 font-extralight lg:w-[513px] lg:text-lg">
            {' '}
            Get notified when we add new items to our specials menu, update our
            price list of have promos!
          </p>
        </div>
        <div className='flex justify-center lg:gap-2 mt-6 mb-10'>
          <FormInput
            type="email"
            name="email"
            title=""
            placeholder="gregphillips@gmail.com"
            value={''}
            className="border-2 border-gray-300 bg-white rounded-md py-2 px-4  focus:bg-white w-[85%] h-[40px] lg:w-[288px]"
          />
            <SubmitButton className='bg-res-orange-lite text-res-green normal-case w-fit h[20px] -ml-8 lg:ml-0'>Get notified</SubmitButton>
        </div>
      </div>
    </div>
  );
}
