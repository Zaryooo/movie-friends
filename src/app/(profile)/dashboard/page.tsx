'use client';

import { FC, Suspense, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { createSession } from '../api/callbacks';
import Breadcrumb from '@/components/breadcrumb';
import { CircularProgress } from '@mui/material';

export function Dashboard(): React.ReactElement {
    const router = useRouter();
    const searchParams = useSearchParams();
    const approved = new URLSearchParams(searchParams).get("approved");
    const token = new URLSearchParams(searchParams).get("request_token");

    console.log("approved", approved)
    console.log("token", token)

    useEffect(() => {
        if(token && approved) {
            createNewSession(token);
            //router.push('/');
        }
    }, [token, approved]);
  
        
    const createNewSession = async (token:string) => {
      const sessionId = await createSession('name', '1234', token);
      console.log("sessionId", sessionId);
    };

    return (
        <Breadcrumb title="Dashboard"/>
    )
}

export default function DashboardPage() {
    return (
        <Suspense fallback={<CircularProgress/>}>
            <Dashboard />
        </Suspense>
    )
}