import React  from 'react'
import { Bell, Search, } from "lucide-react";
import { useDispatch,  } from "react-redux";
import UserDropdown from './UserDropdown';

const Topbar = () => {
    const dispatch = useDispatch();

    return (
        <div className="flex items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-96">
                <input
                    type="text"
                    placeholder="Search here..."
                    className="w-full px-4 py-2.5 rounded-full bg-white dark:bg-gray-800 text-gray-700  focus:outline-none shadow-sm"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 " size={18} />
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-6">
                {/* Light/Dark Mode Toggle */}

                {/* Notification Bell */}
                <div className="relative">
                    <Bell size={22} className="text-gray-600 dark:text-gray-300" />
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">2</span>
                </div>

                {/* User Profile */}
                <div className="flex items-center gap-2">
                    <div>
                        <UserDropdown />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar;
