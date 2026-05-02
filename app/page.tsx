import Image from "next/image";

export const metadata = {
  title: "My Profile",
  description:
    "Halaman Portofolio saya yang menampilkan pengalaman, proyek, dan kontak saya.",
};

export default function Home() {
  const portfolioHighlights = [
    {
      period: "2025 - Present",
      title: "Web & Mobile Developer",
      description:
        "Building responsive web apps and cross-platform prototypes for hobbies and personal projects.",
    },
    {
      period: "2026",
      title: "IoT Prototype Research Assistant",
      description:
        "Designed sensor-based monitoring systems with ESP32 and integrated cloud data pipelines for analytics.",
    },
    {
      period: "2026",
      title: "Cloud & Big Data Learner",
      description:
        "Focused on Google Cloud & AWS fundamentals, distributed systems, and hands-on Hadoop cluster experimentation.",
    },
  ];

  const projects = [
    {
      name: "Resep Nusantara",
      stack: ["Flutter", "Dart"],
      summary:
        "This is my personal project to fulfill the submission for the Belajar Membuat Aplikasi Flutter untuk Pemula class at Dicoding. In this project, I built a mobile recipe catalog app using Flutter, focusing on a responsive UI and intuitive navigation, as well as state management to ensure the app's performance is light and fast.",
      status: "Submission Project",
      link: "https://github.com/TamaDioo/resepnusantara",
    },
    {
      name: "Bookshelf API",
      stack: ["Node.js", "Express.js", "Docker", "CI/CD"],
      summary:
        "This is my personal project to fulfill the submission for the Learn Back-End Beginners with JavaScript class at Dicoding. In this project, I built a RESTful API for a book data management application using Node.js and Express, and implemented a CI/CD pipeline using GitHub Actions and containerization with Docker for automated deployment.",
      status: "Submission Project",
      link: "https://github.com/TamaDioo/bookshelf-api",
    },
    {
      name: "Web Scraping Fashion Studio",
      stack: [
        "Python",
        "BeautifulSoup",
        "Pandas",
        "PostgreSQL",
        "Google sheets API",
      ],
      summary:
        "This project is an implementation of an ETL (Extract, Transform, Load) Pipeline using Python to automate the collection and processing of product data from a fictional e-commerce platform, Fashion Studio, to fulfill the submission of the Learning Fundamentals of Data Processing class at Dicoding.",
      status: "Submission Project",
      link: "https://github.com/TamaDioo/submission-pemda",
    },
    {
      name: "Bookshelf App",
      stack: ["JavaScript", "HTML", "CSS"],
      summary:
        "This is my individual project to complete the final assignment for the class Belajar Membuat Front-End Web untuk Pemula at Dicoding.",
      status: "Submission Project",
      link: "https://tamadioo.github.io/bookshelf-app/",
    },
    {
      name: "AKSARA",
      stack: ["Laravel", "MySQL", "PHP", "Bootstrap CSS"],
      summary:
        "This is a Semester 4 Project Based Learning group project with the theme of Achievement Recording System and Competition Recommendations.",
      status: "Project Based Learning",
      link: "https://github.com/Ghetsa/PBL-AKSARA",
    },
    {
      name: "BeTaTI",
      stack: ["HTML", "Bootstrap CSS", "JavaScript", "PHP"],
      summary:
        'This is a Project Based Learning group project for Semester 3 with the theme of "Sistem Bebas Tanggungan Jurusan Teknologi Informasi".',
      status: "Project Based Learning",
      link: "https://github.com/rafiody16/PBL_BebasTanggungan",
    },
    {
      name: "Jawara Pintar",
      stack: ["Flutter", "Supabase", "Python"],
      summary:
        "This is a Semester 5 Project-Based Learning group project focused on a mobile application for citizen community management. In this project, we built an integrated mobile application that includes financial management, a local marketplace, and a citizen activity information system. I personally focused on integrating Supabase as a Backend-as-a-Service (BaaS) for real-time database management and user authentication.",
      status: "Project Based Learning",
      link: "https://github.com/TamaDioo/jawara-pintar",
    },
    {
      name: "Sistem Penggajian Karyawan Hotel",
      stack: ["Java"],
      summary:
        "This project is designed to simplify and efficiently calculate hotel employee salaries using a Command Line Interface (CLI)-based interface. Its attractive features include accurate salary calculations based on job category, the ability to manage allowances and bonuses, and structured payroll reports.",
      status: "Final Assignment",
      link: "https://github.com/viraalfita/SistemPenggajian",
    },
  ];

  const socials = [
    {
      label: "Email",
      value: "tamadio91@gmail.com",
      href: "mailto:tamadio91@gmail.com",
    },
    {
      label: "GitHub",
      value: "github.com/TamaDioo",
      href: "https://github.com/TamaDioo",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/dio-andika-pradana-mulia-tama-b51a252b4/",
      href: "https://www.linkedin.com/in/dio-andika-pradana-mulia-tama-b51a252b4/",
    },
  ];

  return (
    <main className="relative isolate overflow-hidden px-6 py-10 md:px-10 md:py-14">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_15%,rgba(56,189,248,0.22),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(34,197,94,0.18),transparent_40%),radial-gradient(circle_at_60%_75%,rgba(245,158,11,0.16),transparent_35%)]" />
      <div className="mx-auto max-w-6xl space-y-14">
        <header className="reveal-up rounded-3xl border border-white/50 bg-white/75 p-7 shadow-xl shadow-slate-300/30 backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-900/65 dark:shadow-slate-950/40 md:p-10">
          <div className="mb-6 flex flex-wrap items-center gap-3 text-xs font-semibold tracking-wide text-slate-700 dark:text-slate-200">
            <span className="rounded-full bg-slate-900 px-3 py-1 text-slate-50 dark:bg-slate-100 dark:text-slate-900">
              Student Portfolio
            </span>
            <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sky-700 dark:border-sky-700/70 dark:bg-sky-500/15 dark:text-sky-200">
              Informatics Engineering
            </span>
            <span className="rounded-full border border-amber-100 bg-amber-50 px-3 py-1 text-amber-700 dark:border-amber-700/70 dark:bg-amber-500/15 dark:text-amber-200">
              Jurusan Teknologi Informasi
            </span>
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-emerald-700 dark:border-emerald-700/70 dark:bg-emerald-500/15 dark:text-emerald-200">
              Politeknik Negeri Malang
            </span>
          </div>

          <div className="flex flex-col-reverse gap-8 md:flex-row md:items-center gap-10 lg:gap-20 md:pr-8 lg:pr-16">
            {/* Sisi Kiri: Nama, Deskripsi, Tombol */}
            <div className="flex-1">
              <h1 className="max-w-4xl text-balance text-4xl font-bold leading-tight tracking-tight text-slate-900 dark:text-slate-100 md:text-6xl">
                Dio Andika Pradana Mulia Tama
              </h1>
              <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-slate-600 dark:text-slate-300 md:text-lg">
                Passionate builder at the intersection of full-stack
                engineering, cloud systems, IoT prototyping, and data
                engineering.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-300"
                >
                  Explore Projects
                </a>
                <a
                  href="#portfolio"
                  className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-500 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:hover:border-slate-400"
                >
                  View Portfolio
                </a>
              </div>
            </div>

            {/* Sisi Kanan: Avatar Foto Profil */}
            <div className="flex shrink-0 justify-center">
              <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-white/80 shadow-xl dark:border-slate-700/80 md:h-48 md:w-48">
                <Image
                  src="/profile.png"
                  alt="Profile of Dio Andika Pradana Mulia Tama"
                  className="h-full w-full object-cover"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>

          {/* Bagian bawah (Student ID dkk) tetap sama persis! */}
          <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800/90">
              <dt className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Student ID
              </dt>
              <dd className="mt-1 text-lg font-semibold text-slate-900 dark:text-slate-100">
                2341720098
              </dd>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800/90">
              <dt className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Focus Area
              </dt>
              <dd className="mt-1 text-lg font-semibold text-slate-900 dark:text-slate-100">
                Software + IoT + Data Engineering
              </dd>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800/90">
              <dt className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Current Goal
              </dt>
              <dd className="mt-1 text-lg font-semibold text-slate-900 dark:text-slate-100">
                Building impactful products
              </dd>
            </div>
          </dl>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-slate-200 bg-white/90 p-4 transition hover:-translate-y-0.5 hover:border-sky-300 dark:border-slate-700 dark:bg-slate-800/80 dark:hover:border-sky-400"
              >
                <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {social.label}
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-800 dark:text-slate-100">
                  {social.value}
                </p>
              </a>
            ))}
          </div>
        </header>

        <section className="reveal-up grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <article className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-md shadow-slate-200/60 backdrop-blur dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-slate-950/35">
            <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">
              Software Engineering
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              Full-stack web development with Next.js, Node.js, Laravel, and
              mobile apps using Flutter.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-md shadow-slate-200/60 backdrop-blur dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-slate-950/35">
            <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">
              Hardware & IoT
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              Hands-on prototyping with ESP32 and sensor integration for
              real-world automation use cases.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-md shadow-slate-200/60 backdrop-blur dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-slate-950/35">
            <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">
              Data & Cloud
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              Exploring distributed systems, Google Cloud, Amazon Web Service,
              and Hadoop to design reliable, scalable data platforms.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-md shadow-slate-200/60 backdrop-blur dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-slate-950/35">
            <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">
              Data Engineering
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              Learning scraping techniques, data pipelines, and analytics for
              extracting and processing large datasets.
            </p>
          </article>
        </section>

        <section
          id="portfolio"
          className="reveal-up rounded-3xl border border-slate-200 bg-white p-7 shadow-lg shadow-slate-200/60 dark:border-slate-700 dark:bg-slate-900/75 dark:shadow-slate-950/40 md:p-10"
        >
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-sky-700">
                Portfolio
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                Experience Highlights
              </h2>
            </div>
            <p className="max-w-xl text-sm text-slate-600 dark:text-slate-300 md:text-base">
              A snapshot of the journey, from core engineering fundamentals to
              product-focused experimentation and deployment.
            </p>
          </div>

          <div className="space-y-4">
            {portfolioHighlights.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 p-5 transition hover:border-sky-300 hover:bg-sky-50/50 dark:border-slate-700 dark:hover:border-sky-400 dark:hover:bg-slate-800/90"
              >
                <p className="text-sm font-semibold text-sky-700">
                  {item.period}
                </p>
                <h3 className="mt-1 text-xl font-bold text-slate-900 dark:text-slate-100">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="reveal-up space-y-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
              Projects
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              Things I Build
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-md shadow-slate-200/50 transition hover:-translate-y-1 hover:border-emerald-300 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-slate-950/40 dark:hover:border-emerald-400"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                  {project.status}
                </p>
                <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-slate-100">
                  {project.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {project.summary}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <span className="mt-5 text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                  View repository &rarr;
                </span>
              </a>
            ))}
          </div>
        </section>

        <footer className="reveal-up rounded-3xl border border-slate-200 bg-white/85 p-7 text-center shadow-lg shadow-slate-200/60 backdrop-blur dark:border-slate-700 dark:bg-slate-900/75 dark:shadow-slate-950/40">
          <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            Open to collaboration on web apps, mobile apps, IoT systems, and
            cloud-native projects.
          </p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Let&apos;s build something impactful together.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            {socials.map((social) => (
              <a
                key={`footer-${social.label}`}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-700 transition hover:border-slate-500 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:border-slate-300 dark:hover:bg-slate-800"
              >
                {social.label}
              </a>
            ))}
          </div>
        </footer>
      </div>
      <div className="pointer-events-none absolute -right-20 top-20 -z-10 h-56 w-56 rounded-full bg-gradient-to-br from-sky-300 to-emerald-300 opacity-30 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-16 -z-10 h-56 w-56 rounded-full bg-gradient-to-br from-amber-300 to-sky-300 opacity-25 blur-3xl" />
      <div className="pointer-events-none absolute right-10 top-[30%] -z-10 h-16 w-16 float-slow rounded-full border-4 border-white/50 bg-sky-300/40" />
      <div className="pointer-events-none absolute left-8 top-[65%] -z-10 h-12 w-12 float-delayed rounded-full border-4 border-white/50 bg-emerald-300/40" />
    </main>
  );
}
