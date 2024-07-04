
import banner from '../../assets/Media/Rectangle5.png'
import piechart from '../../assets/Media/piechart.png'

import Vector2 from '../../assets/Media/Vector2.png'
import youtube from '../../assets/Media/youtube.png'
import star from '../../assets/Media/star.png'
import Icons from '../../assets/Media/Icons.png'
import people from '../../assets/Media/people.png'
import Group from '../../assets/Media/Group.png'
 import arrow1 from'../../assets/Media/Arrow1.png'
 import arrow2 from'../../assets/Media/Arrow2.png'
 import Rectangle272 from'../../assets/Media/Rectangle272.png'
 import Rectangle24 from '../../assets/Media/Rectangle24.png'
const Home = () => {
    return (
        <div>

            <section>
                <img src={banner} alt="" />
            </section>
            <section>
                <div className='grid grid-cols-4 mt-12 gap-4'>
                    <div className='border max-h-96 col-span-1 rounded-3xl'>
                        <h1 className='text-6xl  ml-5 mt-3 font-semibold'>90%</h1>
                        <p className='px-6 text-2xl mt-3'>Patient satisfaction rate, reflecting our commitment.</p>
                        <img className='text-center mx-auto mt-8' src={piechart} alt="" />

                    </div>
                    <div className='col-span-2 '>
                        <h1 className='text-center text-3xl font-bold px-24'>Comprehensive Care for Every Patient</h1>
                        <div className='grid grid-cols-3 gap-4 px2'>
                            <div className='border h-64 col-span-1 rounded-3xl'>
                                <h1 className='text-3xl  ml-5 mt-3 font-semibold'>500+</h1>
                                <p className='px-1 text-xl mx-3 mt-3'>Board-certified doctors</p>
                                <img className='text-center mx-auto mt-8' src={Icons} alt="" />

                            </div>   

                            <div className='border h-52 col-span-1 rounded-3xl mt-12'>
                                <h1 className='text-3xl  ml-5 mt-3 font-semibold flex items-center'>4.8 <span className='text-xl ml-3'><img className='' src={star} alt="" /></span></h1>
                                <p className='px-1 text-l ml-2 mt-3'>Over 20,000 Patient</p>
                                <img className='text-center mx-auto mt-8' src={people} alt="" />

                            </div>  
                            
                             <div className='border h-64 col-span-1 rounded-3xl px-2'>
                                <h1 className='text-3xl  ml-3 mt-3 font-semibold'>$5000</h1>
                                <p className='px-2 text-l mt-3'>Money spend
                                for poor patient.</p>
                                <img className='text-center mx-auto mt-8' src={Group} alt="" />

                            </div>

                        </div>
                    </div>
                    <div className='border max-h-96 col-span-1 relative rounded-3xl'>
                        <h1 className='text-6xl text-left ml-4 mt-4 font-semibold  '>50+</h1>
                        <p className='px-6 text-2xl mt-3 text-left'>Free lession video
                            for patient</p>
                        {/* <img src={youtube} alt="" /> */}
                        <img className='text-center mx-auto z-0 mt-12 absolute top-32 left-20' src={Vector2} alt="" />
                        <img className='text-center mx-auto absolute top-52 z-10 left-28' src={youtube} alt="" />


                    </div>
                </div>
            </section>


            <section className='mt-28'>
                <div className='grid grid-cols-2 relative'>
                    <div>
                        <button className='btn ml-2 bg-white rounded-3xl px-8 border border-black '>Who We Are</button>
                        <h1 className='text-4xl p-3 font-bold mr-48'>We Help To Get Soultions</h1>
                        <p className='text-sm mr-32 ml-2 '>We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.
                        </p>
                        <div className="navbar-end ">
          <a className="btn border-none mt-12  bg-[#FFC637] border-black rounded-xl">Learn more<span><img src={arrow1} alt="" /></span> 
          
          
          </a>
          
        </div>
                    </div>
                    <div className=''>
                        <img src={Rectangle24} alt="" />
                        <div className='bg-[#343268] w-80 p-5  text-white rounded-2xl absolute top-1/2 left-1/2 -translate-x-16'>
                            <h1 className='mt-5 text-2xl'>
                            Our mission is simple
                            </h1>
                            <p className='mt-4 text-l mb-3'>To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
                        </div>
                    </div>

                </div>
            </section>
            <section className='mt-28'>
                <div className='grid grid-cols-2 relative'>
                    <div>
                        <button className='btn ml-2 bg-white rounded-3xl px-8 border border-black '>Service</button>
                        <h1 className='text-4xl p-3 font-bold mr-48'>Empowering Health, Enriching Lives</h1>
                        <p className='text-sm mr-32 ml-2 '>We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness.
                        </p>
                        <div className="navbar-end ">
          <a className="btn border-none mt-12  bg-[#FFC637] border-black rounded-xl">Appointment<span><img src={arrow1} alt="" /></span> 
          
          
          </a>
          
        </div>
                    </div>
                    <div className=''>
                        <img className='rounded-3xl' src={Rectangle272} alt="" />
                        <div className='bg-[#343268] w-[300px] p-5  text-white rounded-2xl absolute top-1/2 -mt-4 left-1/2 translate-x-12 opacity-70 px-6'>
                          <div className='flex'>
                          <div>
                            <h1 className='mt-5 font-semibold text-l'>
                            Advanced Technology
                            </h1>
                            <p className='mt-4 text-xs mb-3 font-semibold'>Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision.</p>
                            </div>
                            <span className='      opacity-95  '><img className='w-44 mt-16' src={arrow2} alt="" /></span> 
                          </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Home;