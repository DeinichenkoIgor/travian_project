/*
import dynamic from 'next/dynamic';

const Builder_btn = dynamic(() => import('../../components/Builder_btn'), { ssr: false });

export default function Builder() {
    return <div><Builder_btn /></div>;
}
*/
"use client";
import { BuilderBtn } from '../../components/BuilderBtn'


export default function Builder() {
    return (
        <div><BuilderBtn /></div>
        
    )
}