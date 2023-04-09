import Images from "@components/Images/Images";
import Image from "next/image";
import React from "react";
function Homepage() {
    const topContent = () => <div className='flex justify-between'>
    <h1 className='text-red-700 font-semibold text-2xl ml-[65px] py-[24px]'>{'NETFLIX'}</h1>
    <a href='' className='text-white font-medium text ml-2 py-2 bg-red-700 rounded-xl mr-[65px] my-[20px] p-[8px]'>{'SignIn'}</a>
    </div> 

    const renderMessage = () => (
        <div className='flex flex-col justify-center items-center mt-[100px]'>
            <h1 className='text-white font-bold w-[400px] text-center text-[40px]'>
                {'Unlimited movies, TV  shows, and more.'}
            </h1>
            <h3 className="text-grey font-normal text-center text-[16px]">{'Watch anywhere. Cancel anytime.'}</h3>
            <h3 className="text-grey font-normal text-center text-[17px]">{'Ready to watch? Enter your email to create or restart your membership.'}</h3>
            </div>
    )
    const renderInput = () => {
        return (
            <div className="flex flex-row items-center justify-center mt-[20px] rounded-s-md">
                <input placeholder="Enter your email id" type='email' className="w-[450px] h-[40px] p-4 text-black" />
                <div className='bg-red-700 p-2 flex flex-row items-center'>
                    <a href=""> Get Started</a>
                    <Image alt="jf" className="rotate-180 w-[20px] h-[20px] ml-1" src={Images.arrowIcon} />
                 </div>   
            </div>
        )
    }
    const renderInfo = (title: String, subTitle: String, image: any) => {
        return (
            <div className="flex flex-row justify-center bg-black items-center py-[40px]">
                <div>
                    <h1 className="text-white font-semibold text-[25px] max-w-[300px]">
                        {title}
                    </h1>
                    <h5 className="text-grey font-normal text-[13px] max-w-[400px]">
                        {subTitle}
                    </h5>
                </div>
                <Image alt={'bn'} src={image} className="w-[530px] h-[400px] ml-[100px]" />
            </div>
        )
    }
    const renderInfos =() => {
        return (
            <div className=" mt-[200px]">
                {renderInfo('Enjoy your tv.', 'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.', Images.info1)}
                {renderInfo('Download your shows to watch offline.', 'Save your favorites easily and always have something to watch.', Images.info2)}
                {renderInfo('Create profiles for kids.', 'Send kids on adventures with their favorite characters in a space made just for them—free with your membership.', Images.info3)}
                </div>
            
        )
    }
    return ( <div>
        {topContent()}
        {renderMessage()}
        {renderInput()}
        {renderInfos()}
         </div>);
}

export default Homepage;