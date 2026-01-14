import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <section className="bg-[var(--grey)] py-30" id="studies">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-xs font-semibold uppercase tracking-widest text-[var(--red)]">
          Intelligence Briefs
        </h2>

        <p className="mx-auto mt-3 max-w-lg text-center text-3xl font-semibold tracking-tight text-[var(--white)] sm:text-4xl">
          Risks, Vulnerabilities, and Impact opportunities
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
          {[
            {
              img: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1",
              title: "How to use sticky note for problem solving",
              date: "20 October 2019",
            },
            {
              img: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc",
              title: "How to use sticky note for problem solving",
              date: "20 October 2019",
            },
          ].map((post, index) => (
            <div key={index} className="lg:flex">
              <img
                className="object-cover w-full h-56 rounded-lg lg:w-64"
                src={`${post.img}?auto=format&fit=crop&w=1470&q=80`}
                alt={post.title}
              />

              <div className="flex flex-col justify-between py-6 lg:mx-6">
                <Link
                  to='/blog'
                  className="text-xl font-semibold text-white hover:underline"
                >
                  {post.title}
                </Link>

                <span className="text-sm text-gray-300">
                  {post.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
