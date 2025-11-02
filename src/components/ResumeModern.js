import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ResumePDF from "../images/ResumePDF.pdf";
import {
  Download, Code, Briefcase, Award, GraduationCap,
  MapPin, CheckCircle, TrendingUp, Users, Zap,
  PawPrint, Building, Target, Mail, ExternalLink
} from 'lucide-react';

const ResumeModern = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const highlights = [
    { icon: Users, text: "50+ Regular Clients", color: "text-green-500" },
    { icon: Code, text: "Full Stack Developer", color: "text-brand-600" },
    { icon: TrendingUp, text: "Business Owner", color: "text-amber-500" },
    { icon: Award, text: "AWS Certified", color: "text-red-500" }
  ];

  const skills = {
    "Frontend": ["React", "React Native", "JavaScript", "HTML/CSS", "WordPress", "Breakdance", "Styled Components", "Responsive Design"],
    "Backend": ["Ruby on Rails", "PostgreSQL", "REST APIs", "JWT Auth", "Active Storage", "Webhook Integrations"],
    "Cloud & Tools": ["AWS", "Google Cloud", "Git", "SendGrid", "Mixpanel", "CRM Automation"],
    "Business": ["Team Leadership", "Client Relations", "Project Management", "Problem Solving", "Strategic Thinking"]
  };

  const experience = [
    {
      title: "Co-Founder & CTO",
      company: "Voxxy AI",
      location: "Remote",
      period: "2024 - Present",
      icon: Building,
      color: "from-purple-500 to-pink-500",
      description: [
        "Co-founded a platform company with two products (Voxxy Mobile & Voxxy Presents)",
        "Built and maintain the backend API infrastructure using Ruby on Rails",
        "Developed mobile application using React Native for iOS and Android",
        "Lead community engagement efforts including bank-sponsored local events",
        "Manage cloud infrastructure on AWS and Google Cloud platforms"
      ]
    },
    {
      title: "Front End Developer",
      company: "Catch Drive Solutions",
      location: "Remote",
      period: "April 2025 - Present",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      description: [
        "Creating responsive, user-friendly interfaces for WordPress-based sites",
        "Working with Breakdance page builder to implement custom designs",
        "Collaborating with design team to bring mockups to life",
        "Ensuring cross-browser compatibility and mobile optimization"
      ]
    },
    {
      title: "Owner & Operator",
      company: "Beau's Animal Care",
      location: "Brooklyn, NY",
      period: "2019 - Present",
      icon: PawPrint,
      color: "from-green-500 to-emerald-500",
      description: [
        "Founded and grew pet care business to serve 50+ regular clients across Brooklyn",
        "Built custom scheduling and client management app (Pocket Walks) using React and Rails",
        "Manage all business operations including scheduling, invoicing, and customer relations",
        "Developed company website and digital presence"
      ]
    },
    {
      title: "Technical Consultant",
      company: "Various Clients",
      location: "Remote",
      period: "2023 - Present",
      icon: Briefcase,
      color: "from-indigo-500 to-purple-500",
      description: [
        "Aria Design Co: Built and maintain React-based website for interior design consultant",
        "United Advisors: Implemented technical solutions and custom web applications",
        "Provided full-stack development services using React, Rails, and WordPress"
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
            Developer • Co-Founder • Problem Solver
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
            <a
              href={ResumePDF}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-brand-500 to-brand-pink-500 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <Download size={18} />
              Download PDF Resume
            </a>
            <button
              onClick={() => navigate('/contact')}
              className="bg-white/80 backdrop-blur-sm text-brand-600 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg hover:scale-105 transition-all duration-300 border-2 border-brand-200 hover:border-brand-400"
            >
              <Mail size={18} />
              Contact Me
            </button>
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
              Small business owner and full-stack developer building web and mobile applications with React, Rails, and WordPress.
              I specialize in turning business challenges into practical technical solutions.
              My path from zookeeper to developer gives me a unique perspective on understanding user needs.
            </p>
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
                            {job.company}
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
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
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
