import Icon from '../Icon/Icon';
import * as Styles from './Switch.styles';

export interface SwitchProps {
  checked?: boolean;
  onChange: (e?: any) => void;
}

export const Switch: React.FC<SwitchProps> = ({
  checked,
  onChange,
}: SwitchProps) => {
  return (
    <Styles.SwitchContaier checked={checked} onCheckedChange={onChange}>
      <Styles.IconCont>
        <Icon id="moon" width={25} height={25} />
      </Styles.IconCont>
      <Styles.IconCont reverse>
        <Icon id="sun" width={25} height={25} />
      </Styles.IconCont>
      <Styles.Thumb>
        <Styles.ThumbContent />
      </Styles.Thumb>
    </Styles.SwitchContaier>
  );
};
