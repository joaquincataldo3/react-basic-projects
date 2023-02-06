import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';
import React from 'react';
const sublinks = [
  {
    page: 'Products',
    links: [
      { label: 'payment', icon: <FaCreditCard color='rgb(166, 166, 166)'/>, url: '/products' },
      { label: 'terminal', icon: <FaCreditCard color='rgb(166, 166, 166)'/>, url: '/products' },
      { label: 'connect', icon: <FaCreditCard color='rgb(166, 166, 166)'/>, url: '/products' },
    ],
  },
  {
    page: 'Developers',
    links: [
      { label: 'plugins', icon: <FaBook color='rgb(166, 166, 166)'/>, url: '/products' },
      { label: 'libraries', icon: <FaBook color='rgb(166, 166, 166)'/>, url: '/products' },
      { label: 'help', icon: <FaBook color='rgb(166, 166, 166)'/>, url: '/products' },
      { label: 'billing', icon: <FaBook color='rgb(166, 166, 166)'/>, url: '/products' },
    ],
  },
  {
    page: 'Company',
    links: [
      { label: 'about', icon: <FaBriefcase color='rgb(166, 166, 166)'/>, url: '/products' },
      { label: 'customers', icon: <FaBriefcase color='rgb(166, 166, 166)'/>, url: '/products' },
    ],
  }
];

export default sublinks;
