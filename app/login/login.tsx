import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"

export default function Page() {
    return (
        <div>
            <h1>Login</h1>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <Button>Login</Button>

        </div>
    )
}