
'use client'

import { useRef, useState } from "react";
import BackButton from "./BackButton";

const Profile = ({ profile }) => {

    const [view, setView] = useState("caseStudies");
    const targetDivRef = useRef(null);

    const handleOnClick = () => {
        const pdf = profile.resumeLink;
        window.open(pdf, '_blank');
    };

    const handleScrollToDiv = () => {
        targetDivRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="mx-auto text-center font-sans w-full ">
            <BackButton />
            <div className="bg-gradient-to-r from-yellow-500 to-red-500 text-white p-9 rounded-lg shadow-lg mb-6 relative w-full box-border" >

                <div className="absolute left-5 top-5">

                    <span className="mr-2.5">📧 {profile.email}</span>
                    <span>📞 {profile.phone}</span>
                </div>
                <button onClick={handleOnClick} className="absolute right-5 top-5 bg-white text-[#f5a623] border-none py-1 px-2 rounded cursor-pointer">
                    Download My Resume
                </button>
            </div>
            <div className="justify-center p-5 text-center w-full box-border">
                <div className="flex justify-center"><img src={profile.profilePic} alt="Image" className="rounded-full w-[200px] h-[200px] mb-2.5" /></div>
                <h1 className="text-gray-800 my-2.5">{profile.name}</h1>
                <p className="text-gray-600 my-1.25">{profile.sex} | {profile.age} | {profile.pronouns}</p>
                <button onClick={handleScrollToDiv} className="bg-[#f5a623] text-white border-0 py-2.5 px-5 rounded-full cursor-pointer">
                    Watch My Visual Resume Now
                </button>
            </div>
            <div className="flex justify-around mt-5 bg-gray-200 p-2.5 rounded-lg w-full box-border">
                <div>Core Skills & Technical Proficiencies</div>
                <div>Professional Journey & Internship Roles</div>
                <div>Case Insights & Key Projects</div>
                <div>Learning & Academic Milestones</div>
                <div>Endorsements from Mentors & Peers</div>
            </div>
            <p class="flex justify-center mt-10 w-full box-border">
                {profile.about}
            </p>
            <br />
            <h1 className="mt-10 text-4xl font-semibold">Tech Stack</h1>
            <div className="flex items-center mt-5 gap-7 w-full box-border justify-center">
                {profile.techstack?.map((tech, index) => (
                    <div><img
                        key={index}
                        src={tech}
                        alt={`tech-${index}`}
                        className="w-40 h-40"
                    /></div>
                ))}
            </div>
            <div>
                <h1 className="flex justify-center mt-10 w-full text-4xl font-semibold">Professional Journey & Internship Roles</h1>

            </div>


            <div className="m-5">
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px", gap: "10px" }}>
                    <button
                        onClick={() => setView("caseStudies")}
                        style={{
                            padding: "10px 20px",
                            borderRadius: "5px",
                            border: "none",
                            cursor: "pointer",
                            backgroundColor: view === "caseStudies" ? "#f5a623" : "#ccc",
                            color: "white"
                        }}
                    >
                        <h1 className="text-2xl font-semibold">Case Studies</h1>
                    </button>
                    <button
                        onClick={() => setView("projects")}
                        className={`
                                    py-2 px-5
                                    rounded
                                    border-none
                                    cursor-pointer
                                     text-white
                                    ${view === "projects" ? "bg-[#f5a623]" : "bg-[#ccc]"}
                                    `}
                    >
                        <h1 className="text-2xl font-semibold">Projects</h1>
                    </button>
                </div>

                {view === "caseStudies" ? (
                    <div>
                        <h2 className="mt-10 mb-10 text-2xl">Case Studies</h2>
                        <div class="flex justify-center gap-5 flex-wrap">
                            {profile.caseStudies?.map((cs, index) => (
                                <div key={index} className="border border-gray-300 p-2.5 rounded-lg w-52">
                                    <img src={cs.icon} alt={cs.title} className="w-50 h-50" />
                                    <h3>{cs.title}</h3>
                                    <a href={cs.link} target="_blank" rel="noopener noreferrer"></a>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div>
                        <h2 className="mt-10 mb-10 text-2xl">Projects</h2>
                        <div class="flex justify-center gap-5 flex-wrap">
                            {profile.projects?.map((proj, index) => (
                                <div key={index} className="border border-gray-300 p-2.5 rounded-lg w-52">
                                    <img src={proj.icon} alt={proj.title} className="w-50 h-50" />
                                    <h3>{proj.title}</h3>
                                    <a href={proj.link} target="_blank" rel="noopener noreferrer"></a>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <div ref={targetDivRef} className="mt-10 flex justify-center">

                <iframe position="absolute" width="900" height="500" src={profile.videoLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

            <div class="flex flex-col items-center justify-center min-h-100 bg-gray-100">
                <div class="bg-gradient-to-r from-yellow-500 to-red-500 text-white font-bold text-xl p-9 rounded-lg shadow-lg flex items-center justify-between w-full ">
                    <span>Connect with {profile.name}</span>
                    <button onClick={handleOnClick} class="bg-white text-red-500 font-semibold py-2 px-4 rounded-full hover:bg-gray-100 transition duration-200">
                        Download My Resume
                    </button>
                </div>
                <div class="mt-4 flex space-x-4">
                    <button class="text-gray-500 hover:text-gray-700"><span class="mr-1">📧</span><a href={profile.email}>Email</a></button>
                    <button class="text-gray-500 hover:text-gray-700"><span class="mr-1">📞</span><a href={profile.phone}>Phone</a></button>
                    <button class="text-gray-500 hover:text-gray-700"><span class="mr-1">💻</span><a href={profile.githubLink}>GitHub</a></button>
                    <button class="text-gray-500 hover:text-gray-700"><span class="mr-1">🔗</span><a href={profile.linkedinLink}>LinkedIn</a></button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
