import React, { useState, useEffect } from "react"

const CnftFeed = () => {
  // Client-side Runtime Data Fetching

  const [cnftList, setCnftList] = useState(0)
  useEffect(() => {
    // get data from GitHub api
    fetch(`https://api.opencnft.io/1/rank?window=24h`)
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setCnftList(resultData.ranking)
      }) // set data for the number of stars
  }, [])

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
            ROOF PARTY POLAROID
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Master Cleanse Reliac Heirloom
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep jianbing selfies heirloom prism
            food truck ugh squid celiac humblebrag.
          </p>
        </div>

        <div className="flex flex-wrap -m-4">
          {cnftList ? (
            cnftList.slice(0, 6).map(cnft => (
              <div key={cnft.name} className="p-4 md:w-1/3 w-full">
                <div className="h-full border-2 border-bubble-gum border-opacity-60 rounded-lg overflow-hidden">
                  {cnft.thumbnail_type === "video/mp4" ? (
                    <video
                      autoPlay
                      loop
                      muted
                      className="lg:h-64 md:h-36 w-full h-56 object-cover object-center"
                    >
                      <source
                        src={"https://ipfs.io/ipfs/" + cnft.thumbnail.slice(7)}
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      className="lg:h-64 md:h-36 w-full h-56 object-cover object-center"
                      src={"https://ipfs.io/ipfs/" + cnft.thumbnail.slice(7)}
                      alt="blog"
                    />
                  )}

                  <div className="p-6">
                    {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      
                    </h2> */}
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      {cnft.name}
                    </h1>
                    {/* <h2 className="leading-relaxed mb-3">
                     {cnft.total_assets}
                    </h2> */}
                    <div className="flex items-center flex-wrap ">
                      <a
                        href={cnft.link}
                        className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                      >
                       See on Open CNFT
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </a>
                      <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        {/* <svg
                          className="w-4 h-4 mr-1"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx={12} cy={12} r={3} />
                        </svg> */}
                        {cnft.total_minted}
                      </span>
                      <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                        {/* <svg
                          className="w-4 h-4 mr-1"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                        </svg> */}
                        minted
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>loading</div>
          )}
        </div>
      </div>
    </section>
  )
}

export default CnftFeed
