import type { Metadata} from 'next'
import Image from 'next/image';

//Сео
export const metadata: Metadata = {
    title: 'Guides',
    description: 'Generated by create next app',
  }

export default function Guides() {
    return (
        <div>
    <h1>Guides page</h1>
    <Image src="/img/homeGaul.png" width="60" height="60" alt="Guidespage" />
    </div>
    )
}