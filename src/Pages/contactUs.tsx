export default function ContactUs() {
    return (
        <main className="flex flex-col flex-1 p-4">
            <h1 className="text-2xl font-bold mt-4">Contact Us</h1>
            <p className="text-muted-foreground mt-2">Feel free to reach out to me through any of the channels below. I am always open to discussing new projects, creative ideas or opportunities to be part of your vision.</p>
            <div className="mt-4">
                <h2 className="text-xl font-bold">Get in Touch</h2>
                <div className="mt-2 flex flex-col gap-2 text-muted-foreground">
                    <p><b>Email:</b> kalprajsinh@example.com</p>
                    <p><b>LinkedIn:</b> linkedin.com/in/kalprajsinh</p>
                    <p><b>GitHub:</b> github.com/Kalprajsinh-V-Chudasma</p>
                    <p><b>Location:</b> Gandhinagar, Gujarat, India</p>
                </div>
            </div>
            <div className="mt-4">
                <h2 className="text-xl font-bold">Response Time</h2>
                <p className="text-muted-foreground mt-2">I typically respond within 24–48 hours. Looking forward to connecting with you!</p>
            </div>
        </main>
    )
}
