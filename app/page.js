/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/uQplEFzY2iL
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Component() {
  return (
    <div className="bg-background text-foreground">
      <header className="w-full bg-black py-4 text-white">
        <div className="container px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center">
            <MountainIcon className="w-6 h-6 mr-2" />
            <span className="text-lg font-bold">EXO Code Labs</span>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Home
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Services
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Team
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Portfolio
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <section className="w-full py-20 md:py-32 bg-gradient-to-r from-[#FF6B00] to-[#FF9100]">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                Elevate Your Digital Presence with EXO Code Labs
              </h1>
              <p className="text-lg md:text-xl text-foreground/80">
                We are a team of passionate software engineers and designers
                dedicated to crafting exceptional digital experiences.
              </p>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-black px-8 text-sm font-medium text-white shadow transition-colors hover:bg-black/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Get Started
              </Link>
            </div>
            <img
              src="images/logo.png"
              width="550"
              height="550"
              alt="Hero"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="space-y-8 text-center">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Our Services
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Discover how we can transform your digital landscape.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="rounded-lg bg-muted p-6 text-left space-y-4">
                <CodeIcon className="w-10 h-10 text-[#FF6B00]" />
                <h3 className="text-2xl font-bold">Web Development</h3>
                <p className="text-muted-foreground">
                  Our expert team crafts custom web applications that are
                  visually stunning, highly functional, and optimized for
                  performance.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-6 text-left space-y-4">
                <SmartphoneIcon className="w-10 h-10 text-[#FF6B00]" />
                <h3 className="text-2xl font-bold">Mobile Development</h3>
                <p className="text-muted-foreground">
                  We develop cutting-edge mobile apps for both iOS and Android
                  platforms, ensuring a seamless user experience across devices.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-6 text-left space-y-4">
                <TypeIcon className="w-10 h-10 text-[#FF6B00]" />
                <h3 className="text-2xl font-bold">UI/UX Design</h3>
                <p className="text-muted-foreground">
                  Our designers create visually stunning and intuitive user
                  interfaces that captivate your audience and drive engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-20 md:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="space-y-8 text-center">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                What Our Clients Say
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Hear from the people who have worked with us.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="rounded-lg bg-background p-6 text-left space-y-4 shadow-md">
                <blockquote className="text-lg font-semibold leading-snug">
                  &ldquo;EXO Code Labs has been an invaluable partner in helping
                  us transform our digital presence. Their team's expertise and
                  attention to detail have been truly impressive.&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <img
                    src="/placeholder.svg"
                    width="50"
                    height="50"
                    alt="Testimonial Avatar"
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold">Jane Doe</div>
                    <div className="text-muted-foreground text-sm">
                      CEO, Acme Inc.
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg bg-background p-6 text-left space-y-4 shadow-md">
                <blockquote className="text-lg font-semibold leading-snug">
                  &ldquo;The team at EXO Code Labs has consistently delivered
                  high-quality work that has exceeded our expectations. Their
                  attention to detail and commitment to our success is
                  unparalleled.&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <img
                    src="/placeholder.svg"
                    width="50"
                    height="50"
                    alt="Testimonial Avatar"
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold">John Smith</div>
                    <div className="text-muted-foreground text-sm">
                      CTO, Globex Corporation
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="rounded-lg p-6 text-left space-y-4"></div> */}
              {/* <div className="rounded-lg bg-background p-6 text-left space-y-4 shadow-md">
                <blockquote className="text-lg font-semibold leading-snug">
                  &ldquo;Working with EXO Code Labs has been a game-changer for
                  our business. Their team's expertise and innovative solutions
                  have helped us stay ahead of the competition.&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <img
                    src="/placeholder.svg"
                    width="50"
                    height="50"
                    alt="Testimonial Avatar"
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold">Sarah Johnson</div>
                    <div className="text-muted-foreground text-sm">
                      CMO, Stark Industries
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-20 md:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="space-y-8 text-center">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Meet Our Team
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Passionate individuals dedicated to your success.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="rounded-lg p-6 text-left space-y-4 "></div>
              <div className="rounded-lg bg-background p-6 text-left space-y-4 shadow-md text-center">
                <img
                  src="/images/team/Rishi_FullstackDeveloper.jpg"
                  width="150"
                  height="150"
                  alt="Team Member"
                  className="mx-auto aspect-square overflow-hidden rounded-full object-cover"
                />
                <h3 className="text-2xl font-bold ">Rishi Patel</h3>
                <p className="text-muted-foreground">Co-Founder, CEO</p>
              </div>
              <div className="rounded-lg bg-background p-6 text-left space-y-4 shadow-m text-center">
                <img
                  src="/placeholder.svg"
                  width="150"
                  height="150"
                  alt="Team Member"
                  className="mx-auto aspect-square overflow-hidden rounded-full object-cover"
                />
                <h3 className="text-2xl font-bold">Jane Smith</h3>
                <p className="text-muted-foreground">Co-Founder, CTO</p>
              </div>
              <div className="rounded-lg  p-6 text-left space-y-4"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="space-y-8 text-center">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Our Portfolio
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Explore our latest projects and see our work in action.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="rounded-lg overflow-hidden shadow-md">
                <img
                  src="/placeholder.svg"
                  width="550"
                  height="310"
                  alt="Portfolio Item"
                  className="w-full aspect-video object-cover"
                />
                <div className="p-6 bg-background">
                  <h3 className="text-2xl font-bold">Project 1</h3>
                  <p className="text-muted-foreground">
                    A modern and responsive web application.
                  </p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img
                  src="/placeholder.svg"
                  width="550"
                  height="310"
                  alt="Portfolio Item"
                  className="w-full aspect-video object-cover"
                />
                <div className="p-6 bg-background">
                  <h3 className="text-2xl font-bold">Project 2</h3>
                  <p className="text-muted-foreground">
                    A sleek and intuitive mobile application.
                  </p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img
                  src="/placeholder.svg"
                  width="550"
                  height="310"
                  alt="Portfolio Item"
                  className="w-full aspect-video object-cover"
                />
                <div className="p-6 bg-background">
                  <h3 className="text-2xl font-bold">Project 3</h3>
                  <p className="text-muted-foreground">
                    A visually stunning and user-friendly website.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-20 md:py-32 bg-gradient-to-r from-[#FF6B00] to-[#FF9100]">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Ready to Elevate Your Digital Presence?
              </h2>
              <p className="text-lg md:text-xl text-foreground/80">
                Contact us today and let's discuss how we can transform your
                business with our cutting-edge solutions.
              </p>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-black px-8 text-sm font-medium text-white shadow transition-colors hover:bg-black/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Get in Touch
              </Link>
            </div>
            <img
              src="/placeholder.svg"
              width="550"
              height="550"
              alt="Call to Action"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
            />
          </div>
        </div>
      </section>
      <footer className="w-full bg-black py-8 text-white">
        <div className="container px-4 md:px-6 flex flex-" />
      </footer>
    </div>
  )
}

function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}

function SmartphoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  )
}

function TypeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="4 7 4 4 20 4 20 7" />
      <line x1="9" x2="15" y1="20" y2="20" />
      <line x1="12" x2="12" y1="4" y2="20" />
    </svg>
  )
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
