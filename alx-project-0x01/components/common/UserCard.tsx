import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, phone, website, company }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg border hover:shadow-xl transition-all duration-300">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
      <p className="text-gray-600"><strong>Email:</strong> {email}</p>
      <p className="text-gray-600"><strong>Phone:</strong> {phone}</p>
      <p className="text-gray-600"><strong>Website:</strong> {website}</p>

      <div className="mt-3">
        <p className="text-gray-700 font-medium">Company</p>
        <p className="text-gray-600">{company.name}</p>
      </div>
    </div>
  );
};

export default UserCard;
