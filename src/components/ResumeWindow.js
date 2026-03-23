import React from 'react';
import { Download } from 'lucide-react';
import ResumePDF from "../images/ResumePDF.pdf";

const ExperienceItem = ({ company, role, period, highlights }) => {
  return (
    <div className="mb-5 pb-5 border-b border-window-border last:border-b-0">
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="text-terminal-green font-bold text-xl">{company}</div>
          <div className="text-terminal-amber text-base font-semibold">{role}</div>
        </div>
        <div className="text-sm text-gray-400 font-medium">{period}</div>
      </div>
      <ul className="space-y-2 text-base text-window-text">
        {highlights.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-terminal-green font-bold">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ResumeWindow = () => {
  const experiences = [
    {
      company: "Voxxy AI",
      role: "Co-Founder & CTO",
      period: "2024 - Present",
      highlights: [
        "Built backend API and mobile infrastructure from scratch",
        "Leading community engagement and bank-sponsored events",
        "Managing technical roadmap and product development"
      ]
    },
    {
      company: "Catch Drive",
      role: "Front-End Developer",
      period: "2024 - Present",
      highlights: [
        "Developing client-facing web applications",
        "Building responsive interfaces with React and modern frameworks",
        "Collaborating with design and backend teams on product delivery"
      ]
    },
    {
      company: "Beau's Animal Care",
      role: "Owner & Developer",
      period: "2020 - Present",
      highlights: [
        "Managing 50+ regular clients and their pets",
        "Built custom scheduling and management software",
        "Scaling operations through automation"
      ]
    },
    {
      company: "ASPCA-ARC",
      role: "Lead Veterinary Assistant",
      period: "2019",
      highlights: [
        "Daily husbandry, health management, and enrichment for rescue animals",
        "Completed independent simple medical procedures and assisted veterinarians"
      ]
    },
    {
      company: "Wildlife Conservation Society",
      role: "Zoo Keeper",
      period: "2017 - 2019",
      highlights: [
        "Completed two internships leading to being hired as a full-time zoo keeper",
        "Animal husbandry, enrichment, training, nutrition prep, and record-keeping"
      ]
    }
  ];

  const education = [
    {
      school: "Flatiron School",
      degree: "Software Engineering",
      period: "2023"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Download PDF button */}
      <div className="flex justify-end">
        <a
          href={ResumePDF}
          download="Beau_Lazear_Resume.pdf"
          className="flex items-center gap-1 px-3 py-1.5 bg-terminal-green text-black rounded hover:bg-terminal-green-dim transition-colors text-sm font-mono font-semibold"
        >
          <Download size={14} />
          Download PDF
        </a>
      </div>

      {/* Experience Section */}
      <div>
        <div className="text-terminal-amber mb-3 flex items-center gap-2 text-lg font-semibold">
          <span>$</span>
          <span>cat experience.log</span>
        </div>
        <div className="pl-4">
          {experiences.map((exp, i) => (
            <ExperienceItem key={i} {...exp} />
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div>
        <div className="text-terminal-amber mb-3 flex items-center gap-2 text-lg font-semibold">
          <span>$</span>
          <span>cat education.txt</span>
        </div>
        <div className="pl-4">
          {education.map((edu, i) => (
            <div key={i} className="mb-2">
              <div className="text-terminal-green font-bold text-lg">{edu.school}</div>
              <div className="text-window-text text-base">{edu.degree}</div>
              <div className="text-sm text-gray-400 font-medium">{edu.period}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div>
        <div className="text-terminal-amber mb-3 flex items-center gap-2 text-lg font-semibold">
          <span>$</span>
          <span>ls skills/</span>
        </div>
        <div className="pl-4 grid grid-cols-1 md:grid-cols-3 gap-1 text-sm md:text-base font-medium">
          {['React', 'Ruby on Rails', 'React Native', 'TypeScript', 'PostgreSQL', 'AWS', 'Git', 'Node.js', 'Tailwind CSS'].map((skill, i) => (
            <div key={i} className="text-terminal-blue">• {skill}</div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="pt-4 text-sm text-gray-400 border-t border-window-border font-medium">
        <span className="text-terminal-green font-bold">$</span>
        <span className="ml-2">EOF</span>
      </div>
    </div>
  );
};

export default ResumeWindow;
