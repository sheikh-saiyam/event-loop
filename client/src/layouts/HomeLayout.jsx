import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  MapPin,
  Plus,
  Search,
  Share2,
  UserPlus,
  Users,
  Star,
  TrendingUp,
  Globe,
  Music,
  Briefcase,
  Palette,
  Utensils,
  GraduationCap,
  Heart,
  CheckCircle,
  ArrowRight,
  Mail,
  Award,
  Clock,
  Shield,
  BarChart3,
  Smartphone,
  CreditCard,
  MessageSquare,
  Rocket,
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

  const venues = [
    {
      name: "Grand Convention Center",
      location: "Downtown San Francisco",
      capacity: "5,000 people",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.9,
      events: 150,
      amenities: ["WiFi", "Parking", "Catering", "A/V Equipment"],
    },
    {
      name: "Rooftop Garden Venue",
      location: "Manhattan, New York",
      capacity: "300 people",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.8,
      events: 89,
      amenities: ["Outdoor Space", "City Views", "Bar", "Photography"],
    },
    {
      name: "Tech Hub Auditorium",
      location: "Austin, Texas",
      capacity: "1,200 people",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.9,
      events: 200,
      amenities: ["High-Speed WiFi", "Live Streaming", "Tech Setup", "Parking"],
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
        "EventHub made organizing our tech conference incredibly smooth. The platform is intuitive and the support team is amazing!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Startup Founder",
      company: "InnovateLab",
      image: "/placeholder.svg?height=60&width=60",
      content:
        "I've discovered so many valuable networking events through EventHub. It's become my go-to platform for professional growth.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Community Manager",
      company: "CreativeSpace",
      image: "/placeholder.svg?height=60&width=60",
      content:
        "The analytics and attendee management features are top-notch. EventHub has transformed how we handle our monthly meetups.",
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
      <section className="relative px-4 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%239C92AC fillOpacity=0.03%3E%3Ccircle cx=30 cy=30 r=2/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>

        <div className="relative max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <Badge className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-0 text-sm font-medium">
              🎉 Join 50,000+ Event Organizers Worldwide
            </Badge>
          </div>

          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Manage & Explore
            </span>
            <br />
            <span className="text-gray-900">Events Effortlessly</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Discover extraordinary events, connect with amazing people, and
            create unforgettable experiences. The world's most trusted event
            management platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="px-10 py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Explore Events
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-10 py-4 text-lg font-semibold rounded-xl border-2 border-gray-300 hover:bg-gray-50 bg-transparent hover:border-gray-400 transition-all duration-200"
            >
              Create Event
              <Plus className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
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
      <section className="px-4 py-16 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-4 shadow-lg">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter Bar */}
      <section className="px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <Card className="p-6 shadow-xl border-0 rounded-2xl bg-gradient-to-r from-white to-gray-50">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Search events, locations, or organizers..."
                  className="pl-12 border-gray-200 rounded-xl h-12 text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <Select>
                <SelectTrigger className="w-full md:w-48 border-gray-200 rounded-xl h-12">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="art">Art & Culture</SelectItem>
                  <SelectItem value="music">Music</SelectItem>
                  <SelectItem value="food">Food & Drink</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full md:w-40 border-gray-200 rounded-xl h-12">
                  <SelectValue placeholder="Any Date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="week">This Week</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                  <SelectItem value="all">All Dates</SelectItem>
                </SelectContent>
              </Select>
              <Button className="h-12 px-8 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Search
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Categories Section */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore by{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Category
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find events that match your interests and passions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-200 border-gray-200 rounded-2xl cursor-pointer group hover:-translate-y-1"
              >
                <div className="text-center">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${category.color} group-hover:scale-110 transition-transform duration-200`}
                  >
                    <category.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 font-medium">
                    {category.count} events
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Management Tools */}
      <section className="px-4 py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Management Tools
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to create, manage, and grow successful events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {managementTools.map((tool, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 border-0 rounded-2xl group hover:-translate-y-1 bg-white"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <tool.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
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

      {/* Popular Venues */}
      <section className="px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Popular
              </span>{" "}
              Venues
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover amazing venues for your next event
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {venues.map((venue, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 rounded-2xl group hover:-translate-y-2 bg-white"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={venue.image || "/placeholder.svg"}
                    alt={venue.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="px-3 py-1 text-xs font-bold rounded-full bg-white/90 text-gray-700">
                      {venue.events} events hosted
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2 text-lg leading-tight group-hover:text-blue-600 transition-colors">
                    {venue.name}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-red-500" />
                      {venue.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2 text-blue-500" />
                      Capacity: {venue.capacity}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-sm font-semibold text-gray-700">
                        {venue.rating}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {venue.amenities
                      .slice(0, 3)
                      .map((amenity, amenityIndex) => (
                        <Badge
                          key={amenityIndex}
                          variant="secondary"
                          className="text-xs px-2 py-1 rounded-md"
                        >
                          {amenity}
                        </Badge>
                      ))}
                    {venue.amenities.length > 3 && (
                      <Badge
                        variant="secondary"
                        className="text-xs px-2 py-1 rounded-md"
                      >
                        +{venue.amenities.length - 3} more
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-3 rounded-xl border-2 border-gray-300 hover:bg-gray-50 bg-transparent hover:border-gray-400 text-lg font-semibold"
            >
              Browse All Venues
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Event Templates */}
      <section className="px-4 py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Event{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Templates
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Start with proven templates for different event types
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventTemplates.map((template, index) => (
              <Card
                key={index}
                className="p-8 border-0 rounded-2xl bg-white hover:shadow-lg transition-all duration-200 group"
              >
                <div className="flex items-start space-x-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${template.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}
                  >
                    <template.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
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
                    <Button className="mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg">
                      Use Template
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                EventHub
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to make event management effortless
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-8 border-0 rounded-2xl bg-gradient-to-br from-white to-gray-50 hover:shadow-lg transition-all duration-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
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
      <section className="px-4 py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Works
              </span>
            </h2>
            <p className="text-xl text-gray-600">
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
              <div key={index} className="text-center relative">
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg mb-6">
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm font-bold text-gray-700 shadow-md">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Users
              </span>{" "}
              Say
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of satisfied event organizers and attendees
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-8 border-0 rounded-2xl bg-gradient-to-br from-white to-gray-50 hover:shadow-lg transition-all duration-200"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <div className="font-bold text-gray-900">
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
      <section className="px-4 py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated with the Latest Events
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get personalized event recommendations and exclusive early access to
            popular events
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Enter your email address"
                className="pl-12 border-0 rounded-xl h-12 text-base bg-white/90 focus:bg-white focus:ring-2 focus:ring-white/50"
              />
            </div>
            <Button className="h-12 px-8 rounded-xl bg-white text-blue-600 hover:bg-gray-100 font-semibold">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                EventHub
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                The world's leading event management platform. Create, discover,
                and attend amazing events with ease.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                  <span className="text-sm font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                  <span className="text-sm font-bold">in</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg">Platform</h4>
              <nav className="space-y-2">
                <Link
                  to="/events"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Browse Events
                </Link>
                <Link
                  to="/create"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Create Event
                </Link>
                <Link
                  to="/venues"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Find Venues
                </Link>
                <Link
                  to="/pricing"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Pricing
                </Link>
                <Link
                  to="/mobile"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Mobile App
                </Link>
              </nav>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg">Support</h4>
              <nav className="space-y-2">
                <Link
                  to="/help"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Help Center
                </Link>
                <Link
                  to="/contact"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
                <Link
                  to="/about"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  About
                </Link>
                <Link
                  to="/careers"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Careers
                </Link>
                <Link
                  to="/blog"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </nav>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 EventHub. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/cookies"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
