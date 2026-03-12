import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Heart,
  Lightbulb,
  MapPin,
  Menu,
  Phone,
  Shield,
  Star,
  Trophy,
  Users,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useSubmitContact } from "./hooks/useQueries";

const queryClient = new QueryClient();

function SchoolWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const submitContact = useSubmitContact();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home", ocid: "nav.home.link" },
    { label: "About", href: "#about", ocid: "nav.about.link" },
    { label: "Academics", href: "#academics", ocid: "nav.academics.link" },
    { label: "Admissions", href: "#admissions", ocid: "nav.admissions.link" },
    { label: "Contact", href: "#contact", ocid: "nav.contact.link" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await submitContact.mutateAsync(formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      toast.success("Message sent successfully!");
    } catch {
      toast.error("Failed to send message. Please try again.");
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  return (
    <div className="min-h-screen bg-background font-body">
      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-navy-900 shadow-lg" : "bg-navy-900/95"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <img
              src="/assets/generated/sanskar-academy-logo-transparent.dim_200x200.png"
              alt="Sanskar Academy Logo"
              className="h-12 w-12 object-contain"
            />
            <div>
              <div className="text-gold-400 font-display font-bold text-lg leading-tight tracking-wide">
                Sanskar Academy
              </div>
              <div className="text-navy-200 text-[10px] tracking-widest uppercase">
                Malviya Nagar, Jaipur
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  data-ocid={link.ocid}
                  className="px-3 py-2 text-sm font-medium text-navy-100 hover:text-gold-400 transition-colors duration-200 rounded-md hover:bg-white/5"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="ml-3">
              <a href="#admissions">
                <Button className="bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold text-sm px-5">
                  Apply Now
                </Button>
              </a>
            </li>
          </ul>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden bg-navy-800 overflow-hidden border-t border-navy-700"
            >
              <ul className="px-4 py-3 space-y-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      data-ocid={link.ocid}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2.5 text-navy-100 hover:text-gold-400 font-medium text-sm rounded-md hover:bg-white/5 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* HERO SECTION */}
        <section
          id="home"
          className="relative min-h-screen flex items-center justify-center"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('/assets/generated/school-hero-banner.dim_1200x600.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/80 via-navy-900/70 to-navy-900/90" />

          <motion.div
            className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-4">
              <span className="inline-block bg-gold-500/20 border border-gold-500/40 text-gold-400 text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full">
                Established with Excellence
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight"
            >
              Sanskar <span className="text-gold-400">Academy</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="font-display text-xl sm:text-2xl text-gold-300 font-medium italic mb-3"
            >
              Nurturing Excellence, Shaping Futures
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-navy-200 text-base sm:text-lg mb-10 flex items-center justify-center gap-2"
            >
              <MapPin className="w-4 h-4 text-gold-400" />
              Malviya Nagar, Jaipur, Rajasthan
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-4 justify-center"
            >
              <a href="#admissions">
                <Button
                  data-ocid="hero.admission.primary_button"
                  size="lg"
                  className="bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold px-8 py-3 text-base shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Apply for Admission
                  <ChevronRight className="w-5 h-5 ml-1" />
                </Button>
              </a>
              <a href="#about">
                <Button
                  data-ocid="hero.learn_more.secondary_button"
                  size="lg"
                  variant="outline"
                  className="border-white/40 text-white hover:bg-white/10 hover:border-white font-semibold px-8 py-3 text-base backdrop-blur-sm"
                >
                  Learn More
                </Button>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={stagger}
              className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              {[
                { value: "15+", label: "Years of Excellence" },
                { value: "5.6k+", label: "Students Enrolled" },
                { value: "15+", label: "Expert Faculty" },
                { value: "95%", label: "Board Results" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4"
                >
                  <div className="font-display text-3xl font-bold text-gold-400">
                    {stat.value}
                  </div>
                  <div className="text-navy-200 text-xs mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* ABOUT US */}
        <section id="about" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="text-center mb-16"
            >
              <motion.p
                variants={fadeUp}
                className="text-gold-600 font-semibold text-sm tracking-widest uppercase mb-2"
              >
                Who We Are
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="font-display text-4xl sm:text-5xl font-bold text-navy-800 mb-6"
              >
                About Sanskar Academy
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed"
              >
                Welcome to Sanskar Academy, where education means all round
                development of the child. This is a school with a mission to
                make each child achieve his and her best. With over 15 years of
                dedicated service to the community of Malviya Nagar, Jaipur, we
                have built a legacy of trust, care, and academic excellence.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="grid md:grid-cols-2 gap-8"
            >
              <motion.div variants={fadeUp}>
                <Card className="h-full border-0 shadow-card hover:shadow-card-hover transition-shadow duration-300 overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-navy-700 to-navy-500" />
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 rounded-full bg-navy-50 flex items-center justify-center">
                        <Star className="w-6 h-6 text-navy-700" />
                      </div>
                      <h3 className="font-display text-2xl font-bold text-navy-800">
                        Our Mission
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      To provide an enriching and inclusive educational
                      environment that empowers every child to achieve their
                      highest potential. We nurture curious minds, build strong
                      character, and instill values that last a lifetime —
                      preparing students to be responsible citizens of tomorrow.
                    </p>
                    <ul className="mt-6 space-y-2">
                      {[
                        "Quality Education for All",
                        "Value-based Learning",
                        "Academic Excellence",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-sm text-navy-700"
                        >
                          <CheckCircle2 className="w-4 h-4 text-gold-500 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeUp}>
                <Card className="h-full border-0 shadow-card hover:shadow-card-hover transition-shadow duration-300 overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-gold-500 to-gold-400" />
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center">
                        <Lightbulb className="w-6 h-6 text-gold-600" />
                      </div>
                      <h3 className="font-display text-2xl font-bold text-navy-800">
                        Our Vision
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      To be Jaipur's most trusted institution for holistic
                      education — a place where every student discovers their
                      unique strengths and develops the skills, confidence, and
                      compassion to make a meaningful difference in the world.
                    </p>
                    <ul className="mt-6 space-y-2">
                      {[
                        "Holistic Student Development",
                        "Future-ready Curriculum",
                        "Community & Character",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-sm text-navy-700"
                        >
                          <CheckCircle2 className="w-4 h-4 text-gold-500 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ACADEMICS */}
        <section id="academics" className="py-24 bg-navy-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="text-center mb-16"
            >
              <motion.p
                variants={fadeUp}
                className="text-gold-600 font-semibold text-sm tracking-widest uppercase mb-2"
              >
                Programs
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="font-display text-4xl sm:text-5xl font-bold text-navy-800"
              >
                Academic Programs
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto"
            >
              {[
                {
                  icon: Star,
                  title: "Pre-Primary",
                  classes: "Playgroup – KG",
                  desc: "Building a strong foundation through play-based learning, creativity, storytelling, and joyful exploration of the world around them.",
                  color: "bg-rose-50",
                  iconColor: "text-rose-500",
                },
                {
                  icon: BookOpen,
                  title: "Primary School",
                  classes: "Class 1 – 5",
                  desc: "Core subjects taught with engaging methods that spark curiosity, build critical thinking, and foster a genuine love for learning.",
                  color: "bg-blue-50",
                  iconColor: "text-blue-500",
                },
              ].map((program) => (
                <motion.div key={program.title} variants={fadeUp}>
                  <Card className="h-full border-0 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                    <CardContent className="p-7">
                      <div
                        className={`w-14 h-14 rounded-2xl ${program.color} flex items-center justify-center mb-5`}
                      >
                        <program.icon
                          className={`w-7 h-7 ${program.iconColor}`}
                        />
                      </div>
                      <div className="inline-block bg-navy-700 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                        {program.classes}
                      </div>
                      <h3 className="font-display text-xl font-bold text-navy-800 mb-3">
                        {program.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {program.desc}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-24 bg-navy-800 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="text-center mb-16"
            >
              <motion.p
                variants={fadeUp}
                className="text-gold-400 font-semibold text-sm tracking-widest uppercase mb-2"
              >
                Why Sanskar Academy
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="font-display text-4xl sm:text-5xl font-bold text-white"
              >
                Why Choose Us?
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                {
                  icon: Users,
                  title: "Limited Seats Available",
                  desc: "We intentionally keep our class sizes small so that every child receives the personal attention they deserve. With limited seats, our teachers can truly know each student — their strengths, challenges, and unique learning style.",
                },
                {
                  icon: Heart,
                  title: "Learning & Caring Atmosphere",
                  desc: "Our school is more than just a place of study — it's a warm, nurturing community where children feel safe, encouraged, and truly cared for. We celebrate every child's progress and create an environment where learning happens with joy.",
                },
                {
                  icon: Lightbulb,
                  title: "Individual Educational Plan",
                  desc: "We recognize that every child learns differently. Our teachers craft personalized learning approaches for each student, ensuring that no child is left behind and every child is challenged to reach their full potential.",
                },
                {
                  icon: Shield,
                  title: "Reliable Staff Members",
                  desc: "Our team of dedicated educators and staff bring passion, experience, and genuine care to everything they do. Parents can trust that their children are in safe, capable, and loving hands every single day.",
                },
              ].map((feature) => (
                <motion.div key={feature.title} variants={fadeUp}>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-gold-500/30 transition-all duration-300 h-full">
                    <div className="w-14 h-14 rounded-2xl bg-gold-500/15 border border-gold-500/20 flex items-center justify-center mb-5">
                      <feature.icon className="w-7 h-7 text-gold-400" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-navy-200 text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ADMISSIONS */}
        <section
          id="admissions"
          className="py-24 bg-gradient-to-br from-navy-50 to-navy-100"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="text-center mb-6"
            >
              <motion.p
                variants={fadeUp}
                className="text-gold-600 font-semibold text-sm tracking-widest uppercase mb-2"
              >
                Join Our School
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="font-display text-4xl sm:text-5xl font-bold text-navy-800 mb-4"
              >
                Admissions
              </motion.h2>
              <motion.div variants={fadeUp}>
                <span className="inline-block bg-gold-500 text-navy-900 font-bold text-sm px-6 py-2 rounded-full shadow-md">
                  🎓 Admissions Open for 2026–27
                </span>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                {
                  step: "01",
                  title: "Fill Application Form",
                  desc: "Complete the admission form online or visit our office in Malviya Nagar.",
                },
                {
                  step: "02",
                  title: "Document Verification",
                  desc: "Submit required documents: birth certificate, previous marksheets, transfer certificate.",
                },
                {
                  step: "03",
                  title: "Student Interaction",
                  desc: "A friendly interaction session with our academic team to understand the student's needs.",
                },
                {
                  step: "04",
                  title: "Admission Confirmed",
                  desc: "Receive your admission letter and welcome pack. You're now part of the Sanskar family!",
                },
              ].map((step, i) => (
                <motion.div
                  key={step.step}
                  variants={fadeUp}
                  className="relative"
                >
                  {i < 3 && (
                    <div className="hidden lg:block absolute top-8 left-[calc(100%_-_12px)] w-6 h-0.5 bg-gold-400 z-10" />
                  )}
                  <Card className="h-full border-0 shadow-card">
                    <CardContent className="p-7">
                      <div className="font-display text-5xl font-black text-gold-400/30 leading-none mb-4">
                        {step.step}
                      </div>
                      <h3 className="font-display text-lg font-bold text-navy-800 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-center mt-12"
            >
              <a href="#contact">
                <Button
                  size="lg"
                  className="bg-navy-700 hover:bg-navy-600 text-white font-semibold px-10 py-3 text-base shadow-lg"
                >
                  Contact Us for Admission
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </motion.div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="text-center mb-16"
            >
              <motion.p
                variants={fadeUp}
                className="text-gold-600 font-semibold text-sm tracking-widest uppercase mb-2"
              >
                Get In Touch
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="font-display text-4xl sm:text-5xl font-bold text-navy-800"
              >
                Contact Us
              </motion.h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={stagger}
              >
                <motion.h3
                  variants={fadeUp}
                  className="font-display text-2xl font-bold text-navy-800 mb-8"
                >
                  School Information
                </motion.h3>
                <motion.div variants={stagger} className="space-y-6">
                  {[
                    {
                      icon: MapPin,
                      label: "Address",
                      value:
                        "40-Rajmarg, Chhatrasal Nagar, Malviya Nagar, Jaipur",
                    },
                    {
                      icon: Phone,
                      label: "Phone",
                      value: "+91 8104640177",
                    },
                  ].map((info) => (
                    <motion.div
                      key={info.label}
                      variants={fadeUp}
                      className="flex items-start gap-4"
                    >
                      <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-navy-700" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-gold-600 uppercase tracking-wider mb-1">
                          {info.label}
                        </div>
                        <div className="text-navy-800 font-medium">
                          {info.value}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  className="mt-10 p-6 bg-navy-700 rounded-2xl"
                >
                  <h4 className="font-display text-lg font-bold text-white mb-2">
                    School Hours
                  </h4>
                  <div className="space-y-1 text-navy-200 text-sm">
                    <div className="flex justify-between">
                      <span>Monday – Saturday</span>
                      <span className="text-gold-400 font-medium">
                        8:00 AM – 2:30 PM
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Office Hours</span>
                      <span className="text-gold-400 font-medium">
                        9:00 AM – 5:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="text-navy-400">Closed</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
              >
                <Card className="border-0 shadow-card">
                  <CardContent className="p-8">
                    <AnimatePresence mode="wait">
                      {submitted ? (
                        <motion.div
                          key="success"
                          data-ocid="contact.success_state"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          className="text-center py-12"
                        >
                          <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-5">
                            <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                          </div>
                          <h3 className="font-display text-2xl font-bold text-navy-800 mb-3">
                            Message Received!
                          </h3>
                          <p className="text-muted-foreground mb-6">
                            Thank you for reaching out. Our admissions team will
                            contact you within 24 hours.
                          </p>
                          <Button
                            variant="outline"
                            onClick={() => setSubmitted(false)}
                            className="border-navy-200 text-navy-700 hover:bg-navy-50"
                          >
                            Send Another Message
                          </Button>
                        </motion.div>
                      ) : (
                        <motion.form
                          key="form"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          onSubmit={handleSubmit}
                          className="space-y-5"
                        >
                          <h3 className="font-display text-xl font-bold text-navy-800 mb-6">
                            Send Us a Message
                          </h3>

                          <div className="space-y-2">
                            <Label
                              htmlFor="name"
                              className="text-navy-700 font-medium text-sm"
                            >
                              Full Name{" "}
                              <span className="text-destructive">*</span>
                            </Label>
                            <Input
                              id="name"
                              data-ocid="contact.name.input"
                              placeholder="Your full name"
                              value={formData.name}
                              onChange={(e) =>
                                setFormData((p) => ({
                                  ...p,
                                  name: e.target.value,
                                }))
                              }
                              required
                              className="border-border focus:border-gold-500 focus:ring-gold-500/20"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label
                              htmlFor="email"
                              className="text-navy-700 font-medium text-sm"
                            >
                              Email Address{" "}
                              <span className="text-destructive">*</span>
                            </Label>
                            <Input
                              id="email"
                              type="email"
                              data-ocid="contact.email.input"
                              placeholder="your@email.com"
                              value={formData.email}
                              onChange={(e) =>
                                setFormData((p) => ({
                                  ...p,
                                  email: e.target.value,
                                }))
                              }
                              required
                              className="border-border focus:border-gold-500"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label
                              htmlFor="phone"
                              className="text-navy-700 font-medium text-sm"
                            >
                              Phone Number
                            </Label>
                            <Input
                              id="phone"
                              type="tel"
                              data-ocid="contact.phone.input"
                              placeholder="+91 XXXXX XXXXX"
                              value={formData.phone}
                              onChange={(e) =>
                                setFormData((p) => ({
                                  ...p,
                                  phone: e.target.value,
                                }))
                              }
                              className="border-border focus:border-gold-500"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label
                              htmlFor="message"
                              className="text-navy-700 font-medium text-sm"
                            >
                              Message{" "}
                              <span className="text-destructive">*</span>
                            </Label>
                            <Textarea
                              id="message"
                              data-ocid="contact.message.textarea"
                              placeholder="Write your message here..."
                              rows={4}
                              value={formData.message}
                              onChange={(e) =>
                                setFormData((p) => ({
                                  ...p,
                                  message: e.target.value,
                                }))
                              }
                              required
                              className="border-border focus:border-gold-500 resize-none"
                            />
                          </div>

                          {submitContact.isError && (
                            <div
                              data-ocid="contact.error_state"
                              className="text-destructive text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3"
                            >
                              Failed to send message. Please try again or call
                              us directly.
                            </div>
                          )}

                          <Button
                            type="submit"
                            data-ocid="contact.submit_button"
                            disabled={submitContact.isPending}
                            className="w-full bg-navy-700 hover:bg-navy-600 text-white font-semibold py-3 text-base"
                          >
                            {submitContact.isPending
                              ? "Sending..."
                              : "Send Message"}
                          </Button>
                        </motion.form>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/assets/generated/sanskar-academy-logo-transparent.dim_200x200.png"
                  alt="Sanskar Academy"
                  className="h-12 w-12 object-contain"
                />
                <div>
                  <div className="font-display text-xl font-bold text-gold-400">
                    Sanskar Academy
                  </div>
                  <div className="text-navy-300 text-xs tracking-widest uppercase">
                    Malviya Nagar, Jaipur
                  </div>
                </div>
              </div>
              <p className="text-navy-300 text-sm leading-relaxed max-w-sm">
                Nurturing Excellence, Shaping Futures. A premier educational
                institution committed to the holistic development of every
                student in Jaipur.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-bold text-gold-400 mb-5 text-lg">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-navy-300 hover:text-gold-400 text-sm transition-colors flex items-center gap-1"
                    >
                      <ChevronRight className="w-3 h-3" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-display font-bold text-gold-400 mb-5 text-lg">
                Contact
              </h4>
              <ul className="space-y-3 text-navy-300 text-sm">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                  <span>
                    40-Rajmarg, Chhatrasal Nagar, Malviya Nagar, Jaipur
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gold-500 flex-shrink-0" />
                  <span>+91 8104640177</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-navy-700 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-navy-400 text-sm">
              © {new Date().getFullYear()} Sanskar Academy. All Rights Reserved.
            </p>
            <p className="text-navy-500 text-xs">
              Built with ❤️ using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-400 hover:text-gold-400 transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>

      <Toaster />
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SchoolWebsite />
    </QueryClientProvider>
  );
}
