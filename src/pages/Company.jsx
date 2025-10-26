import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HiSparkles, HiUsers, HiLightningBolt, HiGlobe } from "react-icons/hi";
import "./Company.css";

const Company = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values = [
    {
      icon: <HiSparkles />,
      title: "Innovation First",
      description:
        "Pushing the boundaries of legal technology with cutting-edge AI",
    },
    {
      icon: <HiUsers />,
      title: "Client-Centric",
      description:
        "Every feature is designed with lawyers' needs at the forefront",
    },
    {
      icon: <HiLightningBolt />,
      title: "Speed & Accuracy",
      description: "Delivering rapid results without compromising on precision",
    },
    {
      icon: <HiGlobe />,
      title: "Global Impact",
      description:
        "Making world-class legal AI accessible to firms of all sizes",
    },
  ];

  const team = [

    {
      name: "Shamoil Aslam",
      role: "CEO & Co-Founder",
      bio: "AI/ML Engineer & Deep Learning Specialist",
      image: "👨‍💻",
    },
    {
      name: "Faizan Javed",
      role: "CEO & Co-Founder",
      bio: "AI/ML Engineer & Developer",
      image: "👨‍💻",
    },
    {
      name: "Siddique Umar",
      role: "Head of Product",
      bio: "3+ years building legal tech products at Thomson Reuters",
      image: "👨‍💻",
    },
  ];

  const milestones = [
    {
      year: "2025",
      title: "Founded",
      description:
        "Specter AI was born from a vision to democratize legal intelligence",
    },
    {
      year: "2025",
      title: "AI Breakthrough",
      description:
        "Launched industry-leading precedent retrieval system",
    },
  ];

  return (
    <div className="company-page">
      {/* Hero Section */}
      <section className="company-hero">
        <div className="container">
          <motion.div
            className="company-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="company-title">
              Transforming Legal Practice with{" "}
              <span className="gradient-text">AI Intelligence</span>
            </h1>
            <p className="company-subtitle">
              We're on a mission to empower lawyers with AI tools that amplify
              their expertise, accelerate their work, and improve access to
              justice worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section" ref={ref}>
        <div className="container">
          <div className="story-grid">
            <motion.div
              className="story-content"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title">Our Story</h2>
              <p className="story-text">
                Specter AI was founded by Shamoil Aslam, Faizan Javed and Siddique Umar
                after witnessing firsthand the inefficiencies plaguing modern
                legal practice. Shmoil spent countless
                hours on document review and legal research that could be
                automated. Faizan, with his expertise in AI/ML and development, saw an
                opportunity to apply cutting-edge technology to solve real legal
                problems.
              </p>
              <p className="story-text">
                Together, they assembled a world-class team of legal experts, AI
                researchers, and engineers to build Specter AI—a platform that
                doesn't replace lawyers but amplifies their capabilities.
              </p>
            </motion.div>

            <motion.div
              className="story-image glass"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="story-image-content">
                <h3>🏢 Our Mission</h3>
                <p>
                  To democratize access to world-class legal intelligence
                  through AI, making every lawyer more effective regardless of
                  firm size or resources.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section values-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Our Values</h2>
            <p className="section-description">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card glass"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section team-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Leadership Team</h2>
            <p className="section-description">
              Meet the people building the future of legal AI
            </p>
          </motion.div>

          <div className="team-grid">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="team-card glass"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -10 }}
              >
                <div className="team-avatar">{member.image}</div>
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section timeline-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Our Journey</h2>
          </motion.div>

          <div className="timeline">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className="timeline-item glass"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <div className="timeline-year">{milestone.year}</div>
                <h3 className="timeline-title">{milestone.title}</h3>
                <p className="timeline-description">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section company-cta-section">
        <div className="container">
          <motion.div
            className="company-cta glass"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2>Join Us in Transforming Legal Practice</h2>
            <p>
              We're always looking for talented individuals who share our vision
            </p>
            <div className="cta-actions">
              <button className="btn-primary">View Open Positions</button>
              <button className="btn-secondary">Contact Us</button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Company;
