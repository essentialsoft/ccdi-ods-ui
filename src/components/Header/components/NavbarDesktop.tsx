'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { navMobileList, navbarSublists } from '../../../config/globalHeaderData';

const Nav = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    background: #ffffff;
    box-shadow: -0.1px 6px 9px -6px rgba(0, 0, 0, 0.5);
    z-index: 1100;
    position: relative;

    .dropdownContainer {
      margin: 0 auto;
      position: relative;
      width: 1400px;
    }
    .invisible {
      visibility: hidden;
    }
 `;

const NavContainer = styled.div`
    margin: 0 auto;
    max-width: 1400px;
    text-align: left;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: end;
`;

const UlContainer = styled.ul`
  list-style: none;
  margin: 0;
  padding-top: 17px;
  padding-left: 11px;
`;

const LiSection = styled.li`
  display: inline-block;
  position: relative;
  line-height: 50px;
  letter-spacing: 1px;
  text-align: center;
  transition:all 0.3s ease-in-out;

  a {
    color: #585C65;
    text-decoration: none;
  }

  .navTitle {
    display: block;
    color: #585C65;
    font-family: poppins;
    font-size: 17px;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: normal;
    text-decoration: none;
    margin: 0 45px 0 5px;
    padding: 0 15px;
    user-select:none;
    border-top: 4px solid transparent;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
  }

  .navTitle:hover {
    cursor: pointer;
  }

  .navText {
    border-bottom: 4px solid transparent;
  }

  .navText:hover {
    cursor: pointer;
    color: #3A75BD;
    border-bottom: 4px solid #3A75BD;

    ::after {
      content: "";
      display: inline-block;
      width: 6px;
      height: 6px;
      border-bottom: 1px solid #298085;
      border-left: 1px solid #298085;
      margin: 0 0 4px 8px;
      transform: rotate(-45deg);
      -webkit-transform: rotate(-45deg);
    }
  }

  .navText::after {
    content: "";
    display: inline-block;
    width: 6px;
    height: 6px;
    border-bottom: 1px solid #585C65;
    border-left: 1px solid #585C65;
    margin: 0 0 4px 8px;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }

  .clicked {
    color: #FFFFFF;
    background: #1F4671;
  }

  .clicked::after {
    border-top: 1px solid #FFFFFF;
    border-right: 1px solid #FFFFFF;
    border-bottom: 0;
    border-left: 0;
    margin: 0 0 0 8px
  }

  .clicked:hover {
    border-bottom: 4px solid #1F4671;
    color: #FFFFFF;

    ::after {
      content: "";
      display: inline-block;
      width: 6px;
      height: 6px;
      border-top: 1px solid #FFFFFF;
      border-right: 1px solid #FFFFFF;
      border-bottom: 0;
      border-left: 0;
      margin: 0 0 0 8px;
      transform: rotate(-45deg);
      -webkit-transform: rotate(-45deg);
    }
  }

  .directLink::after {
    display: none;
  }

  .directLink:hover {
    ::after {
      display: none;
    }
  }
  .shouldBeUnderlined {
    border-bottom: 4px solid #3A75BD;
  }
  .navTitleClicked {
    display: block;
    color: #FFFFFF;
    font-family: poppins;
    font-size: 17px;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: normal;
    text-decoration: none;
    margin: 0 45px 0 5px;
    padding: 0 15px;
    user-select:none;
    background: #1F4671;
    border-top: 4px solid #5786FF;
    border-left: 4px solid #5786FF;
    border-right: 4px solid #5786FF;
  }
`;

const Dropdown = styled.div`
    top: 60.5px;
    left: 0;
    width: 100%;
    background: #1F4671;
    z-index: 1100;
    position: absolute;
`;

const DropdownContainer = styled.div`
    margin: 0 auto;
    text-align: left;
    position: relative;
    max-width: 1400px;

    .dropdownList {
      background: #1F4671;
      display: grid;
      grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
      padding: 32px 32px 0 32px;
    }

    .dropdownItem {
      padding: 0 10px 52px 10px;
      text-align: left;
      font-family: 'Poppins';
      font-weight: 600;
      font-style: normal;
      font-size: 20px;
      line-height: 110%;
      color: #FFFFFF;
      text-decoration: none;
  }

  .dropdownItem:hover {
    text-decoration: underline;
  }

  .dropdownItemText {
    margin-top: 5px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16.16px;
    line-height: 22px;
  }
`;

const useOutsideAlerter = (ref: React.RefObject<HTMLDivElement | null>) => {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        event.target instanceof HTMLElement &&
        ref.current &&
        !ref.current.contains(event.target) &&
        event.target.getAttribute("class") !== "dropdownList"
      ) {
        const toggle = document.getElementsByClassName("navText clicked");
        if (
          toggle[0] &&
          event.target.getAttribute("class") !== "navText clicked"
        ) {
          const temp: HTMLElement = toggle[0] as HTMLElement;
          temp.click();
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};

const NavBar = () => {
  const [clickedTitle, setClickedTitle] = useState<keyof typeof navbarSublists | "">("");
  const dropdownSelection = useRef<HTMLDivElement>(null);
  const clickableObject = navMobileList.filter((item) => item.className === 'navMobileItem clickable');
  const clickableTitle = clickableObject.map((item) => item.name);
  useOutsideAlerter(dropdownSelection);

  const handleMenuClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.innerText === clickedTitle || !clickableTitle.includes(target.innerText)) {
      setClickedTitle("");
    } else {
      setClickedTitle(target.innerText as keyof typeof navbarSublists | "");
    }
  };

  const onKeyPressHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      handleMenuClick(e as unknown as React.MouseEvent<HTMLDivElement>);
    }
  };
  type NavSubLinkData = {
    name: string;
    link: string;
    className: string;
    id?: string;
    text?: string;
  };

  function shouldBeUnderlined(item: NavSubLinkData): boolean {
    const linkName = item.name;
    const correctPath = window.location.pathname;
    if (item.className === "navMobileItem") {
      return correctPath === item.link;
    }
    if (!(linkName in navbarSublists)) {
      return false;
    }
    const linkNames = Object.values(navbarSublists[linkName as keyof typeof navbarSublists]).map((e: NavSubLinkData) => e.link);
    return linkNames.includes(correctPath);
  }

  useEffect(() => {
    setClickedTitle("");
  }, []);

  return (
    <Nav>
      <NavContainer>
        <UlContainer>
          {
            navMobileList.map((navMobileItem, idx) => {
              const navkey = `nav_${idx}`;
              return (
                navMobileItem.className === 'navMobileItem'
                  ? (
                    <LiSection key={navkey}>
                      <div className="navTitle directLink">
                        <Link href={navMobileItem.link} passHref>
                          <div
                            id={navMobileItem.id}
                            onKeyDown={onKeyPressHandler}
                            role="button"
                            tabIndex={0}
                            className={`navText directLink ${shouldBeUnderlined(navMobileItem) ? "shouldBeUnderlined" : ""}`}
                            onClick={handleMenuClick}
                          >
                            {navMobileItem.name}
                          </div>
                        </Link>
                      </div>
                    </LiSection>
                  )
                  : (
                    <LiSection key={navkey}>
                      <div className={clickedTitle === navMobileItem.name ? 'navTitleClicked' : 'navTitle'}>
                        <div
                          id={navMobileItem.id}
                          onKeyDown={onKeyPressHandler}
                          role="button"
                          tabIndex={0}
                          className={`${clickedTitle === navMobileItem.name ? 'navText clicked' : 'navText'} ${shouldBeUnderlined(navMobileItem) ? "shouldBeUnderlined" : ""}`}
                          onClick={handleMenuClick}
                        >
                          {navMobileItem.name}
                        </div>
                      </div>
                    </LiSection>
                  )
              );
            })
          }
        </UlContainer>
      </NavContainer>
      <Dropdown ref={dropdownSelection} className={clickedTitle === ''  ? "invisible" : ""}>
        <DropdownContainer>
          <div className="dropdownList">
            {
              clickedTitle !== "" ? navbarSublists[clickedTitle]?.map((dropItem, idx) => {
                const dropkey = `drop_${idx}`;
                return (
                  dropItem.link && (
                    <Link
                      id={dropItem.id}
                      href={dropItem.link}
                      passHref
                      className="dropdownItem"
                      key={dropkey}
                      onClick={() => setClickedTitle("")}
                    >
                      {dropItem.name}
                      {dropItem.text && dropItem.text.trim() !== '' && <div className="dropdownItemText">{dropItem.text}</div>}
                    </Link>
                  )
                );
              })
                : null
            }
          </div>
        </DropdownContainer>
      </Dropdown>
    </Nav>
  );
};

export default NavBar;
