import React, { useState } from 'react'

export default function application() {

    const [DocValue, setDocValue] = useState(1234)
    const [name, setName] = useState('')
    const [id, setid] = useState('')
    const [title, settitle] = useState('')
    const [date, setdate] = useState(null)
    const [document, setdocument] = useState(null)
    const [application, setapplication] = useState('')


    const submitForm =async () =>{
        const response = await fetch('/api/form', {
            method:'POST',
            body: JSON.stringify({name, id, title, date, document, DocValue}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        console.log(data)
    }
  return (
    <>
        <div class="flex items-center justify-center p-12">
        <div class="mx-auto w-full max-w-[550px]">
            <form>
            <div class="-mx-3 flex flex-wrap">
                <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                    <label
                    for="Name"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                    Name
                    </label>
                    <input
                    type="text"
                    name="Name"
                    id="Name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                </div>
                </div>
                <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                    <label
                    for="ID"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                    ID
                    </label>
                    <input
                    type="text"
                    name="ID"
                    id="ID"
                    placeholder="Emp ID"
                    value={id}
                    onChange={(e) => setid(e.target.value)}
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                </div>
                </div>
            </div>
            <div class="mb-5">
                <label
                for="title"
                class="mb-3 block text-base font-medium text-[#07074D]"
                >
                Title
                </label>
                <input
                type="text"
                name="title"
                id="title"
                placeholder="Document Title"
                value={title}
                onChange={(e) => settitle(e.target.value)}
                class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
            </div>

            <div class="-mx-3 flex flex-wrap">
                <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                    <label
                    for="date"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                    Date
                    </label>
                    <input
                    type="date"
                    name="date"
                    id="date"
                    value={date}
                    onChange={(e) => setdate(e.target.value)}
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                </div>
                </div>
                <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                    <label
                    for="IDGen"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                    Doc ID Generated
                    </label>
                    <input
                    type="number"
                    name="IDGen"
                    id="IDGen"
                    value={DocValue}
                    onChange={(e) => setDocValue(e.target.value)}
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                </div>
                </div>
            </div>

            <div class="mb-5">
                <label class="mb-3 block text-base font-medium text-[#07074D]">
                Document Upload
                </label>
                <div class="flex items-center space-x-6">
                <div class="flex items-center">
                <input
                    name="DocUpload"
                    type="file"
                    id="docUpl"
                    value={document}
                    onChange={(e) => setdocument(e.target.value)}
                    accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                 />
                </div>
                </div>
            </div>

            <div>
                <button
                class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                onClick={submitForm}
                >
                Submit
                </button>
            </div>
            </form>
        </div>
        </div>
    </>
  )
}
