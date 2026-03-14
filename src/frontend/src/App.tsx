import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
  MessageCircle,
  Phone,
  Shield,
  Star,
  Users,
  X,
  ZoomIn,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const queryClient = new QueryClient();

function ContactForm({ onSuccess }: { onSuccess?: () => void }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `New Enquiry from Sanskar Academy Website%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AMessage: ${encodeURIComponent(message)}`;
    const url = `https://wa.me/919694683875?text=${text}`;
    window.open(url, "_blank");
    setSubmitted(true);
    setName("");
    setPhone("");
    setMessage("");
    setTimeout(() => {
      setSubmitted(false);
      onSuccess?.();
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-1.5">
        <Label
          htmlFor="contact-name"
          className="text-navy-700 font-semibold text-sm"
        >
          Your Name
        </Label>
        <Input
          id="contact-name"
          data-ocid="contact.name.input"
          type="text"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border-navy-200 focus:border-gold-500 focus:ring-gold-500/20"
        />
      </div>

      <div className="space-y-1.5">
        <Label
          htmlFor="contact-phone"
          className="text-navy-700 font-semibold text-sm"
        >
          Phone Number
        </Label>
        <Input
          id="contact-phone"
          data-ocid="contact.phone.input"
          type="tel"
          placeholder="+91 XXXXX XXXXX"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="border-navy-200 focus:border-gold-500 focus:ring-gold-500/20"
        />
      </div>

      <div className="space-y-1.5">
        <Label
          htmlFor="contact-message"
          className="text-navy-700 font-semibold text-sm"
        >
          Message
        </Label>
        <Textarea
          id="contact-message"
          data-ocid="contact.message.textarea"
          placeholder="Tell us about your enquiry..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={4}
          className="border-navy-200 focus:border-gold-500 focus:ring-gold-500/20 resize-none"
        />
      </div>

      <Button
        type="submit"
        data-ocid="contact.submit_button"
        className="w-full bg-green-600 hover:bg-green-500 text-white font-semibold py-2.5 text-base shadow-md transition-all duration-200"
      >
        <MessageCircle className="w-4 h-4 mr-2" />
        Send Message
      </Button>

      <AnimatePresence>
        {submitted && (
          <motion.div
            data-ocid="contact.success_state"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl px-4 py-3 text-green-700 text-sm font-medium"
          >
            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
            Message sent! We will contact you soon.
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}

type GalleryPhoto = {
  src: string;
  alt: string;
  orientation: "landscape" | "portrait";
};

const galleryPhotos: GalleryPhoto[] = [
  {
    src: "/assets/uploads/WhatsApp-Image-2026-03-12-at-6.53.13-PM-1--1.jpeg",
    alt: "Staff Photo",
    orientation: "landscape",
  },
  {
    src: "/assets/uploads/WhatsApp-Image-2026-03-12-at-6.53.09-PM-4.jpeg",
    alt: "Fancy Dress Girls",
    orientation: "portrait",
  },
  {
    src: "/assets/uploads/WhatsApp-Image-2026-03-12-at-6.53.12-PM-2--2.jpeg",
    alt: "Flag Ceremony",
    orientation: "landscape",
  },
  {
    src: "/assets/uploads/WhatsApp-Image-2026-03-12-at-6.53.11-PM-1--5.jpeg",
    alt: "Dinosaur Trip",
    orientation: "portrait",
  },
  {
    src: "/assets/uploads/WhatsApp-Image-2026-03-12-at-6.53.12-PM-1--3.jpeg",
    alt: "Flag Ceremony 2",
    orientation: "landscape",
  },
  {
    src: "/assets/uploads/WhatsApp-Image-2026-03-12-at-6.53.10-PM-7.jpeg",
    alt: "Kids on Stage",
    orientation: "landscape",
  },
  {
    src: "/assets/uploads/WhatsApp-Image-2026-03-12-at-6.53.12-PM-6.jpeg",
    alt: "Museum Cave Visit",
    orientation: "landscape",
  },
  {
    src: "/assets/uploads/WhatsApp-Image-2026-03-12-at-6.53.08-PM-1--10.jpeg",
    alt: "Yellow Kids Basant",
    orientation: "portrait",
  },
  {
    src: "/assets/uploads/WhatsApp-Image-2026-03-12-at-6.53.08-PM-8.jpeg",
    alt: "Janmashtami Celebration",
    orientation: "landscape",
  },
  {
    src: "/assets/uploads/WhatsApp-Image-2026-03-12-at-6.53.10-PM-2--11.jpeg",
    alt: "Green Day Children",
    orientation: "portrait",
  },
  {
    src: "/assets/uploads/WhatsApp-Image-2026-03-12-at-6.53.13-PM-9.jpeg",
    alt: "Red Day Celebration",
    orientation: "landscape",
  },
  {
    src: "/assets/uploads/WhatsApp-Image-2026-03-12-at-6.53.11-PM-12.jpeg",
    alt: "Manners & Welcome Signs Kids",
    orientation: "portrait",
  },
  {
    src: "/assets/uploads/WhatsApp-Image-2026-03-12-at-6.53.10-PM-1--13.jpeg",
    alt: "Pink Dress Kids",
    orientation: "portrait",
  },
];

function SchoolWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [lightboxPhoto, setLightboxPhoto] = useState<GalleryPhoto | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home", ocid: "nav.home.link" },
    { label: "About", href: "#about", ocid: "nav.about.link" },
    { label: "Academics", href: "#academics", ocid: "nav.academics.link" },
    { label: "Gallery", href: "#gallery", ocid: "nav.gallery.link" },
    { label: "Contact", href: "#contact", ocid: "nav.contact.link" },
  ];

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
      {/* CONTACT MODAL */}
      <Dialog open={contactModalOpen} onOpenChange={setContactModalOpen}>
        <DialogContent data-ocid="contact.dialog" className="max-w-md w-full">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-1">
              <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <DialogTitle className="font-display text-xl font-bold text-navy-800">
                  Send Us a Message
                </DialogTitle>
                <p className="text-sm text-muted-foreground">
                  We'll reply on WhatsApp
                </p>
              </div>
            </div>
          </DialogHeader>
          <ContactForm onSuccess={() => setContactModalOpen(false)} />
        </DialogContent>
      </Dialog>

      {/* LIGHTBOX */}
      <Dialog
        open={!!lightboxPhoto}
        onOpenChange={(open) => !open && setLightboxPhoto(null)}
      >
        <DialogContent
          data-ocid="gallery.dialog"
          className="max-w-4xl w-full p-2 bg-navy-950 border-navy-800"
        >
          <DialogHeader className="sr-only">
            <DialogTitle>{lightboxPhoto?.alt ?? "Photo"}</DialogTitle>
          </DialogHeader>
          {lightboxPhoto && (
            <div className="relative">
              <img
                src={lightboxPhoto.src}
                alt={lightboxPhoto.alt}
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>

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
              src="/assets/uploads/WhatsApp-Image-2026-03-12-at-9.50.16-AM-1-1.jpeg"
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
              <Button
                data-ocid="nav.apply.button"
                onClick={() => setContactModalOpen(true)}
                className="bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold text-sm px-5"
              >
                Apply Now
              </Button>
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
                <li className="pt-2">
                  <Button
                    data-ocid="nav.apply.mobile.button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setContactModalOpen(true);
                    }}
                    className="w-full bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold text-sm"
                  >
                    Apply Now
                  </Button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* HERO SECTION */}
        <section
          id="home"
          className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900"
        >
          {/* Subtle dot pattern overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(212,175,55,0.4) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

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
              <Button
                data-ocid="hero.admission.primary_button"
                size="lg"
                onClick={() => setContactModalOpen(true)}
                className="bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold px-8 py-3 text-base shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Apply for Admission
                <ChevronRight className="w-5 h-5 ml-1" />
              </Button>
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

        {/* GALLERY SECTION */}
        <section
          id="gallery"
          data-ocid="gallery.section"
          className="py-24 bg-navy-50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="text-center mb-14"
            >
              <motion.p
                variants={fadeUp}
                className="text-gold-600 font-semibold text-sm tracking-widest uppercase mb-2"
              >
                School Life &amp; Events
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="font-display text-4xl sm:text-5xl font-bold text-navy-800"
              >
                Our Gallery
              </motion.h2>
            </motion.div>

            {/* Masonry grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="columns-1 sm:columns-2 lg:columns-3 gap-6"
              style={{ columnGap: "1.5rem" }}
            >
              {galleryPhotos.map((photo, i) => (
                <motion.div
                  key={photo.src}
                  variants={fadeUp}
                  data-ocid={`gallery.item.${i + 1}`}
                  className="break-inside-avoid mb-6"
                >
                  <button
                    type="button"
                    onClick={() => setLightboxPhoto(photo)}
                    className="group relative w-full block overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-zoom-in"
                    aria-label={`View ${photo.alt}`}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{
                        aspectRatio:
                          photo.orientation === "landscape" ? "4/3" : "3/4",
                      }}
                    />
                    {/* Hover overlay — zoom icon only, no caption */}
                    <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/30 transition-all duration-300 rounded-2xl flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                        <ZoomIn className="w-5 h-5 text-navy-800" />
                      </div>
                    </div>
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </div>
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

        {/* CONTACT */}
        <section id="contact" className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="flex flex-col items-center"
            >
              <motion.div variants={stagger} className="space-y-6 w-full">
                {[
                  {
                    icon: MapPin,
                    label: "Address",
                    value:
                      "40-Rajmarg, Chhatrasal Nagar, Malviya Nagar, Jaipur",
                    href: "https://maps.google.com/?q=40-Rajmarg,Chhatrasal+Nagar,Malviya+Nagar,Jaipur",
                    ocid: "contact.address.link",
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+91 8104640177",
                    href: "tel:+918104640177",
                    ocid: "contact.phone.link",
                  },
                ].map((info) => (
                  <motion.div
                    key={info.label}
                    variants={fadeUp}
                    className="flex items-start gap-4 bg-navy-50 rounded-2xl p-6"
                  >
                    <div className="w-12 h-12 rounded-xl bg-navy-100 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-navy-700" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gold-600 uppercase tracking-wider mb-1">
                        {info.label}
                      </div>
                      <a
                        href={info.href}
                        target={info.label === "Address" ? "_blank" : undefined}
                        rel={
                          info.label === "Address"
                            ? "noopener noreferrer"
                            : undefined
                        }
                        data-ocid={info.ocid}
                        className="text-navy-800 font-medium text-lg hover:text-gold-600 hover:underline transition-colors cursor-pointer"
                      >
                        {info.value}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-8 p-6 bg-navy-700 rounded-2xl w-full"
              >
                <h4 className="font-display text-lg font-bold text-white mb-4 text-center">
                  School Hours
                </h4>
                <div className="space-y-2 text-navy-200 text-sm">
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

              {/* Embedded Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-8 w-full"
              >
                <Card className="border-0 shadow-card overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-gold-500 to-gold-400" />
                  <CardContent className="p-7">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                        <MessageCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold text-navy-800">
                          Send Us a Message
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          We'll reply on WhatsApp
                        </p>
                      </div>
                    </div>
                    <ContactForm />
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
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
                  src="/assets/uploads/WhatsApp-Image-2026-03-12-at-9.50.16-AM-1-1.jpeg"
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
                  <a
                    href="https://maps.google.com/?q=40-Rajmarg,Chhatrasal+Nagar,Malviya+Nagar,Jaipur"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid="footer.address.link"
                    className="hover:text-gold-400 hover:underline transition-colors"
                  >
                    40-Rajmarg, Chhatrasal Nagar, Malviya Nagar, Jaipur
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gold-500 flex-shrink-0" />
                  <a
                    href="tel:+918104640177"
                    data-ocid="footer.phone.link"
                    className="hover:text-gold-400 hover:underline transition-colors"
                  >
                    +91 8104640177
                  </a>
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
