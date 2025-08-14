'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Table } from 'lucide-react'
import React, { useState } from 'react'

const tableLayouts = [
    {
        id: "basic",
        name: "Basic Invoice",
        description: "Simple layout with essential columns",
        columns: [
            { id: "item", name: "Item", required: true },
            { id: "quantity", name: "Quantity", required: true },
            { id: "rate", name: "Rate", required: true },
            { id: "amount", name: "Amount", required: true },
        ],
    },
    {
        id: "detailed",
        name: "Detailed Invoice",
        description: "Comprehensive layout with additional details",
        columns: [
            { id: "item", name: "Item/Description", required: true },
            { id: "sku", name: "SKU", required: false },
            { id: "quantity", name: "Qty", required: true },
            { id: "unit", name: "Unit", required: false },
            { id: "rate", name: "Unit Price", required: true },
            { id: "discount", name: "Discount", required: false },
            { id: "tax", name: "Tax", required: false },
            { id: "amount", name: "Total", required: true },
        ],
    },
    {
        id: "service",
        name: "Service Invoice",
        description: "Perfect for service-based businesses",
        columns: [
            { id: "service", name: "Service", required: true },
            { id: "hours", name: "Hours", required: true },
            { id: "rate", name: "Hourly Rate", required: true },
            { id: "amount", name: "Amount", required: true },
        ],
    },
    {
        id: "project",
        name: "Project Invoice",
        description: "Ideal for project-based billing",
        columns: [
            { id: "task", name: "Task/Milestone", required: true },
            { id: "progress", name: "Progress %", required: false },
            { id: "budgeted", name: "Budgeted", required: false },
            { id: "actual", name: "Actual Cost", required: true },
            { id: "amount", name: "Amount", required: true },
        ],
    },
    {
        id: "retail",
        name: "Retail Invoice",
        description: "For retail and product sales",
        columns: [
            { id: "product", name: "Product", required: true },
            { id: "barcode", name: "Barcode", required: false },
            { id: "quantity", name: "Qty", required: true },
            { id: "mrp", name: "MRP", required: false },
            { id: "discount", name: "Discount %", required: false },
            { id: "price", name: "Sale Price", required: true },
            { id: "amount", name: "Total", required: true },
        ],
    },
]

interface TableLayout {
    id: string
    name: string
    description: string
    columns: Column[]
}

const AddTable = () => {
    const [step, setStep] = useState<"select" | "customize">("select");
    const [isOpen, setIsOpen] = useState(false)

    const resetDialog = () => {
        setStep("select")
    }
    return (
        <div>
            <Dialog
                open={isOpen}
                onOpenChange={(open) => {
                    setIsOpen(open)
                    if (!open) resetDialog()
                }}
            >
                <DialogTrigger asChild>
                    <Button className="cursor-pointer">
                        <Table className="w-4 h-4 mr-2" />
                        Add Table
                    </Button>
                </DialogTrigger>
                <DialogContent className="max-w-lg w-[50rem]">
                    {step === 'select' && (
                        <>
                            <DialogHeader>
                                <DialogTitle>Choose Table Layout</DialogTitle>
                                <DialogDescription>
                                    Select a pre-designed table layout that best fits your invoice needs. You can customize it in the next
                                    step.
                                </DialogDescription>
                            </DialogHeader>
                            <div className='grid grid-cols-1 md:grid-cols-3 mt-4 gap-4 overflow-y-scroll h-[40rem]'>
                                {tableLayouts.map((layout) => (
                                    <Card
                                        key={layout.id}
                                    >
                                        <CardHeader className="pb-3">
                                            <CardTitle className="text-lg">{layout.name}</CardTitle>
                                            <CardDescription>{layout.description}</CardDescription>
                                        </CardHeader>
                                        <CardContent className=''>
                                            <div className="space-y-2">
                                                <p className="text-sm font-medium text-muted-foreground">Columns:</p>
                                                <div className="flex flex-wrap gap-1">
                                                    {layout.columns.map((column) => (
                                                        <Badge
                                                            key={column.id}
                                                            variant={column.required ? "default" : "secondary"}
                                                            className="text-xs"
                                                        >
                                                            {column.name}
                                                            {column.required && <span className="ml-1">*</span>}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </>
                    )}

                    <DialogFooter>

                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default AddTable