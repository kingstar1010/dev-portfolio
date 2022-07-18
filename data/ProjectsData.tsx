import Image from 'next/image';

import Shouter from '../public/assets/images/Shouter.jpg';
import ShouterSmall from '../public/assets/images/ShouterSmall.jpg';
import MyMovieDB from '../public/assets/images/MyMovieDB.jpg';
import MyMovieDBSmall from '../public/assets/images/MyMovieDBSmall.jpg';
import Excelsis from '../public/assets/images/Excelsis.jpg';
import ExcelsisSmall from '../public/assets/images/ExcelsisSmall.jpg';
import BePrepared from '../public/assets/images/BePrepared.jpg';
import BePreparedSmall from '../public/assets/images/BePreparedSmall.jpg';

const ProjectsData = [
  {
    title: 'Shouter',
    date: '2021',
    link: 'https://shouter.app',
    top: false,
    primary: false,
    primaryImage: (
      <Image
        src={Shouter}
        alt="shouter"
        layout="fill"
        placeholder="blur"
        objectFit="cover"
      />
    ),
    secondaryImage: (
      <Image
        src={ShouterSmall}
        alt="shouter small"
        layout="fill"
        placeholder="blur"
        objectFit="cover"
      />
    ),
  },
  {
    title: 'Excelsis',
    date: 'Aug 2022 - Present',
    link: 'https://www.instagram.com/m.albert_andrei/',
    top: true,
    primary: true,
    width: 380,
    primaryImage: (
      <Image
        src={Excelsis}
        alt="Excelsis"
        layout="fill"
        placeholder="blur"
        objectFit="cover"
      />
    ),
    secondaryImage: (
      <Image
        src={ExcelsisSmall}
        alt="Excelsis small"
        layout="fill"
        placeholder="blur"
        objectFit="cover"
      />
    ),
  },
  {
    title: 'MyMovieDB',
    date: 'March 1, 2021 - May 20, 2021',
    link: 'https://github.com/Albert-Andrei/MyAndroidApp',
    top: false,
    primary: true,
    width: 370,
    height: 350,
    primaryImage: (
      <Image
        src={MyMovieDB}
        alt="MyMovieDB"
        layout="fill"
        placeholder="blur"
        objectFit="cover"
      />
    ),
    secondaryImage: (
      <Image
        src={MyMovieDBSmall}
        alt="MyMovieDB small"
        layout="fill"
        placeholder="blur"
        objectFit="cover"
      />
    ),
  },
  {
    title: 'BePrepared',
    date: 'Sep 20, 2020 - Oct 25, 2020',
    link: 'https://github.com/Albert-Andrei',
    top: true,
    primary: true,
    primaryImage: (
      <Image
        src={BePrepared}
        alt="BePrepared"
        layout="fill"
        placeholder="blur"
        objectFit="cover"
      />
    ),
    secondaryImage: (
      <Image
        src={BePreparedSmall}
        alt="BePrepared Small"
        layout="fill"
        placeholder="blur"
        objectFit="cover"
      />
    ),
  },
];

export default ProjectsData;
