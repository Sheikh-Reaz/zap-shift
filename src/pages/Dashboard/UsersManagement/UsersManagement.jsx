import React, { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaUserShield } from "react-icons/fa";
import { FiShieldOff } from "react-icons/fi";
import Swal from "sweetalert2";

const UsersManagement = () => {
  const axiosSecure = useAxiosSecure();
  const [searchText, setSearchText] = useState("");

  // ✅ SUPER ADMIN HARD-CODED
  const SUPER_ADMIN_EMAIL = "skreazuddin87@gmail.com";

  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users", searchText],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users?searchText=${searchText}`);
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    const roleInfo = { role: "admin" };
    axiosSecure.patch(`/users/${user._id}/role`, roleInfo).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.displayName} marked as an admin.`,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };

  const handleRemoveAdmin = (user) => {
    const roleInfo = { role: "user" };
    axiosSecure.patch(`/users/${user._id}/role`, roleInfo).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.displayName} removed from admin.`,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };

  return (
    <div>
      <h2 className="text-4xl">Manage User: {users.length} </h2>

      <label className="input my-4">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </g>
        </svg>
        <input
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          required
          placeholder="Search User"
        />
      </label>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>No.</th>
              <th>User</th>
              <th>Role</th>
              <th>Admin Action</th>
              <th>Others Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>

                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={user.photoURL}
                          alt="user avatar"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.displayName}</div>
                      <div className="text-sm">{user.email}</div>
                    </div>
                  </div>
                </td>

                <td>{user.role}</td>

                <td>
                  {user.role === "admin" ? (
                    <span
                      className={`tooltip ${
                        user.email === SUPER_ADMIN_EMAIL
                          ? "tooltip-warning"
                          : ""
                      }`}
                      data-tip={
                        user.email === SUPER_ADMIN_EMAIL
                          ? "Super Admin – Cannot be removed"
                          : "Remove Admin"
                      }
                    >
                      <button
                        onClick={() => handleRemoveAdmin(user)}
                        disabled={user.email === SUPER_ADMIN_EMAIL}
                        className={`btn ${
                          user.email === SUPER_ADMIN_EMAIL
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-red-500"
                        }`}
                      >
                        <FiShieldOff />
                      </button>
                    </span>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn bg-primary"
                    >
                      <FaUserShield />
                    </button>
                  )}
                </td>

                <th>Actions</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersManagement;
