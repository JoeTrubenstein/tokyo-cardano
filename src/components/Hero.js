/* This example requires Tailwind CSS v2.0+ */
import React from "react"
import station from "../images/station.mp4"
export default function Hero() {
    return (
<section>
	<div className="dark:bg-violet-400">
		<div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
			<h1 className="text-3xl font-bold leading-none sm:text-6xl xl:max-w-2xl dark:text-gray-900">東京カルダノサミット</h1>
			<p className="mt-6 mb-8 text-md sm:mb-12 xl:max-w-3xl dark:text-gray-900">カルダノというと何を思い浮かべますか？
            <br/>
            カルダノに関する知識を増やしましょうか？
            </p>
			<div className="flex flex-wrap justify-center">
				<button type="button" className="px-8 py-3 m-2 text-lg border font-semibold rounded dark:bg-gray-800 dark:text-gray-50">サミット</button>
				<button type="button" className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-700 dark:text-gray-900">ニュース</button>
			</div>
		</div>
	</div>
	<video muted autoPlay loop src={station} alt="" className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500" />
</section>


    )
}
