import Link from 'next/link'
import React from 'react'

const A = ({ label, link, target }: { label: string, link: string, target: "_blank" | "_self" }) => {
    const AStyle = 'ml-2 text-blue-500 underline'
    if (target === "_blank") {
        return (
            <a
                href={link}
                rel="noopener noreferrer"
                target={target}
                className={AStyle}
            >
                {label}
            </a>
        )
    }

    return (
        <Link
            className={AStyle}
            href={link}
        >
            {label}
        </Link>
    )
}

export default A