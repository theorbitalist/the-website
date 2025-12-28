import React from "react";
import { StarIcon } from "@heroicons/react/20/solid";

const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/7/74/Delta_IV_launch_2013-08-28.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/7/74/Delta_IV_launch_2013-08-28.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/7/74/Delta_IV_launch_2013-08-28.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/7/74/Delta_IV_launch_2013-08-28.jpg  ",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    {
      id: "white",
      name: "White",
      classes: "bg-white checked:outline-gray-400",
    },
    {
      id: "gray",
      name: "Gray",
      classes: "bg-gray-200 checked:outline-gray-400",
    },
    {
      id: "black",
      name: "Black",
      classes: "bg-gray-900 checked:outline-gray-900",
    },
  ],
  sizes: [
    { name: "XXS", inStock: false },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
    { name: "3XL", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Details = () => {
  return (
    <div className="text-(--white)">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    fill="currentColor"
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    aria-hidden="true"
                    className="h-5 w-4"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium "
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
          <img
            alt={product.images[0].alt}
            src={product.images[0].src}
            className="row-span-2 aspect-3/4 size-full rounded-lg object-cover max-lg:hidden"
          />
          <img
            alt={product.images[1].alt}
            src={product.images[1].src}
            className="col-start-2 aspect-3/2 size-full rounded-lg object-cover max-lg:hidden"
          />
          <img
            alt={product.images[2].alt}
            src={product.images[2].src}
            className="col-start-2 row-start-2 aspect-3/2 size-full rounded-lg object-cover max-lg:hidden"
          />
          <img
            alt={product.images[3].alt}
            src={product.images[3].src}
            className="row-span-2 aspect-4/5 size-full object-cover sm:rounded-lg lg:aspect-3/4"
          />
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-5xl px-4 pt-10 pb-16 sm:px-6 lg:px-8 text-(--white)">
          {/* Product Title */}
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {product.name}
          </h1>

          {/* Content */}
          <div className="mt-8 space-y-10">
            {/* Description */}
            <div>
              <h3 className="sr-only">Description</h3>
              <p className="text-xl ">{product.description}</p>
            </div>

            {/* Highlights */}
            <div>
              <h3 className="text-2xl font-medium ">Highlights</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-xl">
                {product.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>

            {/* Details */}
            <div>
              <h2 className="text-2xl font-medium ">Details</h2>
              <p className="mt-4 text-xl ">{product.details}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
