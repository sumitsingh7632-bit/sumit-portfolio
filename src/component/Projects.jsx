export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Featured Projects</h2>

      <div className="project-grid">

        <div className="card">
         <img src={`${import.meta.env.BASE_URL}project1.jpg`} alt="project" />

          <div className="content">
            <h3>Academic Student Management System</h3>

            <p>
              Responsive student portal for attendance, notices,
              records and academic management.
            </p>
          </div>
        </div>

        <div className="card">
          <img src={`${import.meta.env.BASE_URL}project2.jpg`} alt="project" />

          <div className="content">
            <h3>Flight Management System</h3>

            <p>
              C++ application for airline reservation and passenger
              management using file handling.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}