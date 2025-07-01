import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Award,
  BarChart3,
  Briefcase,
  Calendar,
  CheckCircle,
  Clock,
  CreditCard,
  Globe,
  GraduationCap,
  Heart,
  Mail,
  MessageSquare,
  Music,
  Palette,
  Plus,
  Rocket,
  Share2,
  Shield,
  Smartphone,
  Star,
  TrendingUp,
  UserPlus,
  Users,
  Utensils,
} from "lucide-react";
import { Link } from "react-router-dom";
 
export default function HomePage() {
  const categories = [
    {
      name: "Music",
      icon: Music,
      count: "2,340",
      color: "bg-purple-100 text-purple-700",
    },
    {
      name: "Business",
      icon: Briefcase,
      count: "1,890",
      color: "bg-blue-100 text-blue-700",
    },
    {
      name: "Art & Culture",
      icon: Palette,
      count: "1,456",
      color: "bg-pink-100 text-pink-700",
    },
    {
      name: "Food & Drink",
      icon: Utensils,
      count: "987",
      color: "bg-orange-100 text-orange-700",
    },
    {
      name: "Education",
      icon: GraduationCap,
      count: "1,234",
      color: "bg-green-100 text-green-700",
    },
    {
      name: "Health & Wellness",
      icon: Heart,
      count: "756",
      color: "bg-red-100 text-red-700",
    },
  ];

  const eventTemplates = [
    {
      title: "Conference & Summit",
      description:
        "Professional conferences with multiple sessions and networking",
      icon: Briefcase,
      features: [
        "Multi-track sessions",
        "Networking breaks",
        "Speaker management",
        "Live streaming",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Workshop & Training",
      description: "Interactive learning experiences and skill development",
      icon: GraduationCap,
      features: [
        "Hands-on activities",
        "Small groups",
        "Resource sharing",
        "Certificates",
      ],
      color: "from-green-500 to-green-600",
    },
    {
      title: "Social & Networking",
      description: "Community gatherings and professional networking events",
      icon: Users,
      features: [
        "Icebreaker activities",
        "Contact exchange",
        "Group discussions",
        "Follow-up tools",
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Product Launch",
      description: "Showcase new products and services to your audience",
      icon: Rocket,
      features: [
        "Demo stations",
        "Media coverage",
        "Press kits",
        "Lead capture",
      ],
      color: "from-orange-500 to-orange-600",
    },
  ];

  const managementTools = [
    {
      title: "Event Analytics",
      description:
        "Track attendance, engagement, and ROI with detailed insights",
      icon: BarChart3,
      features: [
        "Real-time dashboards",
        "Attendee insights",
        "Revenue tracking",
        "Custom reports",
      ],
    },
    {
      title: "Registration Management",
      description:
        "Streamlined registration with payment processing and ticketing",
      icon: CreditCard,
      features: [
        "Custom forms",
        "Payment gateway",
        "QR code tickets",
        "Waitlist management",
      ],
    },
    {
      title: "Communication Hub",
      description:
        "Keep attendees informed with automated messaging and updates",
      icon: MessageSquare,
      features: [
        "Email campaigns",
        "SMS notifications",
        "Push notifications",
        "Event updates",
      ],
    },
    {
      title: "Mobile Event App",
      description: "Branded mobile app for enhanced attendee experience",
      icon: Smartphone,
      features: [
        "Event schedule",
        "Networking features",
        "Live polls",
        "Feedback collection",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Event Organizer",
      company: "TechCorp",
      image: "/placeholder.svg?height=60&width=60",
      content:
        "Event Loop made organizing our tech conference incredibly smooth. The platform is intuitive and the support team is amazing!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Startup Founder",
      company: "InnovateLab",
      image: "/placeholder.svg?height=60&width=60",
      content:
        "I've discovered so many valuable networking events through Event Loop. It's become my go-to platform for professional growth.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Community Manager",
      company: "CreativeSpace",
      image: "/placeholder.svg?height=60&width=60",
      content:
        "The analytics management features are top-notch. Event Loop has transformed how we handle our monthly meetups.",
      rating: 5,
    },
  ];

  const stats = [
    { number: "50K+", label: "Events Created", icon: Calendar },
    { number: "2M+", label: "Happy Attendees", icon: Users },
    { number: "15K+", label: "Event Organizers", icon: Star },
    { number: "98%", label: "Success Rate", icon: TrendingUp },
  ];

  const features = [
    {
      title: "Smart Event Discovery",
      description:
        "AI-powered recommendations based on your interests and location",
      icon: Globe,
    },
    {
      title: "Seamless Registration",
      description: "One-click registration with secure payment processing",
      icon: CheckCircle,
    },
    {
      title: "Real-time Analytics",
      description: "Track attendance, engagement, and revenue in real-time",
      icon: TrendingUp,
    },
    {
      title: "24/7 Support",
      description:
        "Round-the-clock customer support for organizers and attendees",
      icon: Shield,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative px-4 py-16 bg-gradient-to-r from-gray-50 to-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100"></div>

        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-gray-600 via-gray-400 to-slate-800 bg-clip-text text-transparent">
              Manage & Explore
            </span>
            <br />
            <span className="text-gray-800 tracking-widest">
              Events Effortlessly
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-tight font-medium">
            Discover extraordinary events, connect with amazing people, and
            create unforgettable experiences. The world's most trusted event
            management platform.
          </p>

          <div className="flex justify-center mb-12">
            <Link to="/add-event">
              <Button
                variant="outline"
                size="lg"
                className="px-10 py-4 text-lg font-semibold rounded-xl border-2 border-gray-300 hover:bg-gray-50 bg-transparent hover:border-gray-400 transition-all duration-200 cursor-pointer w-fit"
              >
                Create Event
                <Plus className="mt-[3px] h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span>Secure & Trusted</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              <span>Award Winning</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 mt-20 py-16 w-11/12 lg:w-10/12 max-w-7xl mx-auto bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gray-500 to-slate-600 rounded-2xl mb-4 shadow-lg">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-800">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="px-4 pt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Explore by{" "}
              <span className="bg-gradient-to-r from-gray-600 to-slate-600 bg-clip-text text-transparent">
                Category
              </span>
            </h2>
            <p className="text-xl text-gray-800 max-w-2xl mx-auto">
              Find events that match your interests and passions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-200 rounded-2xl shadow-sm cursor-pointer group hover:-translate-y-1"
              >
                <div className="text-center">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${category.color} group-hover:scale-110 transition-transform duration-200`}
                  >
                    <category.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 font-medium tracking-wider">
                    {category.count} events
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Management Tools */}
      <section className="px-4 pt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Powerful{" "}
              <span className="bg-gradient-to-r from-gray-600 to-slate-600 bg-clip-text text-transparent">
                Management Tools
              </span>
            </h2>
            <p className="text-xl text-gray-800 max-w-2xl mx-auto">
              Everything you need to create, manage, and grow successful events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {managementTools.map((tool, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-lg transition-all duration-300 shadow-sm rounded-2xl border group hover:-translate-y-1 bg-white"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-slate-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <tool.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900">
                      {tool.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {tool.description}
                    </p>
                    <div className="space-y-2">
                      {tool.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Templates */}
      <section className="px-4 pt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Event{" "}
              <span className="bg-gradient-to-r from-gray-600 to-slate-600 bg-clip-text text-transparent">
                Templates
              </span>
            </h2>
            <p className="text-xl text-gray-800">
              Start with proven templates for different event types
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventTemplates.map((template, index) => (
              <Card
                key={index}
                className="p-6 rounded-2xl bg-white hover:shadow-lg shadow-sm border transition-all duration-200 group"
              >
                <div className="flex items-start space-x-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${template.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}
                  >
                    <template.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900">
                      {template.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {template.description}
                    </p>
                    <div className="space-y-2">
                      {template.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 pt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-gray-600 to-slate-600 bg-clip-text text-transparent">
                EventHub
              </span>
            </h2>
            <p className="text-xl text-gray-800 max-w-2xl mx-auto">
              Powerful features designed to make event management effortless
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 hover:shadow-lg shadow-sm border transition-all duration-200 grid place-items-stretch"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-500 to-slate-600 rounded-xl flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto px-4 pt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              How It{" "}
              <span className="bg-gradient-to-r from-gray-600 to-slate-600 bg-clip-text text-transparent">
                Works
              </span>
            </h2>
            <p className="text-xl text-gray-800">
              Get started with our simple three-step process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Plus,
                title: "Create",
                description:
                  "Set up your event with details, date, and location in minutes",
                step: "01",
              },
              {
                icon: Share2,
                title: "Share",
                description:
                  "Promote your event and reach your target audience effectively",
                step: "02",
              },
              {
                icon: UserPlus,
                title: "Join",
                description:
                  "Connect with attendees and manage registrations seamlessly",
                step: "03",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="text-center relative p-4 rounded-xl shadow border border-gray-300 bg-gradient-to-br from-gray-50 to-slate-5"
              >
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-gray-600 to-slate-800 rounded-2xl shadow-lg mb-6">
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                </div>
                <h3 className="text-3xl tracking-wide font-bold mb-1 bg-gradient-to-r from-gray-700 to-slate-900 bg-clip-text text-transparent">
                  {step.title}
                </h3>
                <p className="text-gray-800 leading-tight text-base font-medium">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 pt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              What Our{" "}
              <span className="bg-gradient-to-r from-gray-600 to-slate-600 bg-clip-text text-transparent">
                Users
              </span>{" "}
              Say
            </h2>
            <p className="text-xl text-gray-800">
              Join thousands of satisfied event organizers and attendees
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-4 border rounded-2xl bg-gradient-to-br from-white to-gray-50 hover:shadow-md shadow-sm transition-all duration-200"
              >
                <div className="flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-3 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div>
                    <div className="font-bold text-gray-800">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {testimonial.role}
                    </div>
                    <div className="text-gray-500 text-xs">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto mb-12 rounded-xl px-4 py-16 mt-20 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-black/70 mb-1">
            Stay Updated with the Latest Events
          </h2>
          <p className="text-lg text-gray-800 font-medium mb-8 max-w-3xl mx-auto">
            Get personalized event recommendations and exclusive early access to
            popular events
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-[51%] transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Enter your email address"
                className="pl-11 border-0 rounded-xl h-12 text-base bg-white/90 focus:bg-white focus:ring-2 focus:ring-white/50"
              />
            </div>
            <Button className="h-12 px-8 rounded-xl bg-white text-gray-600 cursor-pointer hover:bg-gray-100 font-semibold">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
