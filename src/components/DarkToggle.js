import React from "react";

const DarkToggle = () => {
    return(
        <button
        onClick={()=>{
          if (localStorage.theme === 'dark'){
            localStorage.theme = 'light'
            document.documentElement.classList.remove('dark')
            console.log(localStorage.theme)
          } else if (localStorage.theme === 'light') {
            localStorage.theme ='dark'
            document.documentElement.classList.add('dark')
            console.log(localStorage.theme)
          }
          
          }}
        className="hover:cursor-pointer ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-light-mode-leading bg-bubble-gum hover:bg-indigo-700"
      >
        Toggle Dark
      </button>
    )
}
export default DarkToggle;