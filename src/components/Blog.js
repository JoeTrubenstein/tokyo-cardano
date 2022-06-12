import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Blog = () => {
  return (
    <div>
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                title
              }
            }
            allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
              nodes {
                excerpt
                fields {
                  slug
                }
                frontmatter {
                  date(formatString: "MMMM DD, YYYY")
                  title
                  description
                  excerpt
                  featured
                  featuredImage {
                    childImageSharp {
                      gatsbyImageData(
                        height: 200
                        placeholder: BLURRED
                        formats: [AUTO, WEBP, AVIF]
                      )
                    }
                  }
                }
              }
            }
          }
        `}
        render={(data) => (
          <section
            id="blogArea"
            className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
            <div className="pb-4 border-b border-gray-600">
              <h3 className="text-xl font-semibold leading-6 text-gray-800 dark:text-white">
                Blog
              </h3>
            </div>
            <div className="relative mx-auto max-w-7xl">
              <div className="grid max-w-lg gap-8 mx-auto mt-12 lg:grid-cols-2 lg:max-w-none">
                {/*  */}
                {data.allMarkdownRemark.nodes.map((post) => {
                  const image = getImage(post.frontmatter.featuredImage);
                  if (post.frontmatter.featured === true) {
                    return (
                      <div
                        key={post.fields.slug}
                        className="flex flex-col mb-12 overflow-hidden cursor-pointer">
                        <a href={post.fields.slug}>
                          <div className="flex-shrink-0">
                            <div className="object-cover w-full h-48 rounded-lg">
                              <GatsbyImage
                                image={image}
                                alt={'ayyylmao'}
                                style={{
                                  width: '100%',
                                  height: '100%',
                                  borderRadius:'15px'
                                }}
                              />
                            </div>
                          </div>
                        </a>
                        <div className="flex flex-col justify-between flex-1">
                          <div className="flex-1">
                            <a href={post.fields.slug}>
                              <div className="flex pt-6 space-x-1 text-sm text-babyBlue dark:text-nightBlue">
                                <time dateTime="2020-03-10"> {post.frontmatter.date}</time>
                                {/* <span aria-hidden="true"> · </span> */}
                                {/* <span> 4 min read </span> */}
                              </div>
                            </a>
                            <a href={post.fields.slug} className="block mt-2 space-y-6">
                              <h3 className="text-2xl font-semibold leading-none tracking-tighter text-neutral-600 dark:text-white">
                                {post.frontmatter.title}
                              </h3>
                              <p className="text-lg font-normal text-gray-500 dark:text-white">
                                {post.frontmatter.excerpt}
                              </p>
                              {/* <div className="flex items-center mt-6">
                                <div>
                                  <img
                                    className="inline-block rounded-full h-9 w-9"
                                    src="/assets/images/placeholders/avatar-bw-1.jpg"
                                    alt
                                  />
                                </div>
                                <div className="ml-3">
                                  <p className="text-sm font-medium text-gray-700 group-hover:text-neutral-600">
                                    Jazz Torp
                                  </p>
                                </div>
                              </div> */}
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}

                <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                  {/*  */}
                  {data.allMarkdownRemark.nodes.map((post) => {
                    const image = getImage(post.frontmatter.featuredImage);
                    if (post.frontmatter.featured === false) {
                      return (
                        <div
                          key={post.fields.slug}
                          className="flex flex-col mb-12 overflow-hidden cursor-pointer">
                          <a href={post.fields.slug}>
                            <div className="flex-shrink-0">
                              <div className="w-full h-48 rounded-lg">
                                <GatsbyImage
                                  image={image}
                                  alt={'ayyylmao'}
                                  style={{
                                    width: '100%',
                                    height: '100%',
                                    borderRadius:'15px'
                                  }}
                                />
                              </div>
                            </div>
                          </a>
                          <div className="flex flex-col justify-between flex-1">
                            <div className="flex-1">
                              <a href={post.fields.slug}>
                                <div className="flex pt-6 space-x-1 text-sm text-babyBlue dark:text-nightBlue">
                                  <time dateTime="2020-03-10"> {post.frontmatter.date}</time>
                                  {/* <span aria-hidden="true"> · </span> */}
                                  {/* <span> 4 min read </span> */}
                                </div>
                              </a>
                              <a href={post.fields.slug} className="block mt-2 space-y-6">
                                <h3 className="text-2xl font-semibold leading-none tracking-tighter text-neutral-600 dark:text-white">
                                  {post.frontmatter.title}
                                </h3>
                                <p className="text-lg font-normal text-gray-500 dark:text-white">
                                  {post.frontmatter.excerpt}
                                </p>
                                {/* <div className="flex items-center mt-6">
                                  <div>
                                    <img
                                      className="inline-block rounded-full h-9 w-9"
                                      src="/assets/images/placeholders/avatar-bw-2.jpg"
                                      alt
                                    />
                                  </div>
                                  <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-700 group-hover:text-neutral-600">
                                      Robert Zox
                                    </p>
                                  </div>
                                </div> */}
                              </a>
                            </div>
                          </div>
                        </div>
                      );
                    }
                    return null;
                  })}
                  {/*  */}
                </div>
              </div>
            </div>
          </section>
        )}
      />
    </div>
  );
};
export default Blog;
