import React from "react";

export default function Contact() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
    
    function encode(data) {
        return Object.keys(data)
            .map(
                (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
            )
            .join("&");
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", name, email, message }),
        })
        .then(() => alert("Message delivered"))
        .catch((error) => alert(error));
    }

    return (
        <section id="contact" className="relative">
            <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-green-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe
                        width="100%" 
                        height="100%"
                        title="map" 
                        className="absolute inset-0"   
                        style={{filter: "opacity(0.7)" }}
                        allowfullscreen="" 
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.552319153856!2d7.539517173587817!3d6.451471423999103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044a416c5cff98f%3A0x98142f5bb0b2f49d!2sGoshen%20Estate%20Rd%2C%20400102%2C%20Enugu!5e0!3m2!1sen!2sng!4v1699625662651!5m2!1sen!2sng"
                    />
                    <div className="bg-green-700 relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="mb-1 title-font font-bold text-white tracking-widest text-xs">
                                ADDRESS
                            </h2>
                            <p>
                                Enugu, 400200
                            </p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-bold text-white tracking-widest text-xs"> 
                                EMAIL
                            </h2>
                            <a className="text-yellow-400 leading-relaxed">
                                igraziella2@gmail.com
                            </a>
                            <h2 className="title-font font-bold tracking-widest text-white text-xs mt-4">
                                PHONE
                            </h2>
                            <p className="text-yellow-400 leading-relaxed">+234 8135683719</p>
                        </div>
                    </div>
                </div>
                <form 
                vercel
                name="contact"
                className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h2 className="text-green-300 sm:text-4xl text-3xl mb-1 font-medium title-font ">
                        Hire Me
                    </h2>
                    <p className="leading-relaxed text-white mb-5">
                        Interested in working with me? Kindly leave me a message and i'll respond
                        in the soonest time possible.                     
                    </p>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-white">
                            Name
                        </label>
                        <input 
                        type="text"
                        id="name"
                        name="name"
                        className="w-full bg-white rounded border border-black text-black py-1 px-3"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-white">
                            Email
                        </label>
                        <input 
                        type="text"
                        id="email"
                        name="email"
                        className="w-full bg-white rounded border border-black text-black py-1 px-3"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 text-sm text-white">
                            Message
                        </label>
                        <textarea
                        id="message"
                        name="message"
                        className="w-full bg-white rounded border border-black text-black py-1 px-3 h-28 text-base leading-6 resize-none"
                        />
                    </div>
                    <button type="submit"
                    className="text-white text-sm font-bold bg-green-500 border-0 py-2 px-6 focus:outline-none rounded hover:bg-yellow-800">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}