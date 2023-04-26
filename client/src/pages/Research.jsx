import React, { useState } from 'react';

export default function Research() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div>
            <div className='fixed bottom-5 right-10'>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSddu-uChA92HBGMwQOuyWmWLbGzICOMVAU1lIkVwf7yOvHs7g/viewform" class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                    <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                    <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                        <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                        <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">View Form</span>
                </a>
            </div>
            <object data="https://drive.google.com/uc?id=1i5dlfcZueDt92V8GBwvw0wknI1fdnK6W" type="application/pdf" className='h-screen w-screen'>
                <p>Alternative text - include a link <a href="https://drive.google.com/uc?id=1i5dlfcZueDt92V8GBwvw0wknI1fdnK6W">to the PDF!</a></p>
            </object>
        </div>
    );
}