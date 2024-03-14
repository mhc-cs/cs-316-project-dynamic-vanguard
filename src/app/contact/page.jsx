import React from "react";

export default function Page() {
    const submitContact = (event) => {
        console.log("Form submitted")
    }
    return (
        <div className="grid grid-cols-9 bg-gradient-to-b from-black via-pink-950 to-yellow-500">
            <div className="col-span-1" />
            <div className="col-span-7">
                <div className="flex flex-col h-max">
                    <div className="flex-none h-60" />
                    <div className="grow rounded-md bg-white/50 items-center p-5">
                        <form id="contact" className="flex flex-col gap-5" onSubmit={submitContact()}>
                        {/* Add db method: */}
                        {/* <form id="contact" className="flex flex-col gap-5" onSubmit={submitContact()} method="POST"> */}
                            <section>
                                <h1 className="text-7xl text-center">Contact Us!</h1>
                                <div className="grid grid-cols-7">
                                    <div className="col-span-1" />
                                    <div className="flex flex-col col-span-5 gap-5 p-5 rounded-md text-black">
                                        {/* Backend team - I haven't fleshed out the collection but the input values are 'value' if you want to try collecting data in submitContact() :) 
                                        also switch the above <form> container once backend is connected */}
                                        <input className="form-input block w-full bg-white/90 focus:bg-white rounded-md p-2" placeholder="First Name*" id="first-name" type="text" defaultValue="" />
                                        <input className="form-input block w-full bg-white/90 focus:bg-white rounded-md p-2" placeholder="Last Name*" id="last-name" type="text" defaultValue="" />
                                        <input className="form-input block w-full bg-white/90 focus:bg-white rounded-md p-2" placeholder="Email*" id="email" type="text" defaultValue="" />
                                        <textarea className="form-textarea block w-full bg-white/90 focus:bg-white rounded-md p-2" placeholder="Write us a message!" id="message" rows="5" defaultValue="" />
                                        <label className="inline-flex items-center hover:cursor-pointer">
                                            <input type="checkbox" className="form-checkbox text-pink-950" id="mailing-list" />
                                            <span className="ml-5 hover:text-white">I would like to be added to the mailing list.</span>
                                        </label>
                                        <button className="bg-gradient-to-b from-pink-700 to-pink-600 hover:from-yellow-500 hover:to-yellow-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mr-4 w-32" type="submit" value="submit">
                                            Submit
                                        </button>
                                    </div>
                                    <div className="col-span-1" />
                                </div>
                            </section>
                        </form>
                    </div>
                    <div className="flex-none h-60" />
                </div>
            </div>
            <div className="col-span-1" />
        </div>
    );
}