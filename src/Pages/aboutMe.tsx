export default function AboutMe() {
    return (
        <main className="flex flex-col flex-1 p-4">
            <h1 className="text-2xl font-bold mt-4">About Me</h1>
            <p className="text-muted-foreground mt-2">Hello. I am Kalprajsinh V. Chudasama, a passionate Computer Engineering student and aspiring frontend developer.</p>
            <div className="mt-4">
                <h2 className="text-xl font-bold">Who Am I?</h2>
                <p className="text-muted-foreground mt-2">
                    I am currently pursuing my B.Tech in Computer Engineering at PDEU (Pandit Deendayal Energy University), Gandhinagar, Gujarat.
                    I am a quick learner who loves to explore new technologies and build things for the web.
                    My journey into programming started with curiosity and has now grown into a passion for creating meaningful digital experiences.
                </p>
            </div>
            <div className="mt-4">
                <h2 className="text-xl font-bold">Skills</h2>
                <div className="mt-2 flex flex-col gap-1 text-muted-foreground">
                    <p><b>Frontend:</b> React, HTML, CSS, JavaScript, TypeScript</p>
                    <p><b>Tools:</b> Git, GitHub, VS Code</p>
                    <p><b>Learning:</b> Backend development, UI/UX Design</p>
                </div>
            </div>
            <div className="mt-4">
                <h2 className="text-xl font-bold">Interests</h2>
                <p className="text-muted-foreground mt-2">
                    Beyond coding, I enjoy attending hackathons, tech-talks, and staying up to date with the latest trends in technology.
                    I believe in continuous learning and always strive to grow both personally and professionally.
                    I am a very big fan of Football and i love playing it in my free time.
                </p>
            </div>
        </main>
    )
}
