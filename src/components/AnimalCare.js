import React, { useEffect } from 'react';
import { Heart, MapPin, Phone, Mail, Star, CheckCircle, Dog, Cat, Home, Bird, Award, PawPrint, Instagram, ExternalLink } from 'lucide-react';

// Import images
import BeauAndRalph from '../images/BeauAndRalph.JPG';
import JavaLookinCute from '../images/JavaLookinCute.jpeg';
import MooseOnVerandah from '../images/MooseOnVerandah.jpeg';
import BeauAndRu from '../images/BeauAndRu.JPG';
import BeauWalkingDogs from '../images/BeauReykaMangoRu.jpeg';
import BeausAnimalCareLogo from '../images/BeausAnimalCare.svg';

const AnimalCare = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: Dog,
      title: "Dog Walks",
      description: "Daily walks tailored to your dog's energy level and needs.",
      pricing: [
        "$25 - 20-30 minute walk",
        "$35 - 50-60 minute walk"
      ],
      extras: [
        "Add $10 for additional dog (same household)",
        "Add $5 for solo walk (behavioral, senior)",
        "Add $5 if earlier than 10am / later than 5pm",
        "Photo updates included"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Home,
      title: "Pet Sitting",
      description: "Overnight care in your home for maximum comfort.",
      pricing: ["$95 - Overnight pet sitting"],
      extras: [
        "Morning walk + breakfast (7-10am)",
        "Evening walk + dinner (4-6pm)",
        "Bedtime walk (8-11pm)",
        "Extra $15 for 4th midday walk",
        "Add $25 for additional dog",
        "Add $15 for cat care"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Cat,
      title: "Cat Visits",
      description: "In-home cat care with feeding, litter, and playtime.",
      pricing: [
        "$25 - One visit (30 minutes)",
        "$40 - Two visits in one day"
      ],
      extras: [
        "Litter box cleaning",
        "Feeding & water refill",
        "Playtime & companionship",
        "Mail collection",
        "Plant watering available"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Bird,
      title: "Exotic Animal Care",
      description: "Professional care for birds, reptiles, and small mammals.",
      pricing: ["$30 - One visit (30 minutes)"],
      extras: [
        "Enclosure cleaning",
        "Feeding & water changes",
        "Heat lamp monitoring",
        "Specialized handling",
        "10+ years zoo experience"
      ],
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: Heart,
      title: "Euthanasia Support",
      description: "Compassionate support during difficult times.",
      pricing: ["Free of charge 💖"],
      extras: [
        "Emotional support",
        "Accompaniment to appointments",
        "Post-care conversation",
        '"To live in hearts we leave behind is not to die"'
      ],
      color: "from-rose-500 to-red-500"
    }
  ];

  const testimonials = [
    {
      name: "Julie",
      pet: "Ralph",
      image: BeauAndRalph,
      text: "Beau is the absolute best! Like many pet owners, my pup, Ralph, means the world to me and it takes a lot for me to trust someone. Beau always keeps me updated on the walks and any new friends Ralph makes. His daily recap texts include pictures, which I joke is like hiring a professional photographer as an added bonus. Ralph's favorite part of the day is when Beau arrives, knowing he'll get fresh air, lots of love, and a few treats.",
      rating: 5
    },
    {
      name: "Jaimee",
      pet: "Java",
      image: JavaLookinCute,
      text: "I can't recommend Beau enough. Above all, he values each pet's safety and comfort. He is passionate about connecting with and understanding the needs of animals, which I have seen in his connection with Java, our 15-year-old goldendoodle. Beau is reliable, communicative, and extremely thoughtful, and Java is consistently excited to see him.",
      rating: 5
    },
    {
      name: "Carolyn & Patrick",
      pet: "Moose",
      image: MooseOnVerandah,
      text: "I highly recommend Beau as a dog walker and dog sitter. Beau has been regularly walking our dog Moose and has consistently provided excellent care, and our dog absolutely loves him! Beau's extremely accommodating of our schedules and has saved us on multiple occasions when we needed last-minute dog care. I trust Beau completely and am so grateful to have him as Moose's dog walker and dog sitter.",
      rating: 5
    }
  ];

  const neighborhoods = [
    "Carroll Gardens", "Cobble Hill", "Gowanus", "BedStuy"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Column - Content */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <PawPrint className="text-brand-600" size={32} />
                <PawPrint className="text-brand-pink-500" size={24} />
                <PawPrint className="text-brand-600" size={28} />
              </div>

              <h1 className="text-4xl md:text-6xl font-heading font-bold text-gray-800 mb-6 leading-tight">
                Professional <span className="whitespace-nowrap">Pet Care</span>
                <span className="block text-transparent bg-gradient-to-r from-brand-500 to-brand-pink-500 bg-clip-text">
                  in Brooklyn
                </span>
              </h1>

              <p className="text-xl text-gray-700 font-medium mb-6">
                Serving families since 2019 with loving, reliable care for dogs, cats, and exotic animals.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                From zookeeper to your pet's best friend—I bring over 10 years of professional animal care experience to every walk, visit, and overnight stay.
              </p>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="glass-effect rounded-2xl p-4 border-2 border-white/70">
                  <div className="text-3xl font-bold text-brand-600 mb-1">50+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="glass-effect rounded-2xl p-4 border-2 border-white/70">
                  <div className="text-3xl font-bold text-brand-600 mb-1">10+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>

              {/* Contact Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:7186141878"
                  className="bg-gradient-to-r from-brand-500 to-brand-pink-500 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <Phone size={18} />
                  (718) 614-1878
                </a>
                <a
                  href="mailto:beaulazear@gmail.com"
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <Mail size={18} />
                  Email Me
                </a>
                <a
                  href="https://www.instagram.com/beaus.animal.care/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <Instagram size={18} />
                  Instagram
                </a>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="glass-effect rounded-3xl p-4 border-2 border-white/70 hover-lift">
                <img
                  src={BeauWalkingDogs}
                  alt="Beau walking dogs"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-4">
              Services & Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Flexible, reliable pet care tailored to your pet's needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="glass-effect rounded-3xl p-8 hover-lift border-2 border-white/70 shadow-sm relative overflow-hidden group"
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
                      <Icon className="text-white" size={28} />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-heading font-bold text-gray-800 mb-3">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Pricing */}
                    <div className="mb-4">
                      <h4 className="text-xs font-bold text-brand-600 uppercase tracking-wider mb-2">
                        Pricing
                      </h4>
                      {service.pricing.map((price, i) => (
                        <div key={i} className="flex items-start gap-2 mb-1">
                          <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                          <span className="text-sm text-gray-700">{price}</span>
                        </div>
                      ))}
                    </div>

                    {/* Extras */}
                    <div>
                      <h4 className="text-xs font-bold text-brand-600 uppercase tracking-wider mb-2">
                        What's Included
                      </h4>
                      {service.extras.map((extra, i) => (
                        <div key={i} className="flex items-center gap-2 mb-1">
                          <span className="text-brand-400 flex-shrink-0">•</span>
                          <span className="text-xs text-gray-600">{extra}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white/50 to-brand-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-4">
              What Pet Parents Say
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Don't just take my word for it
            </p>

            {/* Google Reviews Button */}
            <div className="flex justify-center">
              <a
                href="https://www.google.com/search?q=beau%27s+animal+care+reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-xl font-semibold text-gray-800 hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-gray-200"
              >
                <div className="flex items-center gap-1">
                  <Star className="text-yellow-500 fill-yellow-500" size={20} />
                  <Star className="text-yellow-500 fill-yellow-500" size={20} />
                  <Star className="text-yellow-500 fill-yellow-500" size={20} />
                  <Star className="text-yellow-500 fill-yellow-500" size={20} />
                  <Star className="text-yellow-500 fill-yellow-500" size={20} />
                </div>
                <span className="text-lg">Read Google Reviews</span>
                <ExternalLink size={18} className="text-gray-600" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass-effect rounded-3xl p-8 hover-lift border-2 border-white/70 shadow-sm"
              >
                {/* Image */}
                <div className="mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.pet}
                    className="w-full h-auto rounded-2xl"
                  />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-500 fill-yellow-500" size={18} />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  "{testimonial.text}"
                </p>

                {/* Name */}
                <div className="flex items-center gap-2">
                  <PawPrint className="text-brand-500" size={16} />
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-xs text-gray-600">{testimonial.pet}'s Parent</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="glass-effect rounded-3xl p-8 md:p-12 text-center border-2 border-white/70 shadow-sm hover-lift">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-500 to-brand-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                <MapPin className="text-white" size={32} />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-4">
              Serving Brooklyn
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              Proudly providing pet care services throughout these neighborhoods:
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {neighborhoods.map((neighborhood, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-brand-100 to-brand-pink-100 text-brand-700 px-4 py-2 rounded-full text-sm font-semibold"
                >
                  {neighborhood}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Beau Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white/50 to-brand-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Image */}
            <div>
              <div className="glass-effect rounded-3xl p-4 border-2 border-white/70 hover-lift">
                <img
                  src={BeauAndRu}
                  alt="Beau Lazear"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-6">
                About Beau
              </h2>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Award className="text-brand-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">10+ Years Animal Care</h3>
                    <p className="text-gray-600 text-sm">From Prospect Park Zoo to ASPCA, I've cared for everything from primates to canines.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Heart className="text-brand-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Passionate & Reliable</h3>
                    <p className="text-gray-600 text-sm">Your pet's safety, comfort, and happiness are my top priorities.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <PawPrint className="text-brand-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">50+ Regular Clients</h3>
                    <p className="text-gray-600 text-sm">Trusted by families across Brooklyn since 2019.</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                I understand the trust you place in someone caring for your furry family members.
                With a background in professional animal care and a genuine love for all creatures,
                I provide the same level of attention and care to your pets as I would my own.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect rounded-3xl p-12 text-center border-2 border-white/70 shadow-sm hover-lift relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-brand-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-800 mb-4">
                Ready to Meet?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's schedule a free meet-and-greet to see if we're a good fit for your pet's needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="tel:7186141878"
                  className="bg-gradient-to-r from-brand-500 to-brand-pink-500 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-3 hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <Phone size={20} />
                  Call Now
                </a>
                <a
                  href="mailto:beaulazear@gmail.com"
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-3 hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <Mail size={20} />
                  Send Email
                </a>
                <a
                  href="https://www.instagram.com/beaus.animal.care/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-3 hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <Instagram size={20} />
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AnimalCare;
