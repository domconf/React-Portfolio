import React from "react";

export default function Footer() {
    // const styles = {
    //     footerStyle: {
    //         position: "fixed",
    //         left: "0",
    //         bottom: "0",
    //         width: "100%",
    //     }
    // }

    return (
        <footer>
            <div className="row justify-content-center text-center mt-5">
                <div className="row col-3">
                    <div className="col">
                        <a href="https://github.com/domconf">Github</a>
                    </div>
                    <div className="col">
                        <a href="https://www.linkedin.com/in/domconf/">LinkedIn</a>
                    </div>
                    <div className="col">
                        <a href="mailto:domconfessore@gmail.com">E-Mail</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}