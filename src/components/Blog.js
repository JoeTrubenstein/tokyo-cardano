import React from "react";

const Blog = () => {
    return (
<section className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
  <div className="pb-4 border-b border-gray-600">
    <h3 className="text-xl font-semibold leading-6 text-gray-800">Latest Entries</h3>
  </div>
  <div className="relative mx-auto max-w-7xl">
    <div className="grid max-w-lg gap-8 mx-auto mt-12 lg:grid-cols-2 lg:max-w-none">
      <div className="flex flex-col mb-12 overflow-hidden cursor-pointer">
        <a href="/blog-post">
          <div className="flex-shrink-0">
            <img className="object-cover w-full h-48 rounded-lg" src="https://source.unsplash.com/random" alt="blog excerpt content" />
          </div>
        </a>
        <div className="flex flex-col justify-between flex-1">
          <a href="/blog-post" />
          <div className="flex-1">
            <a href="/blog-post">
              <div className="flex pt-6 space-x-1 text-sm text-gray-500">
                <time dateTime="2020-03-10"> Mar 10, 2020 </time>
                <span aria-hidden="true"> · </span>
                <span> 4 min read </span>
              </div>
            </a>
            <a href="#" className="block mt-2 space-y-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tighter text-neutral-600">Typography on app.</h3>
              <p className="text-lg font-normal text-gray-500">Filling text so you can see how it looks like with text. Did I said text?</p>
              <div className="flex items-center mt-6">
                <div>
                  <img className="inline-block rounded-full h-9 w-9" src="https://source.unsplash.com/random" alt="blog excerpt content" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-700 group-hover:text-neutral-600">Jazz Torp</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        <div className="flex flex-col mb-12 overflow-hidden cursor-pointer">
          <a href="/blog-post">
            <div className="flex-shrink-0">
              <img className="object-cover w-full h-48 rounded-lg" src="https://source.unsplash.com/random" alt="blog excerpt content" />
            </div>
          </a>
          <div className="flex flex-col justify-between flex-1">
            <a href="/blog-post" />
            <div className="flex-1">
              <a href="/blog-post">
                <div className="flex pt-6 space-x-1 text-sm text-gray-500">
                  <time dateTime="2020-03-10"> Mar 10, 2020 </time>
                  <span aria-hidden="true"> · </span>
                  <span> 4 min read </span>
                </div>
              </a>
              <a href="#" className="block mt-2 space-y-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tighter text-neutral-600">Typography on app.</h3>
                <p className="text-lg font-normal text-gray-500">Filling text so you can see how it looks like with text. Did I said text?</p>
                <div className="flex items-center mt-6">
                  <div>
                    <img className="inline-block rounded-full h-9 w-9" src="https://source.unsplash.com/random" alt="blog excerpt content"/>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-700 group-hover:text-neutral-600">Robert Zox</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col mb-12 overflow-hidden cursor-pointer">
          <a href="/blog-post">
            <div className="flex-shrink-0">
              <img className="object-cover w-full h-48 rounded-lg" src="https://source.unsplash.com/random" alt="blog excerpt content" />
            </div>
          </a>
          <div className="flex flex-col justify-between flex-1">
            <a href="/blog-post" />
            <div className="flex-1">
              <a href="/blog-post">
                <div className="flex pt-6 space-x-1 text-sm text-gray-500">
                  <time dateTime="2020-03-10"> Mar 10, 2020 </time>
                  <span aria-hidden="true"> · </span>
                  <span> 4 min read </span>
                </div>
              </a>
              <a href="#" className="block mt-2 space-y-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tighter text-neutral-600">Typography on app.</h3>
                <p className="text-lg font-normal text-gray-500">Filling text so you can see how it looks like with text. Did I said text?</p>
                <div className="flex items-center mt-6">
                  <div>
                    <img className="inline-block rounded-full h-9 w-9" src="https://source.unsplash.com/random" alt="blog excerpt content" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-700 group-hover:text-neutral-600">Thomas Narrow</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




    )
}
export default Blog