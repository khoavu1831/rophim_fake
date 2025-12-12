import SubNav from "./SubNav"

function NavItem({ label, href, data, col, activeNav, setActiveNav }) {
    const isOpen = activeNav === label;

    const toggle = (e) => {
        if (data) setActiveNav(isOpen ? null : label);

    };

    return (
        <div className="relative cursor-pointer">
            <a className="hover:text-[#5f9beb]" href={href} onClick={toggle}>
                {label}
                {data && <i className="fa-solid fa-caret-down ml-1"></i>}
            </a>

            {data && <SubNav data={data} isOpen={isOpen} col={col} />}
        </div>
    )
}

export default NavItem