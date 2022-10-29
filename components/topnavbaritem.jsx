import Link from "next/link";

const TopNavBarItem = ({ text, href, active }) => {
    return (
        <Link href={href}>
            <a
                className={active ? "active" : ""}
            >
                <li>{text}</li>
            </a>
        </Link>
    );
};

export default TopNavBarItem;