// import React from "react";
import { Home, Navbar } from "./components";
import { styles } from "./util/style";
const App = () => {
    return (
        <div className="bg-primary w-full overflow-hidden ">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.container} `}>
                    <Navbar />
                    {/* <Home />  */}
                    {/* Home bu joyda turganda respons bo'lganda padding leftlari o'zgaribketdi shu sabab pastga alohida qo'yildi */}

                </div>
            </div>

            <div className={`bg-primary ${styles.flexStart}`}>
                <div className={`${styles.container}`}>
                    <Home />
                </div>
            </div>
        </div>
    );
};

export default App;

