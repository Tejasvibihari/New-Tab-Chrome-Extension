import React, { useState } from 'react'
import { Search } from 'lucide-react';



export default function SearchEngine() {
    const [searchEngine, setSearchEngine] = useState('DuckDuckGo')
    const [searchQuery, setSearchQuery] = useState('')

    const search = (e) => {
        e.preventDefault()
        if (searchQuery) {
            switch (searchEngine) {
                case 'Google':
                    window.open(`https://www.google.com/search?q=${searchQuery}`, '_blank')
                    break;
                case 'Yahoo':
                    window.open(`https://search.yahoo.com/search?p=${searchQuery}`, '_blank')
                    break;
                case 'DuckDuckGo':
                    window.open(`https://duckduckgo.com/?q=${searchQuery}`, '_blank')
                    break;
                case 'Bing':
                    window.open(`https://www.bing.com/search?q=${searchQuery}`, '_blank')
                    break;
                default:
                    break;
            }
        }
        setSearchQuery('');
    }
    return (
        <div>

            <div className='relative'>

                <form onSubmit={search}>
                    <select onChange={(e) => setSearchEngine(e.target.value)} value={searchEngine} className='absolute top-1/2 right-0 transform -translate-y-1/2 p-2 px-4 rounded-full outline-none border border-red-700 focus:border-green-400'>
                        <option className='rounded-xl bg-primary text-secondary' value="Google">
                            Google
                        </option>
                        <option className='rounded-xl bg-primary text-secondary' value="Yahoo">
                            Yahoo
                        </option>
                        <option className='rounded-xl bg-primary text-secondary' value="DuckDuckGo">
                            Duck Duck Go
                        </option>
                        <option className='rounded-xl bg-primary text-secondary' value="Bing">
                            Bing
                        </option>
                    </select>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder='Search'
                        className='search-input w-full rounded-full py-2 px-4 bg-primary text-secondary border border-red-700 focus:border-green-400 outline-none transition-all' />
                    <button className='cursor-pointer absolute top-1/2 right-40 transform -translate-y-1/2 text-secondary'>
                        <Search />
                    </button>
                </form>
            </div>
            <button className='text-white'>

            </button>

        </div >
    )
}
