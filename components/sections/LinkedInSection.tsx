"use client";

import React, { useEffect } from "react";
import AOS from "aos";

const profileStats = [
  { value: "500+", label: "Connections" },
  { value: "4+", label: "Yrs Active" },
  { value: "50+", label: "Posts" },
];

const posts = [
  {
    id: "7381812552483196928",
    title: "Why I Switched to OIDC for AWS Access and You Should Too",

    excerpt:
      "Security.",
    image: "/images/linkedin/oidc-aws-access.svg",
  },
  {
    id: "7301039725677539332",
    title: "Zero 𝗗𝗼𝘄𝗻𝘁𝗶𝗺𝗲 𝗗𝗲𝗽𝗹𝗼𝘆𝗺𝗲𝗻𝘁𝘀 with Blue-Green 𝗗𝗲𝗽𝗹𝗼𝘆𝗺𝗲𝗻𝘁 in CI/CD Pipeline!",
    excerpt:
      "CI-CD",
    image: "/images/linkedin/blue-green-cicd.svg",
  },
  {
    id: "7229133258930700289",
    title: "Sharing My Latest Learning Progress: Mastering Cloud-Native Applicationwith AWS, DevSecOps and k8",

    excerpt:
      "Cloud-Native",
    image: "/images/linkedin/cloud-native-devsecops-k8s.svg",
  },
];

const LinkedInSection = () => {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <section className="py-24 px-5 md:px-20 bg-gray-100 dark:bg-[#0C0C0C] overflow-hidden relative">

      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04] dark:opacity-[0.03]">
        <span className="text-[clamp(220px,35vw,480px)] font-bold text-gray-800 dark:text-white">
          LI
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ================= HEADER ================= */}
        <div className="grid md:grid-cols-2 gap-16 mb-24 items-center">

          <div data-aos="fade-up">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px bg-gray-400 dark:bg-neutral-600" />
              <span className="text-[10px] uppercase tracking-[0.35em] text-gray-500">
                Professional Network
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
              Featured LinkedIn
            </h2>

            <p className="text-gray-500 dark:text-neutral-400 max-w-sm mb-8">
              Deeper dives into DevOps, SRE, cloud infrastructure, automation, and building reliable systems.
            </p>

            <a
              href="https://www.linkedin.com/in/olusegunakinnola"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-3 border border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
            >
              Connect on LinkedIn →
            </a>
          </div>

          {/* PROFILE CARD */}
          <div data-aos="fade-up" data-aos-delay="150">
            <div className="border border-gray-300 dark:border-neutral-800 p-8 relative">

              <div className="flex items-start gap-5 mb-10">
                <div className="w-16 h-16 flex items-center justify-center border bg-gray-200 dark:bg-neutral-900">
                  <span className="font-bold text-gray-800 dark:text-white">
                    OLU
                  </span>
                </div>

                <div>
                  <p className="text-lg font-bold text-black dark:text-white">
                    Olusegun Akinnola
                  </p>
                  <p className="text-sm text-gray-500">
                    DevOps Engineer · SRE
                  </p>
                  <p className="text-xs text-gray-400">
                    Lagos, Nigeria
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {profileStats.map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-2xl font-bold text-black dark:text-white">
                      {s.value}
                    </p>
                    <p className="text-[10px] uppercase text-gray-500">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* ================= POSTS ================= */}
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <div
              key={post.id}
              className="group border border-neutral-300 dark:border-neutral-800 overflow-hidden hover:border-black dark:hover:border-white transition"
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >

              {/* IMAGE */}
              <div className="h-52 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">

                <div className="text-[10px] text-gray-400 uppercase tracking-[0.3em] mb-3">
                  {String(index + 1).padStart(2, "0")} — LinkedIn Post
                </div>

                <h3 className="font-bold text-black dark:text-white mb-2">
                  {post.title}
                </h3>

                <p className="text-sm text-gray-500 mb-5">
                  {post.excerpt}
                </p>

                <a
                  href={`https://www.linkedin.com/feed/update/urn:li:activity:${post.id}`}
                  target="_blank"
                  className="text-sm font-semibold text-black dark:text-white hover:underline"
                >
                  Read more →
                </a>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LinkedInSection;
