import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Code, 
  Laptop, 
  FlaskConical, 
  Cpu, 
  Languages, 
  Menu,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from "lucide-react";
import techLogoPath from "@assets/724dcd87-4485-4e6a-8068-9c491b955fa6_1753464982488.jpg";
import programmingImagePath from "@assets/14-best-computer-programming-courses-to-upskill-your-career_1753464262316.webp";

export default function Home() {
  const specializations = [
    {
      icon: Code,
      title: "Programming",
      description: "Master the fundamentals and advanced concepts in programming. Learn multiple languages and build real-world applications."
    },
    {
      icon: Laptop,
      title: "Vibe Coding", 
      description: "Master the fundamentals and advanced concepts in vibe coding. Experience interactive learning with modern development practices."
    },
    {
      icon: FlaskConical,
      title: "Laboratories",
      description: "Master the fundamentals and advanced concepts in laboratories. Hands-on experience with cutting-edge research and development."
    },
    {
      icon: Cpu,
      title: "PLC", 
      description: "Master programmable logic controllers and industrial automation. Learn control systems and manufacturing processes."
    },
    {
      icon: Languages,
      title: "Languages",
      description: "Master multiple programming and spoken languages. Expand your communication and technical capabilities globally."
    }
  ];

  const TechLogo = ({ className = "w-28 h-28" }: { className?: string }) => (
    <img src={techLogoPath} alt="TECH Academy Logo" className={className} width="245" />
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-start items-center py-6">
            {/* Logo Section */}
            <div className="flex items-center" data-testid="header-logo">
              <TechLogo className="w-36 h-32" />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div className="order-2 lg:order-1" data-testid="hero-image">
              <img 
                src={programmingImagePath} 
                alt="Programming education environment" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            
            {/* Right side - Content */}
            <div className="order-1 lg:order-2 text-center lg:text-left" data-testid="coming-soon-section">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight" data-testid="text-coming-soon">
                Coming Soon
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8" data-testid="text-description">
                Access world-class education with our comprehensive academic platform. 
                Learn from expert instructors, join live classes, and advance your career.
              </p>
              <div className="text-lg text-gray-700">
                Transform your future with cutting-edge programming education and hands-on learning experiences.
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Specializations Section */}
      <section className="py-16 px-4 bg-gray-50" data-testid="specializations-section">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-testid="text-specializations-title">
              Choose Your Specialization
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-specializations-description">
              Explore our comprehensive range of academic specializations designed to 
              advance your career and expertise.
            </p>
          </div>

          {/* Specializations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {specializations.slice(0, 3).map((spec, index) => {
              const IconComponent = spec.icon;
              return (
                <Card 
                  key={spec.title}
                  className="tech-card rounded-lg p-6"
                  data-testid={`card-specialization-${spec.title.toLowerCase().replace(' ', '-')}`}
                >
                  <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3" data-testid={`text-${spec.title.toLowerCase().replace(' ', '-')}-title`}>
                    {spec.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed" data-testid={`text-${spec.title.toLowerCase().replace(' ', '-')}-description`}>
                    {spec.description}
                  </p>
                </Card>
              );
            })}
          </div>

          {/* Additional Specializations Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {specializations.slice(3).map((spec, index) => {
              const IconComponent = spec.icon;
              return (
                <Card 
                  key={spec.title}
                  className="tech-card rounded-lg p-6"
                  data-testid={`card-specialization-${spec.title.toLowerCase().replace(' ', '-')}`}
                >
                  <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3" data-testid={`text-${spec.title.toLowerCase().replace(' ', '-')}-title`}>
                    {spec.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed" data-testid={`text-${spec.title.toLowerCase().replace(' ', '-')}-description`}>
                    {spec.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12" data-testid="footer">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Footer Logo */}
          <div className="mb-8" data-testid="footer-logo">
            <TechLogo className="w-36 h-32 mx-auto" />
          </div>

          {/* Footer Content */}
          <div className="text-gray-600 mb-8" data-testid="footer-content">
            <p className="text-lg mb-4" data-testid="text-footer-tagline">Transform Your Learning Journey</p>
            <p data-testid="text-footer-description">Get ready for world-class education and comprehensive academic excellence.</p>
          </div>

          {/* Social Links Placeholder */}
          <div className="flex justify-center space-x-6 mb-8" data-testid="social-links">
  <a
    href="https://www.facebook.com/share/1958sGru3g/?mibextid=wwXIfr"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-all cursor-pointer"
    data-testid="social-facebook"
  >
    <Facebook className="w-4 h-4 text-gray-600" />
  </a>

  <a
    href="https://twitter.com"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-all cursor-pointer"
    data-testid="social-twitter"
  >
    <Twitter className="w-4 h-4 text-gray-600" />
  </a>

  <a
    href="https://www.linkedin.com"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-all cursor-pointer"
    data-testid="social-linkedin"
  >
    <Linkedin className="w-4 h-4 text-gray-600" />
  </a>

  <a
    href="https://www.instagram.com/techsacademy?igsh=aHZnN3g5MjA1azlo&utm_source=qr"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-all cursor-pointer"
    data-testid="social-instagram"
  >
    <Instagram className="w-4 h-4 text-gray-600" />
  </a>
</div>

          {/* Copyright */}
          <div className="text-gray-500 text-sm" data-testid="copyright">
            <p>&copy; 2025 TECHS Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
