import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const github = <FontAwesomeIcon icon={faGithub} />;

export default function Project(props) {
    const styles = {
        imageSize: {
            height: "100%",
            width: "100%",
            margin: "0",
            padding: "0",
        },
        projContainer: {
            width: "100%",
            margin: "0",
            padding: "0",
        },
        imgContainer: {
            maxHeight: "240px",
            width: "100%",
            margin: "0",
            padding: "0",
        },
        discContainer: {
            backgroundColor: "black",
            color: "white",
            fontSize: "15px",
            width: "100%",
        },
        cardH5: {
            color: "white",
        },
    }

    return (
        <div className="row mb-5 justify-content-center">
            <h3 className="row portfolio-title mt-3">Portfolio</h3>
            <div className="col-10 d-flex">
                <div className="row row-cols-2">
                    {props.projects.map((project, index) => (
                        <div key={index} className="col d-flex">
                            <div
                                className="card mb-4 mt-4 image-card"
                                style={styles.projContainer}
                            >
                                <div className="card-body" style={styles.imgContainer}>
                                    <img
                                        src={project.image}
                                        className="port-image card-mg-top"
                                        alt=""
                                        style={styles.imageSize}
                                    />
                                    <div className="top-left">
                                        <a href={project.deploy}>{project.name}</a>
                                        <a href={project.github}>{github}</a>
                                    </div>
                                </div>
                                <div className="card-body" style={{ ...styles.discContainer, textAlign: "center" }}>
                                    <h5 className="card-subtitle mb-1" style={{ ...styles.cardH5 }}>
                                        {project.name}
                                    </h5>
                                    <p className="card-text">{project.description}</p>
                                    <h5 className="card-subtitle mb-1" style={{ ...styles.cardH5 }}>
                                        Technologies
                                    </h5>

                                    <p className="card-text">{project.topics}</p>
                                    <div className="card mb-4 image-card">
                                        <img src={props.image} className="project-image" alt="" style={styles.imageSize} />
                                        <div className="project-info" style={{ display: "flex", justifyContent: "space-evenly" }}>
                                            <a href={project.github} target="_blank"><img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="Repository" id="project-icon" /></a>
                                            <a href={project.deploy} target="_blank"><img src="https://img.icons8.com/color/48/000000/monitor.png" alt="Deployed Site" id="project-icon" /></a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}
