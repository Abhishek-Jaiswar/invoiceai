import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
import { DatePicker } from '@/components/DatePicker'

const page = () => {
    return (
        <div className='flex items-center justify-between'>
            <div className=''>
                <div>
                    <Label htmlFor='upload'>Upload Logo</Label>
                    <Input
                        type='file'
                        name='upload'
                        placeholder='Upload Logo'
                    />
                </div>
                <div>
                    <Label htmlFor='company'>Your company details</Label>
                    <Input
                        name='company'
                        placeholder='@Ex Gautam industries'
                    />
                </div>
            </div>
            <div className=''>
                <div>
                    <DatePicker name="Issue date"/>
                </div>
                <div>
                    <Label htmlFor='upload'>Upload Logo</Label>
                    <Input
                        name='upload'
                        placeholder='Upload Logo'
                    />
                </div>
                <div>
                    <Label htmlFor='upload'>Upload Logo</Label>
                    <Input
                        name='upload'
                        placeholder='Upload Logo'
                    />
                </div>
            </div>
        </div>
    )
}

export default page