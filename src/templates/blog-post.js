import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
// import Bio from "../components/bio"
import Layout from '../components/Layout';
import SeoWrapper from '../components/SeoWrapper';

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  // const { previous, next } = data
  const image = getImage(post.frontmatter.featuredImage);

  return (
    <Layout specialNav={true} currentPage={location} title={siteTitle}>
      <SeoWrapper
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

      <section className="dark:bg-nightBack dark:text-white">
        <div className=" dark:bg-nightBack px-4 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
          <div className="flex flex-wrap items-center mx-auto max-w-7xl">
            <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
              <div>
                <div className="relative w-full max-w-lg">
                  {/* <div className="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
            <div className="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" /> */}
                  <div className="relative">
                    <div className="object-cover object-center mx-auto rounded-lg shadow-2xl">
                      <GatsbyImage
                        layout="fullWidth"
                        objectFit="cover"
                        image={image}
                        alt={'ayyylmao'}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
              <span className="mb-8 text-xs font-bold tracking-widest text-babyBlue dark:text-nightBlue uppercase">
                {' '}
                {post.frontmatter.date}
              </span>
              <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl dark:text-white">
                {post.frontmatter.title}
              </h1>
              <p className="mb-8 text-base leading-relaxed text-left text-gray-500 text-babyBlue dark:text-nightBlue">
                {post.frontmatter.excerpt}
              </p>
              <div className="mt-0 lg:mt-6 max-w-7xl sm:flex">
                {/* <div className="mt-3 rounded-lg sm:mt-0">
            <button className="items-center block px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Get bundle</button>
          </div>
          <div className="mt-3 rounded-lg sm:mt-0 sm:ml-3">
            <button className="items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">See features</button>
          </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* The Full Post in Glory! */}
      <div
        className="px-4 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 prose dark:text-white dark:prose-headings:text-white dark:bg-nightBack dark:prose-a:text-nightBlue"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
      {/*  */}

      {/* <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav> */}
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!, $previousPostId: String, $nextPostId: String) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        excerpt
        featuredImage {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
