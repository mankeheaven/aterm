import { Tooltip } from "antd";
import styles from "./index.module.css";
import classNames from "classnames";
import ActivityIcon from "@renderer/components/icons/activity-icon";

interface IProps {
  title: string;
  type: any;
  active?: boolean;
  onClick: () => void;
  onDoubleClick?: () => void;
}

const ActivityItem = ({
  title,
  type,
  onClick,
  active,
  onDoubleClick,
}: IProps) => {
  return (
    <Tooltip
      placement="right"
      mouseEnterDelay={0.8}
      title={title}
      overlayClassName="mTooltip"
    >
      <div
        className={classNames(styles.item, active && styles.active)}
        onClick={onClick}
        onDoubleClick={onDoubleClick}
      >
        <ActivityIcon type={type} active={active} />
      </div>
    </Tooltip>
  );
};

export default ActivityItem;
