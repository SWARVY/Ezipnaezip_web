import React from "react";
import { Navbar, Dropdown, Avatar, TextInput } from "flowbite-react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
export default function NavbarComponent() {
  return (
    <section className="nav">
      <Navbar className="border-b" fluid={true} rounded={false}>
        <div className="grid grid-cols-2 items-center justify-items-end">
          <Navbar.Brand href="/" className="mr-2">
            <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
            <span className="self-center whitespace-nowrap text-xl font-bold dark:text-white">내일의 집</span>
          </Navbar.Brand>

          <Navbar.Collapse>
            <Navbar.Link className="text-base text-slate-400" href="/discover" active={false}>
              발견
            </Navbar.Link>
            <Navbar.Link className="text-base text-slate-400" href="/collection" active={false}>
              컬렉션
            </Navbar.Link>
          </Navbar.Collapse>
        </div>

        <div className="flex flex-row items-center justify-items-end">
          <TextInput className="w-80 hidden md:block mr-4" icon={MagnifyingGlassIcon} sizing="sm" />
          <Dropdown arrowIcon={false} inline={true} label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />}>
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
            </Dropdown.Header>
            <Dropdown.Item>마이페이지</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>로그아웃</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
      </Navbar>
    </section>
  );
}
