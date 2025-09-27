"use client";
import Link from "next/link";
import styles from "./menuBurger.module.css";
import { useDisclosure, useClickOutside } from "@mantine/hooks";
import { Menu, Burger, Button } from "@mantine/core";
import { useEffect, useState } from "react";

type Route = {
  path: string;
  label: string;
};

export default function MenuBurger() {
  const [burgerOpened, handlers] = useDisclosure();
  const [currentPathname, setCurrentPathname] = useState<string | undefined>(
    undefined
  );

  const routes: Route[] = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/program", label: "Program" },
    // { path: "/musicians", label: "Musicians" },
    // { path: "/program-book", label: "Program Book" },
    { path: "/donation", label: "Donation" },
  ];

  const menuRef = useClickOutside(() => {
    if (burgerOpened) {
      handleMenuClick();
    }
  });

  const handleMenuClick = () => {
    handlers.toggle();
  };

  useEffect(() => {
    setCurrentPathname(window.location.pathname);

    // Add event listener for client-side navigation changes
    const handleRouteChange = () => {
      setCurrentPathname(window.location.pathname);
    };

    window.addEventListener("popstate", handleRouteChange);

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  const isActive = (path: string) => {
    return path === currentPathname ? styles.activeMenu : "";
    // return path === currentPathname
    //   ? `${styles.active} ${styles.activeMenu}`
    //   : "";
  };

  return (
    <>
      <Menu
        opened={burgerOpened}
        classNames={{
          dropdown: styles.dropdown,
          item: styles.item,
        }}
        styles={{ dropdown: { left: 0 } }}
      >
        <Menu.Target>
          <Burger
            ref={menuRef}
            opened={burgerOpened}
            onClick={() => handlers.toggle()}
            aria-label="Toggle navigation"
            classNames={{ burger: styles.burger }}
          />
        </Menu.Target>

        <Menu.Dropdown>
          <nav className={styles.dropdownContainer}>
            <Menu.Item>
              {/* RSVP Button */}
              <Link href="/rsvp" className={styles.rsvp}>
                <Button
                  variant="filled"
                  color="var(--color-primary)"
                  radius="xl"
                  size="md"
                  classNames={{
                    label: styles.buttonLabel,
                  }}
                >
                  RSVP HERE
                </Button>
              </Link>
            </Menu.Item>

            {routes.map((route) => (
              <Menu.Item key={route.path}>
                <Link
                  href={route.path}
                  className={`${styles.menuText} ${isActive(route.path)}`}
                  // style={{
                  //   paddingTop: route.path === "/" ? "0" : undefined,
                  //   paddingBottom: route.path === "/about" ? "0" : undefined,
                  // }}
                >
                  {route.label}
                </Link>
              </Menu.Item>
            ))}
          </nav>
        </Menu.Dropdown>
      </Menu>
    </>
  );
}
