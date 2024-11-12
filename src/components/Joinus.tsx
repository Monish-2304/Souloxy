import { useState } from "react";

const JoinUs = () => {
    const [selectedRole, setSelectedRole] = useState<string | null>(null);
    const [text, setText] = useState<string>("");

    const handleButtonClick = (role: string) => {
        if (selectedRole === role) {
            setSelectedRole(null);
            setText("");
        } else {
            setSelectedRole(role);
            if (role === "user") {
                setText(
                    "What You’ll Do \n Early access to the app and all its features.\n A chance to participate in exclusive feedback sessions.\n Personalized support and wellness tools. Opportunities to help us create a more user-friendly and impactful experience."
                );
            } else if (role === "psychologist") {
                setText(
                    "What You’ll Do \n Provide clinical feedback and ensure our methods align with best practices.\n Collaborate on personalized therapy tools and on-demand support services.\n Help us build a supportive, impactful resource for users."
                );
            }
        }
    };

    return (
        <div
            className="flex flex-col mt-6 md:flex-row  p-10 space-y-10 md:space-y-0 md:space-x-10"
            style={{
                backgroundImage: "url('/src/assets/JoinUsBg.jpg')",
                backgroundSize: "cover",
            }}
        >
            {/* Join Us Section */}
            <div className="bg-white/70 rounded-3xl p-8 w-full md:w-1/2 shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Join Us</h2>
                <p className="text-md mb-6">
                    We invite you to join us in our mission to enhance mental wellness.
                    Whether you're a user eager to test our app and share your feedback
                    or a psychologist interested in collaborating with us, your
                    participation is invaluable.
                </p>
                <div className="flex space-x-2 md:space-x-4">
                    <button
                        className={`py-1 px-3 text-xs md:py-2 md:px-6 md:text-base rounded-full font-semibold transition ${selectedRole === "user" ? "bg-[#B4D2B6] text-black" : "bg-[#F8F7F2] text-black"
                            }`}
                        onClick={() => handleButtonClick("user")}
                    >
                        As a User
                    </button>
                    <button
                        className={`py-1 px-3 text-xs md:py-2 md:px-6 md:text-base rounded-full font-semibold transition ${selectedRole === "psychologist" ? "bg-[#B4D2B6] text-black" : "bg-[#F8F7F2] text-black"
                            }`}
                        onClick={() => handleButtonClick("psychologist")}
                    >
                        As a Psychologist
                    </button>
                </div>

                {selectedRole && (
                    <div className="mt-4 p-4 bg-[#B4D2B6] rounded-2xl text-black">
                        {text.split("\n").map((line, index) => (
                            <p key={index} className="mb-1">
                                {line}
                            </p>
                        ))}
                    </div>
                )}
            </div>

            {/* Form Section */}
            {selectedRole && (
                <div className="bg-white/70 rounded-3xl p-8 w-full md:w-1/2 shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4">
                        Submit your Details as {selectedRole === "user" ? "User" : "Psychologist"}
                    </h2>
                    <form>
                        <label className="block mb-3">
                            <span className="text-sm font-semibold">Full Name</span>
                            <input
                                type="text"
                                className="w-full mt-1 p-2 border rounded-md bg-white/90"
                                required
                            />
                        </label>
                        <label className="block mb-3">
                            <span className="text-sm font-semibold">Email</span>
                            <input
                                type="email"
                                className="w-full mt-1 p-2 border rounded-md bg-white/90"
                                required
                            />
                        </label>
                        <label className="block mb-3">
                            <span className="text-sm font-semibold">How did you hear about us...</span>
                            <input
                                type="text"
                                className="w-full mt-1 p-2 border rounded-md bg-white/90"
                                required
                            />
                        </label>
                        <label className="block mb-3">
                            <span className="text-sm font-semibold">Share anything that helps us understand you better...</span>
                            <textarea
                                className="w-full mt-1 p-2 border rounded-md bg-white/90"
                                rows={4}
                                required
                            ></textarea>
                        </label>
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="bg-[#B4D2B6] text-black py-2 px-6 rounded-full mt-4"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default JoinUs;
