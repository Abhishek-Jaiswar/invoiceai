import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
import { DatePicker } from '@/components/DatePicker'
import { Upload } from 'lucide-react'
import { Textarea } from '@/components/ui/textarea'
import AddTable from '@/app/_components/AddTable'

const Page = () => {
    return (
        <div className=''>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="file-upload">Logo</Label>
                        <label
                            htmlFor="file-upload"
                            className="flex cursor-pointer flex-col items-start rounded-lg border border-gray-300 px-4 py-2 hover:border-gray-400 transition-colors"
                        >
                            <div className="flex items-center space-x-2">
                                <Upload className="h-4 w-4 text-gray-500" />
                                <div>
                                    <span className="font-medium text-gray-700">Upload file</span>
                                    <p className="mt-1 text-xs text-gray-500">
                                        JPG, JPEG, PNG, less than 5MB
                                    </p>
                                </div>
                            </div>

                            <input id="file-upload" type="file" className="hidden" />
                        </label>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="company">Your company details</Label>
                        <Textarea
                            id="company"
                            name="company"
                            placeholder="@Ex Gautam industries"
                        />
                    </div>
                    <div>
                        <DatePicker name="Issue date" />
                    </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="other-file">Upload Document</Label>
                        <Input
                            type="text"
                            id="other-file"
                            name="otherFile"
                            placeholder="@Ex 00001"
                        />
                    </div>
                    <div className="space-y-2 mt-10">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                            id="description"
                            name="description"
                            placeholder="Enter description"
                        />
                    </div>
                    <div>
                        <DatePicker name="Due date" />
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-between border rounded-md p-2 mt-4'>
                <div>
                    <h1>Items table</h1>
                </div>
                <AddTable />
            </div>
        </div>
    )
}

export default Page
