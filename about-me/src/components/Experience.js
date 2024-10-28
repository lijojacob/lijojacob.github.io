
  // src/components/Experience.js
  const Experience = () => {
    const experiences = [
      { title: "Software Architect", company: "Apple", duration: "2018 - Present" },
      { title: "eCommerce Developer", company: "Sephora", duration: "2014 - 2018" },
      // Add more experiences here
    ];
  
    return (
      <section className="py-6">
        <h2 className="text-2xl font-bold">Experience</h2>
        <ul>
          {experiences.map((exp, index) => (
            <li key={index} className="py-2">
              <h3 className="text-xl">{exp.title}</h3>
              <p>{exp.company}</p>
              <p>{exp.duration}</p>
            </li>
          ))}
        </ul>
      </section>
    );
  };
  
