import React from 'react';

const ExperienceItem = ({ company, role, period, highlights, subRole }) => {
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

      {/* Sub-role for OpenWeb */}
      {subRole && (
        <div className="mt-4 pl-4 border-l-2 border-window-border">
          <div className="flex items-start justify-between mb-2">
            <div className="text-terminal-blue text-base font-semibold">{subRole.role}</div>
            <div className="text-sm text-gray-400 font-medium">{subRole.period}</div>
          </div>
          <ul className="space-y-2 text-sm text-gray-300">
            {subRole.highlights.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-terminal-blue font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const ResumeWindow = () => {
  const experiences = [
    {
      company: "OpenWeb",
      role: "Support Engineer",
      period: "May 2026 - Present",
      highlights: [
        "Promoted to Support Engineer within 3 months after excelling during onboarding",
        "Act as technical bridge between engineering teams and publisher partners, owning bug escalation from triage to resolution",
        "Debug JavaScript implementations and troubleshoot API integrations across diverse client environments",
        "Develop internal tools to optimize team workflows, improving case resolution efficiency and team productivity"
      ],
      subRole: {
        role: "Tech Support Specialist",
        period: "May 2026 - Aug 2026",
        highlights: [
          "Provided frontline technical support for publishers using OpenWeb's software, resolving complex integration issues",
          "Collaborated with engineering teams on bug reports, feature requests, and product improvements",
          "Managed active support cases using Salesforce and Jira, maintaining detailed documentation and SLA compliance"
        ]
      }
    },
    {
      company: "Voxxy AI",
      role: "Co-Founder",
      period: "2024 - Present",
      highlights: [
        "Built full-stack application using React.js, Ruby on Rails, and PostgreSQL with vendor workflows and approval systems",
        "Set up analytics (Mixpanel) and transactional email (SendGrid); worked across product iterations for events space"
      ]
    },
    {
      company: "Catch Drive",
      role: "Frontend Developer",
      period: "2024 - Present",
      highlights: [
        "Develop client-facing web applications using WordPress, Breakdance, and modern JavaScript frameworks",
        "Build responsive interfaces with focus on user experience and cross-browser compatibility",
        "Collaborate with design and backend teams to deliver projects on schedule and within scope"
      ]
    },
    {
      company: "Beau's Animal Care",
      role: "Founder & Owner",
      period: "2020 - 2026",
      highlights: [
        "Founded and single-handedly grew a pet care business from the ground up to 50+ clients and $80K+ in annual revenue",
        "Owned every client relationship end to end, from onboarding and scheduling to ongoing communication and issue resolution, maintaining 100% client satisfaction",
        "Ran all business operations independently, including client acquisition, pricing, and day-to-day service delivery",
        "Built custom scheduling software to streamline bookings and day-to-day operations"
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
    },
    {
      school: "Amazon Web Services (AWS)",
      degree: "AWS Certified Cloud Practitioner",
      period: "2024"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Experience Section */}
      <div>
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
          {['React', 'Ruby on Rails', 'React Native', 'TypeScript', 'JavaScript', 'PostgreSQL', 'AWS', 'Git', 'Node.js', 'Tailwind CSS', 'Salesforce', 'Jira'].map((skill, i) => (
            <div key={i} className="text-terminal-blue">• {skill}</div>
          ))}
        </div>
      </div>

      {/* View Full Resume Link */}
      <div className="pt-4 border-t border-window-border">
        <a
          href="/beau-lazear-resume_5.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-terminal-blue hover:text-terminal-green font-semibold text-base flex items-center gap-2 transition-colors"
        >
          <span>→</span>
          <span>View Full Resume (opens in new tab)</span>
        </a>
      </div>

      {/* Footer */}
      <div className="pt-4 text-sm text-gray-400 font-medium">
        <span className="text-terminal-green font-bold">$</span>
        <span className="ml-2">EOF</span>
      </div>
    </div>
  );
};

export default ResumeWindow;
