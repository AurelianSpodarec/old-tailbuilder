function Home() {
    
    return (            
        <main>
        

            <header id="header" className="pt-12 pb-5">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                
                <nav className="flex items-center justify-between relative">
                    
                    <div>
                    <svg className="w-12 h-12 fill-black text-black" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 121 109">
                        <path d="M90.0333 52.2913L118.357 0H76.3044L68.03 14.1748H89.717L51.0155 42.7482L61.012 25.5166H36.9888L52.0395 0.177015L51.9463 0H2.80162L30.7154 52.2913L0 109H42.62L57.1214 84.434L71.5483 109H121L90.0333 52.2913Z"/>
                    </svg>
                    </div>

                    <div>
                        <ul className="flex text-gray-900 text-semibold text-xl space-x-10">
                            <li><a className="text-md" href="">About</a></li>
                            <li><a className="text-md" href="">Templates</a></li>
                            <li><a className="text-md" href="">Docs</a></li>
                            <li><a className="text-md" href="">UI Inspiration</a></li>
                        </ul>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                        <a href="" className="text-bold">Login</a>
                        <a href="http://localhost:3000/editor" target="_blank"
                             className="cursor-pointer transition ease-in-out duration-500 bg-[#262626] text-white rounded-lg bg-cyan-500 py-2 px-5 text-md">
                            Start for free
                        </a>
                    </div>
                </nav>

            </div>
            </header>



            <section id="hero" className="pt-24">

                <div className="mx-auto text-center max-w-4xl mb-8">
                    <div className="text-center mb-6">
                        <h1 className="text-7xl text-gray-900 font-bold mb-6">Create TailwindCSS templates in minutes</h1>
                        <p className="max-w-3xl mx-auto text-xl text-gray-800">Drag and drop pre-existing components or create them to quickly design your templates and expor them to HTML or React</p>
                    </div>

                    <div className="space-x-6">
                        <button className="inline-block py-4 px-6 xs:py-4 xs:px-8 mr-4 bg-blue-500 hover:bg-blue-700 xs:text-lg text-white text-center font-semibold leading-none rounded-3xl transition duration-100">Try Demo</button>
                        <button className="inline-block py-4 px-6 xs:py-4 xs:px-8 bg-white hover:bg-blue-800 border border-gray-900 hover:text-white xs:text-lg text-center font-semibold leading-none rounded-3xl shadow-button transition duration-100">Learn More</button>
                    </div>
                </div>

                <div className="mx-auto w-full max-w-5xl">
                    <img src="https://i.imgur.com/nnLDkts.png" />
                </div>
            </section>


            <section id="logo-clout">
            <div className="mx-auto max-w-6xl py-20">

                <div className="text-center">
                    <h2>Companies that have used out products</h2>
                </div>
                <div className="grid gap-x-8 mx-12 gap-y-12 grid-cols-2 px-8 lg:px-0  lg:flex flex-wrap justify-between">
                    <img src="https://i.imgur.com/bJLivlQ.png" className="mx-auto lg:mx-0 inline-block" style={{"maxHeight": "55px"}} />
                    <img src="https://i.imgur.com/4gFzJ4D.png" className="mx-auto lg:mx-0 inline-block" style={{"maxHeight": "45px"}} />
                    <img src="https://i.imgur.com/Hf0rt8M.png" className="mx-auto lg:mx-0 inline-block" style={{"maxHeight": "55px"}} />
                    <img src="https://i.imgur.com/ZLwpB9y.png" className="mx-auto lg:mx-0 inline-block" style={{"maxHeight": "55px"}} />
                    <img src="https://i.imgur.com/CUJgWU9.png" className="mx-auto lg:mx-0 inline-block" style={{"maxHeight": "55px"}} />
                </div>

            </div>
            </section>
         

            <section className="bg-gray-100">
            <div className="mx-auto max-w-6xl py-20">

                <div className="text-center">
                    <h2 className="text-7xl font-bold">Feature list</h2>
                    <p>It works like figma</p>
                </div>

                <div className="grid grid-cols-3 gap-4">

                    <div className="border">
                        <h3></h3>
                        <p>Assets to import are bla this and that</p>
                    </div>
                    <div className="border">
                        <h3></h3>
                        <p>Assets to import are bla this and that</p>
                    </div>
                    <div className="border">
                        <h3></h3>
                        <p>Assets to import are bla this and that</p>
                    </div>

                    <div className="border">
                        <h3></h3>
                        <p>Assets to import are bla this and that</p>
                    </div>
                    <div className="border">
                        <h3></h3>
                        <p>Assets to import are bla this and that</p>
                    </div>
                    <div className="border">
                        <h3></h3>
                        <p>Assets to import are bla this and that</p>
                    </div>

                </div>

            </div>
            </section>


            <section>

            </section>


            <section className="">
            <div className="flex mx-auto max-w-7xl py-20">

                <div className="w-1/2">
                    <div className="mb-6">
                        <span className="text-cyan-500 font-bold">Design with speed</span>
                        <h2 className="text-gray-900 text-5xl font-bold">Bridge gap between teams</h2>
                    </div>

                    <div>
                        <div>
                            Build fast and skip dev handout time
                        </div>

                        <div>
                            Create components and re-use them    
                        </div>

                        <div>
                            Responsive and SEO friendly wesites
                        </div>
                    </div>
                </div>

                <div className="w-1/2">
                    <img src="https://i.imgur.com/nnLDkts.png" alt="#" />
                </div>

            </div>
            </section>

            <section>
                
                Save thousands of coding hours

                The best components 
                Save dev handoff time
                Don't compromise on experience
            </section>



            <section id="testimonials" className="relative py-24 my-24">

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-24">
                        <span className="text-lg text-gray-300 mb-4 block">TESTIMONIALS</span>
                        <h2 className="text-7xl font-bold">Client love us & we love them</h2>
                    </div>
                </div>

                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-3 gap-10">
                        
                        <article className="bg-white shadow-md rounded-lg p-10">
                        <div>
                            <p className="text-2xl mb-10">Already closed 1 deal from Accelerator and in the process of closing 2 more now. Have “a few others” that will be closing in the near future!</p>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <img className="mr-4 rounded-full w-10 h-10" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                                    <h6 className="font-bold text-lg">Aurelian Spodarec, <span className="text-md text-gray-200">Template Builder</span></h6>
                                </div>

                                <div><span className="font-bold text-5xl">"</span></div>
                            </div>
                        </div>
                        </article>

                        <article className="bg-white shadow-md rounded-lg p-10">
                        <div>
                            <p className="text-2xl mb-10">Already closed 1 deal from Accelerator and in the process of closing 2 more now. Have “a few others” that will be closing in the near future!</p>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <img className="mr-4 rounded-full w-10 h-10" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                                    <h6 className="font-bold text-lg">Aurelian Spodarec, <span className="text-md text-gray-200">Template Builder</span></h6>
                                </div>

                                <div><span className="font-bold text-5xl">"</span></div>
                            </div>
                        </div>
                        </article>

                        <article className="bg-white shadow-md rounded-lg p-10">
                        <div>
                            <p className="text-2xl mb-10">Already closed 1 deal from Accelerator and in the process of closing 2 more now. Have “a few others” that will be closing in the near future!</p>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <img className="mr-4 rounded-full w-10 h-10" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                                    <h6 className="font-bold text-lg">Aurelian Spodarec, <span className="text-md text-gray-200">Template Builder</span></h6>
                                </div>

                                <div><span className="font-bold text-5xl">"</span></div>
                            </div>
                        </div>
                        </article>

                    </div>
                </div>

            </section>

      
            <section id="logo-clout" className="relative py-24 my-24 bg-[#1F1F1F]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col items-center text-center">

                    <h2 className="text-7xl font-bold text-gray-50">Build beautiful templates in minutes</h2>
                    <p className="text-gray-50 py-10 text-2xl ">Start creating templates with no-code builder and export them to TailwindCSS</p>

                    <a className="transition ease-in-out duration-500 bg-pink-600 text-white rounded-full py-3 px-8 text-lg hover:text-pink-600 hover:bg-transparent outline outline-pink-600">Lets Get Started</a>
                </div>

            </div>
            </section>


            <footer className="py-20 ">

            <div className="container px-4 mx-auto">
            <div className="flex flex-wrap lg:mb-20 -mx-4">
                    

                <div className="w-full lg:w-1/4 px-4 mb-12 lg:mb-0">
                    <a className="inline-block mx-auto lg:mx-0 text-3xl font-semibold leading-none" href="/">
                        <img className="h-8" src="" alt="Templat Builder" />
                        Logo
                    </a>
                    <p className="mt-4 mb-6 text-sm text-secondary">An online editor for busy developers.</p>
                    <div>
                        <a className="inline-block mr-4" href="https://www.facebook.com/" target="_blank" rel="noopener nofollow">svg</a>
                        <a className="inline-block mr-4" href="https://twitter.com" target="_blank" rel="noopener nofollow">svg</a>
                        <a className="inline-block" href="https://dribbble.com" target="_blank" rel="noopener nofollow">svg</a>
                    </div>
                </div>

                <div className="w-full lg:w-2/3 px-4">
                    <div className="flex flex-wrap -mx-4">

                        <div className="w-full flex-grow sm:w-auto px-4 mb-8 sm:mb-12 xl:mb-0">
                            <h3 className="mb-5 text-lg font-bold font-heading text-blue-800">Products</h3>
                            <ul>
                                <li className="mb-3"><a className="text-sm text-secondary hover:underline" href="/tailwind">Tailwind Editor</a></li>
                                <li className="mb-3"><a className="text-sm text-secondary hover:underline" href="/bootstrap">Bootstrap Editor</a></li>
                                <li className="mb-3"><a className="text-sm text-secondary hover:underline" href="/material-ui">Material-UI Editor</a></li>
                                <li className="mb-3"><a className="text-sm text-secondary hover:underline" href="/bulma">Bulma Editor</a></li>
                                <li><a className="text-sm text-secondary hover:underline" href="/visual-studio-code">Extension for Visual Studio Code</a></li>
                            </ul>
                        </div>

                        <div className="w-full flex-grow sm:w-auto px-4 mb-8 sm:mb-12 xl:mb-0">
                            <h3 className="mb-5 text-lg font-bold font-heading text-blue-800">UI Components</h3>
                            <ul>
                                <li className="mb-3"><a className="text-sm text-secondary hover:underline" href="/components/tailwind">Tailwind Components</a></li>
                                <li className="mb-3"><a className="text-sm text-secondary hover:underline" href="/components/bootstrap">Bootstrap Components</a></li>
                                <li className="mb-3"><a className="text-sm text-secondary hover:underline" href="/components/material-ui">Material-UI Components</a></li>
                                <li><a className="text-sm text-secondary hover:underline" href="/components/bulma">Bulma Components</a></li>
                            </ul>
                        </div>

                        <div className="w-full flex-grow sm:w-auto px-4 mb-8 sm:mb-12 xl:mb-0">
                            <h3 className="mb-5 text-lg font-bold font-heading text-blue-800">Company</h3>
                            <ul>
                                <li className="mb-3"><a className="text-sm text-secondary hover:underline" href="/about">About us</a></li>
                                <li className="mb-3"><a className="text-sm text-secondary hover:underline" href="https://.dev/blog/">Blog</a></li>
                                <li className="mb-3"><a className="text-sm text-secondary hover:underline" href="mailto:support@.dev" target="_blank">Support</a></li>
                                <li><a className="text-sm text-secondary hover:underline" href="/marketplace/affiliate">Affiliate</a></li>
                            </ul>
                        </div>

                         
                    </div>
                </div>
                </div>

                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm lg:text-center text-secondary">© 2022 Template Builder. All rights reserved.</p>
                    </div>
                    <ul className="flex">
                        <li className="mb-3"><a className="text-sm text-secondary hover:underline" href="/about">Terms of Service</a></li>
                        <li className="mb-3"><a className="text-sm text-secondary hover:underline" href="https://.dev/blog/">Privacy Policy</a></li>
                        <li className="mb-3"><a className="text-sm text-secondary hover:underline" href="mailto:support@.dev" target="_blank">License</a></li>
                    </ul>
                </div>

            </div>
            </footer>

        </main>
    );
}

export default Home;