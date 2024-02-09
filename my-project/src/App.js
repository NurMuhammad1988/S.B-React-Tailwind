import React from "react";
import { styles } from "./util/style";
const App = () => {
    return (
        <div className="bg-primary w-full overflow-hidden ">
            <div
                className={`${styles.paddingX} ${styles.flexCenter}`}
            >
                <div className={`${styles.container} `}>
                    <div className={`${styles.heading}`}>Navbar</div>
                </div>
            </div>

            {/* <div className="bg-slate-500">
                <p className={`${styles.paragraph}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate optio, accusantium enim aspernatur autem ad
                    perspiciatis consectetur recusandae? Quaerat, itaque!
                </p>
            </div> */}
        </div>
    );
};

export default App;
