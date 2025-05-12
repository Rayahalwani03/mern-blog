import { Sidebar } from "flowbite-react";
import { useEffect, useState } from "react";
import {
  HiAnnotation,
  HiArrowSmRight,
  HiChartPie,
  HiDocumentText,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { signoutSuccess } from "../redux/user/useSlice";

const DashSidebar = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");
  const dispatch = useDispatch();
  const { currentUser, errormodal, loading } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search); // search is a method from the constructor
    const tabFormUrl = urlParams.get("tab");
    if (tabFormUrl) {
      setTab(tabFormUrl);
    }
  }, [location.search]);

  const handleSignout = async () => {
    try {
      const res = await fetch("/api/user/signout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Sidebar className="w-full md:w-56">
      <Sidebar.Items>
        <Sidebar.ItemGroup className="flex flex-col gap-2">
          {currentUser && currentUser.isAdmin && (
            <Link to="/dashboard?tab=dash">
              <Sidebar.Item
                active={tab === "dash" || !tab}
                icon={HiChartPie}
                title="Home"
                as="div"
              >
                Dashboard
              </Sidebar.Item>
            </Link>
          )}

          {currentUser.isAdmin && (
            <Link to="/dashboard?tab=posts">
              <Sidebar.Item
                active={tab === "posts"} // to determine whether the sidebar item should appear as "active"
                icon={HiDocumentText}
                title="Home"
                as="div"
              >
                Posts
              </Sidebar.Item>
            </Link>
          )}

          {currentUser.isAdmin && (
            <Link to="/dashboard?tab=users">
              <Sidebar.Item
                active={tab === "users"} // to determine whether the sidebar item should appear as "active"
                icon={HiOutlineUserGroup}
                title="Home"
                as="div"
              >
                Users
              </Sidebar.Item>
            </Link>
          )}

          <>
            <Link to="/dashboard?tab=comments">
              <Sidebar.Item
                active={tab === "comments"} // to determine whether the sidebar item should appear as "active"
                icon={HiAnnotation}
                title="Comments"
                as="div"
              >
                Comments
              </Sidebar.Item>
            </Link>
          </>

          <Sidebar.Item
            icon={HiArrowSmRight}
            title="Sign Out"
            className="cursor-pointer"
            onClick={handleSignout}
          >
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default DashSidebar;
