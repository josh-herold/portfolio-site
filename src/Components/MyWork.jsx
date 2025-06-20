import { useEffect, useState } from 'react';
import './MyWork.css';
import mywork_data from '../assets/mywork_data'

const MyWork = () => {


    return (
        <div className="mywork" id="mywork">
            
            <div className="mywork-container">
                {mywork_data.map((work, index) => (
                    <div key={index} className="mywork-item">
                        <a
                            href={work.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={work.w_img} alt={`Project ${index + 1}`} className="work-img" />
                        </a>
                        <a
                            href={work.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="work-description"
                        >
                            {work.description}
                        </a>
                        {work.link2 && work.github && (
                            <a
                                href={work.link2}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="work-github-btn"
                            >
                                {work.github}
                            </a>
                        )}
                    </div>
                ))}
            </div>

            



        </div>
    );
};

export default MyWork;
