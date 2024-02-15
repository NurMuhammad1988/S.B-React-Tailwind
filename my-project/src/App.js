// import React from "react";
import { Billing, Contract, Home, Navbar } from "./components";
import Statistics from "./components/statistics";
import { styles } from "./util/style";
const App = () => {
    return (
        <div className="bg-primary w-full overflow-hidden ">
            {/*  Navbar */}
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.container} `}>
                    <Navbar />
                    {/* <Home />  */}
                    {/* Home bu joyda turganda respons bo'lganda padding leftlari o'zgaribketdi shu sabab pastga alohida qo'yildi */}
                </div>
            </div>
            {/* Home */}
            <div className={`bg-primary ${styles.flexStart}`}>
                <div className={`${styles.container}`}>
                    <Home />
                </div>
            </div>

            <div className={`  bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.container} `}>
                    <Statistics />
                    <Contract/>
                    <Billing/>
                </div>
            </div>
        </div>
    );
};

export default App;
