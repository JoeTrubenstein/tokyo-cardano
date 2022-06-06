import React from "react";
import tinyplanet from "../images/tinyplanet.png"

/* This example requires Tailwind CSS v2.0+ */
const features = [
    { name: '歴史', description: 'The History of Cardano in Japan' },
    { name: '未来', description: 'The Cardano World to Come' },
    { name: 'CNFT', description: 'An Exciting Artform and Technology' },
    { name: '繋がる', description: 'Connecting People and Communities' },

  ]
  
  export default function SummitFeatures() {
    return (
      <div className="bg-midnight">
        <div className=" max-w-2xl mx-auto lg:py-12 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">サミットの内容</h2>
            <p className="mt-4 text-gray-500">
              カルダノの初心者にとして、<br/> 分かりやすいコンテンツを発表します
            </p>
  
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-1 grid-rows-1 lg:pl-36 p-12">
            <img
              src={tinyplanet}
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="mr-0"
            />
        
          </div>
        </div>
      </div>
    )
  }
  