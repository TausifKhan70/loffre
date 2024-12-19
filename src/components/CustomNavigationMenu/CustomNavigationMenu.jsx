'use client';

import * as React from 'react';
import { cn } from 'lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from 'components/ui/navigation-menu/navigation-menu';
import { Link } from 'react-router-dom';

export function CustomNavigationMenu({ menuTitle, submenus,menuTitleClass  }) {
  return (
    <NavigationMenu>
      <NavigationMenuList className="p-0 mb-0 ">
        <NavigationMenuItem>
          {/* Menu Trigger */}
          <NavigationMenuTrigger
            className={`p-0 bg-transparent h-auto text-[#1B1B1B] leading-[21px] gap-2 hover:text-[#2CB1B5] ${menuTitleClass}`}
          >
            {menuTitle}
          </NavigationMenuTrigger>

          {/* Menu Content */}
          <NavigationMenuContent>
            <div className="flex bg-white shadow-lg rounded-b-md w-[1100px] h-[588px]">
              {/* Left Column: Sidebar Menu */}
              <ul className="w-1/4 border-r border-gray-200 bg-[#E7F9FA] p-4 space-y-2">
                {submenus.menu.map((menuItem, index) => (
                  <li
                    key={index}
                    className="text-[#1B1B1B] hover:text-[#2CB1B5] cursor-pointer flex items-center gap-2"
                  >
                    <img alt="product" src={menuItem.icon}  />                     
                    {menuItem.title}
                  </li>
                ))}
              </ul>

              {/* Right Columns: Content */}
              <div className="w-3/4 grid grid-cols-3 gap-6 mt-3">
                {submenus.content.map((contentSection, index) => (
                  <div key={index}>
                    {/* Section Header */}
                    <h4 className="text-sm font-bold text-[#2CB1B5] mb-2 ml-3">
                      {contentSection.header}
                    </h4>

                    {/* Section Items */}
                    <ul className="">
                      {contentSection.items.map((item, i) => (
                        <li key={i}>
                          <Link
                            to={item.href || '#'}
                            className="text-sm text-[#1B1B1B] hover:text-[#2CB1B5] no-underline"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#2CB1B5] hover:text-white focus:bg-accent focus:text-accent-foreground',
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground transition-colors hover:text-white">
              {children}
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
);

ListItem.displayName = 'ListItem';
