import { useState, type FormEvent } from "react";
import { BiMailSend, BiCheck } from "react-icons/bi";

const Contact = () => {
    const [, setResult] = useState("");
    const [buttonText, setButtonText] = useState("Send Message");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResult("Sending....");

        // Immediately show "Submitted" for 1 second
        setButtonText("Submitted");
        setIsSubmitting(true);
        setTimeout(() => {
            setButtonText("Send Message");
            setIsSubmitting(false);
        }, 1000);

        const form = event.currentTarget;
        const formData = new FormData(form);
        formData.append("access_key", "139475c8-75b1-4bfd-b118-ee10f9332a75");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();
            if (data.success) {
                setResult("Form Submitted Successfully");
                form.reset();
            } else {
                setResult("Error");
            }
        } catch {
            setResult("Error");
        }
    };

    return (
        <section id="contact" className="w-full">
            <div className="w-full flex flex-col justify-between items-center">
                <div className="flex w-full justify-between items-center">
                    <h2 className="md:text-4xl text-3xl mb-10">Contact<sup className="text-sm opacity-40 relative -top-5">02</sup></h2>
                    <p className="opacity-40 max-sm:text-sm relative md:-top-3 -top-4">─── Get in touch with me</p>
                </div>
                <form onSubmit={onSubmit} className="w-full flex flex-col gap-5">
                    <p>Feel free to reach out for collaborations or just a chat!</p>
                    <div className="flex flex-col gap-1">
                        <label className="ml-1">Name<sup>*</sup></label>
                        <input name="name" type="text" className="bg-gray-700/30 rounded-xl p-2 border-gray-500/20 border-2" placeholder="Your full name" required />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label>Email<sup>*</sup></label>
                        <input name="email" type="text" className="bg-gray-700/30 rounded-xl p-2 border-gray-500/20 border-2" placeholder="youremail@example.com" required />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label>Message<sup>*</sup></label>
                        <textarea name="message" className="bg-gray-700/30 rounded-xl p-2 border-gray-500/20 border-2 resize-none h-24" placeholder="Your message here..." required></textarea>
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex gap-2 bg-white text-black rounded-xl p-2 w-40 font-medium tracking-tighter justify-center items-center cursor-target disabled:opacity-60 hover:bg-gray-200 transition"
                    >
                        {buttonText}
                        {buttonText === "Submitted" ? (
                            <BiCheck className="relative text-xl text-green-600" />
                        ) : (
                            <BiMailSend className="relative text-xl" />
                        )}
                    </button>
                </form>
            </div>
             <div className="w-full border-b border-gray-900 mt-10"></div>
        </section>
    );
};

export default Contact;