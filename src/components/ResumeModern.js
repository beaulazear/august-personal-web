import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import VoxxyLogo from "../images/header.svg";
import AriaLogo from "../images/Aria_header.svg";
import BeausAnimalCareLogo from "../images/BeausAnimalCare.svg";
import {
  Download, Code, Briefcase, Award, GraduationCap,
  MapPin, CheckCircle, TrendingUp, Users, Zap,
  PawPrint, Building, Target, Mail, ExternalLink, Phone
} from 'lucide-react';

const ResumeModern = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const highlights = [
    { icon: Users, text: "50+ Regular Clients", color: "text-green-500" },
    { icon: Code, text: "Full Stack Developer", color: "text-brand-600" },
    { icon: TrendingUp, text: "Business Owner", color: "text-amber-500" }
  ];

  const skills = {
    "Frontend": ["React", "React Native", "JavaScript", "TypeScript", "HTML/CSS", "WordPress", "Breakdance", "Responsive Design"],
    "Backend": ["Ruby on Rails", "Node.js", "PostgreSQL", "REST APIs", "API Integration", "Debugging"],
    "Tools & Platforms": ["Salesforce", "Jira", "Git", "GitHub", "AWS", "SendGrid", "Mixpanel"],
    "Core Competencies": ["Technical Support", "Troubleshooting", "Customer Service", "Project Management", "Client Relations"]
  };

  const experience = [
    {
      title: "Support Engineer",
      company: "OpenWeb",
      location: "Remote",
      period: "May 2026 - Present",
      icon: Zap,
      color: "from-blue-600 to-cyan-500",
      description: [
        "Promoted to Support Engineer within 3 months after excelling during onboarding",
        "Act as technical bridge between engineering teams and publisher partners, owning bug escalation from triage to resolution",
        "Debug JavaScript implementations and troubleshoot API integrations across diverse client environments",
        "Develop internal tools to optimize team workflows, improving case resolution efficiency and team productivity"
      ],
      subRole: {
        title: "Tech Support Specialist",
        period: "May 2026 - Aug 2026",
        description: [
          "Provided frontline technical support for publishers using OpenWeb's software, resolving complex integration issues",
          "Collaborated with engineering teams on bug reports, feature requests, and product improvements",
          "Managed active support cases using Salesforce and Jira, maintaining detailed documentation and SLA compliance"
        ]
      }
    },
    {
      title: "Co-Founder",
      company: "Voxxy AI",
      location: "Remote",
      period: "2024 - Present",
      icon: Building,
      color: "from-purple-500 to-pink-500",
      description: [
        "Built full-stack application using React.js, Ruby on Rails, and PostgreSQL with vendor workflows and approval systems",
        "Set up analytics (Mixpanel) and transactional email (SendGrid); worked across product iterations for events space"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Catch Drive",
      location: "Remote",
      period: "2024 - Present",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      description: [
        "Develop client-facing web applications using WordPress, Breakdance, and modern JavaScript frameworks",
        "Build responsive interfaces with focus on user experience and cross-browser compatibility",
        "Collaborate with design and backend teams to deliver projects on schedule and within scope"
      ]
    },
    {
      title: "Founder & Owner",
      company: "Beau's Animal Care",
      location: "Brooklyn, NY",
      period: "2020 - 2026",
      icon: PawPrint,
      color: "from-green-500 to-emerald-500",
      description: [
        "Founded and single-handedly grew a pet care business from the ground up to 50+ clients and $80K+ in annual revenue",
        "Owned every client relationship end to end, from onboarding and scheduling to ongoing communication and issue resolution, maintaining 100% client satisfaction",
        "Ran all business operations independently, including client acquisition, pricing, and day-to-day service delivery",
        "Built custom scheduling software to streamline bookings and day-to-day operations"
      ]
    }
  ];

  const education = [
    {
      degree: "Full Stack Web Development",
      school: "Flatiron School",
      year: "2023",
      icon: GraduationCap
    },
    {
      degree: "AWS Certified Cloud Practitioner",
      school: "Amazon Web Services",
      year: "2024",
      icon: Award
    }
  ];

  const previousExperience = [
    {
      title: "Lead Veterinary Assistant",
      company: "ASPCA",
      location: "New York, NY",
      period: "2019",
      description: "Provided emergency animal care and trained new team members during organizational transition."
    },
    {
      title: "Zookeeper",
      company: "Prospect Park Zoo",
      location: "Brooklyn, NY",
      period: "2017-2019",
      description: "Managed animal care, public education programs, and daily operations. Progressed from intern to part-time to full-time keeper."
    },
    {
      title: "Supervisor",
      company: "The Peaceful Pack / Canine Corner",
      location: "Brooklyn, NY",
      period: "2018-2019",
      description: "Supervised staff and managed daily operations on weekends while working full-time at the zoo."
    },
    {
      title: "Real Estate Agent",
      company: "Various Agencies",
      location: "New York, NY",
      period: "2017",
      description: "Obtained real estate license from NYREI and worked in real estate while pursuing internships in animal care."
    },
    {
      title: "Server",
      company: "Sixteen Mill, Planted Cafe",
      location: "Brooklyn, NY",
      period: "2019-2021",
      description: "Worked part-time at vegan restaurants while building Beau's Animal Care to full-time capacity."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 pt-32 pb-20 px-4 sm:px-6 lg:px-8">

      {/* Hero Header */}
      <div className="max-w-5xl mx-auto mb-12">
        <div className="glass-effect rounded-3xl p-8 md:p-12 text-center hover-lift">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-gradient mb-4">
            Beau Lazear
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 font-medium mb-8">
            Support Engineer • Founder • Animal Lover
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-center gap-2">
                  <Icon size={20} className={item.color} />
                  <span className="text-gray-700 font-semibold text-sm">
                    {item.text}
                  </span>
                </div>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate('/contact')}
              className="bg-gradient-to-r from-brand-500 to-brand-pink-500 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <Mail size={18} />
              Contact Me
            </button>
            <a
              href="/beau-lazear-resume_5.html"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-2 border-brand-500 text-brand-600 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <ExternalLink size={18} />
              View Full Resume
            </a>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Left Sidebar */}
        <div className="lg:col-span-1 space-y-6">

          {/* About Section */}
          <div className="glass-effect rounded-3xl p-6 hover-lift">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Target className="text-white" size={20} />
              </div>
              <h2 className="text-xl font-heading font-bold text-gray-800">
                About Me
              </h2>
            </div>

            <p className="text-gray-700 text-sm leading-relaxed">
              Small business owner and software developer building web and mobile applications with React, Rails, and WordPress.
              I specialize in turning business challenges into practical technical solutions.
              My path from zookeeper to developer gives me a unique perspective on understanding user needs.
            </p>
          </div>

          {/* Contact Information */}
          <div className="glass-effect rounded-3xl p-6 hover-lift">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center">
                <Mail className="text-white" size={20} />
              </div>
              <h2 className="text-xl font-heading font-bold text-gray-800">
                Contact
              </h2>
            </div>

            <div className="space-y-3">
              <a href="mailto:beaulazear@gmail.com" className="flex items-start gap-3 group hover:bg-brand-50 p-2 rounded-lg transition-colors">
                <Mail className="text-brand-600 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" size={16} />
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-0.5">Email</p>
                  <p className="text-sm text-gray-700 font-medium break-all">beaulazear@gmail.com</p>
                </div>
              </a>

              <a href="tel:7186141878" className="flex items-start gap-3 group hover:bg-brand-50 p-2 rounded-lg transition-colors">
                <Phone className="text-brand-600 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" size={16} />
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-0.5">Phone</p>
                  <p className="text-sm text-gray-700 font-medium">(718) 614-1878</p>
                </div>
              </a>
            </div>
          </div>

          {/* Skills Section */}
          <div className="glass-effect rounded-3xl p-6 hover-lift">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Zap className="text-white" size={20} />
              </div>
              <h2 className="text-xl font-heading font-bold text-gray-800">
                Skills
              </h2>
            </div>

            <div className="space-y-4">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h3 className="text-xs font-bold text-brand-600 uppercase tracking-wider mb-2">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, i) => (
                      <span
                        key={i}
                        className="text-xs bg-brand-100 text-brand-700 px-3 py-1 rounded-lg font-medium hover:bg-brand-200 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="glass-effect rounded-3xl p-6 hover-lift">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <GraduationCap className="text-white" size={20} />
              </div>
              <h2 className="text-xl font-heading font-bold text-gray-800">
                Education
              </h2>
            </div>

            <div className="space-y-4">
              {education.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-start gap-3">
                    <Icon className="text-brand-600 mt-1 flex-shrink-0" size={18} />
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm">
                        {item.degree}
                      </h3>
                      <p className="text-xs text-gray-600">{item.school}</p>
                      <p className="text-xs text-brand-600 font-medium">{item.year}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Main Content - Experience */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-effect rounded-3xl p-6 md:p-8 hover-lift">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Briefcase className="text-white" size={24} />
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-800">
                Experience
              </h2>
            </div>

            <div className="space-y-8">
              {experience.map((job, index) => {
                const Icon = job.icon;
                return (
                  <div
                    key={index}
                    className="relative pl-8 border-l-2 border-brand-200 pb-8 last:pb-0"
                  >
                    {/* Timeline Dot */}
                    <div className={`absolute -left-3 top-0 w-6 h-6 bg-gradient-to-br ${job.color} rounded-full ring-4 ring-white shadow-lg flex items-center justify-center`}>
                      <Icon className="text-white" size={12} />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <div>
                          <h3 className="text-lg font-heading font-bold text-gray-800">
                            {job.title}
                          </h3>
                          <p className="text-brand-600 font-semibold">
                            {job.company === "Voxxy AI" ? (
                              <img src={VoxxyLogo} alt="Voxxy AI" loading="lazy" className="h-5 inline-block" />
                            ) : job.company === "Beau's Animal Care" ? (
                              <img src={BeausAnimalCareLogo} alt="Beau's Animal Care" loading="lazy" className="h-16 inline-block -my-4" />
                            ) : (
                              job.company
                            )}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-600 font-medium">{job.period}</p>
                          <p className="text-xs text-gray-500 flex items-center gap-1">
                            <MapPin size={12} />
                            {job.location}
                          </p>
                        </div>
                      </div>

                      <ul className="mt-3 space-y-2">
                        {job.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                            <span>
                              {item.includes("Aria Design Co") ? (
                                <>
                                  <img src={AriaLogo} alt="Aria Design Co" loading="lazy" className="h-4 inline-block mr-1" />
                                  {item.replace("Aria Design Co: ", ": ")}
                                </>
                              ) : (
                                item
                              )}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* Sub-role section for OpenWeb */}
                      {job.subRole && (
                        <div className="mt-6 pl-4 border-l-2 border-gray-200">
                          <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                            <h4 className="text-base font-semibold text-gray-700">
                              {job.subRole.title}
                            </h4>
                            <p className="text-sm text-gray-500 font-medium">{job.subRole.period}</p>
                          </div>
                          <ul className="mt-2 space-y-2">
                            {job.subRole.description.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                <CheckCircle className="text-blue-400 flex-shrink-0 mt-0.5" size={16} />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Previous Experience Section */}
      <div className="max-w-5xl mx-auto mt-12">
        <div className="glass-effect rounded-3xl p-6 md:p-8 hover-lift">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
              <Briefcase className="text-white" size={24} />
            </div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-800">
              Previous Experience
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {previousExperience.map((job, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-4 border border-gray-200 hover:border-brand-300 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-gray-800 text-base">
                      {job.title}
                    </h3>
                    <p className="text-sm text-brand-600 font-semibold">
                      {job.company}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-600 font-medium">{job.period}</p>
                    <p className="text-xs text-gray-500 flex items-center gap-1 justify-end">
                      <MapPin size={10} />
                      {job.location}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-5xl mx-auto mt-12">
        <div className="glass-effect rounded-3xl p-8 md:p-12 text-center hover-lift">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-800 mb-4">
            Let's Work Together
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and challenging projects.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate('/contact')}
              className="bg-gradient-to-r from-brand-500 to-brand-pink-500 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Mail size={18} />
              Get In Touch
            </button>
            <button
              onClick={() => window.open('https://www.linkedin.com/in/beau-lazear', '_blank')}
              className="bg-white text-brand-600 px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-brand-200"
            >
              <ExternalLink size={18} />
              LinkedIn Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeModern;
