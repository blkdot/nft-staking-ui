import React from "react";
import logo from "../assets/images/logo.png";

const Card = (props) => {
    const { imgUrl, title } = props;

    return (
        <div className="card">
            <img src={imgUrl} alt="" />
            <label>{title}</label>
        </div>
    );
};

export default function Main() {
    return (
        <>
            <div className="container">
                <section className="header">
                    <h1>THE APE PROJECT</h1>
                    <div>
                        <button className="btn_normal">0xa9Ee...2e64</button>
                    </div>
                </section>
                <div className="double-spacer"></div>
                <section className="content">
                    <div>
                        <h1>UNSTAKED</h1>
                        <div className="unstakecard">
                            <span>
                                <Card imgUrl={logo} title="848444" />
                                <Card imgUrl={logo} title="dfddf" />
                                <Card imgUrl={logo} title="61649984" />
                                <Card imgUrl={logo} title="21984562" />
                                <Card imgUrl={logo} title="1515151" />
                            </span>
                        </div>
                        <h5>
                            SELECT THE APES YOU WOULD LIKE TO STAKE AND CLICK
                            THE BUTTON BELOW.
                        </h5>
                        <button className="btn_normal">S T A K E</button>
                    </div>
                    <div>
                        <h1>STAKED</h1>
                        <div className="stakecard"></div>
                        <h5>
                            SELECT THE APES YOU WOULD LIKE TO UNSTAKE AND CLICK
                            THE BUTTON BELOW.
                        </h5>
                        <span>
                            <button className="btn_normal stake">CLAIM</button>
                            <button className="btn_normal stake">
                                UNSTAKE
                            </button>
                        </span>
                    </div>
                </section>
                <div className="double-spacer"></div>
                <section className="footer">$VARIABLE EARNED</section>
            </div>
        </>
    );
}
