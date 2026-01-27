// app/page.tsx or pages/index.tsx
"use client"; // If using App Router

import { useEffect } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import ContactForm from "./components/ContactForm";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function HomePage() {
  useEffect(() => {
    // Scroll-triggered fade-in animations
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      });
    }, observerOptions);

    document.querySelectorAll(`.${styles.fadeIn}`).forEach((el) => {
      observer.observe(el);
    });

    // Smooth scroll for anchor links
    const handleClick = (e: Event) => {
      const anchor = e.currentTarget as HTMLAnchorElement;
      const href = anchor.getAttribute("href");
      if (href?.startsWith("#") && href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", handleClick);
    });

    return () => {
      observer.disconnect();
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", handleClick);
      });
    };
  }, []);

  return (
    <>
      <Header ctaHref="#cta" />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="default-container mx-auto! px-4 max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl">
          <div
            className={`flex flex-col items-center justify-between gap-8 lg:flex-row`}
          >
            <div className="w-full md:max-w-lg text-center lg:text-left">
              <span className={styles.heroEyebrow}>
                EVV Platform for Home Care Agencies
              </span>
              <h1>
                <span className={styles.line}>
                  Quality Care for Your{" "}
                  <span className={styles.highlight}>Loved Ones</span>
                </span>
                <span className={styles.line}>
                  Right at <span className={styles.highlight}>Home</span>.
                </span>
              </h1>
              <p className={styles.heroSubhead}>
                What if EVV compliance just... worked?
              </p>
              <div className={styles.heroCta}>
                <a href="#cta" className={`${styles.btn} ${styles.btnPrimary}`}>
                  Book a Free Strategy Call
                </a>
                <a
                  href="#solution"
                  className={`${styles.btn} ${styles.btnSecondary}`}
                >
                  See How It Works
                </a>
              </div>
            </div>

            <div
              className={`group overflow-hidden relative w-full md:w-[400px] h-[400px] md:h-[600px] rounded-lg`}
            >
              <Image
                src="/images/hero/heroImage.webp"
                alt="Caregiver with senior patient"
                className="object-cover w-full! transition-transform duration-500 group-hover:scale-105"
                priority
                fill
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className={styles.story}>
        <div className="default-container mx-auto! px-4 max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl">
          <div className="flex flex-col-reverse lg:flex-row justify-between gap-8">
            <div className="relative group w-full md:w-[400px] h-[350px] md:h-[600px] overflow-hidden rounded-lg flex-shrink-0">
              <Image
                src={"/images/care/care-image.webp"}
                alt="Caregiver with senior patient"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className={`w-full md:w-[600px] ${styles.textContainer}`}>
              <div className={`${styles.storyHeader} ${styles.fadeIn}`}>
                <h2>We have seen this story too many times.</h2>
              </div>
              <div className={`${styles.storyContent} ${styles.fadeIn}`}>
                <p>
                  You started a home care agency to help people. To provide
                  dignified care. To make a difference.
                </p>
                <p>
                  But somewhere along the way, it became about paperwork. About
                  chasing caregivers for missing signatures. About scrambling
                  before audits. About fighting claim denials that should not
                  have happened.
                </p>
                <p>
                  Your caregivers are frustrated with clunky apps that take
                  longer to figure out than the actual visit. Your admin team
                  spends hours fixing data entry errors. And every denied claim
                  feels like money walking out the door.
                </p>
              </div>
              <p className={`${styles.storyHighlight} ${styles.fadeIn}`}>
                You didn&apos;t sign up for this.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pivot Section */}
      <section className={styles.pivot}>
        <div className="default-container mx-auto! px-4 max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className={`${styles.pivotContent} ${styles.fadeIn}`}>
              <h2>
                Here&apos;s what we realized after working with dozens of
                agencies.
              </h2>
              <p>
                Most EVV platforms try to do everything. Scheduling. Billing.
                HR. Payroll. Communication. And somewhere buried inside all
                that... visit verification.
              </p>

              <div className={styles.pivotTruth}>
                <p>You don&apos;t need another bloated system.</p>
              </div>

              <p>
                You need one thing done right. Clean, reliable, audit-ready
                visit verification that actually works for your caregivers and
                automatically talks to your state aggregator.
              </p>

              <p className={styles.pivotConclusion}>
                That&apos;s it. That&apos;s what we built.
              </p>
            </div>

            <div
              className={`group overflow-hidden relative w-full md:w-[400px] h-[300px] md:h-[400px] rounded-lg shrink-0`}
            >
              <Image
                src="/images/care/Healthcare-home.webp"
                alt="Caregiver with senior patient"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
                fill
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      {/* <section className={styles.solution} id="services">
        <div className="default-container mx-auto! px-4 max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl">
          <div className={`${styles.solutionHeader} ${styles.fadeIn}`}>
            <h2>Our Care Services</h2>
            <p>
              Comprehensive home care services tailored to your loved one&apos;s
              unique needs.
            </p>
          </div>

          <div className={`${styles.servicesGrid} ${styles.fadeIn}`}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceImage}>
                <Image
                  src="/images/services/personal-care.webp"
                  alt="Personal Care"
                  width={300}
                  height={200}
                />
              </div>
              <h3>Personal Care</h3>
              <p>
                Assistance with bathing, dressing, grooming, and other daily
                personal hygiene needs with dignity and respect.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <div
                className={`relative w-[300px] h-[200px] ${styles.serviceImage}`}
              >
                <Image
                  src="/images/services/companion.webp"
                  alt="Companion Care"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <h3>Companion Care</h3>
              <p>
                Meaningful companionship, conversation, and social engagement to
                combat loneliness and improve quality of life.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <div
                className={`relative w-[300px] h-[200px] ${styles.serviceImage}`}
              >
                <Image
                  src="/images/services/medication.webp"
                  alt="Companion Care"
                  fill
                  className="object-cover object-bottom"
                />
              </div>
              <h3>Medication Reminders</h3>
              <p>
                Timely reminders to take medications as prescribed, helping
                maintain health routines and prevent missed doses.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <div
                className={`relative w-[300px] h-[200px] ${styles.serviceImage}`}
              >
                <Image
                  src="/images/services/meal.webp"
                  alt="Companion Care"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <h3>Meal Preparation</h3>
              <p>
                Nutritious meal planning and preparation based on dietary needs,
                preferences, and health requirements.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <div
                className={`relative w-[300px] h-[200px] ${styles.serviceImage}`}
              >
                <Image
                  src="/images/services/mobility.webp"
                  alt="Companion Care"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <h3>Mobility Assistance</h3>
              <p>
                Safe support for walking, transfers, and movement to maintain
                independence and prevent falls.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <div
                className={`relative w-[300px] h-[200px] ${styles.serviceImage}`}
              >
                <Image
                  src="/images/services/housekeeper.webp"
                  alt="Companion Care"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <h3>Light Housekeeping</h3>
              <p>
                Maintaining a clean, safe living environment including laundry,
                dishes, and general tidying.
              </p>
            </div>
          </div>

          <div className={`${styles.solutionOutcomes} ${styles.fadeIn}`}>
            <div className={styles.outcome}>
              <div className={styles.outcomeIcon}>✓</div>
              <h3>Vetted Caregivers</h3>
              <p>
                All caregivers undergo thorough background checks and training
                verification.
              </p>
            </div>
            <div className={styles.outcome}>
              <div className={styles.outcomeIcon}>🕐</div>
              <h3>Flexible Scheduling</h3>
              <p>
                From a few hours a week to 24/7 care, we adapt to your schedule.
              </p>
            </div>
            <div className={styles.outcome}>
              <div className={styles.outcomeIcon}>💚</div>
              <h3>Personalized Care</h3>
              <p>
                Care plans tailored to individual needs, preferences, and goals.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* How It Works Section */}
      <section className={styles.solution} id="solution">
        <div className="default-container mx-auto! px-4 max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl">
          <div className={`${styles.solutionHeader} ${styles.fadeIn}`}>
            <h2>EVV that does one thing. Perfectly.</h2>
            <p>
              No confusing modules. No features you&apos;ll never use. No
              training manuals thicker than your compliance binder.
            </p>
          </div>
          <div className={`${styles.solutionFlow} ${styles.fadeIn}`}>
            <div className={styles.flowStep}>
              <span className={styles.flowStepNumber}>1</span>
              <h3>Check In</h3>
              <p>
                Caregiver checks in with GPS verification. Location and time
                recorded automatically.
              </p>
            </div>
            <div className={styles.flowStep}>
              <span className={styles.flowStepNumber}>2</span>
              <h3>Complete Tasks</h3>
              <p>
                Mark tasks complete, add clinical notes. Simple guided workflow.
              </p>
            </div>
            <div className={styles.flowStep}>
              <span className={styles.flowStepNumber}>3</span>
              <h3>Capture Signature</h3>
              <p>
                Digital patient signature for verification. Quick and compliant.
              </p>
            </div>
            <div className={styles.flowStep}>
              <span className={styles.flowStepNumber}>4</span>
              <h3>Auto-Transmit</h3>
              <p>
                Data goes straight to Sandata, HHAeXchange, CareBridge or your
                state aggregator.
              </p>
            </div>
          </div>
          <div className={`${styles.solutionOutcomes} ${styles.fadeIn}`}>
            <div className={styles.outcome}>
              <div className={styles.outcomeIcon}>⚡</div>
              <h3>Faster Visits</h3>
              <p>
                Your caregivers finish documentation in seconds, not minutes.
              </p>
            </div>
            <div className={styles.outcome}>
              <div className={styles.outcomeIcon}>👁️</div>
              <h3>Real-Time Visibility</h3>
              <p>Your admin sees everything as it happens. No surprises.</p>
            </div>
            <div className={styles.outcome}>
              <div className={styles.outcomeIcon}>✓</div>
              <h3>Audit-Ready</h3>
              <p>Your compliance records are always complete and accurate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Help Section */}
      <section className={styles.howItWorks}>
        <div className="default-container mx-auto! px-4 max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl">
          <div className="flex flex-col gap-6">
            <div className={`${styles.howItWorksHeader} ${styles.fadeIn}`}>
              <h2>6 steps. That&apos;s it.</h2>
            </div>

            <div className={`${styles.stepsGrid} ${styles.fadeIn}`}>
              {[
                "Add your patients and caregivers",
                "Define services and tasks",
                "Schedule visits",
                "Caregiver checks in (GPS verified)",
                "Complete tasks, notes, signature, check out",
                "Data transmits automatically to your state aggregator",
              ].map((text, index) => (
                <div key={index} className={styles.stepItem}>
                  <span className={styles.stepNumber}>{index + 1}</span>
                  <span className={styles.stepText}>{text}</span>
                </div>
              ))}
            </div>

            <div>
              <p className={`${styles.howItWorksTagline} ${styles.fadeIn}`}>
                No learning curve. No IT team needed. No headaches.
              </p>
              <div className={`${styles.howItWorksCta} ${styles.fadeIn}`}>
                <a href="#cta" className={`${styles.btn} ${styles.btnPrimary}`}>
                  Book Free Strategy Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className={styles.whoItsFor}>
        <div className="default-container mx-auto! px-4 max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl">
          <div className={`${styles.whoItsForHeader} ${styles.fadeIn}`}>
            <h2>
              Built for agencies that want simplicity, not software overwhelm.
            </h2>
          </div>
          <div className={`${styles.qualificationGrid} ${styles.fadeIn}`}>
            <div className={`${styles.qualificationCol} ${styles.for}`}>
              <h3>✓ This is for you if</h3>
              <ul className={styles.qualificationList}>
                <li>
                  <span className={styles.icon}>✓</span> You run a home care
                  agency and EVV compliance keeps you up at night
                </li>
                <li>
                  <span className={styles.icon}>✓</span> Your caregivers
                  complain about the current app being confusing
                </li>
                <li>
                  <span className={styles.icon}>✓</span> You&apos;ve had claim
                  denials because of missing or incorrect visit data
                </li>
                <li>
                  <span className={styles.icon}>✓</span> You&apos;re tired of
                  paying for 50 features when you only need 5
                </li>
                <li>
                  <span className={styles.icon}>✓</span> You want something that
                  just works
                </li>
              </ul>
            </div>
            <div className={`${styles.qualificationCol} ${styles.notFor}`}>
              <h3>✗ This is NOT for you if</h3>
              <ul className={styles.qualificationList}>
                <li>
                  <span className={styles.icon}>✗</span> You want an all-in-one
                  platform that does scheduling, billing, HR, and makes coffee
                </li>
                <li>
                  <span className={styles.icon}>✗</span> You like complexity for
                  the sake of it
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonials}>
        <div className="default-container mx-auto! px-4 max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl">
          <div className={`${styles.testimonialsHeader} ${styles.fadeIn}`}>
            <h2>
              They were where you are. <br />
              Here&apos;s what changed.
            </h2>
          </div>

          <div className={`${styles.testimonialsGrid} ${styles.fadeIn}`}>
            {[
              {
                quote:
                  "Our last audit was a nightmare. Missing timestamps. Incomplete records. We were terrified of the next one. After switching to this platform, our most recent audit was the smoothest we've ever had.",
                name: "Patricia Williams",
                title: "Director of Operations, Harmony Home Care, Texas",
                avatar: "/images/avatars/avatar-maria.svg",
              },
              {
                quote:
                  "We tried three different EVV systems before this. All of them promised simplicity. All of them lied. This one actually delivered. Our caregivers stopped complaining. That alone was worth it.",
                name: "Michael Rodriguez",
                title: "CEO, CareFirst Health Services, California",
                avatar: "/images/avatars/avatar-james.svg",
              },
              {
                quote:
                  "I use the app every day. Check in, do my tasks, check out. It takes seconds. I don't know why other apps make it so complicated.",
                name: "Maria Santos",
                title: "Care Coordinator, Golden Years Nursing, Florida",
                avatar: "/images/avatars/avatar-patricia.svg",
              },
            ].map((testimonial, index) => (
              <div key={index} className={styles.testimonialCard}>
                <p className={styles.testimonialQuote}>{testimonial.quote}</p>
                <div className={styles.testimonialAuthor}>
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className={styles.authorAvatarImage}
                  />
                  <div className={styles.authorInfo}>
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className={styles.finalCta} id="cta">
        <div className="default-container mx-auto! px-4 max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl">
          <div className="flex flex-col items-center gap-6">
            <div className="flex-1">
              <h2 className={styles.fadeIn}>
                Still not sure? Let&apos;s talk.
              </h2>
              <p className={`${styles.finalCtaText} ${styles.fadeIn}`}>
                No pressure. No 47-slide sales deck. Just a conversation about
                your agency, your challenges, and whether we&apos;re the right
                fit. If we&apos;re not, we&apos;ll tell you. If we are,
                we&apos;ll show you exactly how it works.
              </p>
            </div>
            <div
              className={`${styles.fadeIn} max-w-125 w-full bg-white p-6! rounded-lg shadow-lg text-left`}
            >
              <ContactForm showTitle={false} />
            </div>
          </div>
        </div>
      </section>

      <Footer ctaHref="#cta" />
    </>
  );
}
