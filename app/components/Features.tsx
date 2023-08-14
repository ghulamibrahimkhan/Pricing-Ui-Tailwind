import { HasssleFree, MoneyBack, Subscription } from "./Icon";

export default function Features() {
    return (
        <>
            <div className=" pb-24 mt-10 mx-auto w-[376px] font-bold text-lg md:flex md:w-[806px] lg:w-[906px]">
                <div className="feature">
                    <MoneyBack />
                    <p>30 days money back Guarantree</p>
                </div>
                <div className="feature">
                    <HasssleFree />
                    <p>No setup fees 100% hassle-free</p>
                </div>
                <div className="feature">
                    <Subscription />
                    <p>No monthly subscription Pay once and for all</p>
                </div>
            </div>
        </>
    )
}