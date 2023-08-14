import { Check } from "./Icon"

export default function Pricing() {
    return (
        <>
            <div className="max-w-7xl mx-auto -mt-32  flex flex-col items-center justify-center md:flex-row ">
                <div className="w-[382px] h-[283px] bg-[#F0EAFB] text-gray-900 text-center md:h-[336px]  md:w-[318px] lg:w-[378px]  rounded-t-xl md:rounded-l-xl md:rounded-r-none ">
                    <h3 className="pt-[35px] font-extrabold text-2xl leading-8 md:pt-12">Premium Pro</h3>
                    <p className="mt-3 md:mt-4 text-5xl leading-[48px] font-extrabold tracking-[-1%] ">$329</p>
                    <p className="mt-2 md:mt-3 text-lg font-medium ">Billed just once</p>
                    <button className="mt-6 bg-[#805AD5] py-3 text-gray-50 px-[74px] text-base leading-6 rounded-lg">Get Started</button>
                </div>

{/* second div */}
                <div className="w-[382px] h-[323px] rounded-b-xl text-gray-700 pt-10 pl-[14px] md:pl-6 lg:pl-12 shadow-2xl font-normal text-lg leading-7  bg-white  md:h-[336px] md:rounded-b-none  md:w-[500px] lg:w-[616px] md:rounded-r-xl">
                    <p className="mb-6 font-normal text-lg leading-7 max-w-[520px]">
                        Access these features when you get this pricing package for your business.
                    </p>
                    <div className="pricing-li">
                        <Check />
                        <p>
                            International calling and messaging API
                        </p>
                    </div>  
                    <div className="pricing-li">
                        <Check />
                        <p>
                            Additional phone numbers
                        </p>
                    </div>
                    <div className="pricing-li">
                        <Check />
                        <p>
                            Automated messages via Zapier
                        </p>
                    </div>
                    <div className="pricing-li">
                        <Check />
                        <p>
                            24/7 support and consulting
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}