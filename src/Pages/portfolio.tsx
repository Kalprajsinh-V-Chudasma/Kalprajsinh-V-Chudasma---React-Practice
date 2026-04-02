export default function Portfolio() {
    return (
        <main className="flex flex-col flex-1 p-4">
            <h1 className="text-2xl font-bold mt-4">Portfolio</h1>
            <p className="text-muted-foreground mt-2">This page is about my achievements and my projects i persued in my career.</p>
            <div className="mt-4">
                <h2 className="text-xl font-bold">Achievements</h2>
                <p className="text-muted-foreground mt-2">Although I am a fresher, I have achieved many things in my life, and I am proud of them. I have always been a quick learner and have always tried to improve myself in every possible aspect of my life. The Achievements I can proudly say are getting good marks in my SchoolExams and in my College Entrance Exams (Also Known as JEE Mains and JEE Advanced).
                    I have achieved 96%(Percentile) in JEE Mains which is considered a good score. And because of that i am now a student of PDEU (Pandit Deendayal Energy University),Gandhinagar, Gujarat pursuing my B.Tech in Computer Engineering.
                    I although a fresher in college, attended some hackathons and tech-talks to improve my technical skills and knowledge.
                </p>
            </div>
            <div className="mt-4">
                <h2 className="text-xl font-bold">Projects</h2>
                <p className="text-muted-foreground mt-2">I have contributed in many projects as a frontend developer. Some of them are:
                    <br />
                    <b>ECHO</b> :- a project designed to help people having Dementia.
                    <br />
                    <b>Mental Health App</b> :- a project designed to help people check their vitals and mental health and suggesting them with the best possible solutions.
                    <br />
                    <b>Subspace</b> :- a project designed to help people connect with each other and share their thoughts and ideas.
                </p>
            </div>
        </main>
    )
}