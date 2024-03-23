import { nanoid } from '@reduxjs/toolkit';
import { FaCamera, FaCoffee, FaHeartbeat, FaPenNib } from 'react-icons/fa';
import { FaKitchenSet } from 'react-icons/fa6';
import { GiDelicatePerfume, GiFlowers, GiJusticeStar } from 'react-icons/gi';
import { HiPaintBrush } from 'react-icons/hi2';
import { MdSportsBasketball } from 'react-icons/md';
import { SiYourtraveldottv } from 'react-icons/si';
import { TfiGallery } from 'react-icons/tfi';

export type Room = {
  id: string;
  title: string;
  path: string;
  icon: React.FC;
};

export const rooms: Room[] = [
  {
    id: nanoid(),
    title: 'รวมมิตร',
    path: '/',
    icon: GiJusticeStar,
  },
  {
    id: nanoid(),
    title: 'สวนลุมพินี',
    path: '/',
    icon: FaHeartbeat,
  },
  {
    id: nanoid(),
    title: 'ถนนนักเขียน',
    path: '/',
    icon: FaPenNib,
  },
  {
    id: nanoid(),
    title: 'ไร้สังกัด',
    path: '/',
    icon: FaCoffee,
  },
  {
    id: nanoid(),
    title: 'โต๊ะเครื่องแป้ง',
    path: '/',
    icon: GiDelicatePerfume,
  },
  {
    id: nanoid(),
    title: 'ศุภชลาศัย',
    path: '/',
    icon: MdSportsBasketball,
  },
  {
    id: nanoid(),
    title: 'ก้นครัว',
    path: '/',
    icon: FaKitchenSet,
  },
  {
    id: nanoid(),
    title: 'จตุจักร',
    path: '/',
    icon: GiFlowers,
  },
  {
    id: nanoid(),
    title: 'กล้อง',
    path: '/',
    icon: FaCamera,
  },
  {
    id: nanoid(),
    title: 'หอศิลป์',
    path: '/',
    icon: HiPaintBrush,
  },
  {
    id: nanoid(),
    title: 'แกลเลอรี่',
    path: '/',
    icon: TfiGallery,
  },
  {
    id: nanoid(),
    title: 'ไกลบ้าน',
    path: '/',
    icon: SiYourtraveldottv,
  },
];
