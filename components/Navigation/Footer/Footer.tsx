import theme from '../../../theme';
import Typography from '../../Typography';
import * as Styles from './Footer.styles';
import SocialMediaLinks from '@components/SocialMediaLinks';

const Footer: React.FC = () => {
  return (
    <Styles.FooterContainer>
      <SocialMediaLinks />
      <Styles.MadeWithLove>
        <Typography align="center" size={10} color={theme.colors.grey4}>
          {'Made with ❤️ by me :D'}
        </Typography>
        <Typography align="center" size={10} color={theme.colors.grey4}>
          {` © ${new Date().getFullYear()} All rights reseved`}
        </Typography>
      </Styles.MadeWithLove>
      <Styles.Address>
        <a href="mailto:moldovanualiberta@gmail.com">
          <Typography align="right" size={10} color={theme.colors.grey4}>
            Feel free to contact me any time! {'\n'} moldovanualiberta@gmail.com
          </Typography>
        </a>
      </Styles.Address>
    </Styles.FooterContainer>
  );
};

export default Footer;
