import "./Projects.css"

function Projects() {
    return(
        
        <section id ="projects" className="projects">

            <div className="projects-container">

                <h2 className="projects-title">Projects</h2>

                <div className="projects-grid">

                    {/* MVP (My Virtual Passions) */}
                    <div className="projects-card">
                        <h3 className="projects-card-title">MVP (My Virtual Passions)</h3>
                        <h5 className="projects-status">In Progress</h5>
                        <p className="projects-card-description">
                            A social media application designed for anyone with a passion. The 
                            goal of this application is to bring social media back to its original 
                            intent.
                        </p>
                        <p className="projects-card-tech">
                            React • CSS • Python • SQL
                        </p>

                        {/* <div className="projects-card-links">
                            <a href="#" target="none" className="projects-card-links">Github</a>
                        </div> */}
                    </div>


                    {/* BetterClassNav */}

                    <div className="projects-card">
                        <h3 className="projects-card-title">BetterClassNav</h3>
                        <p className="projects-card-description">
                            A web application that helps students find class schedules
                            with no time conflicts by returning sections that fit within
                            their schedule.
                        </p>
                        <p className="projects-card-tech">
                            JavaScript • HTML • CSS • Python
                        </p>

                        {/* <div className="projects-card-links">
                            <a href="#" className="projects-card-links">Github</a>
                            <a href="#" className="projects-card-links">Live Demo</a>
                        </div> */}
                    </div>

                    {/* LofiScript */}
                    <div className="projects-card">
                        <h3 className="projects-card-title">LofiScript</h3>
                        <p className="projects-card-description">
                            A web-based Christian lo-fi music experience to encourage Bible reading 
                            and focused study. 
                        </p>
                        <p className="projects-card-tech">
                            JavaScript • HTML • CSS
                        </p>

                        <div className="projects-card-links">
                            <a href="https://github.com/Terriaunaj/LofiScript" target="none" className="projects-card-links">Github</a>
                            <a href="https://terriaunaj.github.io/LofiScript/" target="none" className="projects-card-links">Live Demo</a>
                        </div>
                    </div>

                    {/* Simple Nonogram Maker */}
                    <div className="projects-card">
                        <h3 className="projects-card-title">Simple Nonogram Maker</h3>
                        <p className="projects-card-description">
                            A software program that allows users to create nonogram puzzles through a 
                            graphical interface. 
                        </p>
                        <p className="projects-card-tech">
                            Java • JavaFX • CSS
                        </p>

                        <div className="projects-card-links">
                            <a href="https://github.com/Terriaunaj/Simple-Nonogram-Maker" target="none" className="projects-card-links">Github</a>
                        </div>
                    </div>

                    {/* Trip Data Analysis Suite */}
                    <div className="projects-card">
                        <h3 className="projects-card-title">Trip Data Analysis Suite</h3>
                        <p className="projects-card-description">
                            GPX to CSV converter, Trip Data Aggregator, and a Stop Detection Algorithm 
                            that takes in data, converts it, analyzes it, and refines it to determine 
                            the amount of time a trip takes.
                        </p>
                        <p className="projects-card-tech">
                            Java
                        </p>

                        <div className="projects-card-links">
                            <a href="https://github.com/Terriaunaj/Trip-Data-Aggregator" target="none" className="projects-card-links">Github</a>
                        </div>
                    </div>


                </div>

            </div>

            

        </section>
    );
}

export default Projects;