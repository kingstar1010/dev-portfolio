import Icon from '@components/Icon';
import SocialMediaData from '@data/SocialMediaData';
import Link from 'next/link';
import * as Styles from './SocialMediaLinks.styles';

const Template: React.FC = () => {
  return (
    <Styles.SocialMediaLinks>
      {SocialMediaData.map((value, index) => (
        <Link href={value.link} key={index}>
          <a target="_blank" rel="noreferrer">
            <Styles.SocialItem>
              <Icon id={value.title} width={27} height={27} />
            </Styles.SocialItem>
          </a>
        </Link>
      ))}
    </Styles.SocialMediaLinks>
  );
};

export default Template;
