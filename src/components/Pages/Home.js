import classes from './Home.module.css';

const HOME = () =>  {
    return (
        <section>
            <h1 className={classes.h2}>Get Our Latest Albums</h1>
            <h1 className={classes.h1}>Tours</h1>
            <div className={classes.div1}>
                <span>
                    <ul>
                        <span>JUl16</span>
                        <span>DETROIT, MI</span>
                        <span>DTE ENERGY MUSIC THEATRE</span>
                        <button>Buy ticket</button>
                    </ul>
                    <ul>
                        <span>JUL19</span>
                        <span>TORONTO,ON</span>
                        <span>BUDWEISER STAGE</span>
                        <button>Buy ticket</button>
                    </ul>
                    <ul>
                        <span>JUL22</span>
                        <span>BRISTOW, VA</span>
                        <span>JIGGY LUBE LIVE</span>
                        <button>Buy ticket</button>
                    </ul>
                    <ul>
                        <span>JUL29</span>
                        <span>PHOENIX, AZ</span>
                        <span>AK-CHIN PAVILION</span>
                        <button>Buy ticket</button>
                    </ul>
                    <ul>
                        <span>AUG2</span>
                        <span>PHOENIX, AZ</span>
                        <span>AK-CHIN PAVILION</span>
                        <button>Buy ticket</button>
                    </ul>
                    <ul>
                        <span>AUG22</span>
                        <span>PHOENIX, AZ</span>
                        <span>AK-CHIN PAVILION</span>
                        <button>Buy ticket</button>
                    </ul>
                </span>
            </div>
        </section>
    )
};

export default HOME;