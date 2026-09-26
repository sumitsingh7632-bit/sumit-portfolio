export default function Skills() {
  return (
    <section className="skills" id="skills">
      <h2>Technical Skills</h2>

      <div className="skill-box">
        <div className="skill">
          <div className="info">
            <span>HTML</span>
            <span>90%</span>
          </div>
          <div className="bar"><div className="fill html"></div></div>
        </div>

        <div className="skill">
          <div className="info">
            <span>CSS</span>
            <span>85%</span>
          </div>
          <div className="bar"><div className="fill css"></div></div>
        </div>

        <div className="skill">
          <div className="info">
            <span>JavaScript</span>
            <span>75%</span>
          </div>
          <div className="bar"><div className="fill js"></div></div>
        </div>

        <div className="skill">
          <div className="info">
            <span>C / C++</span>
            <span>90%</span>
          </div>
          <div className="bar"><div className="fill cpp"></div></div>
        </div>

        <div className="skill">
          <div className="info">
            <span>Java</span>
            <span>70%</span>
          </div>
          <div className="bar"><div className="fill java"></div></div>
        </div>
      </div>
    </section>
  );
}