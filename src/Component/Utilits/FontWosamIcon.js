import {
  faCalendarDays,
  faHotel,
  faPerson,
  faUsers
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const FontWosamIcon = ({ name }) => {
    const getFontAwesomeIcon = (nemuName) => {
        switch (nemuName) {
          case 'Routines':
            return faCalendarDays;
          case 'Faculty Lists':
            return faUsers;
          case 'All Employees':
            return faPerson;
          case 'Women Hostel Members':
            return faHotel;
          default:
            return null; // You can handle default or unknown icons as needed
        }
      };
      return (
        
              <FontAwesomeIcon
              class="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75"
              fill="currentColor"
              icon={getFontAwesomeIcon(name)} />
      );
};

export default FontWosamIcon;