import Link from "next/link";

const RightMenu = () => {
    return (
        <div className="hidden lg:inline-flex flex-col flex-shrink-0 bg-[#82D2F3]/50">
            <div className="sticky flex flex-col pt-[60px] pr-[30px] pb-0 pl-[16px] gap-[30px] top-[61px]">
                <Link href="/Calculators/Builder">
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 29.6875L40.625 20.3125V6.25H34.375V14.0625L25 4.6875L0 29.6875V31.25H6.25V46.875H21.875V37.5H28.125V46.875H43.75V31.25H50V29.6875Z" fill="#A0BE3C"/>
                    </svg>
                </Link>
                <Link href="/Calculators/ResourceDevelopment">
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="24.6098" height="24.6098" fill="#C58940" stroke="#A0BE3C"/>
                    <rect x="24.8903" y="0.5" width="24.6098" height="24.6098" fill="#F9BD98" stroke="#A0BE3C"/>
                    <rect x="0.5" y="24.8903" width="24.6098" height="24.6098" fill="#DBE0E7" stroke="#A0BE3C"/>
                    <rect x="24.8903" y="24.8903" width="24.6098" height="24.6098" fill="#F9E29D" stroke="#A0BE3C"/>
                    </svg>
                </Link>
                <Link href="/Calculators/Demolish">
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_524_16563)">
                    <path d="M50 29.6875L40.625 20.3125V6.25H34.375V14.0625L25 4.6875L0 29.6875V31.25H6.25V46.875H21.875V37.5H28.125V46.875H43.75V31.25H50V29.6875Z" fill="#A0BE3C"/>
                    <circle cx="9.375" cy="12.5" r="4.6875" fill="#747474"/>
                    <line x1="12.4228" y1="9.50362" x2="4.61033" y2="4.81612" stroke="#747474" strokeWidth="0.3"/>
                    <line x1="7.73533" y1="15.7536" x2="-0.0771739" y2="11.0661" stroke="#747474" strokeWidth="0.3"/>
                    <line x1="10.8603" y1="12.6286" x2="3.04783" y2="7.94112" stroke="#747474" strokeWidth="0.3"/>
                    <line x1="9.29783" y1="12.6286" x2="1.48533" y2="7.94112" stroke="#747474" strokeWidth="0.3"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_524_16563">
                    <rect width="50" height="50" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                </Link>
            </div>
        </div>
    )
}

export {RightMenu};