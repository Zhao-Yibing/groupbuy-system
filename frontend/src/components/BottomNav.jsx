import { NavLink } from "react-router-dom";

export default function BottomNav() {
    const base = "flex flex-col items-center text-sm";
    const active = "text-blue-600";
    const inactive = "text-gray-600";

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around py-2">
            {/* Home */}
            <NavLink
                to="/"
                end
                className={({ isActive }) =>
                    isActive ? `${base} ${active}` : `${base} ${inactive}`
                }
            >
                <svg
                    //xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path d="M3 12l9-9 9 9v9a3 3 0 01-3 3h-12a3 3 0 01-3-3z" />
                </svg>
                <span>Home</span>
            </NavLink>

            {/* Groups */}
            <NavLink
                to="/groups"
                className={({isActive}) =>
                    isActive ? `${base} ${active}` : `${base} ${inactive}`
                }
            >
                <svg
                    //xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"/>

                </svg>
                <span>Groups</span>
            </NavLink>

            {/* Add */}
            <NavLink
                to="/add"
                className={({ isActive }) =>
                    isActive ? `${base} ${active}` : `${base} ${inactive}`
                }
            >
                <svg
                    //xmlns="http://www.w3.org/2000/svg"
                    className="w-7 h-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path d="M12 4v16m8-8H4" />
                </svg>
                <span>Add</span>
            </NavLink>

            {/* Messages */}
            <NavLink
                to="/messages"
                className={({ isActive }) =>
                    isActive ? `${base} ${active}` : `${base} ${inactive}`
                }
            >
                <svg
                    //xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"/>

                </svg>
                <span>Messages</span>
            </NavLink>

            {/* Profile */}
            <NavLink
                to="/profile"
                className={({ isActive }) =>
                    isActive ? `${base} ${active}` : `${base} ${inactive}`
                }
            >
                <svg
                    //xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5z" />
                    <path d="M2 20c0-3.3 6.7-5 10-5s10 1.7 10 5v2H2v-2z" />
                </svg>
                <span>Profile</span>
            </NavLink>
        </nav>
    );
}


